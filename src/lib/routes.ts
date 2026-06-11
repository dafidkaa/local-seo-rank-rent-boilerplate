import { allServices, siteConfig, type Locale, type ServiceItem } from "@/site.config";

export const t = (value: Record<string, string>, locale: string) => value[locale] ?? value[siteConfig.defaultLocale];

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const localizedPath = (locale: string, path = "") => {
  const clean = path.replace(/^\/|\/$/g, "");
  return `/${locale}${clean ? `/${clean}` : ""}/`;
};

/**
 * Service slugs can be translated per locale via the optional `slug` field on
 * ServiceItem / children (e.g. slug: { en: "drain-cleaning", hr: "ciscenje-odvoda" }).
 * Falls back to the canonical `id` when no translation exists.
 */
export const serviceSlug = (locale: string, service: { id: string; slug?: Partial<Record<string, string>> }) =>
  service.slug?.[locale] ?? service.id;

export const servicePath = (locale: string, service: Pick<ServiceItem, "id"> & { slug?: Partial<Record<string, string>> }) =>
  localizedPath(locale, serviceSlug(locale, service));

export const subservicePath = (
  locale: string,
  service: Pick<ServiceItem, "id"> & { slug?: Partial<Record<string, string>> },
  child: string | { id: string; slug?: Partial<Record<string, string>> }
) => {
  const childSlug = typeof child === "string" ? child : serviceSlug(locale, child);
  return localizedPath(locale, `${serviceSlug(locale, service)}/${childSlug}`);
};

export const getLocaleConfig = (locale: string) =>
  siteConfig.locales.find((l) => l.code === locale) ?? siteConfig.locales[0];

export const locationSlug = (locale: string, locationId: string) => {
  const config = getLocaleConfig(locale);
  return `${slugify(t(siteConfig.business.primaryService, locale))}-${config.connector}-${locationId}`;
};

export const locationPath = (locale: string, locationId: string) =>
  localizedPath(locale, locationSlug(locale, locationId));

export const getServiceById = (id: string) => allServices.find((service) => service.id === id);

export const getParentForChildRoute = (parentId: string, childId: string) => {
  const parent = getServiceById(parentId);
  const child = parent?.children.find((item) => item.id === childId);
  return parent && child ? { parent, child } : undefined;
};

export const blogPostPath = (locale: string, postId: string) => localizedPath(locale, `blog/${postId}`);

/**
 * Build the per-locale path map for a page whose slug differs by locale
 * (location pages, translated service slugs). Feed the result to seo()'s
 * `localePaths` so hreflang alternates and the header language switcher
 * point at the real translated URL instead of a 404.
 */
export const localePathsFor = (build: (locale: string) => string): Record<string, string> =>
  Object.fromEntries(siteConfig.locales.map((l) => [l.code, build(l.code)]));

export const dateLocale = (locale: string): string => {
  const map: Record<string, string> = { en: "en-US", hr: "hr-HR" };
  return map[locale as string] ?? "en-US";
};
