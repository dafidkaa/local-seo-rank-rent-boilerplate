# Niche Design Brief: Swimming Pool Construction & Renovation

This document defines the visual guidelines, typography, color palette, and asset map for the **Inground Pool Installation, Concrete Pools, Fiberglass Pools, Pool Renovation, and Luxury Outdoor Living** niche. *(Croatian examples: izgradnja bazena zadar, betonski bazeni split, renovacija bazena dubrovnik)*

---

## 1. Brand Identity & Visual Strategy

### Tone & Mood

The swimming pool construction niche sits at the intersection of **aspiration and trust**. Homeowners investing $30,000–$150,000+ in a pool are not impulse buyers — they are dreamers who need to be converted into believers. The visual language must evoke the feeling of a hot summer afternoon, cool water, and the pride of ownership. Every design decision should whisper: *"This is the life you deserve, and we are the team that will build it."*

The emotional drivers are layered. Primary drivers include **status, family bonding, and lifestyle elevation**. Secondary drivers are **fear of being scammed, project delays, and poor craftsmanship**. The design must simultaneously fuel desire and neutralize anxiety. Warm golden-hour photography, clean geometric layouts, and prominent social proof work together to move a visitor from dreaming to dialing.

Trust signals must be woven into every scroll depth. Licensing badges, years-in-business counters, before/after galleries, and named testimonials with project photos are non-negotiable. The brand voice is **confident but approachable** — the tone of a master craftsman who has built 400 pools and still gets excited about building yours.

---

### Color Palette Presets

| Sub-Niche Preset | Primary Hex | Secondary Hex | Accent Hex | Accent Dark Hex | Hero Overlay |
|---|---|---|---|---|---|
| **Luxury Inground Pools** | `#0A3D62` | `#1E8BC3` | `#F0A500` | `#C47D00` | `rgba(10,61,98,0.65)` |
| **Concrete & Custom Pools** | `#1B2631` | `#2E86AB` | `#E8C547` | `#B89A2A` | `rgba(27,38,49,0.70)` |
| **Fiberglass Pools** | `#0D5C63` | `#3AAFA9` | `#FF6B35` | `#CC4F1E` | `rgba(13,92,99,0.60)` |
| **Pool Renovation & Resurfacing** | `#2C3E50` | `#16A085` | `#E74C3C` | `#A93226` | `rgba(44,62,80,0.68)` |

> **Usage Rule:** Primary = nav, footer, headings. Secondary = buttons, section accents, icon fills. Accent = CTAs, price highlights, badge borders. Hero Overlay = applied as `background` on hero `::before` pseudo-element over the full-bleed image.

---

### Typography Pairings

**Display / Headings — `Playfair Display`**
- Weights: `700` (H1, H2), `600` (H3)
- Letter-spacing: `-0.02em` on H1, `0em` on H2/H3
- Use case: Hero headline, section titles, testimonial pull-quotes
- Import: `?family=Playfair+Display:wght@600;700`

**Body / UI — `Inter`**
- Weights: `400` (body copy), `500` (labels, nav), `600` (buttons, card titles)
- Letter-spacing: `0.01em` on body, `0.08em` on uppercase labels/badges
- Use case: All paragraph text, form fields, service descriptions, FAQ answers
- Import: `?family=Inter:wght@400;500;600`

**Accent / Tagline — `Montserrat`**
- Weights: `500` (subheadings), `700` (stat counters, trust numbers)
- Letter-spacing: `0.12em` on uppercase taglines
- Use case: Trust bar stats, process step numbers, "WHY CHOOSE US" eyebrow labels
- Import: `?family=Montserrat:wght@500;700`

**Base Size:** `16px` body, `1.7` line-height. H1: `clamp(2.4rem, 5vw, 4rem)`. H2: `clamp(1.8rem, 3.5vw, 2.8rem)`.

---

## 2. Image Asset Map (Unsplash References)

| Key | Description | Recommended Search Query |
|---|---|---|
| `hero` | Full-bleed aerial or eye-level shot of a stunning finished inground pool at golden hour, surrounded by landscaping | `"swimming pool luxury backyard sunset"` |
| `about` | Owner or lead contractor standing poolside on a completed project, professional but warm | `"pool contractor professional outdoor"` |
| `team` | Small crew of 3–5 workers on an active pool construction site, safety gear, natural light | `"construction crew workers outdoor site"` |
| `process` | Excavation or concrete forming stage — raw earth, machinery, early pool shell visible | `"pool excavation construction dig"` |
| `service1` | Pristine finished concrete pool with water features, spillover spa, stone coping | `"concrete inground pool water feature"` |
| `service2` | Fiberglass pool shell being installed, crane or delivery truck visible, clean lines | `"fiberglass pool installation shell"` |
| `service3` | Close-up of pool renovation — new tile, resurfacing plaster, fresh coping stones | `"pool renovation resurfacing tile"` |
| `service4` | Complete luxury outdoor living space — pool, pergola, outdoor kitchen, fire feature | `"luxury outdoor living pool patio"` |

> **Aspect Ratios:** Hero `16:9` (min 1920×1080). About/Team `4:3`. Service cards `3:2`. Process `16:9`. All images should be compressed to WebP, max 200KB for cards, max 400KB for hero.

---

## 3. Section Architecture & Word Count Distribution

To hit the **1,000–1,500 word density target**, organize sections with alternating light/dark layouts:

---

### 1. Hero Slider — 150 words | Dark overlay layout

**Content Strategy:**
The hero carries the entire first impression. Use a 2–3 slide carousel with autoplay (6s interval, no autoplay on mobile). Each slide targets a different buyer persona:

- **Slide 1:** New pool installation — *"Build the Backyard You've Always Imagined"*
- **Slide 2:** Pool renovation — *"Transform Your Tired Pool Into a Showpiece"*
- **Slide 3:** Luxury outdoor living — *"Complete Outdoor Living, Designed Around You"*

Each slide includes: H1 headline (8–10 words), one-sentence subheadline (15–20 words), dual CTAs (*"Get a Free Quote"* primary + *"View Our Work"* ghost button), and 3 inline trust micro-badges (Licensed & Insured / 15+ Years Experience / 500+ Pools Built).

Word budget: H1 ×3 = 30 words, subheadlines ×3 = 60 words, badge text = 15 words, CTA labels = 10 words. **Total: ~150 words.**

---

### 2. Trust Bar — 50 words | Light/white layout

**Content Strategy:**
A single full-width horizontal band immediately below the hero. No images — pure data and iconography. Display 4–5 animated counter stats that load on scroll-enter:

- `500+` Pools Completed
- `15` Years in Business
- `4.9★` Average Google Rating
- `100%` Licensed & Insured
- `$0` Deposit to Start Design

Each stat uses a large Montserrat `700` number, small Inter `500` label beneath. Include partner/association logos (APSP, BBB, local licensing board) as grayscale SVGs. **Total: ~50 words.**

---

### 3. Welcome / Story Section — 250 words | Light layout

**Content Strategy:**
This is the **brand humanization zone**. Left column: 3–4 paragraphs of genuine brand story copy. Right column: the `about` image with a floating badge overlay (*"Family Owned Since 2008"*).

Paragraph 1 (~60 words): Open with a relatable homeowner pain point — the frustration of finding a trustworthy pool builder. Transition into the company origin story.

Paragraph 2 (~70 words): Describe the service philosophy. Emphasize custom design, transparent pricing, and on-time delivery. Name-drop the local service area cities for geo-SEO value.

Paragraph 3 (~60 words): Social proof paragraph — reference the number of completed projects, repeat clients, and referral rate. Include one short named testimonial pull-quote in a styled blockquote.

Paragraph 4 (~60 words): Soft CTA paragraph — invite the reader to explore services or schedule a no-obligation design consultation. Link to the estimate form section via smooth scroll anchor.

**Total: ~250 words.**

---

### 4. Service Grid — 200 words | Dark/navy layout

**Content Strategy:**
A 2×2 or 4-column grid (responsive: 1-col mobile, 2-col tablet, 4-col desktop). Each card represents a core service:

- **Inground Pool Construction** — concrete, gunite, custom shapes
- **Fiberglass Pool Installation** — fast install, low maintenance, warranty
- **Pool Renovation & Resurfacing** — replastering, retiling, equipment upgrades
- **Outdoor Living & Water Features** — spas, waterfalls, fire features, decking

Each card: service image (3:2 ratio), service name (H3), 2-sentence description (~25 words), and a *"Learn More →"* text link. Total copy across 4 cards: ~100 words of descriptions + 4 headings + 4 link labels = **~130 words.** Section heading + intro sentence = ~30 words. **Total: ~200 words.**

---

### 5. Why Choose Us — 200 words | Light layout

**Content Strategy:**
A 3-column icon-feature grid. Each column: SVG icon (pool/construction themed), bold H4 feature title, 2–3 sentence explanation. Recommended features:

- **Transparent Fixed Pricing** — No surprise change orders. Full itemized quote before any work begins.
- **In-House Construction Crew** — We never subcontract. Your project is managed start-to-finish by our licensed team.
- **Lifetime Structural Warranty** — We stand behind our concrete shells with an industry-leading lifetime guarantee.
- **3D Design Visualization** — See your finished pool before we break ground, using photorealistic 3D renders.
- **On-Time Completion Guarantee** — We commit to a project timeline in writing and honor it.
- **Local & Family Owned** — We live in this community. Our reputation is built one backyard at a time.

Use 6 features in a 3×2 grid. Each description: ~25 words. Section heading + intro: ~30 words. **Total: ~200 words.**

---

### 6. Our Process — 200 words | Dark layout with timeline

**Content Strategy:**
A horizontal timeline (desktop) / vertical accordion (mobile) showing 5–6 numbered steps. Each step: large step number in accent color, bold step title, 2-sentence description.

- **Step 1 — Free Design Consultation** (~25 words): We visit your property, discuss your vision, and assess site conditions at no cost.
- **Step 2 — Custom 3D Design & Quote** (~25 words): Our designers create a photorealistic render and provide a detailed fixed-price proposal within 5 business days.
- **Step 3 — Permits & Site Preparation** (~25 words): We handle all permit applications and HOA approvals. Site prep and excavation begin once approvals are secured.
- **Step 4 — Construction & Installation** (~25 words): Our in-house crew manages every phase — shell, plumbing, electrical, coping, and decking — on a published schedule.
- **Step 5 — Finishing & Water Chemistry** (~25 words): We install all equipment, fill the pool, balance water chemistry, and conduct a full systems test.
- **Step 6 — Handover & Owner Training** (~25 words): We walk you through every system, provide a maintenance guide, and activate all warranties on handover day.

Section heading + intro: ~25 words. **Total: ~200 words.**

---

### 7. Interactive Estimate Form — 150 words | Accent/light layout

**Content Strategy:**
A multi-step form (3 steps, progress bar visible) embedded in a split layout — form left, trust reinforcement right.

**Step 1 — Project Type:** Radio cards with icons (New Pool / Renovation / Spa Only / Outdoor Living).

**Step 2 — Project Details:** Pool size range (dropdown), preferred material (concrete/fiberglass/vinyl), desired features checklist (spa, waterfall, lighting, heating, automation).

**Step 3 — Contact Info:** Name, phone, email, suburb/city, preferred contact time. GDPR-friendly checkbox.

Right panel content: *"Why Get a Quote?"* — 3 bullet points reinforcing no-obligation, fast response (within 2 hours), and fixed-price guarantee. Include a headshot of the estimator with name and direct phone number.

Form heading + intro sentence: ~30 words. Field labels + helper text: ~60 words. Right panel copy: ~60 words. **Total: ~150 words.**

---

### 8. FAQ Section — 300 words | Light layout

**Content Strategy:**
Accordion-style FAQ targeting both **buyer anxiety keywords** and **long-tail SEO queries**. Minimum 8 questions. Each answer: 2–4 sentences, ~30–40 words.

Recommended questions:

1. *"How long does it take to build an inground pool?"* — Address permit timelines, construction phases, and seasonal factors. (~35 words)
2. *"What is the difference between concrete and fiberglass pools?"* — Compare durability, cost, maintenance, and customization. (~40 words)
3. *"How much does a new inground pool cost?"* — Give honest ranges ($35K–$120K+) and explain variables. (~35 words)
4. *"Do you handle all permits and council approvals?"* — Confirm yes, explain the process briefly. (~30 words)
5. *"What warranty do you offer on pool construction?"* — Detail structural, equipment, and workmanship warranties. (~35 words)
6. *"Can you renovate an old concrete pool?"* — Describe resurfacing, retiling, and equipment upgrade options. (~30 words)
7. *"Do I need to be home during construction?"* — Reassure with site access protocol and daily update policy. (~30 words)
8. *"What financing options are available?"* — Mention partnerships with finance providers, deposit structure. (~25 words)

Section heading + intro: ~20 words. 8 questions × ~5 words = 40 words. 8 answers × ~33 words avg = 264 words. **Total: ~300 words.**

---

**Grand Total Word Count: 150 + 50 + 250 + 200 + 200 + 200 + 150 + 300 = 1,500 words ✓**

---

## 4. High-Converting Component Layouts

### A. The Niche-Specific Hero Section

**Layout Architecture:**

```
[FULL-BLEED IMAGE — 100vw × 90vh minimum]
  └── ::before overlay (Hero Overlay rgba from palette)
      └── .hero-content (centered, max-width 900px, padding 0 24px)
          ├── .eyebrow-label (Montserrat 500, 0.12em spacing, accent color)
          │     "AWARD-WINNING POOL BUILDERS · [CITY NAME]"
          ├── h1.hero-headline (Playfair Display 700, clamp 2.4–4rem)
          │     "Build the Backyard You've Always Imagined"
          ├── p.hero-subheadline (Inter 400, 