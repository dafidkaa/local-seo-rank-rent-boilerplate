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
