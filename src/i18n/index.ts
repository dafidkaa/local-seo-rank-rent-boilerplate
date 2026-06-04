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

const locales: Record<string, TranslationKeys> = { en, hr };

/**
 * Get a UI string by dot-notation key for the given locale.
 * Falls back to English if the key is missing in the target locale.
 *
 * @example ui("nav.services", locale)
 * @example ui("hero.cta.primary", locale)
 */
export function ui(key: string, locale: Locale): string {
  const parts = key.split(".");
  const dict = (locales[locale] ?? locales.en) as Record<string, unknown>;
  const fallback = locales.en as Record<string, unknown>;

  let val: unknown = dict;
  let fb: unknown = fallback;

  for (const part of parts) {
    val = (val as Record<string, unknown>)?.[part];
    fb = (fb as Record<string, unknown>)?.[part];
  }

  return (typeof val === "string" ? val : typeof fb === "string" ? fb : key);
}

export { en, hr };
