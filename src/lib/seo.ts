import { siteConfig, type Locale } from "@/site.config";
import { localizedPath, t } from "./routes";

type SeoInput = {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
  image?: string;
  noindex?: boolean;
  schema?: unknown[];
};

export const buildCanonical = (locale: Locale, path = "") => new URL(localizedPath(locale, path), siteConfig.siteUrl).toString();

export const buildAlternates = (path = "") =>
  siteConfig.locales.map((locale) => ({
    lang: locale.code,
    label: locale.label,
    url: buildCanonical(locale.code, path)
  }));

export const seo = ({ locale, title, description, path = "", image = siteConfig.brand.ogImage, noindex = false, schema = [] }: SeoInput) => ({
  title,
  description,
  path,
  canonical: buildCanonical(locale, path),
  image,
  noindex,
  alternates: buildAlternates(path),
  schema
});

export const localBusinessSchema = (locale: Locale) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.business.name,
  legalName: siteConfig.business.legalName,
  url: buildCanonical(locale),
  image: siteConfig.brand.ogImage,
  telephone: siteConfig.business.phone,
  email: siteConfig.business.email,
  address: siteConfig.business.address,
  areaServed: siteConfig.locations.map((location) => location.name),
  foundingDate: siteConfig.business.foundedYear,
  description: t(siteConfig.business.description, locale),
  openingHours: Object.entries(siteConfig.business.hours).map(([day, hours]) => `${day} ${hours}`)
});

export const websiteSchema = (locale: Locale) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.business.name,
  url: buildCanonical(locale),
  inLanguage: locale
});

export const serviceSchema = (locale: Locale, name: string, path: string, areaServed?: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  serviceType: name,
  provider: {
    "@type": "LocalBusiness",
    name: siteConfig.business.name,
    telephone: siteConfig.business.phone
  },
  areaServed: areaServed ?? siteConfig.business.serviceArea,
  url: buildCanonical(locale, path)
});

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const articleSchema = (input: {
  headline: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  wordCount?: number;
  articleBody?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: input.headline,
  description: input.description,
  url: input.url,
  image: input.image,
  datePublished: input.datePublished,
  dateModified: input.dateModified ?? input.datePublished,
  wordCount: input.wordCount,
  articleBody: input.articleBody,
  publisher: {
    "@type": "Organization",
    name: siteConfig.business.name,
    url: siteConfig.siteUrl
  }
});

export const organizationSchema = (locale: Locale) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.business.name,
  legalName: siteConfig.business.legalName,
  url: buildCanonical(locale),
  logo: siteConfig.brand.ogImage,
  foundingDate: siteConfig.business.foundedYear,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.business.phone,
    email: siteConfig.business.email,
    contactType: "customer service",
    areaServed: siteConfig.business.serviceArea
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.business.city,
    addressRegion: siteConfig.business.region,
    addressCountry: siteConfig.business.country
  }
});

export const webPageSchema = (locale: Locale, name: string, url: string, description?: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name,
  url,
  description: description ?? "",
  isPartOf: {
    "@type": "WebSite",
    name: siteConfig.business.name,
    url: buildCanonical(locale)
  }
});

export const searchActionSchema = (locale: Locale) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.business.name,
  url: buildCanonical(locale),
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${buildCanonical(locale)}blog/?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
});

export const howToSchema = (steps: Array<{ name: string; text: string }>) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Our Service Works",
  step: steps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.text
  }))
});

export const aboutPageSchema = (locale: Locale) => ({
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About ${siteConfig.business.name}`,
  url: buildCanonical(locale, "about"),
  mainEntity: {
    "@type": "Organization",
    name: siteConfig.business.name,
    url: buildCanonical(locale)
  }
});

export const faqSchema = (questions: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
});
