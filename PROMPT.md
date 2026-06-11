# Rank & Rent Boilerplate: AI Code Generation Master Prompt

Copy and paste this entire prompt into Cursor, Claude, or any AI coding tool to instantly generate a fully customized, 140+ page, SEO-optimized, premium local business website based on this boilerplate.

---

## 1. Role & Objectives
You are a senior frontend engineer and local SEO specialist. Your task is to customize this Astro 4 boilerplate for a specific local business niche and location.

Your objective is to produce a website that looks and feels like a **$10,000 professional design firm project**, with **100% Core Web Vitals scores (zero client-side JS runtime)**, and optimized for **Search Engine Optimization (SEO), Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO)**.

---

## 2. Target Specifications
[AI: FILL IN THESE VALUES BEFORE PROCEEDING]
- **Niche:** [e.g., Plumbing, Towing, Roofing, Dental]
- **Location:** [e.g., Austin TX, Chicago IL, Zagreb HR]
- **Primary Language:** [e.g., en, hr]
- **Niche Category:** [Choose one of the 21 supported niches below]
  - `home-services` — Plumbing, HVAC, Roofing, Electrical, Landscaping, Pest Control
  - `transportation` — Towing, Limo, Taxi, Courier, Moving Companies, Airport Transfers
  - `construction` — Remodeling, Roofing, Home Extensions, Commercial Build-Outs
  - `legal` — Personal Injury, Criminal Defense, Family Law, CPA, Consulting
  - `medical` — Dental, Orthodontics, Chiropractic, Physical Therapy, Medical Spa
  - `beauty` — Salon, Spa, Esthetics, Nail Care, Hair Styling
  - `real-estate` — Real Estate Agents, Property Management, Rentals
  - `automotive-repair-detailing` — Auto Repair, Oil Change, Detailing, Tires
  - `professional-cleaning-services` — House Cleaning, Commercial Cleaning, Carpet Cleaning
  - `pet-care-veterinary-services` — Veterinary, Pet Grooming, Boarding, Dog Training
  - `fitness-gyms-personal-training` — Gyms, CrossFit, Yoga Studios, Personal Training
  - `event-planning-catering-venues` — Event Planning, Catering, Wedding Venues
  - `local-education-tutoring` — Tutoring, Test Prep, Music Lessons, Language Schools
  - `home-security-smart-home-automation` — Security Systems, Smart Home, Alarm Monitoring
  - `childcare-early-education` — Daycare, Preschool, After-School Programs
  - `funeral-memorial-services` — Funeral Homes, Cremation, Memorial Planning
  - `waterproofing-specialist-services` — Basement Waterproofing, Foundation Repair, Damp-Proofing
  - `prefab-modular-homes` — Prefab Houses, Modular Homes, Kit Houses (montažne kuće)
  - `custom-furniture-joinery` — Bespoke Wardrobes, Custom Kitchens, Tailored Furniture (namještaj po mjeri)
  - `fencing-gates-outdoor-structures` — Fencing, Automatic Gates, Pergolas, Decking (ograde, pergole)
  - `swimming-pool-construction` — Inground Pools, Fiberglass Pools, Pool Renovation (izgradnja bazena)

---

## 3. Step-by-Step Customization Workflow

### Step 3.1: Read the Design System + Niche Brief & Apply Its Theme Preset
1. Read **`DESIGN-SYSTEM.md`** (global visual playbook: typography, nav variants,
   buttons, motion, imagery, anti-slop checklist), THEN the niche file
   `DESIGN-[category].md` — it specifies the hero pattern, nav treatment
   (solid vs overlay-in-hero), signature sections, imagery queries, CTA language,
   and copy tone for this niche.
2. Apply the matching code theme preset — this is how the DESIGN brief becomes real output
   (colors, fonts, corner radius personality, and button treatment are all wired in code):

| DESIGN brief | `themePreset("...")` |
|---|---|
| DESIGN-home-services, DESIGN-waterproofing-specialist-services | `home-services` |
| DESIGN-medical | `medical` |
| DESIGN-legal | `legal` |
| DESIGN-beauty | `beauty` |
| DESIGN-real-estate, DESIGN-prefab-modular-homes | `real-estate` |
| DESIGN-automotive-repair-detailing | `automotive` |
| DESIGN-construction | `construction` |
| DESIGN-professional-cleaning-services, DESIGN-swimming-pool-construction | `cleaning` |
| DESIGN-fencing-gates-outdoor-structures | `landscaping` |
| DESIGN-pet-care-veterinary-services | `pet-care` |
| DESIGN-fitness-gyms-personal-training | `fitness` |
| DESIGN-local-education-tutoring, DESIGN-childcare-early-education | `education` |
| DESIGN-transportation | `transportation` |
| DESIGN-home-security-smart-home-automation | `security` |
| DESIGN-event-planning-catering-venues | `events` |
| DESIGN-funeral-memorial-services | `funeral` |
| DESIGN-custom-furniture-joinery (and other premium/luxury niches) | `luxury` |

3. If the DESIGN brief specifies colors/fonts that differ from the preset, spread the preset
   first and override individual values. Each preset also carries a `personality`
   (radius language + button treatment) — override it only if the brief demands it:
   `personality: { radius: "sharp" | "soft" | "round", button: "solid" | "gradient" }`.
4. Extract the **Image Asset Map / search queries** from the brief and source matching
   Unsplash photos — VERIFY every image actually shows the right subject before using it.

### Step 3.2: Update site.config.ts
Overhaul the `src/site.config.ts` file. Ensure the following fields are fully populated with highly realistic, localized data for the target business:

1. **`business`**:
   - `name`: Localized, trust-building business name.
   - `city`: The target city.
   - `phone`, `email`, `address`: Localized, realistic contact details.
   - `ctaMode`: Choose `"form_phone"`, `"form_email"`, or `"form_phone_email"`.
   - Lead delivery: set `integrations.formsubmitEmail` for zero-backend delivery via formsubmit.co (first submission triggers a one-time activation email), or `integrations.crmWebhookUrl` for a custom endpoint (takes priority).
   - Form strategy by niche (master rule): premium/luxury niches → popup-only CTAs on inner pages, embedded form only on contact page; standard local services → embedded forms in hero/contact sections plus popup CTAs.
   - `primaryService`, `founded`, `hours`.

2. **`brand`** — EASIEST PATH: spread a niche theme preset and override only what the brand needs:
   ```typescript
   import { themePreset } from "./lib/themes";
   brand: {
     ...themePreset("home-services"), // home-services | medical | legal | beauty | real-estate | automotive | construction | cleaning | landscaping | pet-care | fitness | education | transportation | security | events | funeral | luxury
     logoText: "Business Name",
     logoAccent: "Name",
     images: { ... }
   }
   ```
   Or set `primary`, `secondary`, `accent`, `accentDark`, `accentLight`, `heroOverlay`, `fontDisplay`, `fontBody` manually from the design brief.
   FONT RULE: any Google Font you set must carry weights 400/500/600/700/800, or provide an explicit `fontsHref` URL — otherwise the font request fails and the site falls back to system fonts.

3. **`images`**:
   - Map all image keys (`hero`, `about`, `team`, `process`, etc.) to high-quality Unsplash URLs matching the search queries in the design brief.

4. **`mainServices` & `secondaryCategories`**:
   - Define 3–4 primary services and 4–6 secondary categories with highly realistic, localized slugs and names.
   - For multilingual sites add translated slugs: `slug: { hr: "ciscenje-odvoda" }` (the `id` stays the default-locale slug). Location URLs translate automatically.
   - Add a `gallery` (4–8 images with descriptive alt text) to each main service — it renders an image-rich proof section with a lightbox. Add a `beforeAfter: { before: {src, alt}, after: {src, alt} }` pair where the niche has visible transformations (cleaning, renovation, detailing, landscaping).

5. **`locations`** — This is critical for SEO. Each location must include all of the following fields:
   ```typescript
   {
     id: "city-slug",            // URL slug (lowercase, hyphenated)
     name: "City Name",          // Display name
     region: "Region/County",    // Region or county name
     image: "https://...",       // Unsplash URL of the city or area
     detail: "Short description",// 1-sentence description of the area
     knowledge: "Local context", // 1-2 sentences about local property types, infrastructure, or climate relevant to the service
     attractions: ["Landmark 1", "Landmark 2", "Landmark 3"], // 3 well-known local landmarks or sights
     mapEmbedQuery: "service+city+country" // Google Maps search query for the service area iframe
   }
   ```
   Define 8–15 surrounding suburbs or neighborhoods with realistic names, slugs, and all required fields.

### Step 3.3: Rewrite the Content Blocks (THE most important step)
ALL body copy for service pages, location pages, and sub-service pages lives in
`src/i18n/en.ts` (and `hr.ts`) under the `blocks:` section — the page templates
contain no copy of their own. This is your content contract:

| Block | What to write |
|---|---|
| `blocks.servicePage.shortAnswer` | 2–4 sentence direct answer (featured-snippet / AI-answer target) |
| `blocks.servicePage.intro` | heading + 3 paragraphs of problem-aware introduction |
| `blocks.servicePage.signs.items` | 6 niche-specific warning signs (icon, title, desc) |
| `blocks.servicePage.why.items` | 6 honest differentiators — NEVER invent licenses or guarantees the business doesn't offer |
| `blocks.servicePage.prosCons` | balanced DIY-vs-professional pros/cons for THIS niche |
| `blocks.servicePage.comparison` | comparison table rows rewritten for THIS niche |
| `blocks.servicePage.process.steps` | the niche's real 4-step process |
| `blocks.servicePage.problems.items` | 6 common customer problems |
| `blocks.servicePage.faqs` | 5 keyword-rich Q&As (cost, speed, licensing, warranty, coverage) |
| `blocks.locationPage.*` | the same sections framed locally |
| `blocks.childPage.*` | sub-service intro, trust card, signs list, benefit cards, process, FAQs |

Rules:
- **Rewrite every block for the niche.** The defaults are trades-flavored ("licensed, bonded & insured", "same-day service") — a tutoring or beauty site needs completely different trust language, CTAs ("Book an Appointment", "Schedule a Consultation"), and warning signs.
- **{placeholders} like `{service}`, `{city}`, `{business}` are interpolated at build time — keep them.**
- **CRITICAL:** Do not use generic placeholders. Write highly persuasive, industry-specific, localized copy.
- **CRITICAL:** Every page must reach **1,000 to 1,500 words of content**.
- **CRITICAL:** Contextually include the primary keyword (`[service] in [city]`) and secondary keywords (`[sub-service] in [city]`, `[service] near me`) in headings and body copy throughout. Do not keyword stuff.
- Also update the regular UI strings (nav, forms, hero, footer) in the same files.

### Step 3.4: Verify & Build
1. Run `npm run build` to verify that the static site generator compiles all 140+ pages cleanly.
2. Ensure there are zero TypeScript or import errors and zero warnings.

---

## 4. SEO Keyword Strategy

For each page template, the following keyword placement rules must be followed:

| Page Template | H1 Target | H2 Targets | Body Copy Keywords |
|---|---|---|---|
| Homepage | `[Primary Service] in [City]` | Service names, area names | Primary + secondary service keywords |
| Service page (`[slug].astro`) | `[Service] in [City]` | Sub-service names, problem types, benefit categories | `[service] [city]`, `[service] near me`, `best [service] [city]` |
| Location page (`[location].astro`) | `[Primary Service] in [City]` | `[Service] in [City]` (for each service), local landmarks | `[service] [city]`, `[city] [service]`, `[sub-service] [city]` |
| Sub-service page (`[parent]/[child].astro`) | `[Sub-Service] in [City]` | Related sub-services, process steps | Long-tail sub-service keywords |
| Blog post | Article title with keyword | Section headings with keywords | Informational keyword clusters |

---

## 5. Content Density Targets

| Page | Minimum Words | Sections |
|---|---|---|
| Homepage | 1,000 | 15 sections |
| Service page | 1,000 | 11 sections |
| Location page | 1,000 | 12 sections |
| Sub-service page | 600 | 8 sections |
| Blog post | 800 | 6+ sections |
