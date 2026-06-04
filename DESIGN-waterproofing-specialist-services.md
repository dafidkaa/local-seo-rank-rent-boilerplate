# Niche Design Brief: Waterproofing & Damp-Proofing Specialist Services

This document defines the visual guidelines, typography, color palette, and asset map for the **Basement Waterproofing, Foundation Repair, Roof Waterproofing, Damp-Proofing, and Concrete Injection** niche.

Croatian examples: `hidroizolacija zadar`, `hidroizolacija split`, `hidroizolacija zagreb`

---

## 1. Brand Identity & Visual Strategy

### Tone & Mood

**Authoritative & Reassuring.**
Homeowners searching for waterproofing services are experiencing anxiety — visible damp patches, crumbling foundations, or flooded basements trigger fear of structural damage and expensive repairs.
The brand must immediately communicate calm expertise and proven reliability.
Every visual and copy choice should say: *"We've seen this before. We fix it permanently."*

**Industrial Precision meets Residential Trust.**
The aesthetic sits between a certified engineering firm and a family-run specialist trade.
Avoid overly corporate coldness or overly casual friendliness.
Use imagery of real workers, real equipment, and real before/after results.
Certifications, guarantees, and process transparency are the primary trust levers.

**Problem → Solution Visual Narrative.**
The user journey on the page should mirror the emotional journey:
*Problem recognition (damp wall) → Expert diagnosis → Proven process → Guaranteed outcome.*
Dark, moody hero imagery of water damage transitions into clean, bright "after" imagery in lower sections.
This contrast is deliberate and psychologically powerful.

---

### Color Palette Presets

| Sub-Niche Preset | Primary Hex | Secondary Hex | Accent Hex | Accent Dark Hex | Hero Overlay |
|---|---|---|---|---|---|
| **Basement Waterproofing** | `#1A2B3C` (Deep Navy) | `#2E4057` (Steel Blue) | `#00A8E8` (Electric Blue) | `#007BB5` (Ocean) | `rgba(26,43,60,0.72)` |
| **Foundation Repair** | `#2C2C2C` (Charcoal) | `#4A4A4A` (Graphite) | `#E8A020` (Amber Warning) | `#C07A10` (Dark Amber) | `rgba(44,44,44,0.75)` |
| **Roof Waterproofing** | `#1B3A2D` (Deep Forest) | `#2D5E47` (Moss Green) | `#5DBE8A` (Mint) | `#3A9E6A` (Emerald) | `rgba(27,58,45,0.70)` |
| **Damp-Proofing / Injection** | `#2A1F3D` (Deep Plum) | `#3D2E58` (Violet Slate) | `#9B6DFF` (Tech Purple) | `#7A4FD6` (Deep Violet) | `rgba(42,31,61,0.74)` |

> **Neutral Base (all presets):** Background `#F4F6F8`, Card White `#FFFFFF`, Body Text `#2D2D2D`, Muted Text `#6B7280`

---

### Typography Pairings

**Display / Headings — `Oswald`**

- Weights: `500` (section titles), `700` (hero H1)
- Letter-spacing: `0.04em` on H1, `0.02em` on H2–H3
- Use: All headings, stat numbers, CTA button labels
- Rationale: Industrial, structural, confident — mirrors the trade aesthetic

**Body / UI — `Inter`**

- Weights: `400` (body copy), `500` (labels, nav), `600` (card titles, form labels)
- Letter-spacing: `0em` body, `0.01em` UI elements
- Line-height: `1.7` for readability on long-form service descriptions
- Rationale: Clean, modern, highly legible on mobile — critical for local SEO pages

**Accent / Testimonials — `Lora` (Italic)**

- Weight: `400 italic`
- Use: Pull quotes, testimonial text, guarantee statements
- Rationale: Adds warmth and human credibility to an otherwise technical brand

```css
/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Inter:wght@400;500;600&family=Lora:ital@1&display=swap');
```

---

## 2. Image Asset Map (Unsplash References)

| Key | Description | Recommended Search Query |
|---|---|---|
| `hero` | Dark, dramatic wide shot of water-damaged basement or wet foundation wall with visible moisture | `"basement water damage" OR "wet foundation wall"` |
| `about` | Specialist in branded workwear reviewing blueprints or inspecting a wall with a moisture meter | `"waterproofing contractor inspection" OR "damp survey specialist"` |
| `team` | Small crew of 2–3 workers in safety gear outside a residential property | `"construction crew residential" OR "trade workers home"` |
| `process` | Close-up of injection nozzle, membrane application, or drainage channel installation | `"waterproofing membrane application" OR "concrete injection repair"` |
| `service1` | Interior basement with visible sump pump installation or drainage matting | `"sump pump installation basement" OR "basement drainage system"` |
| `service2` | Exterior foundation with black bitumen membrane or tanking slurry being applied | `"foundation waterproofing exterior" OR "tanking membrane foundation"` |
| `service3` | Flat roof with liquid waterproofing membrane or torch-on felt application | `"flat roof waterproofing" OR "roof membrane application"` |
| `service4` | Damp interior wall with rising damp tide mark or efflorescence — before treatment | `"rising damp wall" OR "damp proofing interior wall"` |

> **Tip:** Filter Unsplash results by **landscape orientation** for hero/about.
> Use **square crop** for service cards.
> Prefer images with **human presence** (hands, workers) for trust signal sections.

---

## 3. Section Architecture & Word Count Distribution

To hit the **1,000–1,500 word density target**, organize sections with alternating light/dark layouts:

---

### Section 1 — Hero Slider `(150 words)`

**Layout:** Full-viewport dark overlay slider with 2–3 slides.

**Content Strategy:**
Each slide targets a distinct service keyword:
- Slide 1: Basement waterproofing + emergency call CTA
- Slide 2: Foundation crack injection + free survey offer
- Slide 3: Roof waterproofing + guarantee badge

**Copy focus:** H1 contains primary geo+service keyword (e.g., *"Waterproofing Specialists in Split"*).
Subheadline addresses the pain point directly (*"Stop damp before it destroys your foundations"*).
Primary CTA: **"Get a Free Survey"** — secondary CTA: **"Call Now: [number]"**

---

### Section 2 — Trust Bar `(50 words)`

**Layout:** Full-width light grey bar, 5 columns, icon + short label each.

**Content Strategy:**
Display non-negotiable trust signals in scannable format:
- ✅ 15+ Years Experience
- ✅ 10-Year Written Guarantee
- ✅ Fully Certified & Insured
- ✅ 500+ Projects Completed
- ✅ Free Site Survey

**No prose needed** — icons and micro-copy do the work.
This section loads above the fold on desktop and anchors credibility before the user scrolls.

---

### Section 3 — Welcome / Story Section `(250 words)`

**Layout:** Two-column — left: image of specialist/team; right: copy block with H2 + 3 paragraphs + inline CTA.

**Content Strategy:**
Open with empathy: acknowledge the homeowner's concern.
Transition to authority: years in business, qualifications, local knowledge.
Close with differentiation: what makes this company the only logical choice.
Include one pull-quote from a satisfied client embedded mid-section.
Use the phrase *"permanent solution"* and *"guaranteed results"* naturally in copy.
This section carries the heaviest SEO weight — include secondary keywords organically.

---

### Section 4 — Service Grid `(200 words)`

**Layout:** 2×2 or 3×2 card grid (responsive). Each card: image, icon, H3 title, 2-sentence description, "Learn More" link.

**Content Strategy:**
Each card targets one service keyword cluster:
1. Basement & Cellar Waterproofing
2. Foundation Crack Injection
3. Roof & Terrace Waterproofing
4. Rising Damp Treatment
5. External Tanking & Drainage
6. Concrete Repair & Protection

Keep descriptions benefit-focused, not feature-focused.
*"Permanently seal basement walls against hydrostatic pressure"* beats *"We apply Type A waterproofing membranes."*

---

### Section 5 — Why Choose Us `(200 words)`

**Layout:** Dark background section. 3-column icon grid with H3 + short paragraph each.

**Content Strategy:**
Address the three core objections of this niche:
1. **"Will it actually last?"** → Guarantee & warranty copy
2. **"Are they qualified?"** → Certification & insurance copy
3. **"Will they show up and finish?"** → Process reliability & reviews copy

Include a secondary CTA button at section bottom: **"Read Our Reviews"** linking to Google Business Profile.

---

### Section 6 — Our Process `(200 words)`

**Layout:** Horizontal numbered step flow (desktop) / vertical accordion (mobile). 4–5 steps.

**Content Strategy:**
Demystify the service to reduce purchase anxiety.
Steps:
1. **Free Site Survey** — We assess moisture levels and identify root causes
2. **Detailed Report & Quote** — Written diagnosis with transparent pricing
3. **Scheduled Installation** — Minimal disruption, clean worksite guaranteed
4. **Quality Inspection** — Post-work check with photographic documentation
5. **Guarantee Issued** — Written 10-year guarantee provided on completion

Each step: icon + bold title + 1–2 sentence description.
This section dramatically increases conversion by removing fear of the unknown.

---

### Section 7 — Interactive Estimate Form `(150 words)`

**Layout:** Split section — left: dark background with bullet benefits; right: white card with multi-step form.

**Content Strategy:**
Form fields (Step 1): Property type, problem type (checkbox), approximate area (m²).
Form fields (Step 2): Name, phone, postcode, preferred contact time.
Micro-copy below submit: *"No spam. No obligation. Response within 2 hours."*
Left panel reinforces value: *"What's included in your free survey..."* with 4 bullet points.
This form is the **primary lead capture mechanism** — design must make it feel effortless and safe.

---

### Section 8 — FAQ Section `(300 words)`

**Layout:** Full-width light background. H2 + accordion-style dropdowns. 6–8 questions.

**Content Strategy:**
Target long-tail question keywords directly:
- *"How long does basement waterproofing last?"*
- *"What causes rising damp in older properties?"*
- *"Is waterproofing covered by home insurance?"*
- *"How much does damp proofing cost in [City]?"*
- *"Can you waterproof from the inside?"*
- *"How do I know if I need tanking or injection?"*
- *"Do you guarantee your waterproofing work?"*
- *"How long does the work take to complete?"*

Each answer: 2–4 sentences, plain language, naturally includes secondary keywords.
FAQ schema markup must be implemented for Google rich results eligibility.
Close section with a final CTA: **"Still have questions? Call us free."**

---

## 4. High-Converting Component Layouts

### A. The Niche-Specific Hero Section

**Layout Specification:**

```
[FULL VIEWPORT — min-height: 100vh]
┌─────────────────────────────────────────────────────┐
│  [Background: dark overlay on damp/basement image]  │
│                                                     │
│  [TOP LEFT: Logo]        [TOP RIGHT: Phone CTA btn] │
│                                                     │
│         [CENTERED CONTENT BLOCK — max-w: 800px]     │
│                                                     │
│    [BADGE: "10-Year Guarantee | Free Survey"]       │
│    H1: Waterproofing Specialists in [City]          │
│    H2: Permanent solutions for damp, leaks &        │
│        foundation damage                            │
│                                                     │
│    [CTA PRIMARY: "Get Your Free Survey →"]          │
│    [CTA SECONDARY: "☎ Call: 091 XXX XXXX"]         │
│                                                     │
│  [BOTTOM BAR: 5 trust icons — white on dark]        │
└─────────────────────────────────────────────────────┘
```

**Overlay:** Use `rgba(26,43,60,0.72)` — dark enough for text legibility, light enough to show dramatic background image.

**Trust Badges:** Render as inline SVG icons with white fill.
Position in a horizontal strip pinned to the bottom of the hero viewport.
Include: Years Experience | Projects Completed | Guarantee | Certified | Response Time.

**CTA Button Styling:**
- Primary: `background: #00A8E8`, `color: #fff`, `padding: 16px 36px`, `border-radius: 4px`, `font: Oswald 500 18px`
- Hover: `background: #007BB5`, `transform: translateY(-2px)`, `box-shadow: 0 8px 24px rgba(0,168,232,0.35)`
- Secondary: `border: 2px solid #fff`, `color: #fff`, transparent background, same sizing

**Mobile Behaviour:**
Stack CTAs vertically.
Reduce H1 to `clamp(28px, 6vw, 48px)`.
Trust bar scrolls horizontally with snap points.

---

### B. Service Cards Grid

**Grid Specification:**

```css
.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  padding: 64px 24px;
}
```

**Card Anatomy:**

```
┌──────────────────────────────┐
│  [IMAGE — 16:9 aspect ratio] │
│  [ICON BADGE — bottom-left   │
│   of image, overlapping]     │
├──────────────────────────────┤
│  [SERVICE ICON — 32px]       │
│  [H3 — Oswald 500 20px]      │
│  [Description — Inter 400    │
│   14px, 2 lines max]         │
│  [→ Learn More — accent col] │
└──────────────────────────────┘
```

**Hover Effects:**

```css
.service-card {
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  overflow: hidden;
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.16);
}

.service-card:hover .card-image {
  transform: scale(1.04);
  transition: transform 0.4s ease;
}

.service-card:hover .learn-more {
  color: var(--accent);
  letter-spacing: 0.05em;
}
```

**Image Container:** `overflow: hidden` on parent, `transition: transform` on `<img>` — creates subtle zoom on hover without layout shift.

**Icon