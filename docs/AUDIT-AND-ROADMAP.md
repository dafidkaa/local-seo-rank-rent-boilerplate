# Boilerplate Audit & Improvement Roadmap

Audited 2026-06-11 against the master prompt ("Premium SEO / AEO / GEO Local Lead Generation Website Builder"). Goal: sites built from this boilerplate must rank (1,000–1,500 words of unique structured content per important page), look premium/modern, be image-rich and interactive, and convert.

**Verdict:** Strong technical skeleton (static Astro, schema library, hreflang, llms.txt, AI-crawler-friendly robots.txt, solid forms with analytics events). But three things hold back results:

1. **Content engine** — almost all body copy is hardcoded in `.astro` templates, not config/content. Every site says the same things. Config only carries ~20 words per service and ~50 per location. You cannot hit 1,000–1,500 *unique* words per page from config today, and identical template copy across a rank-and-rent portfolio is a fingerprintable footprint.
2. **Design homogeneity** — one variant per component, no scroll animations, no galleries/before-after/tabs/count-ups, fonts effectively hardcoded, 2–4 images per page vs the 6–10 target. Every generated site looks like the same template.
3. **Broken/stale plumbing** — setup wizard generates an outdated config shape, example configs don't match the current types, hreflang URLs are wrong for translated slugs, the language switcher loses page context, FAQ/Process sections emit no schema.

---

## A. Verified bugs (fix first — these are correctness issues)

| # | Bug | Where | Detail |
|---|-----|-------|--------|
| A1 | **hreflang alternates point to non-existent URLs** | `src/lib/seo.ts:16-21` (`buildAlternates`) | It maps the *same* path across locales. Location slugs are translated per locale (`plumbing-in-austin` vs `vodoinstalacija-u-austin` via `src/lib/routes.ts:26-28`), so `/hr/plumbing-in-austin/` is declared as an alternate but 404s. Fix: accept a per-locale path map, not a single path. |
| A2 | **Language switcher drops page context** | `src/components/Header.astro:109-116` | `href={otherLocale.path + "/"}` always sends users to the other locale's homepage. Master prompt §5 explicitly requires keeping the same page/topic. Fix together with A1 — both need a "translated URL for this page" helper. |
| A3 | **Configured fonts are never loaded** | `src/site.config.ts:167-168` vs `src/layouts/BaseLayout.astro:24` | Config sets `fontDisplay: "Poppins"`, `fontBody: "Inter"` and BaseLayout writes them into CSS vars, but the Google Fonts `<link>` hardcodes Plus Jakarta Sans + DM Sans. Fix: build the fonts URL from config (and document which font pairs are supported per niche). |
| A4 | **FAQPage schema never emitted by FaqSection; homepage has visible FAQs but no FAQ schema** | `src/components/FaqSection.astro`, `src/pages/[lang]/index.astro:53` | Service/sub-service pages add `faqSchema()` manually; homepage and any page relying on the component alone get nothing. Fix: emit JSON-LD inside `FaqSection.astro` from its `items` prop so it can never drift from visible content. |
| A5 | **ProcessSection has no HowTo schema; the manual HowTo is identical for all services** | `src/components/ProcessSection.astro`, `src/pages/[lang]/[slug].astro:88-94` | Same 5 generic steps everywhere. Emit HowTo from the component's actual steps; make steps configurable per service. |
| A6 | **Blog "pagination" is client-side Load More** | `src/pages/[lang]/blog/index.astro` | Posts beyond the first 9 are invisible to crawlers without JS heuristics. Fix: Astro `paginate()` → static `/blog/`, `/blog/2/`… with rel prev/next links; keep client-side search/filter on top. |
| A7 | **Setup wizard generates a stale config shape** | `scripts/setup.mjs` (acknowledged in `IMPROVEMENTS.md:18-25`) | Missing `fontDisplay/fontBody`, `LocationItem.knowledge/attractions/mapEmbedQuery`; emits placeholder secondary services. Output doesn't build cleanly. |
| A8 | **Example configs don't match current types** | `configs/dualmark.config.ts`, `configs/isitagentready.config.ts` | Missing newer `LocationItem` fields; thin placeholder copy. They're the de-facto reference for AI agents — they teach the wrong shape and the wrong content depth. |
| A9 | **Dead/duplicate sitemap path** | `scripts/generate-sitemap.mjs` vs `src/pages/sitemap.xml.ts` | The build script's output is superseded by the route. Delete the script (and the `package.json` build step) or consolidate. Also: sitemap has no `lastmod` and no `xhtml:link` hreflang alternates (sitemaps *do* support hreflang via the xhtml namespace — use it, it's the most reliable hreflang signal for large multilingual sites). |
| A10 | **Hardcoded Google Ads placeholder fires fake conversions** | form scripts (`EstimateForm.astro`, `FormPopup.astro`) | `"AW-CONVERSION_ID/LABEL"` literal. Read from `siteConfig.integrations.googleAdsConversion` and skip when unset. |
| A11 | **Breadcrumbs.astro is orphaned / blog breadcrumbs lack BreadcrumbList schema** | `src/components/Breadcrumbs.astro`, `src/pages/[lang]/blog/[post].astro:143-157` | Hero.astro does breadcrumbs+schema correctly; unify on one component used everywhere. |
| A12 | **og:type always "website"** | `src/layouts/BaseLayout.astro:37` | Blog posts should be `article` (+ `article:published_time`, `article:modified_time`, `article:author`). |
| A13 | **Analytics scripts are render-blocking** | `src/layouts/BaseLayout.astro:41-77` | Load GA4/Clarity async/deferred (or after first interaction). Clarity should also respect consent before loading, not just after. |

---

## B. Content engine — the biggest ranking lever

The master prompt demands 1,000–1,500 words of **unique, structured, conversion-focused** content per important page. Today:

- Service/location pages *render* 2,000–3,000 words, but ~80% is hardcoded template copy ("Licensed, Bonded & Insured", the same 6 warning signs, the same 4 process steps, the same FAQ patterns). Across a portfolio of rank-and-rent sites this is duplicate boilerplate Google can fingerprint — the opposite of "not a thin doorway page".
- Config-driven content is ~400–500 words/page max. `location.knowledge` is 1–2 sentences; service `short` is ~20 words.

### B1. Move page content into per-site data, structured by section

Two-layer model:

1. **Structure stays in templates** (section order, layout, schema).
2. **Copy moves to content collections** — one markdown/JSON entry per service, sub-service, and location, with frontmatter fields matching the master prompt's section list:

```
src/content/services/drain-cleaning.en.md
src/content/locations/round-rock.en.md
```

Frontmatter schema per service/location entry (mirrors master prompt §12/§13):

- `shortAnswer` (2–4 paragraph quick-summary block — AEO/featured snippet target)
- `problemIntro`, `serviceOverview`, `included[]`, `whoItsFor[]`
- `commonProblems[]` (heading + body each)
- `costOfInaction` ("what happens if you wait"), `benefitsOfActingEarly[]`
- `prosCons` (two lists), `comparison` (table: columns + rows)
- `diyVsPro`, `processSteps[]` (per-service, feeds HowTo schema)
- `pricingFactors[]`, `preparationChecklist[]`
- `whyChooseUs[]`, `faq[]` (8–10 unique Q&As)
- `gallery[]` (6–10 images with alt text), `relatedServices[]`, `relatedLocations[]`
- For locations additionally: `neighborhoods[]`, `propertyTypes[]`, `localChallenges[]`, `seasonalFactors`, `nearbyAreas[]`

The AI agent's job per site becomes "fill these fields with unique copy" — a concrete, checkable contract instead of an aspirational word count. Add a build-time check that warns when an important page's combined fields fall under ~900 words.

### B2. New AEO section components (reused by all page types)

- `ShortAnswer.astro` — styled summary card right under the hero
- `ProsCons.astro` — two-column balanced layout
- `ComparisonTable.astro` — proper `<table>`, mobile-scrollable
- `CostOfInaction.astro` — "now vs later" dark-overlay or warning-callout layout
- `PricingFactors.astro` — cards/FAQ-style, captures cost intent without fake prices
- `Checklist.astro` — "what to prepare before contacting"
- `StatsBar.astro` — count-up stats (see design section)

These directly implement master prompt §11A/§12 sections that currently have no home.

### B3. Missing page types

- **Sub-service × location** route (`/[lang]/[location]/[subservice]/`) — the highest-value programmatic combination ("Kitchen Drain Cleaning in Round Rock"). Gate generation on having unique content for the combo (only build when a content entry exists) to avoid thin-page explosions.
- **Comparison / pricing-guide / problem pages** as a generic "landing page" collection (master prompt §33).
- **FAQ hub** page exists; service-area hub pages need real content (currently ~200 words).

### B4. Blog

- 4 sample posts at 300–400 words is far below the bar; ship 8–12 exemplar posts at 1,200+ words with TOC-worthy structure, comparison tables, FAQ blocks, internal links — these teach the AI agent the standard.
- Body content is English-only while frontmatter is localized — adopt `slug.en.md` / `slug.hr.md` pairs.
- Tags are in the schema but unused in UI; either wire tag filtering or drop them.
- Static pagination (A6).

### B5. i18n completeness

- Service slugs aren't translated (`/hr/drain-cleaning/`). Add per-locale slugs in config (`slug: { en: "drain-cleaning", hr: "ciscenje-odvoda" }`) — fixes A1/A2 properly at the same time.
- Cookie-consent copy is hardcoded English — move to i18n files.

---

## C. Design system — "premium, modern, image-rich, interactive"

Current state: clean 2021-era agency template. One hero, one card style, one section rhythm, fade-up only. Every generated site is visually identical except colors/photos. The master prompt demands custom-agency feel; the design docs (DESIGN-*.md) prescribe niche palettes/fonts/layouts that the code can't actually express.

### C1. Motion & interactivity layer (highest visual ROI, ~zero JS cost)

- **Scroll-reveal system**: small IntersectionObserver utility + `data-reveal` attributes; staggered entrance for card grids; respects `prefers-reduced-motion`.
- **Count-up stats** on scroll (years, jobs, cities, rating) — `StatsBar.astro`.
- **Before/After slider** (`BeforeAfter.astro`) — pure CSS/minimal JS drag handle; killer component for home services, cleaning, detailing, landscaping niches.
- **Gallery + lightbox** (`Gallery.astro`) — masonry or uniform grid, native `<dialog>` lightbox, feeds the 6–10 images/page requirement.
- **Tabs** (`Tabs.astro`) — residential/commercial, FAQ groups, service options.
- **Testimonial carousel** with swipe support (and add swipe to HeroSlider).
- **Marquee/trust-logo strip** for credibility bars.
- Micro-interactions: animated underline on links, button hover lift+glow, card tilt-on-hover variant.

### C2. Component variants (kill the homogeneity)

- `ServiceCard`: `featured` (2× with badge), `compact` (icon-left list), `horizontal`.
- `LocationCard`: `compact` text variant for long city lists; featured variant.
- `BlogCard`: featured (large) + list variants; blog hub should lead with a featured layout.
- `Hero`: add **split hero** (text left / form or image collage right — the master prompt's "hero with embedded form" mode), **video hero**, and gradient-overlay options. Hero choice should be a config switch per master prompt §7 logic (slider for premium niches, static+form for standard niches).
- Section backgrounds: alternate white / tinted / dark-overlay-image rhythm controlled per section, so pages don't read as uniform white.

### C3. Theming that actually works per niche

- Build the Google Fonts URL from `brand.fontDisplay/fontBody` (bug A3) and document 5–6 vetted font pairs.
- Ship the DESIGN-*.md palettes as **named theme presets** in code (`themes/home-services.ts`, `themes/medical.ts`, …): colors, font pair, hero style, section rhythm, radius/shadow personality (e.g. legal = sharp corners + serif display; beauty = soft radii + airy spacing). `siteConfig.brand.theme = "medical"` should get you 80% of the niche look before any overrides.
- Add a gradient + glassmorphism utility set (accent gradients for CTA sections, frosted trust badges) and tinted/colored shadows for the premium feel.
- Normalize the DESIGN-*.md files: same structure and depth for every niche (some are 350 words, one is 7,400). Each should specify: palette tokens, font pair, hero type, section order, image direction (subjects + aspect ratios), form strategy (popup vs embedded per master prompt §8), and 3–5 niche-specific section ideas.

### C4. Images

- Adopt `astro:assets` `<Image>`/`<Picture>` for responsive srcset + AVIF/WebP, with remote Unsplash patterns allowed (already configured in `astro.config.mjs`) — or at minimum add srcset manually.
- Define an **image budget per page type** in PROMPT.md (hero + 1 per major section + gallery 4–6 = 6–10) and add config slots for them (`service.gallery[]`, `location.gallery[]`).
- Blur-up/skeleton placeholder treatment for lazy images.
- Document an image sourcing workflow per niche (search queries per section already hinted in DESIGN docs — make them real config defaults).

### C5. Conversion components

- **formsubmit.co integration** as the zero-backend default (master prompt §9 requires it): `formIntegration: { type: "formsubmit", email } | { type: "webhook", url }`. Keep webhook as the upgrade path.
- Form variants by niche: "Request a Free Quote" vs "Book Appointment" vs "Schedule a Consultation" — labels, fields, and CTA copy from config.
- Pre-select the service in popup forms from the page context (`data-service` on the trigger).
- Optional fields per master prompt: preferred date, property type, urgency, photo upload (formsubmit supports attachments).
- Exit-intent / timed popup variant (off by default, config-gated).
- Multi-step form variant for higher-intent niches (step 1: service+zip → step 2: contact) — proven lift for lead-gen.

---

## D. Workflow & docs (what the AI agent reads)

1. **Rewrite PROMPT.md around the content contract** (B1): per page type, list the exact frontmatter fields to fill, with one fully-worked example (a real 1,400-word service entry, a real 1,200-word location entry). Today the prompt says "1,500 words" but the agent has nowhere to put them — so it writes 500. Show, don't tell.
2. **Update AGENTS.md**: document `[location].astro`, full `LocationItem` fields, content collections, theme presets; resolve the "boilerplate, not production" vs "$10k production-grade" contradiction in README.
3. **Fix or replace setup wizard** (A7) to emit the current config shape and scaffold empty content-collection entries for every service/sub-service/location, so missing copy is visible as TODOs rather than silently absent.
4. **Add a QA script** (`npm run qa`): word-count per important page, missing alt text, images-per-page count, missing schema on FAQ-bearing pages, orphan pages, broken internal links, untranslated strings. This automates master prompt §34's checklist and gives the AI agent (and you) a pass/fail gate.
5. **Per-niche starter content packs**: for your top 3 niches, ship complete example content collections (services, locations, 8 blog posts). These become the gold standard the AI mimics for every new site.

---

## E. Suggested execution order

| Phase | Scope | Outcome |
|-------|-------|---------|
| **1. Correctness** (small, fast) | A1–A13 | Multilingual SEO actually works; schema complete; no fake conversions; crawlable blog |
| **2. Content engine** | B1–B5, D1, D3, D4 | Pages can hold 1,000–1,500 unique words; AEO sections exist; programmatic sub-service×location; agents have a concrete contract |
| **3. Design system** | C1–C5 | Scroll animations, variants, galleries, before/after, themes per niche, formsubmit + form variants — sites stop looking like the same template |
| **4. Content packs & docs** | D2, D5 | Each new site starts from a niche preset + exemplar content, agent output quality becomes consistent |

Phases 2 and 3 are independent and can be parallelized.
