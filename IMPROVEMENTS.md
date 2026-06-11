# Boilerplate Improvement Roadmap

This document tracks known improvement areas, technical debt, and feature ideas for the rank-and-rent boilerplate. Items are ordered by priority and impact.

---

## 🔴 High Priority (Affects SEO or Functionality)

### 1. Dynamic `llms.txt` and `llms-full.txt`
**Current state:** Both files are hardcoded with Austin Plumbing Pro demo content. After cloning, they will mislead AI crawlers with incorrect business data.

**Recommended fix:** Convert both files to Astro endpoints (`llms.txt.ts`, `llms-full.txt.ts`) that read from `site.config.ts` and generate dynamic content at build time — exactly like `robots.txt.ts` and `sitemap.xml.ts` already do.

**Impact:** High — AI crawlers (Perplexity, ChatGPT Search, Claude) will cite wrong business information until this is fixed.

---

### 2. `scripts/setup.mjs` Wizard is Outdated
**Current state:** The interactive setup wizard (`npm run setup`) generates a `site.config.ts` with the old brand color field names (`dark`, `light`, `heroImage`, `alternateHeroImage`, `teamImage`, `ogImage`) and does not include the newer fields required by the templates:
- `brand.accent`, `brand.accentDark`, `brand.accentLight`, `brand.heroOverlay`, `brand.fontDisplay`, `brand.fontBody`
- `brand.images` (the image key map)
- `business.ctaMode`, `business.stats`
- `LocationItem.knowledge`, `LocationItem.attractions`, `LocationItem.mapEmbedQuery`

**Recommended fix:** Update `generateConfig()` in `scripts/setup.mjs` to output the current `site.config.ts` shape, and update `collectBrand()` and `collectLocations()` to ask for the new fields.

**Impact:** High — running `npm run setup` currently generates a broken config that will fail to build.

---

### 3. Blog Post `[post].astro` — Featured Image as Hero Background
**Current state:** The blog post template uses the featured image as a hero background, but the fallback image path `(siteConfig.brand as any).images?.hero1` uses a weakly-typed `any` cast.

**Recommended fix:** Add a `blog` key to the `images` object in `site.config.ts` and update the blog post template to use it directly without the `any` cast.

**Impact:** Medium — TypeScript safety and cleaner config.

---

## 🟡 Medium Priority (Quality of Life & Conversion)

### 4. Sub-Service Page (`[parent]/[child].astro`) Content Density
**Current state:** The sub-service page template has approximately 400–500 words of visible content — below the 600-word minimum target.

**Recommended fix:** Add 2 additional content sections: a "Common Questions About [Sub-Service]" FAQ section and a "Related Services in [City]" grid linking to sibling sub-services and the parent service.

---

### 5. About Page Content Expansion
**Current state:** The about page has approximately 350 words of visible content. It lacks a team section, a timeline/history section, and a certifications/awards section.

**Recommended fix:** Add a "Our Story" timeline section, a "Certifications & Associations" badge grid, and a "Meet the Team" card grid (using placeholder avatar images from the config).

---

### 6. Contact Page — Map Section
**Current state:** The contact page has a `<MapSection>` component that renders a static Google Maps embed using `siteConfig.integrations.googleMapEmbedUrl`. However, the map embed URL is a single static URL rather than the dynamic `mapEmbedQuery` system used by the location pages.

**Recommended fix:** Unify the map embed approach — use the same `mapEmbedQuery` system for both the contact page and location pages, or document clearly that `googleMapEmbedUrl` should be a full embed URL.

---

### 7. Service Area Hub Pages Need Content Expansion
**Current state:** Both `service-area.astro` and `service-area-hub-2.astro` are thin pages with approximately 200 words. They list location cards but have no narrative copy, no FAQ section, and no internal linking to service+location pages.

**Recommended fix:** Add a 300-word intro narrative, a "Services Available in All Areas" grid, and a FAQ section targeting "Do you serve [city]?" type queries.

---

### 8. FAQ Page (`faq.astro`) Content
**Current state:** The FAQ page renders FAQs from `en.ts` but has no intro section, no category grouping, and no schema-enhanced section headers.

**Recommended fix:** Add a hero section (already using `Hero.astro`), a category filter bar, and group FAQs into 3–4 topic sections (Pricing, Availability, Process, Guarantees).

---

## 🟢 Low Priority (Polish & Future Features)

### 9. `configs/` Example Configs Are Outdated
**Current state:** `configs/dualmark.config.ts` and `configs/isitagentready.config.ts` use the old brand field names and do not include the new `LocationItem` fields.

**Recommended fix:** Update both example configs to match the current `site.config.ts` shape so they can be used as working examples.

---

### 10. Blog — No Real Content
**Current state:** The blog has only 2 placeholder posts. The blog hub, sidebar, and post template are fully built but there is no real content to demonstrate them.

**Recommended fix:** Add 5–8 sample blog posts per niche category (written by AI using the niche design briefs) to demonstrate the full blog experience and provide real SEO value.

---

### 11. `home-page-2.astro` — Alternative Homepage
**Current state:** `home-page-2.astro` exists as an alternative homepage variant but has not been updated to match the content density improvements made to `index.astro`. It is approximately 400 words.

**Recommended fix:** Either bring it up to parity with `index.astro` or document it as a "minimal" variant for specific use cases.

---

### 12. `AGENTS.md` — Missing New Files
**Current state:** `AGENTS.md` (the AI agent instruction file) does not mention `[location].astro`, the `LocationItem` type, or the `IMPROVEMENTS.md` file.

**Recommended fix:** Update the Key File Map table to include `[location].astro` and note the `LocationItem` type with its new fields.

---

## 📊 Audit Summary

| Category | Issues Found | Fixed This Session | Remaining |
|---|---|---|---|
| Build errors | 9 | 9 | 0 |
| Runtime errors | 2 | 2 | 0 |
| Build warnings | 1 | 1 | 0 |
| Outdated documentation | 4 | 4 | 0 |
| Content density gaps | 5 | 3 (homepage, service, location) | 2 (sub-service, about) |
| Dynamic files (llms.txt) | 1 | 0 | 1 |
| Setup wizard outdated | 1 | 0 | 1 |
| Example configs outdated | 1 | 0 | 1 |


---

## 2026-06-11 — v2 overhaul (completed)

**Correctness fixes**
- Canonical URLs were double-prefixed (`/en/en/...`) on every dynamic page — fixed in `seo.ts` (`buildCanonical` accepts absolute paths).
- hreflang alternates now use per-locale translated URLs (`localePaths` in `seo()`); previously they pointed at 404s for location pages.
- Language switcher keeps page context (translated URL) instead of dumping to the other locale's homepage.
- Brand fonts are now actually loaded from `brand.fontDisplay/fontBody` (the Google Fonts link was hardcoded to different families).
- FaqSection/ProcessSection emit FAQPage/HowTo schema from visible items; duplicate head-level schema removed; homepage finally has FAQ schema.
- Blog posts: `og:type=article` + `article:published_time/modified_time`.
- Broken internal links to `/{locale}/{location.id}/` on service/about pages now use `locationPath()`.
- Sitemap: per-URL `xhtml:link` hreflang alternates, blog post `lastmod`, blog pagination pages, FAQ page added; thank-you and A/B variants removed (variants now noindexed); dead `scripts/generate-sitemap.mjs` deleted.
- Forms: validation actually runs (was `novalidate` with no JS check), honeypot enforced, hardcoded `AW-CONVERSION_ID/LABEL` replaced with config-driven ID, duplicate listener binding fixed.

**New capabilities**
- formsubmit.co zero-backend lead delivery (`integrations.formsubmitEmail`) with shared `window.submitLead()`.
- 17 niche theme presets in `src/lib/themes.ts` (`brand: { ...themePreset("medical") }`).
- i18n content blocks: ALL service/location/sub-service body copy moved to `src/i18n/[locale].ts` (`blocks:`) with `{placeholder}` interpolation — Croatian pages previously rendered English body copy; new niches need zero template edits.
- Translated service slugs (`slug: { hr: "..." }` on services/children).
- AEO components: ShortAnswer, ProsCons, ComparisonTable (wired on service pages), StatsBar count-up (service + location pages), Gallery with lightbox + BeforeAfter slider (render from `service.gallery` / `service.beforeAfter`).
- Static blog pagination (`/blog/page/N/`) with full-corpus client-side search/filter/sort over a JSON index.
- Scroll-reveal animation system with stagger (respects `prefers-reduced-motion`); button micro-interactions.
- Popup form pre-selects the service from the triggering page (`data-service`).
- Setup wizard: theme-preset option, formsubmitEmail, current type shape; example configs fixed to build cleanly.
