import { allServices, siteConfig, type Locale, type ServiceItem } from "@/site.config";

export const t = (value: Record<Locale, string>, locale: Locale) => value[locale] ?? value[siteConfig.defaultLocale];

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const localizedPath = (locale: Locale, path = "") => {
  const clean = path.replace(/^\/|\/$/g, "");
  return `/${locale}${clean ? `/${clean}` : ""}/`;
};

export const servicePath = (locale: Locale, service: Pick<ServiceItem, "id">) => localizedPath(locale, service.id);

export const subservicePath = (locale: Locale, service: Pick<ServiceItem, "id">, childId: string) =>
  localizedPath(locale, `${service.id}/${childId}`);

export const getLocaleConfig = (locale: Locale) =>
  siteConfig.locales.find((l) => l.code === locale) ?? siteConfig.locales[0];

export const locationSlug = (locale: Locale, locationId: string) => {
  const config = getLocaleConfig(locale);
  return `${slugify(t(siteConfig.business.primaryService, locale))}-${config.connector}-${locationId}`;
};

export const locationPath = (locale: Locale, locationId: string) =>
  localizedPath(locale, locationSlug(locale, locationId));

export const getServiceById = (id: string) => allServices.find((service) => service.id === id);

export const getParentForChildRoute = (parentId: string, childId: string) => {
  const parent = getServiceById(parentId);
  const child = parent?.children.find((item) => item.id === childId);
  return parent && child ? { parent, child } : undefined;
};
