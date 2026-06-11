/**
 * i18n Flat-File System
 * =====================
 * All UI copy strings live in locale files (en.ts, hr.ts, etc.).
 * The site.config.ts holds structured data (services, locations, hours).
 * This separation makes it trivial for AI tools to:
 *   1. Translate a site: copy en.ts → de.ts, translate every value
 *   2. Add a locale: create the new locale file + add to siteConfig.locales
 *
 * HOW TO ADD A NEW LOCALE:
 *   1. Copy src/i18n/en.ts → src/i18n/[code].ts
 *   2. Translate every string value (keys stay in English)
 *   3. Add { code: "[code]", label: "...", path: "/[code]", connector: "..." }
 *      to siteConfig.locales in site.config.ts
 *
 * HOW TO ADD A NEW STRING:
 *   1. Add the key+value to en.ts
 *   2. Add the same key to every other locale file
 *   3. Use ui("your.key", locale) in any .astro component
 */

import type { Locale } from "@/site.config";
import en from "./en";
import hr from "./hr";

export type TranslationKeys = typeof en;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const locales: Record<string, any> = { en, hr };

/** Replace {placeholders} in a string with values from vars. */
export const interpolate = (value: string, vars?: Record<string, string | number>): string =>
  vars ? value.replace(/\{(\w+)\}/g, (match, name) => (name in vars ? String(vars[name]) : match)) : value;

/** Deep-interpolate strings inside arbitrary structures (arrays/objects). */
function interpolateDeep<T>(value: T, vars?: Record<string, string | number>): T {
  if (typeof value === "string") return interpolate(value, vars) as T;
  if (Array.isArray(value)) return value.map((item) => interpolateDeep(item, vars)) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([k, v]) => [k, interpolateDeep(v, vars)])
    ) as T;
  }
  return value;
}

function resolve(key: string, locale: string): unknown {
  const parts = key.split(".");
  const dict = (locales[locale] ?? locales.en) as Record<string, unknown>;
  const fallback = locales.en as Record<string, unknown>;

  let val: unknown = dict;
  let fb: unknown = fallback;

  for (const part of parts) {
    val = (val as Record<string, unknown>)?.[part];
    fb = (fb as Record<string, unknown>)?.[part];
  }
  return val ?? fb;
}

/**
 * Get a UI string by dot-notation key for the given locale.
 * Falls back to English if the key is missing in the target locale.
 * Optional `vars` interpolate {placeholders} in the string.
 *
 * @example ui("nav.services", locale)
 * @example ui("hero.badge", locale, { city: "Austin", year: "2012" })
 */
export function ui(key: string, locale: string, vars?: Record<string, string | number>): string {
  const val = resolve(key, locale);
  return typeof val === "string" ? interpolate(val, vars) : key;
}

/**
 * Get a structured content block (object/array of strings) by dot-notation
 * key, deep-interpolating {placeholders}. Used by page templates for section
 * copy (signs, benefits, FAQs, process steps) so ALL body copy lives in the
 * locale files and can be rewritten per niche without touching templates.
 *
 * @example blocks("blocks.servicePage.signs", locale, { service, city })
 */
export function blocks<T = any>(key: string, locale: string, vars?: Record<string, string | number>): T {
  return interpolateDeep(resolve(key, locale), vars) as T;
}

export { en, hr };
