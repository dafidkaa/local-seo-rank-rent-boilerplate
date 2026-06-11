# AGENTS.md

## Architecture

Astro 4 static site generator with route-based i18n. Zero client-side JS framework. All content driven by a single config file. This is a **boilerplate/template** — not a production site.

## Key File Map

| File | Purpose |
|---|---|
| `src/site.config.ts` | Active site config — all business data, services, locations (LocationItem), integrations |
| `configs/*.config.ts` | Example configs (dualmark, isitagentready) — switch via `scripts/switch-config.mjs` |
| `astro.config.mjs` | Astro config — `site` URL read from `process.env.SITE_URL` with fallback |
| `src/lib/routes.ts` | Route helpers: `t()`, `localizedPath()`, `locationSlug()`, `servicePath()` |
| `src/lib/seo.ts` | SEO helpers: `seo()`, JSON-LD schemas, canonical, hreflang |
| `src/layouts/BaseLayout.astro` | HTML shell — meta, GTM, GA4, Clarity, cookie consent, header, footer |
| `src/components/EstimateForm.astro` | Lead form — webhook POST, honeypot, tracking events |
| `src/components/CookieConsent.astro` | Cookie banner — blocks analytics until consent |
| `src/styles/global.css` | All CSS — custom properties, layout, components |
| `scripts/switch-config.mjs` | Copies `configs/{name}.config.ts` → `src/site.config.ts` |
| `scripts/setup.mjs` | Interactive CLI wizard — generates `site.config.ts` |
| `scripts/generate-sitemap.mjs` | Post-build sitemap generator (reads `siteUrl` from config via regex) |

## Config System

- `src/site.config.ts` is the active config imported by 16+ files via `@/site.config`
- Each config must export: `siteConfig`, `allServices`, and types (`Locale`, `ServiceItem`, `LocationItem`, `HeroSlide`, `BlogCategory`)
- Switch configs: `node scripts/switch-config.mjs dualmark`
- The switch script validates that source files contain required exports before copying

## Config Fields Reference

Critical fields that must be present in every config:

```typescript
siteUrl, defaultLocale, legalLastUpdated, locales, business, brand, integrations, locations,
mainServices, secondaryCategories, heroSlides, blogCategories

LocationItem fields: `id`, `name`, `region`, `image`, `detail`, `knowledge`, `attractions`, `mapEmbedQuery`
```

Integrations fields: `gtmId`, `ga4MeasurementId`, `clarityProjectId`, `googleAdsConversionId`, `metaPixelId`, `calendlyUrl`, `crmWebhookUrl`, `reviewWidgetEmbedHtml`, `googleMapEmbedUrl`, `requireCookieConsent`

## Build and Deploy

```bash
npm run dev          # Dev server on localhost:4321
npm run build        # astro check + astro build + sitemap generation
npm run preview      # Preview built site
npm run check        # TypeScript/Astro type checking only
npm run setup        # Interactive config wizard
```

Deploy workflow: `.github/workflows/deploy.yml` — disabled by default in the template. Uncomment the push trigger and set secrets to activate for a real site.

## Conventions

- All translatable text: `LocalizedText` = `Record<Locale, string>`
- Resolve text: `t(text, locale)` from `src/lib/routes.ts`
- Build links: `localizedPath(locale, path)` — always locale-prefixed
- Location slugs: `locationSlug(service, location, locale)` — uses locale connector word
- Images: URL strings in config. For local images use `src/assets/` + `<Image />` from `astro:assets`
- CSS: custom properties in `global.css`, no framework, no CSS modules
- Forms: webhook POST via `fetch` when `crmWebhookUrl` is set, standard submission as fallback

## Page Templates

| Template | URL Pattern | Purpose |
|---|---|---|
| `[lang]/index.astro` | `/en/` | Homepage (15 sections, ~1,050 words) |
| `[lang]/[slug].astro` | `/en/drain-cleaning/` | Service page (11 sections, ~1,100 words) |
| `[lang]/[location].astro` | `/en/plumbing-in-austin/` | Location page (12 sections, ~1,200 words, Maps embed) |
| `[lang]/[parent]/[child].astro` | `/en/drain-cleaning/kitchen-drain-cleaning/` | Sub-service page |
| `[lang]/blog/[post].astro` | `/en/blog/post-slug/` | Blog post with TOC sidebar |

## What NOT to Do

- Do not create `src/lib/config.ts` — the switch-script approach copies configs directly
- Do not hardcode locale codes in templates — use `t()` and `localizedPath()`
- Do not add npm packages without checking `package.json` first
- Do not commit `.env` files — use GitHub Actions secrets for sensitive values
- Do not modify `astro.config.mjs` `site` property directly — it reads from `process.env.SITE_URL`
- Do not use `!important` in CSS — refactor specificity instead
- Do not add comments to code unless explicitly requested


## v2 Systems (read before editing templates)

### Content blocks — ALL body copy lives in i18n
`src/i18n/en.ts` / `hr.ts` contain a `blocks:` section holding every paragraph,
card, FAQ, and process step rendered by `[slug].astro`, `[location].astro`, and
`[parent]/[child].astro`. Templates call `blocks("blocks.servicePage.signs", locale, vars)`
(see `src/i18n/index.ts`) and interpolate `{service}`, `{city}`, `{business}`, etc.
**Never hardcode visible copy in those three templates** — add a key to the
locale files instead, so every locale and niche stays consistent.

### Theme presets
`src/lib/themes.ts` exports 17 niche presets (colors + fonts + hero overlay).
`siteConfig.brand` spreads one (`...themePreset("home-services")`) and overrides
as needed. Fonts are loaded from `brand.fontDisplay`/`fontBody` at build time —
families must carry weights 400–800 or provide `brand.fontsHref`.

### i18n routing
- Location slugs are localized via `locationSlug()` (`src/lib/routes.ts`).
- Service slugs can be translated per locale via the optional `slug` field on
  services/children; `servicePath()`/`subservicePath()` resolve them.
- Pages whose URL differs by locale pass `localePaths: localePathsFor(...)` to
  `seo()` so hreflang alternates and the header language switcher point at the
  real translated URL. The switcher receives `alternates` from BaseLayout.

### Components added in v2
| Component | Purpose |
|---|---|
| `ShortAnswer.astro` | AEO direct-answer card under the hero |
| `ProsCons.astro` | balanced two-column decision section |
| `ComparisonTable.astro` | crawlable comparison `<table>` |
| `StatsBar.astro` | count-up trust stats (values from `siteConfig.stats`) |
| `Gallery.astro` | image grid + native `<dialog>` lightbox (`service.gallery`) |
| `BeforeAfter.astro` | draggable before/after slider (`service.beforeAfter`) |
| `BlogHub.astro` | shared blog archive (page 1 + `/blog/page/N/`) |

`FaqSection.astro` and `ProcessSection.astro` emit FAQPage / HowTo JSON-LD from
their visible items — do NOT also add `faqSchema()` / `howToSchema()` to the
page head for the same content (duplicate structured data).

### Forms & leads
`window.submitLead(data, locale)` (defined in BaseLayout) delivers leads:
`integrations.crmWebhookUrl` → `integrations.formsubmitEmail` (formsubmit.co
AJAX) → no-backend fallback. Google Ads conversions fire only when
`integrations.googleAdsConversionId` is set. Popup triggers may carry
`data-service="<service-id>"` to pre-select the service.

### Motion
A scroll-reveal observer in BaseLayout staggers `[data-reveal]` elements and
children of known grid classes; `StatsBar` counts up on scroll. Both respect
`prefers-reduced-motion`. Add `data-reveal` to new sections to opt in.

### Blog pagination
`/[lang]/blog/` is page 1; pages 2+ are static at `/[lang]/blog/page/N/`
(9 posts per page, newest post featured on page 1). Search/filter/sort run
client-side over a JSON index of all posts and never hide the static grid from
crawlers.


## Design System v2 (visual layer)

- **Brand-derived everything**: surfaces, borders, shadows, hero/image overlays, and dark
  sections are computed from `--brand-primary/secondary/accent` via `color-mix` — no
  hardcoded navy anywhere. Changing the theme preset restyles the entire site, including
  photo overlays and the dark gradient bands (`--gradient-dark`, `--accent-glow`).
- **Theme personality**: each preset in `src/lib/themes.ts` carries
  `personality: { radius, button }`. BaseLayout maps it to `--radius-*`, `--btn-radius`,
  and `--btn-bg` so legal sites read sharp/serif, beauty sites read round/airy, etc.
- **Icons**: use `Icon.astro` (curated SVG stroke set) — NEVER emoji. Content blocks
  reference icons by name (`icon: "alert-triangle"`).
- **Eyebrows** (`.eyebrow`) render with an accent rule; section headers with
  `.section-header.center` get rules on both sides.
- **Premium image frames**: add `.img-premium` to a split-section image wrapper for the
  offset accent frame.
- **Utilities**: `.orb` (blurred accent orb for dark/CTA sections), `.link-underline`.
- A/B variant pages (home-page-2, service-area-hub-2) were removed; the legal/[page]
  route now serves only /legal/disclaimer/ (privacy + terms have standalone pages).

- **Nav treatment**: `personality.nav` — `"solid"` (utility bar + glass header) or
  `"overlay"` (transparent header embedded in the hero, glass on scroll; premium
  niches). Overlay requires every page to open with a dark hero (all templates do).
- **Brand vars cascade fix**: brand/personality CSS variables are emitted on the
  `<html>` style attribute (NOT a `<style>` tag) because Astro hoists bundled
  stylesheets below inline styles — a `:root` rule in global.css would otherwise
  override the injected theme. Do not move them back into a style tag.
- **DESIGN-SYSTEM.md** is the global visual playbook; `DESIGN-[niche].md` files are
  standardized briefs (preset wiring, hero/nav choice, signature sections, imagery
  queries, CTA language, do/don't). Keep them in this format.
