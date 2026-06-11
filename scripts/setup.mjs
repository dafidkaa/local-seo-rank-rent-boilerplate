#!/usr/bin/env node
/**
 * setup.mjs — Interactive setup wizard for the rank-and-rent boilerplate.
 * Run with: node scripts/setup.mjs  (or: npm run setup)
 *
 * Generates src/site.config.ts from user answers.
 * Updated to match the current site.config.ts shape (v2).
 */

import { writeFileSync } from "node:fs";
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const BOLD = "\x1b[1m";
const CYAN = "\x1b[36m";
const GREEN = "\x1b[32m";
const DIM = "\x1b[2m";
const RESET = "\x1b[0m";

function heading(text) {
  console.log(`\n${BOLD}${CYAN}▸ ${text}${RESET}\n`);
}
function success(text) {
  console.log(`${GREEN}${text}${RESET}`);
}
function dim(text) {
  return `${DIM}${text}${RESET}`;
}
async function ask(rl, label, fallback = "") {
  const answer = await rl.question(`  ${label} ${fallback ? dim(`[${fallback}]`) : ""}: `);
  return answer.trim() || fallback;
}
async function askRequired(rl, label) {
  while (true) {
    const answer = await rl.question(`  ${label}: `);
    if (answer.trim()) return answer.trim();
    console.log("    This field is required.");
  }
}
async function askList(rl, label, fallback = "") {
  const raw = await rl.question(`  ${label} ${dim("(comma-separated)")} ${fallback ? dim(`[${fallback}]`) : ""}: `);
  const result = raw.split(",").map((s) => s.trim()).filter(Boolean);
  return result.length ? result : fallback.split(",").map((s) => s.trim()).filter(Boolean);
}
async function askYesNo(rl, label, fallback = false) {
  const answer = await rl.question(`  ${label} ${dim(fallback ? "[Y/n]" : "[y/N]")}: `);
  const lower = answer.trim().toLowerCase();
  if (!lower) return fallback;
  return lower === "y" || lower === "yes";
}

// ─── Config generator ────────────────────────────────────────────────────────

function generateConfig(data) {
  const { business, locales, brand, services, locations, integrations, heroSlides, blogCategories, legalLastUpdated } = data;

  const localeEntries = locales.map((l) =>
    `    { code: "${l.code}" as Locale, label: "${l.label}", path: "/${l.code}", connector: "${l.connector}" }`
  ).join(",\n");

  const locationEntries = locations.map((l) =>
    `    {
      id: "${l.id}",
      name: "${l.name}",
      region: "${l.region}",
      image: "${l.image}",
      detail: "${l.detail}",
      knowledge: "${l.knowledge}",
      attractions: ${JSON.stringify(l.attractions)},
      mapEmbedQuery: "${l.mapEmbedQuery}"
    }`
  ).join(",\n");

  function serviceBlock(service, indent = "    ") {
    const children = service.children.map((ch) =>
      `${indent}  { id: "${ch.id}", title: ${JSON.stringify(ch.title)}, short: ${JSON.stringify(ch.short)}, faq: [] }`
    ).join(",\n");
    return `${indent}{
${indent}  id: "${service.id}",
${indent}  title: ${JSON.stringify(service.title)},
${indent}  short: ${JSON.stringify(service.short)},
${indent}  image: "${service.image}",
${indent}  children: [
${children}
${indent}  ]
${indent}}`;
  }

  const mainServiceEntries = services.main.map((s) => serviceBlock(s)).join(",\n");

  const secondaryServiceEntries = services.secondary.map((s) =>
    `    {
      id: "${s.id}",
      title: ${JSON.stringify(s.title)},
      short: ${JSON.stringify(s.short)},
      image: "${s.image}",
      children: Array.from({ length: 6 }).map((__, childIndex) => ({
        id: "sub-service-" + (childIndex + 1),
        title: Object.fromEntries(Object.entries(${JSON.stringify(s.titleBase)}).map(([k, v]) => [k, v + " Subservice " + (childIndex + 1)])),
        short: ${JSON.stringify(s.shortBase)},
        faq: []
      }))
    }`
  ).join(",\n");

  const heroSlideEntries = heroSlides.map((s) =>
    `    {
      image: "${s.image}",
      title: ${JSON.stringify(s.title)},
      text: ${JSON.stringify(s.text)},
      primaryText: ${JSON.stringify(s.primaryText)},
      primaryHref: "${s.primaryHref}"${s.secondaryText ? `,\n      secondaryText: ${JSON.stringify(s.secondaryText)},\n      secondaryHref: "${s.secondaryHref}"` : ""}
    }`
  ).join(",\n");

  const blogCategoryEntries = blogCategories.map((c) =>
    `    { id: "${c.id}", label: ${JSON.stringify(c.label)} }`
  ).join(",\n");

  const legalDate = legalLastUpdated || new Date().toISOString().split("T")[0];

  return `${brand.theme ? `import { themePreset } from "./lib/themes";\n\n` : ""}export type Locale = ${locales.map((l) => `"${l.code}"`).join(" | ")};

export type LocaleConfig = {
  code: Locale;
  label: string;
  path: string;
  connector: string;
};

export type LocalizedText = Record<Locale, string>;

export type ServiceItem = {
  id: string;
  slug?: Partial<LocalizedText>;
  title: LocalizedText;
  short: LocalizedText;
  image: string;
  gallery?: Array<{ src: string; alt: string }>;
  beforeAfter?: {
    before: { src: string; alt: string };
    after: { src: string; alt: string };
  };
  children: Array<{
    id: string;
    slug?: Partial<LocalizedText>;
    title: LocalizedText;
    short: LocalizedText;
    faq: Array<{ question: LocalizedText; answer: LocalizedText }>;
  }>;
};

export type LocationItem = {
  id: string;
  name: string;
  region: string;
  image: string;
  detail: string;
  knowledge?: string;
  attractions?: string[];
  mapEmbedQuery?: string;
};

export type HeroSlide = {
  image: string;
  title: LocalizedText;
  text: LocalizedText;
  primaryText: LocalizedText;
  primaryHref: string;
  secondaryText?: LocalizedText;
  secondaryHref?: string;
};

export type BlogCategory = {
  id: string;
  label: LocalizedText;
};

export const siteConfig = {
  siteUrl: "${integrations.siteUrl}",
  defaultLocale: "${locales[0].code}" as Locale,
  legalLastUpdated: "${legalDate}",
  locales: [
${localeEntries}
  ],
  business: {
    name: "${business.name}",
    legalName: "${business.legalName}",
    foundedYear: "${business.foundedYear}",
    primaryService: ${JSON.stringify(business.primaryService)},
    primaryGbpCategory: "${business.primaryGbpCategory}",
    secondaryGbpCategories: ${JSON.stringify(business.secondaryGbpCategories)},
    city: "${business.city}",
    region: "${business.region}",
    country: "${business.country}",
    serviceArea: "${business.serviceArea}",
    phone: "${business.phone}",
    email: "${business.email}",
    address: "${business.address}",
    ctaMode: "${business.ctaMode}",
    hours: {
      Monday: "${business.hours.Monday}",
      Tuesday: "${business.hours.Tuesday}",
      Wednesday: "${business.hours.Wednesday}",
      Thursday: "${business.hours.Thursday}",
      Friday: "${business.hours.Friday}",
      Saturday: "${business.hours.Saturday}",
      Sunday: "${business.hours.Sunday}"
    },
    description: ${JSON.stringify(business.description)},
    customerProblem: ${JSON.stringify(business.customerProblem)},
    customerOutcome: ${JSON.stringify(business.customerOutcome)},
    cta: ${JSON.stringify(business.cta)}
  },
  brand: {
${brand.theme ? `    ...themePreset("${brand.theme}"),` : `    primary: "${brand.primary}",
    secondary: "${brand.secondary}",
    accent: "${brand.accent}",
    accentDark: "${brand.accentDark}",
    accentLight: "${brand.accentLight}",
    dark: "${brand.dark}",
    light: "${brand.light}",
    heroOverlay: "${brand.heroOverlay}",
    fontDisplay: "${brand.fontDisplay}",
    fontBody: "${brand.fontBody}",`}
    logoText: "${brand.logoText}",
    logoAccent: "${brand.logoAccent}",
    images: {
      hero1: "${brand.images.hero1}",
      hero2: "${brand.images.hero2}",
      hero3: "${brand.images.hero3}",
      about: "${brand.images.about}",
      team: "${brand.images.team}",
      process: "${brand.images.process}",
      cta: "${brand.images.cta}",
      og: "${brand.images.og}"
    }
  },
  integrations: {
    gtmId: "${integrations.gtmId}",
    ga4MeasurementId: "${integrations.ga4MeasurementId}",
    clarityProjectId: "${integrations.clarityProjectId}",
    googleAdsConversionId: "${integrations.googleAdsConversionId}",
    metaPixelId: "${integrations.metaPixelId}",
    calendlyUrl: "${integrations.calendlyUrl}",
    formsubmitEmail: "${integrations.formsubmitEmail}",
    crmWebhookUrl: "${integrations.crmWebhookUrl}",
    reviewWidgetEmbedHtml: "${integrations.reviewWidgetEmbedHtml}",
    googleMapEmbedUrl: "${integrations.googleMapEmbedUrl}",
    requireCookieConsent: ${integrations.requireCookieConsent}
  },
  stats: {
    yearsInBusiness: "${business.stats.yearsInBusiness}",
    jobsCompleted: "${business.stats.jobsCompleted}",
    averageRating: "${business.stats.averageRating}",
    responseTime: "${business.stats.responseTime}",
    satisfactionRate: "${business.stats.satisfactionRate}",
    citiesServed: "${business.stats.citiesServed}"
  },
  locations: [
${locationEntries}
  ] satisfies LocationItem[],
  mainServices: [
${mainServiceEntries}
  ] satisfies ServiceItem[],
  secondaryCategories: [
${secondaryServiceEntries}
  ] satisfies ServiceItem[],
  heroSlides: [
${heroSlideEntries}
  ] satisfies HeroSlide[],
  blogCategories: [
${blogCategoryEntries}
  ] satisfies BlogCategory[]
};

export const allServices = [...siteConfig.mainServices, ...siteConfig.secondaryCategories];
`;
}

// ─── Collectors ───────────────────────────────────────────────────────────────

async function collectLocales(rl) {
  heading("Languages / Locales");
  const localeCodes = await askList(rl, "Locale codes", "en");
  const localeLabels = await askList(rl, "Locale labels", "English");
  const localeConnectors = await askList(rl, 'Location connector word (e.g. "in", "u", "en")', "in");
  return localeCodes.map((code, i) => ({
    code,
    label: localeLabels[i] || code.toUpperCase(),
    connector: localeConnectors[i] || "in"
  }));
}

async function collectBusiness(rl, locales) {
  heading("Business Information");
  const name = await askRequired(rl, "Business name");
  const legalName = await ask(rl, "Legal name", `${name} LLC`);
  const foundedYear = await ask(rl, "Founded year", "2020");
  const primaryServiceByLocale = {};
  for (const l of locales) {
    primaryServiceByLocale[l.code] = await ask(rl, `Primary service (${l.label})`, "Local Service");
  }
  const primaryGbpCategory = await ask(rl, "Primary GBP category", "Service establishment");
  const secondaryGbpCategories = await askList(rl, "Secondary GBP categories", "Contractor, Home services");
  const city = await askRequired(rl, "City");
  const region = await ask(rl, "State / Region", "Texas");
  const country = await ask(rl, "Country code", "US");
  const serviceArea = await ask(rl, "Service area description", `${city} Metro`);
  const phone = await askRequired(rl, "Phone number");
  const email = await askRequired(rl, "Email address");
  const address = await ask(rl, "Address", `Serving ${serviceArea}`);
  const ctaMode = await ask(rl, "CTA mode (form_phone | form_email | form_phone_email | phone_only)", "form_phone");

  heading("Business Hours");
  const weekdayDefault = "8:00AM-5:00PM";
  const hours = {
    Monday: await ask(rl, "Monday", weekdayDefault),
    Tuesday: await ask(rl, "Tuesday", weekdayDefault),
    Wednesday: await ask(rl, "Wednesday", weekdayDefault),
    Thursday: await ask(rl, "Thursday", weekdayDefault),
    Friday: await ask(rl, "Friday", weekdayDefault),
    Saturday: await ask(rl, "Saturday", "8:00AM-2:00PM"),
    Sunday: await ask(rl, "Sunday", "Closed")
  };

  heading("Trust Stats");
  const stats = {
    yearsInBusiness: await ask(rl, "Years in business", "5+"),
    jobsCompleted: await ask(rl, "Jobs completed", "1,000+"),
    averageRating: await ask(rl, "Average rating (e.g. 4.9)", "4.9"),
    responseTime: await ask(rl, "Response time in hours (e.g. 1)", "1"),
    satisfactionRate: await ask(rl, "Satisfaction rate (e.g. 99%)", "99%"),
    citiesServed: await ask(rl, "Cities served (e.g. 8+)", "8+")
  };

  const descriptionByLocale = {};
  const problemByLocale = {};
  const outcomeByLocale = {};
  const ctaByLocale = {};
  for (const l of locales) {
    descriptionByLocale[l.code] = await ask(rl, `Business description (${l.label})`, `Reliable ${primaryServiceByLocale[l.code]} in ${city} with clear communication and professional service.`);
    problemByLocale[l.code] = await ask(rl, `Customer problem (${l.label})`, `finding reliable ${primaryServiceByLocale[l.code]} without delays or unclear pricing`);
    outcomeByLocale[l.code] = await ask(rl, `Customer outcome (${l.label})`, `get the job handled clearly, quickly, and correctly`);
    ctaByLocale[l.code] = await ask(rl, `CTA button text (${l.label})`, "Get A Free Estimate");
  }

  return { name, legalName, foundedYear, primaryService: primaryServiceByLocale, primaryGbpCategory, secondaryGbpCategories, city, region, country, serviceArea, phone, email, address, ctaMode, hours, stats, description: descriptionByLocale, customerProblem: problemByLocale, customerOutcome: outcomeByLocale, cta: ctaByLocale };
}

const THEME_NAMES = [
  "home-services", "medical", "legal", "beauty", "real-estate", "automotive",
  "construction", "cleaning", "landscaping", "pet-care", "fitness", "education",
  "transportation", "security", "events", "funeral", "luxury"
];

async function collectBrand(rl, businessName) {
  heading("Brand & Colors");
  console.log(`  Niche theme presets (colors + fonts in one step):\n  ${dim(THEME_NAMES.join(", "))}\n`);
  const theme = await ask(rl, "Theme preset (leave empty for custom colors)", "");
  if (theme && THEME_NAMES.includes(theme)) {
    const logoText = await ask(rl, "Logo text", businessName);
    const logoAccent = await ask(rl, "Logo accent word (gets accent color)", "");
    const heroImg = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80";
    return {
      theme, logoText, logoAccent,
      images: {
        hero1: heroImg, hero2: heroImg, hero3: heroImg,
        about: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
        team: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=80",
        process: heroImg, cta: heroImg,
        og: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
      }
    };
  }
  if (theme) console.log(`    Unknown theme "${theme}" — falling back to custom colors.`);
  const primary = await ask(rl, "Primary color (hex)", "#1e3a5f");
  const secondary = await ask(rl, "Secondary color (hex)", "#0f2a47");
  const accent = await ask(rl, "Accent color (hex)", "#f59e0b");
  const accentDark = await ask(rl, "Accent dark (hex)", "#d97706");
  const accentLight = await ask(rl, "Accent light (hex)", "#fef3c7");
  const fontDisplay = await ask(rl, "Display font (Google Fonts name)", "Poppins");
  const fontBody = await ask(rl, "Body font (Google Fonts name)", "Inter");
  const logoText = await ask(rl, "Logo text", businessName);
  const logoAccent = await ask(rl, "Logo accent word (gets accent color)", "");
  const heroOverlay = await ask(rl, "Hero overlay RGBA", "rgba(10, 24, 50, 0.68)");
  const heroImg = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80";
  return {
    primary, secondary, accent, accentDark, accentLight,
    dark: "#0f172a", light: "#f8fafc",
    heroOverlay, fontDisplay, fontBody,
    logoText, logoAccent,
    images: {
      hero1: heroImg, hero2: heroImg, hero3: heroImg,
      about: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
      team: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=80",
      process: heroImg, cta: heroImg,
      og: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
    }
  };
}

async function collectLocations(rl) {
  heading("Service Locations");
  const count = parseInt(await ask(rl, "How many locations?", "4"), 10);
  const locations = [];
  for (let i = 0; i < count; i++) {
    console.log(`\n  ${BOLD}Location ${i + 1}${RESET}`);
    const name = await askRequired(rl, "  City name");
    const id = name.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const region = await ask(rl, "  State / Region", "Texas");
    const detail = await ask(rl, "  Short description", `${name} neighborhoods and local service calls.`);
    const knowledge = await ask(rl, "  Local knowledge (property types, infrastructure)", `${name} is a growing area with a mix of residential and commercial properties.`);
    const attractionsRaw = await ask(rl, "  3 local landmarks (comma-separated)", `${name} City Park, ${name} Main Street, ${name} Town Hall`);
    const attractions = attractionsRaw.split(",").map((s) => s.trim()).filter(Boolean);
    const mapEmbedQuery = await ask(rl, "  Google Maps embed query", `${name}, ${region}`);
    locations.push({
      id, name, region,
      image: `https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=900&q=80`,
      detail, knowledge, attractions, mapEmbedQuery
    });
  }
  return locations;
}

async function collectServices(rl, locales, primaryService) {
  heading("Services");
  const mainCount = parseInt(await ask(rl, "How many main services?", "3"), 10);
  const main = [];
  for (let i = 0; i < mainCount; i++) {
    console.log(`\n  ${BOLD}Main Service ${i + 1}${RESET}`);
    const id = await ask(rl, "  ID (slug)", `main-service-${i + 1}`);
    const titleByLocale = {};
    const shortByLocale = {};
    for (const l of locales) {
      titleByLocale[l.code] = await ask(rl, `  Title (${l.label})`, `${primaryService[l.code]} ${i + 1}`);
      shortByLocale[l.code] = await ask(rl, `  Short description (${l.label})`, `A primary ${(titleByLocale[l.code] || "service").toLowerCase()} page for your niche.`);
    }
    const childCount = parseInt(await ask(rl, "  How many subservices?", "3"), 10);
    const children = [];
    for (let j = 0; j < childCount; j++) {
      const childTitleByLocale = {};
      const childShortByLocale = {};
      for (const l of locales) {
        childTitleByLocale[l.code] = await ask(rl, `    Subservice ${j + 1} title (${l.label})`, `${titleByLocale[l.code]} Subservice ${j + 1}`);
        childShortByLocale[l.code] = await ask(rl, `    Subservice ${j + 1} short (${l.label})`, `A focused child page for ${(childTitleByLocale[l.code] || "subservice").toLowerCase()}.`);
      }
      children.push({ id: `sub-service-${j + 1}`, title: childTitleByLocale, short: childShortByLocale });
    }
    main.push({ id, title: titleByLocale, short: shortByLocale, image: "https://images.unsplash.com/photo-1581091215367-59ab6b4f4f76?auto=format&fit=crop&w=900&q=80", children });
  }

  const secondaryCount = parseInt(await ask(rl, "How many secondary categories?", "2"), 10);
  const secondary = [];
  for (let i = 0; i < secondaryCount; i++) {
    const id = `service-category-${i + 1}`;
    const titleByLocale = {};
    const shortByLocale = {};
    for (const l of locales) {
      titleByLocale[l.code] = await ask(rl, `  Category ${i + 1} title (${l.label})`, `Service Category ${i + 1}`);
      shortByLocale[l.code] = await ask(rl, `  Category ${i + 1} short (${l.label})`, "A secondary category for supporting services.");
    }
    secondary.push({ id, title: titleByLocale, short: shortByLocale, titleBase: titleByLocale, shortBase: shortByLocale, image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80" });
  }
  return { main, secondary };
}

async function collectIntegrations(rl) {
  heading("Integrations (press Enter to skip any)");
  return {
    siteUrl: await ask(rl, "Production site URL", "https://example.com"),
    gtmId: await ask(rl, "GTM ID", "GTM-XXXXXXX"),
    ga4MeasurementId: await ask(rl, "GA4 Measurement ID", ""),
    clarityProjectId: await ask(rl, "Microsoft Clarity Project ID", ""),
    googleAdsConversionId: await ask(rl, "Google Ads conversion ID", ""),
    metaPixelId: await ask(rl, "Meta Pixel ID", ""),
    calendlyUrl: await ask(rl, "Calendly / booking URL", ""),
    crmWebhookUrl: await ask(rl, "CRM webhook URL", ""),
    formsubmitEmail: await ask(rl, "formsubmit.co lead inbox email (zero-backend lead delivery)", ""),
    reviewWidgetEmbedHtml: await ask(rl, "Review widget HTML", ""),
    googleMapEmbedUrl: await ask(rl, "Google Maps embed URL", ""),
    requireCookieConsent: await askYesNo(rl, "Require cookie consent banner?", false)
  };
}

async function collectHeroSlides(rl, locales, business) {
  heading("Hero Slides");
  const count = parseInt(await ask(rl, "How many hero slides?", "3"), 10);
  const slides = [];
  for (let i = 0; i < count; i++) {
    console.log(`\n  ${BOLD}Slide ${i + 1}${RESET}`);
    const titleByLocale = {};
    const textByLocale = {};
    const primaryTextByLocale = {};
    for (const l of locales) {
      titleByLocale[l.code] = await ask(rl, `  Title (${l.label})`, `We Are The Best ${business.primaryService[l.code]} In ${business.city}`);
      textByLocale[l.code] = await ask(rl, `  Text (${l.label})`, `Offering reliable ${business.primaryService[l.code]} in ${business.city} and surrounding areas.`);
      primaryTextByLocale[l.code] = await ask(rl, `  Primary CTA text (${l.label})`, business.cta[l.code]);
    }
    const primaryHref = await ask(rl, "  Primary CTA href", "contact");
    const addSecondary = await askYesNo(rl, "  Add secondary CTA?", i === 0);
    const slide = { image: `https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80`, title: titleByLocale, text: textByLocale, primaryText: primaryTextByLocale, primaryHref };
    if (addSecondary) {
      const secondaryTextByLocale = {};
      for (const l of locales) {
        secondaryTextByLocale[l.code] = await ask(rl, `  Secondary CTA text (${l.label})`, `Call ${business.phone}`);
      }
      slide.secondaryText = secondaryTextByLocale;
      slide.secondaryHref = `tel:${business.phone}`;
    }
    slides.push(slide);
  }
  return slides;
}

async function collectBlogCategories(rl, locales) {
  heading("Blog Categories");
  const count = parseInt(await ask(rl, "How many blog categories?", "3"), 10);
  const categories = [];
  for (let i = 0; i < count; i++) {
    const id = await ask(rl, `  Category ${i + 1} ID`, ["guides", "tips", "company-news"][i] || `category-${i + 1}`);
    const labelByLocale = {};
    for (const l of locales) {
      labelByLocale[l.code] = await ask(rl, `  Label (${l.label})`, id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, " "));
    }
    categories.push({ id, label: labelByLocale });
  }
  return categories;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`\n${BOLD}${CYAN}╔══════════════════════════════════════════════════╗`);
  console.log(`║  Local SEO Rank-and-Rent Boilerplate Setup     ║`);
  console.log(`╚══════════════════════════════════════════════════╝${RESET}`);
  console.log(`\n  This wizard generates ${BOLD}src/site.config.ts${RESET} from your answers.`);
  console.log(`  Press ${BOLD}Enter${RESET} to accept the default value in brackets.\n`);

  const rl = createInterface({ input, output });

  try {
    const locales = await collectLocales(rl);
    const business = await collectBusiness(rl, locales);
    const brand = await collectBrand(rl, business.name);
    const locations = await collectLocations(rl);
    const services = await collectServices(rl, locales, business.primaryService);
    const integrations = await collectIntegrations(rl);
    const legalLastUpdated = await ask(rl, "Legal pages last updated date (YYYY-MM-DD)", new Date().toISOString().split("T")[0]);
    const heroSlides = await collectHeroSlides(rl, locales, business);
    const blogCategories = await collectBlogCategories(rl, locales);

    const confirm = await askYesNo(rl, "\nGenerate site.config.ts now?", true);
    if (!confirm) {
      console.log("\nCancelled.");
      rl.close();
      return;
    }

    const configContent = generateConfig({ business, locales, brand, services, locations, integrations, heroSlides, blogCategories, legalLastUpdated });
    writeFileSync("src/site.config.ts", configContent, "utf-8");

    success("\n  ✓ Done! site.config.ts generated.");
    console.log(`\n  Next steps:`);
    console.log(`    1. Replace placeholder Unsplash images with niche-appropriate photos`);
    console.log(`    2. Populate src/i18n/en.ts (and hr.ts) with localized copy`);
    console.log(`    3. Create blog posts in src/content/blog/ as .md files`);
    console.log(`    4. Connect your CRM webhook, analytics IDs, and review widget`);
    console.log(`    5. Run ${BOLD}npm run build${RESET} to generate all 140+ pages\n`);
  } catch (err) {
    if (err.message !== " aborted") {
      console.error("\n  Error:", err.message);
    }
  } finally {
    rl.close();
  }
}

main();
