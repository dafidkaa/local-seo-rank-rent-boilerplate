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

export const servicePath = (locale: string, service: Pick<ServiceItem, "id">) => localizedPath(locale, service.id);

export const subservicePath = (locale: string, service: Pick<ServiceItem, "id">, childId: string) =>
  localizedPath(locale, `${service.id}/${childId}`);

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

export const dateLocale = (locale: string): string => {
  const map: Record<string, string> = { en: "en-US", hr: "hr-HR" };
  return map[locale as string] ?? "en-US";
};
