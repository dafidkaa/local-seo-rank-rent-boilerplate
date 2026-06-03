# Local SEO Rank-and-Rent Boilerplate

A production-ready Astro boilerplate for building multi-language local service websites optimized for SEO, AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization). Designed for Rank-and-Rent workflows: clone, configure one file, build, deploy.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Configuration Reference](#configuration-reference)
- [Page System](#page-system)
- [Reusable Components](#reusable-components)
- [SEO, AEO, and GEO Features](#seo-aeo-and-geo-features)
- [Multi-Language Setup](#multi-language-setup)
- [Image Optimization](#image-optimization)
- [Forms and Conversion Tracking](#forms-and-conversion-tracking)
- [Trust and Reviews](#trust-and-reviews)
- [Scripts](#scripts)
- [Workflow: Creating a New Site](#workflow-creating-a-new-site)
- [Deployment](#deployment)
- [Launch Checklist](#launch-checklist)
- [Agent Instructions](#agent-instructions)

---

## Overview

This boilerplate generates a **static multi-page website** from a single configuration file (`src/site.config.ts`). It produces **100+ pages per locale** with:

- Service pages with subservice children
- Location landing pages with city-specific slugs
- Blog posts
- Service area hubs
- Contact, about, legal, and thank-you pages
- Full JSON-LD structured data on every page
- Sitemap, robots.txt, hreflang alternates, and canonical URLs

The build output is plain HTML — no JavaScript framework runtime shipped to the browser.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **Astro 4** | Static site generator (SSG) |
| **TypeScript** | Type-safe configuration and helpers |
| **Vanilla CSS** | Styling via CSS custom properties, no framework |
| **Node.js** | Build tooling and setup wizard |

No React, Vue, Tailwind, or other runtime dependencies. The site ships zero client-side JavaScript beyond a tiny mobile menu toggle and optional conversion tracking scripts.

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

Alternatively, skip the wizard and edit `src/site.config.ts` directly.

---

## Project Structure

```
├── astro.config.mjs          # Astro config: site URL, image patterns, output mode
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript config with path aliases
├── src/
│   ├── site.config.ts         # THE configuration file — all business data lives here
│   ├── env.d.ts               # TypeScript environment declarations
│   ├── styles/
│   │   └── global.css         # All styles: custom properties, layout, components
│   ├── lib/
│   │   ├── routes.ts          # Route helpers: localizedPath, locationSlug, servicePath, etc.
│   │   └── seo.ts             # SEO helpers: meta, canonical, hreflang, JSON-LD schemas
│   ├── components/
│   │   ├── Header.astro       # Sticky header with nav, dropdowns, language switcher
│   │   ├── Footer.astro       # 4-column footer with links and hours
│   │   ├── Hero.astro         # Full-viewport hero with image, overlay, CTAs, badges
│   │   ├── EstimateForm.astro # Lead capture form with honeypot and tracking
│   │   ├── ServiceCard.astro  # Service link card with image
│   │   ├── LocationCard.astro # Location link card with image overlay
│   │   ├── ProcessSection.astro # Numbered process steps grid
│   │   ├── ReviewsSection.astro # Review widget or trust block fallback
│   │   ├── FaqSection.astro   # FAQ accordion with details/summary
│   │   ├── FinalCta.astro     # CTA section with form split layout
│   │   ├── MobileCta.astro    # Sticky bottom CTA bar on mobile
│   │   ├── MapSection.astro   # Google Maps embed or placeholder
│   │   └── ScheduleWidget.astro # Calendly/booking iframe or placeholder
│   ├── layouts/
│   │   └── BaseLayout.astro   # HTML shell: head with SEO meta, header, footer, mobile CTA
│   └── pages/
│       ├── index.astro        # Root redirect to default locale
│       ├── robots.txt.ts      # Dynamic robots.txt
│       ├── sitemap.xml.ts     # Dynamic sitemap with all routes
│       ├── sitemap-index.xml.ts # Sitemap index
│       └── [lang]/            # All per-locale pages
│           ├── index.astro              # Homepage
│           ├── home-page-2.astro        # Alternate homepage for A/B testing
│           ├── about.astro              # About page
│           ├── contact.astro            # Contact page with form and map
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
├── scripts/
│   ├── setup.mjs              # Interactive CLI wizard for new sites
│   └── generate-sitemap.mjs   # Post-build sitemap generator
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
  connector: string; // Word used in location slugs: "in", "u", "en", "à"
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

| Section | What It Controls |
|---|---|
| `siteUrl` | Production domain for canonical URLs, sitemap, robots.txt |
| `defaultLocale` | Fallback locale, root redirect target |
| `locales[]` | Available languages, their URL paths and slug connectors |
| `business` | Name, phone, email, address, hours, description, CTA text |
| `brand` | Primary/secondary colors, images, logo text |
| `integrations` | GTM, Google Ads, Meta Pixel, Calendly, CRM webhook, map, reviews |
| `locations[]` | Cities served — each generates a full location landing page |
| `mainServices[]` | Core service pages with subservice children |
| `secondaryCategories[]` | Supporting service categories (auto-generates 6 subservices each) |
| `blogPosts[]` | Blog post entries with title, excerpt, date, image |

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

primaryService: { en: "Carpet Cleaning", hr: "Čišćenje tepiha", de: "Teppichreinigung" },
```

All pages, routes, hreflang alternates, sitemaps, and slugs are generated automatically.

---

## Page System

The boilerplate generates these route families **per locale**:

| Route | Template | Description |
|---|---|---|
| `/{lang}/` | `index.astro` | Homepage with hero, services grid, process, reviews, CTA |
| `/{lang}/home-page-2/` | `home-page-2.astro` | Alternate homepage for A/B testing |
| `/{lang}/about/` | `about.astro` | About page with company story |
| `/{lang}/contact/` | `contact.astro` | Contact page with form, details, map |
| `/{lang}/service-area/` | `service-area.astro` | Service area hub with all location cards |
| `/{lang}/service-area-hub-2/` | `service-area-hub-2.astro` | Alternate hub for second region or testing |
| `/{lang}/{service-slug}/` | `[slug].astro` | Service page with intent grid, team, subservices, FAQ |
| `/{lang}/{service-slug}/{subservice-slug}/` | `[parent]/[child].astro` | Subservice page with detailed copy, related services, FAQ |
| `/{lang}/{service-name}-{connector}-{city}/` | `[slug].astro` | Location landing page with services, map, nearby areas |
| `/{lang}/blog/` | `blog/index.astro` | Blog hub listing all posts |
| `/{lang}/blog/{post-slug}/` | `blog/[post].astro` | Blog post with Article schema |
| `/{lang}/privacy-policy/` | `privacy-policy.astro` | Privacy policy |
| `/{lang}/terms-and-conditions/` | `terms-and-conditions.astro` | Terms and conditions |
| `/{lang}/thank-you/` | `thank-you.astro` | Form submission confirmation (noindex) |

**Total pages**: Fixed pages (11) + services (8) + subservices (39) + locations (9) + blog posts (2) = **69 pages per locale**. With 2 locales: **137+ pages**.

---

## Reusable Components

| Component | Props | Used On |
|---|---|---|
| `Header.astro` | `locale`, `currentPath` | All pages (via BaseLayout) |
| `Footer.astro` | `locale` | All pages (via BaseLayout) |
| `Hero.astro` | `eyebrow`, `title`, `text`, `image`, `primaryHref`, `primaryText`, `secondaryHref`, `secondaryText`, `badges` | All page types |
| `EstimateForm.astro` | `locale`, `service` | Contact, homepage, service pages, CTA sections |
| `ServiceCard.astro` | `title`, `description`, `image`, `href`, `alt` | Homepage, service pages, blog hub |
| `LocationCard.astro` | `title`, `href`, `image` | Service area hubs, location pages, subservice pages |
| `ProcessSection.astro` | `title`, `subtitle`, `steps[]` | Homepage, service pages, contact |
| `ReviewsSection.astro` | `title` | Homepage, service pages |
| `FaqSection.astro` | `faqs[]` | Service pages, location pages, subservice pages |
| `FinalCta.astro` | `locale`, `title`, `text`, `service` | Most page types |
| `MobileCta.astro` | `locale` | All pages (via BaseLayout) |
| `MapSection.astro` | `title`, `text` | Contact page, location pages |
| `ScheduleWidget.astro` | `title`, `text` | Secondary service category pages |

---

## SEO, AEO, and GEO Features

### On-Page SEO

- Self-referencing `<link rel="canonical">` on every page
- Unique `<title>` and `<meta name="description">` per page type
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`)
- Twitter Card `summary_large_image`
- `<link rel="alternate" hreflang="{lang}">` for every locale + `x-default`
- Conditional `noindex` on thank-you page

### Structured Data (JSON-LD)

| Schema Type | Pages |
|---|---|
| `LocalBusiness` | Homepage, about, contact, service area hubs, service pages, location pages |
| `WebSite` | Homepage |
| `Service` | Service pages, location pages, subservice pages |
| `BreadcrumbList` | About, service pages, location pages, subservice pages, blog posts |
| `FAQPage` | Service pages, location pages, subservice pages |
| `ContactPage` | Contact page |
| `Article` | Blog posts |

### AEO (Answer Engine Optimization)

- FAQ sections with `<details>/<summary>` semantic HTML
- `FAQPage` JSON-LD schema for Google rich results and AI answer engines
- Question-and-answer format targeting long-tail conversational queries

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
| English (`en`, connector: `in`) | `/en/{service}-in-{city}/` | `/en/carpet-cleaning-in-austin/` |
| Croatian (`hr`, connector: `u`) | `/hr/{service}-u-{city}/` | `/hr/ciscenje-tepiha-u-austinu/` |
| German (`de`, connector: `in`) | `/de/{service}-in-{city}/` | `/de/teppichreinigung-in-berlin/` |

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

## Forms and Conversion Tracking

### Estimate Form (`EstimateForm.astro`)

Fields:
- First name, last name (required)
- Phone with validation pattern (required)
- Email (required)
- Service address / zip code (required)
- Service needed dropdown (populated from config, required)
- Project details (optional textarea)
- Honeypot field for spam filtering

The form submits via GET to `/{lang}/thank-you/` by default. For production, change the `action` attribute and method to POST, and connect to your CRM or server endpoint.

### Conversion Tracking

The form fires these events on submission:
- `window.dataLayer.push({ event: "lead_form_submit" })` — Google Tag Manager
- `window.fbq("track", "Lead")` — Meta Pixel
- `window.gtag("event", "conversion", ...)` — Google Ads

Update the Google Ads conversion ID in `EstimateForm.astro` line 35.

---

## Trust and Reviews

The boilerplate **does not generate fake reviews, ratings, or testimonials**.

When `siteConfig.integrations.reviewWidgetEmbedHtml` is empty, the `ReviewsSection` component renders a trust block with generic trust signals (clear scheduling, respectful communication, professional follow-through).

To add real reviews, set `reviewWidgetEmbedHtml` to the embed code from:
- Google Business Profile (via widget tools)
- Trustindex
- EmbedSocial
- Trustmary
- Elfsight
- Any CRM-native review widget

---

## Scripts

| Command | What It Does |
|---|---|
| `npm run dev` | Start Astro dev server on `localhost:4321` |
| `npm run build` | Run `astro check` + `astro build` + sitemap generator |
| `npm run preview` | Preview the built site locally |
| `npm run check` | TypeScript and Astro type checking only |
| `npm run setup` | Interactive CLI wizard to configure a new niche |

---

## Workflow: Creating a New Site

### Step 1 — Clone and Install

```bash
cp -r /path/to/local-seo-rank-rent-boilerplate /path/to/new-site-name
cd /path/to/new-site-name
rm -rf node_modules dist .astro
npm install
```

### Step 2 — Configure

```bash
npm run setup
```

The wizard collects: business info, locales, locations, services, brand settings, integrations. It writes `src/site.config.ts` and updates `astro.config.mjs`.

Or edit `src/site.config.ts` directly.

### Step 3 — Replace Images

Replace Unsplash placeholder URLs in `site.config.ts` with real images. For best results, use local WebP images in `src/assets/`.

### Step 4 — Write Content

Content that needs real copy (search for `Replace` or `placeholder` in page templates):

| Priority | What | Where |
|---|---|---|
| High | Subservice descriptions | `site.config.ts` → `children[].short` |
| High | Subservice FAQs | `site.config.ts` → `children[].faq` |
| High | Location details | `site.config.ts` → `locations[].detail` |
| Medium | Homepage welcome section | `[lang]/index.astro` |
| Medium | About page story | `[lang]/about.astro` |
| Medium | Blog post bodies | `[lang]/blog/[post].astro` |
| Medium | Customer intent blocks | `[lang]/[slug].astro` service template |
| Required | Privacy policy text | `[lang]/privacy-policy.astro` |
| Required | Terms and conditions text | `[lang]/terms-and-conditions.astro` |

### Step 5 — Design Polish

Edit `src/styles/global.css` CSS custom properties for visual changes:

```css
:root {
  --color-primary: #your-brand-color;
  --color-secondary: #your-accent-color;
  --font-body: "Your Font", sans-serif;
  --radius: 12px;
}
```

### Step 6 — Build and Deploy

```bash
npm run build
```

Deploy the `dist/` folder to Netlify, Vercel, Cloudflare Pages, or any static host.

---

## Deployment

### Netlify / Vercel / Cloudflare Pages

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Publish directory | `dist` |
| Node version | 18+ |

### Manual / Any Static Host

Upload the contents of `dist/` to your web server or CDN.

### Post-Launch

1. Submit `https://yourdomain.com/sitemap-index.xml` to Google Search Console
2. Set up or claim the Google Business Profile
3. Request indexing for priority pages
4. Add real reviews via the review widget integration
5. Start publishing blog posts

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
- [ ] Add GTM, Google Ads, and Meta Pixel IDs in `integrations`
- [ ] Connect the estimate form to a CRM or server endpoint
- [ ] Add a real Google Maps embed URL
- [ ] Run `npm run build` and verify no errors
- [ ] Deploy to production hosting
- [ ] Submit sitemap to Google Search Console
- [ ] Request indexing for key pages

---

## Agent Instructions

This section is intended for AI coding agents working with this boilerplate.

### Architecture Summary

- **Astro 4 static site** with route-based i18n under `src/pages/[lang]/`
- **Single config file** at `src/site.config.ts` drives all content
- **13 Astro components** in `src/components/` — all props-based, no client-side state
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
