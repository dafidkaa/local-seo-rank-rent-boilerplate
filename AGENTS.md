# AGENTS.md

## Architecture

Astro 4 static site generator with route-based i18n. Zero client-side JS framework. All content driven by a single config file.

## Key File Map

| File | Purpose |
|---|---|
| `src/site.config.ts` | Active site config — all business data, services, locations, integrations |
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
- Each config must export: `siteConfig`, `allServices`, and types (`Locale`, `ServiceItem`, `HeroSlide`, `BlogCategory`)
- Switch configs: `node scripts/switch-config.mjs dualmark`
- The switch script validates that source files contain required exports before copying

## Config Fields Reference

Critical fields that must be present in every config:

```typescript
siteUrl, defaultLocale, legalLastUpdated, locales, business, brand, integrations, locations,
mainServices, secondaryCategories, heroSlides, blogCategories
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

Deploy workflow: `.github/workflows/deploy.yml` — builds and deploys to Cloudflare Pages.

## Conventions

- All translatable text: `LocalizedText` = `Record<Locale, string>`
- Resolve text: `t(text, locale)` from `src/lib/routes.ts`
- Build links: `localizedPath(locale, path)` — always locale-prefixed
- Location slugs: `locationSlug(service, location, locale)` — uses locale connector word
- Images: URL strings in config. For local images use `src/assets/` + `<Image />` from `astro:assets`
- CSS: custom properties in `global.css`, no framework, no CSS modules
- Forms: webhook POST via `fetch` when `crmWebhookUrl` is set, standard submission as fallback

## What NOT to Do

- Do not create `src/lib/config.ts` — the switch-script approach copies configs directly
- Do not hardcode locale codes in templates — use `t()` and `localizedPath()`
- Do not add npm packages without checking `package.json` first
- Do not commit `.env` files — use GitHub Actions secrets for sensitive values
- Do not modify `astro.config.mjs` `site` property directly — it reads from `process.env.SITE_URL`
- Do not use `!important` in CSS — refactor specificity instead
- Do not add comments to code unless explicitly requested
