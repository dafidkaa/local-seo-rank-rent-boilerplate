# Rank & Rent Boilerplate: AI Code Generation Master Prompt

Copy and paste this entire prompt into Cursor, Claude, or any AI coding tool to instantly generate a fully customized, 100+ page, SEO-optimized, premium local business website based on this boilerplate.

---

## 1. Role & Objectives
You are a senior frontend engineer and local SEO specialist. Your task is to customize this Astro 4 boilerplate for a specific local business niche and location.

Your objective is to produce a website that looks and feels like a **$10,000 professional design firm project**, with **100% Core Web Vitals scores (zero client-side JS runtime)**, and optimized for **Search Engine Optimization (SEO), Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO)**.

---

## 2. Target Specifications
[AI: FILL IN THESE VALUES BEFORE PROCEEDing]
- **Niche:** [e.g., Plumbing, Towing, Roofing, Dental]
- **Location:** [e.g., Austin TX, Chicago IL, Zagreb HR]
- **Primary Language:** [e.g., en, hr]
- **Niche Category:** [Choose one of the 16 supported niches below]
  - `home-services` — Plumbing, HVAC, Roofing, Electrical, Landscaping, Pest Control
  - `transportation` — Towing, Limo, Taxi, Courier, Moving Companies
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

### Step 3.1: Read the Niche Design Brief
1. Locate the file `DESIGN-[category].md` (e.g., `DESIGN-home-services.md`).
2. Extract the **Typography**, **Color Palette (Primary, Secondary, Accent, Neutral)**, and **Image Asset Map** defined for this niche.

### Step 3.2: Update site.config.ts
Overhaul the `src/site.config.ts` file. Ensure the following fields are fully populated with highly realistic, localized data for the target business:
1. **`business`**:
   - `name`: Localized, trust-building business name.
   - `city`: The target city.
   - `phone`, `email`, `address`: Localized, realistic contact details.
   - `ctaMode`: Choose `"form_phone"`, `"form_email"`, or `"form_phone_email"`.
   - `primaryService`, `founded`, `hours`.
2. **`brand`**:
   - `primary`, `secondary`, `accent`, `accentLight`, `accentDark`, `neutralLight`, `neutralDark`: Hex values matching the design brief.
   - `fontDisplay`, `fontBody`: Google Fonts matching the design brief.
3. **`images`**:
   - Map all image keys (`hero`, `about`, `team`, `process`, etc.) to high-quality Unsplash URLs matching the search queries in the design brief.
4. **`mainServices` & `secondaryCategories`**:
   - Define 3-4 primary services and 4-6 secondary categories with highly realistic, localized slugs and names.
5. **`locations`**:
   - Define 10-15 surrounding suburbs or neighborhoods with realistic names, slugs, and postal codes.

### Step 3.3: Update i18n Translation Files
Overhaul `src/i18n/en.ts` (and `src/i18n/hr.ts` if multilingual) to fully populate all UI strings, copy, and texts.
- **CRITICAL:** Do not use generic placeholders. Write highly persuasive, industry-specific, localized copy.
- **CRITICAL:** Every page must reach **1,000 to 1,500 words of content**. Ensure all descriptions, FAQs, and story texts are fully written out in paragraphs and tables, not bullet points.

### Step 3.4: Verify & Build
1. Run `npm run build` to verify that the static site generator compiles all 100+ pages cleanly.
2. Ensure there are zero TypeScript or import errors.
