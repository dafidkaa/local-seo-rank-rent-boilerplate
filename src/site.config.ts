/**
 * site.config.ts — Single Source of Truth
 * =========================================
 * This file controls ALL structured data for the site.
 * UI copy strings live in src/i18n/[locale].ts instead.
 *
 * AI INSTRUCTIONS — HOW TO BUILD A NEW SITE:
 *   1. Read the appropriate DESIGN-[niche].md file for visual guidance
 *   2. Fill in the `business` section with real business data
 *   3. Update `brand` with the niche color palette from the DESIGN file
 *   4. Replace `images` URLs with niche-appropriate Unsplash photos
 *   5. Replace `mainServices` with the niche's actual services
 *   6. Replace `locations` with the real service area cities
 *   7. Update `heroSlides` with niche-specific headlines
 *   8. Run: npm run dev to preview, npm run build to generate all pages
 *
 * DEMO NICHE: Residential Plumbing — Austin, TX
 */

// ── Locale Types ─────────────────────────────────────────────────────────────

export type Locale = "en" | "hr";
// To add a locale: add its code here AND create src/i18n/[code].ts

export type LocaleConfig = {
  code: Locale;
  label: string;
  path: string;
  connector: string; // grammatical connector used in URL slugs (e.g. "in", "u")
};

// ── Data Types ───────────────────────────────────────────────────────────────

/**
 * LocalizedText: used for structured data fields that differ by locale.
 * For UI copy strings, use src/i18n/[locale].ts instead.
 */
export type LocalizedText = Record<Locale, string>;

export type ServiceItem = {
  id: string;
  title: LocalizedText;
  short: LocalizedText;
  image: string;
  children: Array<{
    id: string;
    title: LocalizedText;
    short: LocalizedText;
    faq: Array<{ question: LocalizedText; answer: LocalizedText }>;
  }>;
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

// ── Site Configuration ────────────────────────────────────────────────────────

export const siteConfig = {

  siteUrl:         "https://example.com",
  defaultLocale:   "en" as Locale,
  legalLastUpdated:"2026-01-15",

  locales: [
    { code: "en" as Locale, label: "English",   path: "/en", connector: "in" },
    { code: "hr" as Locale, label: "Hrvatski",  path: "/hr", connector: "u"  }
  ] satisfies LocaleConfig[],

  // ── Business Data ─────────────────────────────────────────────────────────
  business: {
    name:          "Austin Pro Plumbing",
    legalName:     "Austin Pro Plumbing LLC",
    foundedYear:   "2012",
    primaryService: {
      en: "Plumbing",
      hr: "Vodoinstalaterstvo"
    },
    primaryGbpCategory:    "Plumber",
    secondaryGbpCategories:[
      "Drainage service",
      "Water heater repair service",
      "Pipe repair service",
      "Emergency plumber",
      "Sewer repair service"
    ],
    city:          "Austin",
    region:        "Texas",
    country:       "US",
    serviceArea:   "Austin Metro",
    phone:         "+1 (512) 555-0192",
    email:         "hello@austinproplumbing.com",
    address:       "Serving the Greater Austin Metro Area, TX",
    hours: {
      Monday:    "7:00AM–6:00PM",
      Tuesday:   "7:00AM–6:00PM",
      Wednesday: "7:00AM–6:00PM",
      Thursday:  "7:00AM–6:00PM",
      Friday:    "7:00AM–6:00PM",
      Saturday:  "8:00AM–4:00PM",
      Sunday:    "Emergency Only"
    },
    description: {
      en: "Austin's trusted residential and commercial plumbing experts. Licensed, insured, and serving the greater Austin metro area since 2012 with same-day service, transparent pricing, and a 100% satisfaction guarantee.",
      hr: "Pouzdani stručnjaci za vodoinstalaterstvo u Austinu. Licencirani, osigurani i u službi od 2012. s uslugom isti dan i transparentnim cijenama."
    },
    customerProblem: {
      en: "dealing with leaks, clogs, and plumbing emergencies without knowing who to trust or what it will cost",
      hr: "suočavanje s curenjem, začepljenjem i hitnim slučajevima bez znanja kome vjerovati ili što će koštati"
    },
    customerOutcome: {
      en: "get the plumbing fixed fast, correctly, and at a fair price — with zero stress",
      hr: "popraviti vodoinstalaterstvo brzo, ispravno i po pravednoj cijeni — bez stresa"
    },
    cta: {
      en: "Get a Free Estimate",
      hr: "Zatražite besplatnu procjenu"
    }
  },

  // ── Brand / Visual Identity ───────────────────────────────────────────────
  // These values are injected as CSS custom properties at build time.
  // Change these to match the niche — see DESIGN-[niche].md for palettes.
  brand: {
    // Primary: deep navy — authority, trust, professionalism
    primary:       "#1e3a5f",
    secondary:     "#0f2a47",
    // Accent: warm amber — energy, action, approachability
    accent:        "#f59e0b",
    accentDark:    "#d97706",
    accentLight:   "#fef3c7",
    dark:          "#0f172a",
    light:         "#f8fafc",
    // Hero overlay — controls how dark the hero background image appears
    heroOverlay:   "rgba(10, 24, 50, 0.68)",
    // Typography — both available free on Google Fonts
    fontDisplay:   "Poppins",
    fontBody:      "Inter",
    // Logo text (used if no SVG logo is provided)
    logoText:      "Austin Pro Plumbing",
    logoAccent:    "Pro",  // this word gets the accent color

    // ── Image Map ─────────────────────────────────────────────────────────
    // Replace these with niche-appropriate Unsplash URLs or AI-generated images.
    // Format: https://images.unsplash.com/photo-[ID]?auto=format&fit=crop&w=[W]&q=80
    images: {
      // Hero section backgrounds (used in heroSlides below)
      hero1: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80",
      hero2: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80",
      hero3: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=80",
      // About / team section
      about: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
      team:  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
      // Process section background
      process: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80",
      // Final CTA section background
      cta:   "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80",
      // OG / social sharing image
      og:    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
    }
  },

  // ── Analytics & Integrations ──────────────────────────────────────────────
  integrations: {
    gtmId:                   "GTM-XXXXXXX",
    ga4MeasurementId:        "",
    clarityProjectId:        "",
    googleAdsConversionId:   "",
    metaPixelId:             "",
    calendlyUrl:             "",
    crmWebhookUrl:           "",
    reviewWidgetEmbedHtml:   "",
    googleMapEmbedUrl:       "",
    requireCookieConsent:    false
  },

  // ── Trust Signals ─────────────────────────────────────────────────────────
  // Displayed in hero, why-us, and CTA sections
  stats: {
    yearsInBusiness: "12+",
    jobsCompleted:   "4,800+",
    averageRating:   "4.9",
    responseTime:    "1",
  },

  // ── Service Areas / Locations ─────────────────────────────────────────────
  locations: [
    {
      id:     "austin",
      name:   "Austin",
      region: "Texas",
      image:  "https://images.unsplash.com/photo-1531218150217-54595bc2b934?auto=format&fit=crop&w=900&q=80",
      detail: "Central Austin neighborhoods, historic homes, and busy commercial corridors — all with unique plumbing challenges."
    },
    {
      id:     "round-rock",
      name:   "Round Rock",
      region: "Texas",
      image:  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=900&q=80",
      detail: "Fast-growing residential subdivisions and business parks north of Austin."
    },
    {
      id:     "cedar-park",
      name:   "Cedar Park",
      region: "Texas",
      image:  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=80",
      detail: "Family homes, local shops, and suburban plumbing service requests."
    },
    {
      id:     "georgetown",
      name:   "Georgetown",
      region: "Texas",
      image:  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80",
      detail: "Historic properties, newer developments, and planned communities with diverse plumbing needs."
    },
    {
      id:     "pflugerville",
      name:   "Pflugerville",
      region: "Texas",
      image:  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
      detail: "Residential neighborhoods, rental homes, and small-business properties."
    },
    {
      id:     "leander",
      name:   "Leander",
      region: "Texas",
      image:  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
      detail: "Rapidly expanding communities where reliable same-day scheduling matters."
    },
    {
      id:     "lakeway",
      name:   "Lakeway",
      region: "Texas",
      image:  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      detail: "Lake-area homes and premium service expectations."
    },
    {
      id:     "bee-cave",
      name:   "Bee Cave",
      region: "Texas",
      image:  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
      detail: "Residential and retail plumbing service calls west of Austin."
    },
    {
      id:     "buda",
      name:   "Buda",
      region: "Texas",
      image:  "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
      detail: "Homes and local businesses south of the city."
    }
  ],

  // ── Main Services (top-level service pages + subservice children) ─────────
  mainServices: [
    {
      id:    "drain-cleaning",
      title: { en: "Drain Cleaning", hr: "Čišćenje odvoda" },
      short: { en: "Fast, effective drain cleaning for clogged sinks, showers, toilets, and main sewer lines.", hr: "Brzo i učinkovito čišćenje začepljenih odvoda za sudopere, tuševe, WC-e i glavne kanalizacijske vodove." },
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=900&q=80",
      children: [
        {
          id:    "kitchen-drain-cleaning",
          title: { en: "Kitchen Drain Cleaning", hr: "Čišćenje kuhinjskog odvoda" },
          short: { en: "Grease, food buildup, and soap scum cleared fast from kitchen sink drains.", hr: "Brzo uklanjanje masnoće, ostataka hrane i sapunskog taloga iz kuhinjskih odvoda." },
          faq: [
            {
              question: { en: "How often should I clean my kitchen drain?", hr: "Koliko često trebam čistiti kuhinjski odvod?" },
              answer:   { en: "We recommend professional cleaning every 1–2 years, or immediately if you notice slow draining or odors.", hr: "Preporučujemo profesionalno čišćenje svakih 1–2 godine, ili odmah ako primijetite sporo otjecanje ili neugodne mirise." }
            }
          ]
        },
        {
          id:    "bathroom-drain-cleaning",
          title: { en: "Bathroom Drain Cleaning", hr: "Čišćenje kupaonskog odvoda" },
          short: { en: "Hair, soap, and debris removed from shower, tub, and sink drains.", hr: "Uklanjanje dlaka, sapuna i ostataka iz odvoda tuša, kade i umivaonika." },
          faq: []
        },
        {
          id:    "main-sewer-line-cleaning",
          title: { en: "Main Sewer Line Cleaning", hr: "Čišćenje glavnog kanalizacijskog voda" },
          short: { en: "Hydro-jetting and snaking for full main line clogs and root intrusion.", hr: "Hidro-mlazno čišćenje i provlačenje za potpuna začepljenja glavnog voda i prodor korijenja." },
          faq: []
        }
      ]
    },
    {
      id:    "water-heater-services",
      title: { en: "Water Heater Services", hr: "Usluge bojlera" },
      short: { en: "Water heater installation, repair, and replacement for tank and tankless systems.", hr: "Ugradnja, popravak i zamjena bojlera za sustave s tankom i bez tanka." },
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
      children: [
        {
          id:    "water-heater-repair",
          title: { en: "Water Heater Repair", hr: "Popravak bojlera" },
          short: { en: "No hot water? Strange noises? We diagnose and fix water heater issues fast.", hr: "Nema tople vode? Čudni zvukovi? Brzo dijagnosticiramo i popravljamo probleme s bojlerom." },
          faq: []
        },
        {
          id:    "water-heater-installation",
          title: { en: "Water Heater Installation", hr: "Ugradnja bojlera" },
          short: { en: "Professional installation of tank and tankless water heaters with permit handling.", hr: "Profesionalna ugradnja bojlera s tankom i bez tanka uz pribavljanje dozvola." },
          faq: []
        },
        {
          id:    "tankless-water-heaters",
          title: { en: "Tankless Water Heaters", hr: "Protočni bojleri" },
          short: { en: "Endless hot water and lower energy bills with a modern tankless system.", hr: "Neograničena topla voda i niži računi za energiju s modernim protočnim sustavom." },
          faq: []
        }
      ]
    },
    {
      id:    "leak-detection-repair",
      title: { en: "Leak Detection & Repair", hr: "Otkrivanje i popravak curenja" },
      short: { en: "Advanced leak detection technology to find and fix hidden leaks before they cause serious damage.", hr: "Napredna tehnologija za otkrivanje i popravak skrivenih curenja prije nego uzrokuju ozbiljnu štetu." },
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80",
      children: [
        {
          id:    "slab-leak-detection",
          title: { en: "Slab Leak Detection", hr: "Otkrivanje curenja u temeljnoj ploči" },
          short: { en: "Non-invasive detection of leaks under concrete slabs using acoustic and thermal technology.", hr: "Neinvazivno otkrivanje curenja ispod betonskih ploča akustičnom i termalnom tehnologijom." },
          faq: []
        },
        {
          id:    "pipe-repair-replacement",
          title: { en: "Pipe Repair & Replacement", hr: "Popravak i zamjena cijevi" },
          short: { en: "From pinhole leaks to full repipes — we handle pipe repairs of all sizes.", hr: "Od sitnih curenja do potpune zamjene cijevi — rješavamo popravke svih veličina." },
          faq: []
        },
        {
          id:    "emergency-plumbing",
          title: { en: "Emergency Plumbing", hr: "Hitna vodoinstalaterska usluga" },
          short: { en: "24/7 emergency plumbing response for burst pipes, major leaks, and flooding.", hr: "Hitna vodoinstalaterska usluga 24/7 za pukle cijevi, velika curenja i poplave." },
          faq: []
        }
      ]
    }
  ] satisfies ServiceItem[],

  // ── Secondary Service Categories ──────────────────────────────────────────
  secondaryCategories: [
    {
      id:    "bathroom-plumbing",
      title: { en: "Bathroom Plumbing", hr: "Kupaonska vodoinstalacija" },
      short: { en: "Complete bathroom plumbing services including toilets, sinks, showers, and tubs.", hr: "Kompletne kupaonske vodoinstalaterske usluge uključujući WC-e, umivaonik, tuševe i kade." },
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=900&q=80",
      children: [
        { id: "toilet-repair",        title: { en: "Toilet Repair",         hr: "Popravak WC-a"          }, short: { en: "Running, leaking, or clogged toilets fixed fast.", hr: "Brzi popravak WC-a koji curi, teče ili je začepljen." }, faq: [] },
        { id: "toilet-installation",  title: { en: "Toilet Installation",   hr: "Ugradnja WC-a"          }, short: { en: "New toilet supply and installation with proper sealing.", hr: "Nabava i ugradnja novog WC-a s pravilnim brtvljenjem." }, faq: [] },
        { id: "shower-installation",  title: { en: "Shower Installation",   hr: "Ugradnja tuša"          }, short: { en: "Custom shower plumbing and fixture installation.", hr: "Prilagođena vodoinstalacija tuša i ugradnja armatura." }, faq: [] },
        { id: "bathtub-services",     title: { en: "Bathtub Services",      hr: "Usluge kade"            }, short: { en: "Bathtub installation, repair, and drain services.", hr: "Ugradnja, popravak i usluge odvoda kade." }, faq: [] },
        { id: "sink-faucet-repair",   title: { en: "Sink & Faucet Repair",  hr: "Popravak sudopere i slavine" }, short: { en: "Dripping faucets and leaky sinks repaired or replaced.", hr: "Popravak ili zamjena kapajućih slavina i propusnih sudopera." }, faq: [] },
        { id: "bathroom-remodel-plumbing", title: { en: "Bathroom Remodel Plumbing", hr: "Vodoinstalacija pri renovaciji kupaonice" }, short: { en: "Plumbing rough-in and finish work for bathroom remodels.", hr: "Gruba i završna vodoinstalacija pri renovaciji kupaonice." }, faq: [] }
      ]
    },
    {
      id:    "kitchen-plumbing",
      title: { en: "Kitchen Plumbing", hr: "Kuhinjska vodoinstalacija" },
      short: { en: "Kitchen sink, garbage disposal, dishwasher, and refrigerator line services.", hr: "Usluge kuhinjskog sudopera, drobilice otpada, perilice posuđa i priključka hladnjaka." },
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80",
      children: [
        { id: "garbage-disposal",     title: { en: "Garbage Disposal",      hr: "Drobilica otpada"       }, short: { en: "Garbage disposal installation, repair, and replacement.", hr: "Ugradnja, popravak i zamjena drobilice otpada." }, faq: [] },
        { id: "kitchen-sink-repair",  title: { en: "Kitchen Sink Repair",   hr: "Popravak kuhinjskog sudopera" }, short: { en: "Leaks, clogs, and faucet repairs for kitchen sinks.", hr: "Popravak curenja, začepljenja i slavina kuhinjskog sudopera." }, faq: [] },
        { id: "dishwasher-plumbing",  title: { en: "Dishwasher Plumbing",   hr: "Priključak perilice posuđa" }, short: { en: "Dishwasher supply and drain line installation.", hr: "Ugradnja dovodnog i odvodnog priključka perilice posuđa." }, faq: [] },
        { id: "water-filtration",     title: { en: "Water Filtration",      hr: "Filtracija vode"        }, short: { en: "Under-sink and whole-home water filtration system installation.", hr: "Ugradnja sustava za filtraciju vode ispod sudopera i za cijeli dom." }, faq: [] },
        { id: "kitchen-remodel-plumbing", title: { en: "Kitchen Remodel Plumbing", hr: "Vodoinstalacija pri renovaciji kuhinje" }, short: { en: "Full plumbing services for kitchen renovation projects.", hr: "Kompletne vodoinstalaterske usluge za projekte renovacije kuhinje." }, faq: [] },
        { id: "refrigerator-line",    title: { en: "Refrigerator Water Line", hr: "Priključak hladnjaka" }, short: { en: "Ice maker and refrigerator water line installation.", hr: "Ugradnja priključka za led i vodu hladnjaka." }, faq: [] }
      ]
    },
    {
      id:    "sewer-services",
      title: { en: "Sewer Services", hr: "Kanalizacijske usluge" },
      short: { en: "Sewer line inspection, cleaning, repair, and replacement for residential and commercial properties.", hr: "Inspekcija, čišćenje, popravak i zamjena kanalizacijskih vodova za stambene i poslovne nekretnine." },
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
      children: [
        { id: "sewer-camera-inspection", title: { en: "Sewer Camera Inspection", hr: "Kamera inspekcija kanalizacije" }, short: { en: "Video inspection to diagnose sewer line problems without digging.", hr: "Video inspekcija za dijagnozu problema kanalizacijskog voda bez kopanja." }, faq: [] },
        { id: "sewer-line-repair",    title: { en: "Sewer Line Repair",     hr: "Popravak kanalizacijskog voda" }, short: { en: "Trenchless and traditional sewer line repair options.", hr: "Opcije popravka kanalizacijskog voda bez rovova i tradicionalne metode." }, faq: [] },
        { id: "sewer-line-replacement", title: { en: "Sewer Line Replacement", hr: "Zamjena kanalizacijskog voda" }, short: { en: "Full sewer line replacement when repair is no longer viable.", hr: "Potpuna zamjena kanalizacijskog voda kada popravak više nije moguć." }, faq: [] },
        { id: "hydro-jetting",        title: { en: "Hydro Jetting",         hr: "Hidro-mlazno čišćenje"  }, short: { en: "High-pressure water jetting to clear severe blockages and root intrusion.", hr: "Čišćenje teških začepljenja i prodora korijenja vodom pod visokim tlakom." }, faq: [] },
        { id: "grease-trap-cleaning", title: { en: "Grease Trap Cleaning",  hr: "Čišćenje mastolovca"    }, short: { en: "Commercial grease trap pumping and cleaning services.", hr: "Pumpanje i čišćenje komercijalnih mastolovaca." }, faq: [] },
        { id: "root-intrusion-removal", title: { en: "Root Intrusion Removal", hr: "Uklanjanje prodora korijenja" }, short: { en: "Remove tree root intrusion from sewer lines before it causes a backup.", hr: "Uklanjanje prodora korijenja drveća iz kanalizacijskih vodova prije nego uzrokuje povrat." }, faq: [] }
      ]
    },
    {
      id:    "outdoor-plumbing",
      title: { en: "Outdoor Plumbing", hr: "Vanjska vodoinstalacija" },
      short: { en: "Outdoor faucets, irrigation, sprinkler systems, and underground line services.", hr: "Vanjske slavine, navodnjavanje, sustavi za zalijevanje i podzemni vodovi." },
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
      children: [
        { id: "outdoor-faucet-repair", title: { en: "Outdoor Faucet Repair", hr: "Popravak vanjske slavine" }, short: { en: "Leaking or broken outdoor hose bibs and spigots repaired.", hr: "Popravak propusnih ili pokvarenih vanjskih slavina i priključaka za crijevu." }, faq: [] },
        { id: "sprinkler-system",     title: { en: "Sprinkler System Plumbing", hr: "Vodoinstalacija sustava za zalijevanje" }, short: { en: "Backflow prevention and water supply for irrigation systems.", hr: "Zaštita od povrata i dovod vode za sustave navodnjavanja." }, faq: [] },
        { id: "underground-pipe",     title: { en: "Underground Pipe Repair", hr: "Popravak podzemnih cijevi" }, short: { en: "Locate and repair underground water and sewer line leaks.", hr: "Lociranje i popravak curenja podzemnih vodovodnih i kanalizacijskih vodova." }, faq: [] },
        { id: "gas-line-services",    title: { en: "Gas Line Services",     hr: "Usluge plinskih vodova"  }, short: { en: "Gas line installation, repair, and leak detection.", hr: "Ugradnja, popravak i otkrivanje curenja plinskih vodova." }, faq: [] },
        { id: "well-pump-services",   title: { en: "Well Pump Services",    hr: "Usluge pumpe za bunar"  }, short: { en: "Well pump installation, repair, and pressure tank services.", hr: "Ugradnja, popravak i usluge tlačnog tanka pumpe za bunar." }, faq: [] },
        { id: "pressure-regulation",  title: { en: "Pressure Regulation",   hr: "Regulacija tlaka"       }, short: { en: "Water pressure regulators installed and adjusted for optimal flow.", hr: "Ugradnja i podešavanje regulatora tlaka vode za optimalan protok." }, faq: [] }
      ]
    },
    {
      id:    "commercial-plumbing",
      title: { en: "Commercial Plumbing", hr: "Komercijalna vodoinstalacija" },
      short: { en: "Commercial plumbing services for offices, restaurants, retail, and multi-unit properties.", hr: "Komercijalne vodoinstalaterske usluge za urede, restorane, maloprodaju i višestambene nekretnine." },
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
      children: [
        { id: "commercial-drain-cleaning", title: { en: "Commercial Drain Cleaning", hr: "Komercijalno čišćenje odvoda" }, short: { en: "High-capacity drain cleaning for restaurants, offices, and retail.", hr: "Čišćenje odvoda velikog kapaciteta za restorane, urede i maloprodaju." }, faq: [] },
        { id: "commercial-water-heater",   title: { en: "Commercial Water Heaters", hr: "Komercijalni bojleri"         }, short: { en: "Commercial water heater installation and service for businesses.", hr: "Ugradnja i servis komercijalnih bojlera za poslovne objekte." }, faq: [] },
        { id: "backflow-testing",          title: { en: "Backflow Testing & Prevention", hr: "Testiranje i zaštita od povrata" }, short: { en: "Annual backflow preventer testing and certification.", hr: "Godišnje testiranje i certifikacija zaštite od povrata." }, faq: [] },
        { id: "commercial-remodel",        title: { en: "Commercial Remodel Plumbing", hr: "Komercijalna renovacijska vodoinstalacija" }, short: { en: "Plumbing for commercial tenant improvements and buildouts.", hr: "Vodoinstalacija za komercijalne preuređaje i nadogradnje." }, faq: [] },
        { id: "preventive-maintenance",    title: { en: "Preventive Maintenance",    hr: "Preventivno održavanje"     }, short: { en: "Scheduled plumbing maintenance programs for commercial properties.", hr: "Programi zakazanog vodoinstalaterskog održavanja za poslovne nekretnine." }, faq: [] },
        { id: "code-compliance",           title: { en: "Code Compliance",           hr: "Usklađenost s propisima"    }, short: { en: "Plumbing inspections and upgrades for code compliance.", hr: "Vodoinstalaterske inspekcije i nadogradnje za usklađenost s propisima." }, faq: [] }
      ]
    }
  ] satisfies ServiceItem[],

  // ── Hero Slides ───────────────────────────────────────────────────────────
  heroSlides: [
    {
      image:         "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80",
      title:         { en: "Austin's Most Trusted Plumbers", hr: "Najpouzdaniji vodoinstalateri u Austinu" },
      text:          { en: "Licensed, insured, and serving Austin since 2012. Same-day service, upfront pricing, and a 100% satisfaction guarantee on every job.", hr: "Licencirani, osigurani i u službi Austina od 2012. Usluga isti dan, transparentne cijene i 100% jamstvo zadovoljstva." },
      primaryText:   { en: "Get a Free Estimate", hr: "Zatražite besplatnu procjenu" },
      primaryHref:   "contact",
      secondaryText: { en: "Call (512) 555-0192", hr: "Pozovite (512) 555-0192" },
      secondaryHref: "tel:+15125550192"
    },
    {
      image:         "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80",
      title:         { en: "Drain Cleaning & Leak Repair", hr: "Čišćenje odvoda i popravak curenja" },
      text:          { en: "From clogged drains to hidden slab leaks, our licensed plumbers diagnose and fix the problem fast — with no hidden fees.", hr: "Od začepljenih odvoda do skrivenih curenja, naši licencirani vodoinstalateri brzo dijagnosticiraju i popravljaju problem." },
      primaryText:   { en: "Schedule Service", hr: "Zakažite uslugu" },
      primaryHref:   "contact",
      secondaryText: { en: "View All Services", hr: "Pogledajte sve usluge" },
      secondaryHref: "drain-cleaning"
    },
    {
      image:         "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=80",
      title:         { en: "Serving All of Austin Metro", hr: "Servisiramo cijelo područje Austina" },
      text:          { en: "From Round Rock to Buda, Cedar Park to Bee Cave — our team covers the entire Austin metro area with the same fast, professional service.", hr: "Od Round Rocka do Bude, Cedar Parka do Bee Cavea — naš tim pokriva cijelo područje Austina." },
      primaryText:   { en: "View Service Areas", hr: "Pogledajte servisna područja" },
      primaryHref:   "service-area"
    }
  ] satisfies HeroSlide[],

  // ── Blog Categories ───────────────────────────────────────────────────────
  blogCategories: [
    { id: "guides",       label: { en: "Guides",        hr: "Vodiči"    } },
    { id: "tips",         label: { en: "Tips & Tricks",  hr: "Savjeti"   } },
    { id: "diy",          label: { en: "DIY vs Pro",     hr: "DIY vs Pro"} },
    { id: "company-news", label: { en: "Company News",   hr: "Vijesti"   } }
  ] satisfies BlogCategory[]

};

export const allServices = [...siteConfig.mainServices, ...siteConfig.secondaryCategories];
