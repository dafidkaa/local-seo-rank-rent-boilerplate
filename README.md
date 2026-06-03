# Local SEO Rank-and-Rent Boilerplate

A production-ready Astro boilerplate for building multi-language local service websites optimized for SEO, AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization). Designed for Rank-and-Rent workflows: clone, configure one file, build, deploy.

**This is a template**, not a production site. All business data is placeholder — replace it with real data before deploying.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Two-Site Template](#two-site-template)
- [Project Structure](#project-structure)
- [Configuration Reference](#configuration-reference)
- [SEO, AEO, and GEO Features](#seo-aeo-and-geo-features)
- [Analytics and Tracking](#analytics-and-tracking)
- [Multi-Language Setup](#multi-language-setup)
- [Cloudflare Pages Deployment](#cloudflare-pages-deployment)
- [GitHub Actions CI/CD](#github-actions-cicd)
- [Forms and CRM Integration](#forms-and-crm-integration)
- [Image Optimization](#image-optimization)
- [Launch Checklist](#launch-checklist)
- [Troubleshooting](#troubleshooting)
- [Agent Instructions](#agent-instructions)

---

## Overview

This boilerplate generates a **static multi-page website** from a single configuration file (`src/site.config.ts`). It produces **100+ pages per locale** with:

- Service pages with subservice children
- Location landing pages with city-specific slugs
- Blog posts and category pages
- Service area hubs
- Contact, about, FAQ, legal, and thank-you pages
- Full JSON-LD structured data on every page
- Sitemap, robots.txt, hreflang alternates, and canonical URLs
- Optional cookie consent banner with GA4 and Microsoft Clarity integration
- Webhook-based form submission with honeypot spam filtering

The build output is plain HTML — no JavaScript framework runtime shipped to the browser.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **Astro 4** | Static site generator (SSG) |
| **TypeScript** | Type-safe configuration and helpers |
| **Vanilla CSS** | Styling via CSS custom properties, no framework |
| **Node.js** | Build tooling and setup wizard |
| **Cloudflare Pages** | Deployment target with GitHub Actions CI/CD |

No React, Vue, Tailwind, or other runtime dependencies. The site ships zero client-side JavaScript beyond a tiny mobile menu toggle, optional analytics, and form submission handling.

---

## Quick Start

```bash
# 1. Clone this repo
git clone https://github.com/dafidkaa/local-seo-rank-rent-boilerplate.git my-new-site
cd my-new-site

# 2. Install dependencies
npm install

# 3. Run the setup wizard (generates site.config.ts interactively)
npm run setup

# 4. Start the dev server
npm run dev
```

Open `http://localhost:4321/en/` in your browser.

Alternatively, skip the wizard and edit `src/site.config.ts` directly, or switch to an example config:

```bash
node scripts/switch-config.mjs dualmark
```

---

## Two-Site Template

The boilerplate ships with two complete example configurations demonstrating different business types:

### dualmark.dev — Local Service Business

A digital marketing agency in Austin, Texas. Demonstrates:
- Multiple service locations (9 cities)
- Local SEO services with GBP optimization
- Multi-service structure with subservices
- Local business schema and geo-targeting

### isitagentready.com — SaaS / AI Tool

An AI readiness assessment platform. Demonstrates:
- Remote/online-only business with a single location
- Different CTA style ("Run Free Audit", "Get Your Score")
- Fewer location pages, more tool-focused content
- Software company schema type

### Switching Configs

```bash
node scripts/switch-config.mjs dualmark       # Copy dualmark config to src/site.config.ts
node scripts/switch-config.mjs isitagentready  # Copy isitagentready config to src/site.config.ts
```

Each config is a self-contained TypeScript file with all types, data, and exports.

---

## Project Structure

```
├── astro.config.mjs              # Astro config: site URL (env-driven), image patterns, output mode
├── package.json                   # Dependencies and scripts
├── tsconfig.json                  # TypeScript config with path aliases
├── configs/                       # Example site configurations
│   ├── dualmark.config.ts         # Local SEO agency example
│   └── isitagentready.config.ts   # AI/SaaS tool example
├── scripts/
│   ├── setup.mjs                  # Interactive CLI wizard for new sites
│   ├── switch-config.mjs          # Switch between configs (copies to src/site.config.ts)
│   └── generate-sitemap.mjs       # Post-build sitemap generator
├── .github/workflows/
│   └── deploy.yml                 # GitHub Actions: build & deploy to Cloudflare Pages
├── public/
│   ├── images/                    # Static images
│   ├── _headers                   # Cloudflare Pages security/caching headers
│   ├── _redirects                 # Cloudflare Pages redirect rules
│   ├── llms.txt                   # LLM-friendly site summary
│   └── llms-full.txt              # Full LLM-friendly site content
├── src/
│   ├── site.config.ts             # THE configuration file — all business data lives here
│   ├── env.d.ts                   # TypeScript environment declarations
│   ├── styles/
│   │   └── global.css             # All styles: custom properties, layout, components
│   ├── lib/
│   │   ├── routes.ts              # Route helpers: localizedPath, locationSlug, servicePath, etc.
│   │   └── seo.ts                 # SEO helpers: meta, canonical, hreflang, JSON-LD schemas
│   ├── components/
│   │   ├── Header.astro           # Sticky header with nav, dropdowns, language switcher
│   │   ├── Footer.astro           # 4-column footer with links and hours
│   │   ├── Hero.astro             # Full-viewport hero with image, overlay, CTAs, badges
│   │   ├── HeroSlider.astro       # Multi-slide hero carousel
│   │   ├── EstimateForm.astro     # Lead capture form with honeypot, webhook, and tracking
│   │   ├── ServiceCard.astro      # Service link card with image
│   │   ├── LocationCard.astro     # Location link card with image overlay
│   │   ├── ProcessSection.astro   # Numbered process steps grid
│   │   ├── ReviewsSection.astro   # Review widget or trust block fallback
│   │   ├── FaqSection.astro       # FAQ accordion with details/summary
│   │   ├── FinalCta.astro         # CTA section with form split layout
│   │   ├── MobileCta.astro        # Sticky bottom CTA bar on mobile
│   │   ├── MapSection.astro       # Google Maps embed or placeholder
│   │   ├── ScheduleWidget.astro   # Calendly/booking iframe or placeholder
│   │   ├── BlogCard.astro         # Blog post card for listings
│   │   ├── RelatedPosts.astro     # Related blog posts widget
│   │   ├── ShareButtons.astro     # Social share buttons
│   │   ├── Breadcrumbs.astro      # Breadcrumb navigation with schema
│   │   ├── ReadingProgress.astro  # Reading progress bar for blog posts
│   │   └── CookieConsent.astro    # Cookie consent banner with customize option
│   ├── layouts/
│   │   └── BaseLayout.astro       # HTML shell: head with SEO meta, header, footer, mobile CTA
│   └── pages/
│       ├── index.astro            # Root redirect to default locale
│       ├── 404.astro              # Custom 404 page
│       ├── robots.txt.ts          # Dynamic robots.txt
│       ├── sitemap.xml.ts         # Dynamic sitemap with all routes
│       ├── sitemap-index.xml.ts   # Sitemap index
│       └── [lang]/                # All per-locale pages
│           ├── index.astro              # Homepage
│           ├── home-page-2.astro        # Alternate homepage for A/B testing
│           ├── about.astro              # About page
│           ├── contact.astro            # Contact page with form and map
│           ├── faq.astro                # FAQ page
│           ├── service-area.astro       # Service area hub 1
│           ├── service-area-hub-2.astro # Service area hub 2
│           ├── thank-you.astro          # Form submission confirmation
│           ├── privacy-policy.astro     # Privacy policy
│           ├── terms-and-conditions.astro # Terms and conditions
│           ├── [slug].astro             # Dynamic: service pages + location pages
│           ├── [parent]/[child].astro   # Dynamic: subservice pages
│           └── blog/
│               ├── index.astro          # Blog hub
│               └── [post].astro         # Blog post
└── docs/
    └── template-requirements-map.md  # Requirements-to-implementation mapping
```

---

## Configuration Reference

All customization happens in **`src/site.config.ts`**. This is the single file you edit per niche.

### Type Definitions

```typescript
type Locale = "en" | "hr";                          // Add new locale codes here
type LocalizedText = Record<Locale, string>;         // { en: "...", hr: "..." }
type LocaleConfig = {
  code: Locale;
  label: string;     // Display label for language switcher
  path: string;      // URL prefix: "/en", "/hr"
  connector: string; // Word used in location slugs: "in", "u", "en", "a"
};
type ServiceItem = {
  id: string;                        // URL slug: "carpet-cleaning"
  title: LocalizedText;              // Service name per locale
  short: LocalizedText;              // Short description per locale
  image: string;                     // Image URL or import path
  children: Array<{
    id: string;                      // Subservice slug
    title: LocalizedText;
    short: LocalizedText;
    faq: Array<{ question: LocalizedText; answer: LocalizedText }>;
  }>;
};
```

### Config Sections

| Section | Field | What It Controls |
|---|---|---|
| `siteUrl` | | Production domain for canonical URLs, sitemap, robots.txt |
| `defaultLocale` | | Fallback locale, root redirect target |
| `legalLastUpdated` | | Date string (YYYY-MM-DD) shown on privacy policy and terms pages |
| `locales[]` | | Available languages, their URL paths and slug connectors |
| `business` | | Name, phone, email, address, hours, description, CTA text |
| `brand` | | Primary/secondary colors, images, logo text |
| `integrations` | `gtmId` | Google Tag Manager container ID |
| | `ga4MeasurementId` | Google Analytics 4 measurement ID (e.g. `G-XXXXXXXXXX`) |
| | `clarityProjectId` | Microsoft Clarity project ID |
| | `googleAdsConversionId` | Google Ads conversion tracking ID |
| | `metaPixelId` | Meta (Facebook) Pixel ID |
| | `calendlyUrl` | Calendly or other booking widget URL |
| | `crmWebhookUrl` | Webhook URL for form submissions (CRM, Zapier, etc.) |
| | `reviewWidgetEmbedHtml` | HTML embed code for review widget |
| | `googleMapEmbedUrl` | Google Maps embed URL |
| | `requireCookieConsent` | Show cookie consent banner before loading analytics |
| `locations[]` | | Cities served — each generates a full location landing page |
| `mainServices[]` | | Core service pages with subservice children |
| `secondaryCategories[]` | | Supporting service categories (auto-generates 6 subservices each) |
| `blogCategories[]` | | Blog post categories for the blog hub page |

### Adding a New Language

1. Add the locale code to the `Locale` union type
2. Add a `LocaleConfig` entry to the `locales` array
3. Add translations to every `LocalizedText` field in the config

Example — adding German:

```typescript
type Locale = "en" | "hr" | "de";

locales: [
  { code: "en" as Locale, label: "English", path: "/en", connector: "in" },
  { code: "hr" as Locale, label: "Hrvatski", path: "/hr", connector: "u" },
  { code: "de" as Locale, label: "Deutsch", path: "/de", connector: "in" }
],

primaryService: { en: "Carpet Cleaning", hr: "Ciscenje tepiha", de: "Teppichreinigung" },
```

All pages, routes, hreflang alternates, sitemaps, and slugs are generated automatically.

---

## SEO, AEO, and GEO Features

### On-Page SEO

- Self-referencing `<link rel="canonical">` on every page
- Unique `<title>` and `<meta name="description">` per page type
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`)
- Twitter Card `summary_large_image`
- `<link rel="alternate" hreflang="{lang}">` for every locale + `x-default`
- Conditional `noindex` on thank-you and 404 pages

### Structured Data (JSON-LD)

| Schema Type | Pages |
|---|---|
| `LocalBusiness` | Homepage, about, contact, service area hubs, service pages, location pages |
| `WebSite` | Homepage |
| `Service` | Service pages, location pages, subservice pages |
| `BreadcrumbList` | About, service pages, location pages, subservice pages, blog posts |
| `FAQPage` | Service pages, location pages, subservice pages, FAQ page |
| `HowTo` | Process section on homepage and service pages |
| `ContactPage` | Contact page |
| `Article` | Blog posts |

### AEO (Answer Engine Optimization)

- FAQ sections with `<details>/<summary>` semantic HTML
- `FAQPage` JSON-LD schema for Google rich results and AI answer engines
- Question-and-answer format targeting long-tail conversational queries
- `llms.txt` and `llms-full.txt` files for LLM crawlers

### GEO (Generative Engine Optimization)

- Location-specific H1 headings with city + service
- City names in meta descriptions, intro paragraphs, H2s, and CTAs
- `areaServed` in LocalBusiness and Service schemas
- Internal link network connecting services, locations, and blog

### Technical SEO

- Dynamic `/sitemap.xml` listing all routes across all locales
- `/sitemap-index.xml` pointing to the sitemap
- `/robots.txt` with sitemap reference
- Post-build sitemap generator (`scripts/generate-sitemap.mjs`) as a fallback

---

## Analytics and Tracking

### Supported Platforms

| Platform | Config Field | What It Does |
|---|---|---|
| Google Tag Manager | `integrations.gtmId` | Container that manages all other tags |
| Google Analytics 4 | `integrations.ga4MeasurementId` | Direct GA4 pageview and event tracking |
| Microsoft Clarity | `integrations.clarityProjectId` | Session recordings and heatmaps |
| Google Ads | `integrations.googleAdsConversionId` | Conversion tracking on form submission |
| Meta Pixel | `integrations.metaPixelId` | Facebook/Instagram conversion tracking |

### Cookie Consent

Set `integrations.requireCookieConsent` to `true` to show a cookie consent banner before loading any analytics scripts. When enabled:

- GA4, Clarity, and GTM scripts are blocked until the user consents
- Users can customize which categories to accept (analytics, marketing)
- Consent state is persisted in localStorage
- The banner is accessible with `aria-live` and `aria-expanded` attributes

### Event Tracking

The estimate form fires these events on submission:
- `window.dataLayer.push({ event: "lead_form_submit" })` — Google Tag Manager
- `window.fbq("track", "Lead")` — Meta Pixel
- `window.gtag("event", "conversion", ...)` — Google Ads

---

## Multi-Language Setup

The i18n system is **route-based**: all pages live under `src/pages/[lang]/`.

### How It Works

1. **Locale config** in `site.config.ts` defines available languages
2. **`LocalizedText`** (`Record<Locale, string>`) is used for all translatable content
3. **`t()` helper** resolves text for the current locale with fallback to `defaultLocale`
4. **`localizedPath()`** builds locale-prefixed URLs: `/{locale}/{path}/`
5. **`locationSlug()`** generates locale-specific location slugs using the localized service name and locale connector word
6. **Hreflang alternates** are auto-generated in `BaseLayout.astro` for every page

### Location Slug Pattern

Location page URLs use the locale's connector word:

| Locale | URL Pattern | Example |
|---|---|---|
| English (`en`, connector: `in`) | `/en/{service}-in-{city}/` | `/en/local-seo-in-austin/` |
| Croatian (`hr`, connector: `u`) | `/hr/{service}-u-{city}/` | `/hr/lokalni-seo-u-austinu/` |

---

## Cloudflare Pages Deployment

### Prerequisites

- A [Cloudflare account](https://dash.cloudflare.com/sign-up) (free tier works)
- A GitHub repository with your site code
- A custom domain (optional — `*.pages.dev` subdomain works for testing)

### Step 1: Create a Cloudflare Pages Project

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Create a Pages project
wrangler pages project create my-site --production-branch main
```

Or create the project via the Cloudflare Dashboard: Workers & Pages > Create application > Pages > Connect to Git.

### Step 2: Configure Custom Domain

1. Go to your Pages project > Custom domains
2. Add your domain (e.g. `dualmark.dev`)
3. Cloudflare will provide DNS instructions:
   - If using Cloudflare DNS: add a CNAME record pointing to your project
   - If using another registrar: update nameservers to Cloudflare's, or add a CNAME

### Step 3: Set GitHub Secrets

In your GitHub repository, go to Settings > Secrets and variables > Actions. Add these **repository secrets**:

| Secret | Description | Example |
|---|---|---|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API token with Pages edit permissions | Create at dash.cloudflare.com/profile/api-tokens |
| `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare account ID | Found in Workers & Pages overview |
| `CLOUDFLARE_PROJECT_NAME` | Your Pages project name | `my-site` |

Optionally, set a **repository variable**:

| Variable | Description | Example |
|---|---|---|
| `SITE_URL` | Production URL for canonical links | `https://dualmark.dev` |

### Step 4: Deploy

Push to `main` to trigger automatic deployment, or use manual dispatch:

1. Go to Actions tab in GitHub
2. Select "Deploy to Cloudflare Pages"
3. Click "Run workflow"
4. Choose the site config to deploy (dualmark or isitagentready)

### Security Headers

The `public/_headers` file configures:

- `X-Frame-Options: DENY` — Prevents clickjacking
- `X-Content-Type-Options: nosniff` — Prevents MIME type sniffing
- `Referrer-Policy: strict-origin-when-cross-origin` — Limits referrer leakage
- `Permissions-Policy` — Disables camera, microphone, geolocation
- Immutable caching for `/_astro/*` assets (1 year)
- Hourly caching for XML and TXT files

---

## GitHub Actions CI/CD

This boilerplate includes a **ready-to-use** deployment workflow at `.github/workflows/deploy.yml`. It is **disabled by default** (push trigger is commented out) so it won't accidentally deploy the template itself.

### Activating for Your Site

1. Set the required GitHub repository secrets (see Cloudflare Pages Deployment above)
2. Edit `.github/workflows/deploy.yml` and uncomment the `push` trigger:

```yaml
on:
  push:
    branches: [main]    # Uncomment this to auto-deploy on push
  workflow_dispatch:     # Always available for manual deploys
```

3. Push to `main` — the workflow will build and deploy automatically

### Triggers

| Event | Behavior |
|---|---|
| Manual dispatch | Choose a site config and deploy on demand |
| Push to `main` | Auto-deploy (enable by uncommenting in the workflow file) |

### How It Works

1. Checks out the code
2. Sets up Node.js 20 with npm cache
3. Runs `npm ci` for clean install
4. Runs `node scripts/switch-config.mjs {site}` to copy the chosen config
5. Runs `npm run build` (which runs `astro check`, `astro build`, and sitemap generation)
6. Deploys the `dist/` folder to Cloudflare Pages using `cloudflare/pages-action`

### Deploying Multiple Sites from One Repo

Duplicate the workflow file for each site and use different secrets:

```yaml
# .github/workflows/deploy-isitagentready.yml
# Change the default in workflow_dispatch.inputs.site to "isitagentready"
# Use different secrets: CLOUDFLARE_PROJECT_NAME_IAR, SITE_URL_IAR, etc.
```

---

## Forms and CRM Integration

### Estimate Form (`EstimateForm.astro`)

Fields:
- First name, last name (required)
- Phone with validation pattern (required)
- Email (required)
- Service address / zip code (required)
- Service needed dropdown (populated from config, required)
- Project details (optional textarea)
- Honeypot field for spam filtering (hidden, rejects if filled)

### Submission Flow

1. Form validates all required fields client-side
2. If `crmWebhookUrl` is set in config, submits via `fetch POST` with JSON body
3. If no webhook URL, falls back to standard form submission
4. Redirects to `/{lang}/thank-you/` on success
5. Fires tracking events (GTM, Meta, Google Ads) on successful submission

### Webhook Payload

```json
{
  "firstName": "...",
  "lastName": "...",
  "phone": "...",
  "email": "...",
  "address": "...",
  "service": "...",
  "details": "...",
  "source": "estimate-form",
  "page": "/en/contact/"
}
```

### Connecting a CRM

Set `integrations.crmWebhookUrl` to your webhook endpoint:

| CRM | How to Get Webhook URL |
|---|---|
| Zapier | Create a "Webhooks by Zapier" trigger |
| Make (Integromat) | Create a Custom Webhook module |
| GoHighLevel | Settings > Integrations > Webhooks |
| HubSpot | Workflows > Create webhook action |
| Pipedrive | Settings > Integrations > API > Webhooks |

---

## Image Optimization

### Current Setup

All images use `<img>` tags with:
- Explicit `width` and `height` to prevent Cumulative Layout Shift (CLS)
- `loading="lazy"` and `decoding="async"` on below-fold images
- `fetchpriority="high"` on hero images (above the fold)
- Proper `alt` text for accessibility and image SEO

### Switching to Local Images (Recommended for Production)

1. Place images in `src/assets/` (e.g., `src/assets/hero.webp`)
2. Import them in `site.config.ts`:
   ```typescript
   import heroImage from "@/assets/hero.webp";
   ```
3. In components, switch from `<img>` to Astro's `<Image />`:
   ```astro
   ---
   import { Image } from "astro:assets";
   ---
   <Image src={heroImage} alt="..." />
   ```
4. Astro automatically generates WebP/AVIF at multiple responsive sizes

The `image.remotePatterns` in `astro.config.mjs` is already configured for `images.unsplash.com`. Add your own image CDN domains there if needed.

---

## Launch Checklist

- [ ] Replace all placeholder business data with real verified information
- [ ] Replace placeholder service names with niche-specific services
- [ ] Add unique copy to all subservice and location pages
- [ ] Replace placeholder images with real optimized WebP images
- [ ] Add unique FAQs to every subservice (`children[].faq` in config)
- [ ] Add a real review widget or verify the trust block is acceptable
- [ ] Add legal-approved privacy policy and terms text
- [ ] Update `siteConfig.siteUrl` to the production domain
- [ ] Update `legalLastUpdated` to the current date
- [ ] Add GTM, GA4, and Clarity IDs in `integrations`
- [ ] Set `requireCookieConsent` if analytics require consent (GDPR/ePrivacy)
- [ ] Connect the estimate form to a CRM webhook
- [ ] Add a real Google Maps embed URL
- [ ] Run `npm run build` and verify no errors
- [ ] Set up Cloudflare Pages project and configure DNS
- [ ] Set GitHub repository secrets for CI/CD
- [ ] Deploy to production
- [ ] Submit sitemap to Google Search Console
- [ ] Request indexing for key pages

---

## Troubleshooting

### Build Errors

| Error | Fix |
|---|---|
| `Type 'string' is not assignable to type 'Locale'` | Add `as Locale` after string literals in config |
| `satisfies ServiceItem[]` type error | Check that every `LocalizedText` field has all locale keys |
| Missing locale in `LocalizedText` | Every `Record<Locale, string>` must include all locales defined in the union type |

### Config Switch Issues

| Problem | Fix |
|---|---|
| `Config not found: dualmark` | Ensure `configs/dualmark.config.ts` exists |
| `Missing required export "siteConfig"` | Config files must export `siteConfig` and `allServices` |
| Build uses wrong config | `switch-config.mjs` overwrites `src/site.config.ts` — check the file header comment |

### Cloudflare Deployment

| Problem | Fix |
|---|---|
| 404 on all pages | Ensure build command is `npm run build` and publish directory is `dist` |
| Headers not applied | Verify `public/_headers` is in the repo — CF Pages reads it from the build output |
| Domain not resolving | Check DNS settings: CNAME to your Pages project or update nameservers |

---

## Agent Instructions

This section is intended for AI coding agents working with this boilerplate.

### Architecture Summary

- **Astro 4 static site** with route-based i18n under `src/pages/[lang]/`
- **Single config file** at `src/site.config.ts` drives all content
- **Multi-config system** via `scripts/switch-config.mjs` copies from `configs/` to `src/site.config.ts`
- **20 Astro components** in `src/components/` — all props-based, no client-side state
- **2 dynamic route files** handle all service, location, and subservice pages:
  - `[slug].astro` resolves to either a service page or a location page based on slug pattern
  - `[parent]/[child].astro` resolves to subservice pages
- **SEO helpers** in `src/lib/seo.ts` build meta tags, canonical URLs, hreflang alternates, and JSON-LD schemas
- **Route helpers** in `src/lib/routes.ts` build localized paths and resolve service/location slugs
- **No runtime JavaScript framework** — all pages are pre-rendered HTML

### Key Conventions

- All translatable text uses `LocalizedText` (`Record<Locale, string>`)
- Use the `t()` helper from `src/lib/routes.ts` to resolve localized text
- Use `localizedPath()` for building internal links
- Use `locationSlug()` for locale-aware location page slugs (not hardcoded `.en`)
- Images in config are URL strings (remote). For local images, import from `src/assets/` and use `<Image />` from `astro:assets`
- The `allServices` export combines `mainServices` and `secondaryCategories` for iteration
- Page templates receive an `seo` prop via `BaseLayout` — construct it using the `seo()` helper from `src/lib/seo.ts`
- CSS uses custom properties in `global.css` — no CSS modules, no framework
- Config files must export `siteConfig`, `allServices`, and all type exports (`Locale`, `ServiceItem`, `HeroSlide`, `BlogCategory`)

### Common Tasks

**Adding a new page type:**
1. Create `src/pages/[lang]/your-page.astro`
2. Add `getStaticPaths()` returning entries for each locale
3. Build the `seo` object using `seo()` from `src/lib/seo.ts`
4. Wrap content in `<BaseLayout seo={pageSeo}>...</BaseLayout>`
5. Compose sections from existing components

**Adding a new component:**
1. Create `src/components/YourComponent.astro`
2. Define props via `Astro.props` with TypeScript
3. Use CSS classes from `global.css` or add new ones

**Adding a new locale:**
1. Add the code to the `Locale` union type in `site.config.ts`
2. Add a `LocaleConfig` entry to the `locales` array
3. Add translations to every `LocalizedText` field
4. The build automatically generates pages for the new locale

**Modifying SEO output:**
- Meta tags: edit `BaseLayout.astro` `<head>` section
- JSON-LD schemas: edit `src/lib/seo.ts` schema builder functions
- Sitemap entries: edit `src/pages/sitemap.xml.ts`

### Build Verification

Always run `npm run build` after changes. This runs:
1. `astro check` — TypeScript and Astro type checking
2. `astro build` — Static site generation
3. `node scripts/generate-sitemap.mjs` — Post-build sitemap

The build must complete with 0 errors before changes are considered valid.
