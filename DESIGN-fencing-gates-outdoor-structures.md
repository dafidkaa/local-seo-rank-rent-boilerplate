# Niche Design Brief: Fencing, Gates & Outdoor Living Structures

This document defines the visual guidelines, typography, color palette, and asset map for the **Custom Fencing, Automatic Gates, Wooden Pergolas, Aluminum Pergolas, and Outdoor Decking** niche. (Croatian examples: ograde zadar, pergole split)

---

## 1. Brand Identity & Visual Strategy

### Tone & Mood

The emotional core of this niche is **security meeting beauty**. Homeowners and property developers are not just buying a fence or a pergola — they are investing in the boundary of their private world, the frame around their outdoor lifestyle. The visual language must communicate craftsmanship, permanence, and pride of ownership. Think: a Saturday morning coffee on a freshly built deck, children playing safely behind a solid gate, a pergola casting dappled shade over a summer dinner table.

Trust is built through **material authenticity**. Photography should feature real wood grain, powder-coated aluminum profiles, forged steel hardware, and concrete footings — the tactile details that signal quality to a discerning buyer. Avoid sterile stock imagery. The brand voice sits between a skilled local tradesman and a design-forward outdoor living studio: confident, warm, and technically credible.

The secondary emotional driver is **aspiration with local relevance**. In coastal Croatian markets (Split, Zadar, Dubrovnik), outdoor living is a cultural identity, not a luxury add-on. Copy and imagery should reflect Mediterranean light, stone walls, olive trees, and terracotta — anchoring the brand in a specific geography while remaining adaptable for any regional rank-and-rent deployment.

---

### Color Palette Presets

| Sub-Niche Preset | Primary Hex | Secondary Hex | Accent Hex | Accent Dark Hex | Hero Overlay |
|---|---|---|---|---|---|
| **Custom Fencing** | `#2C3E2D` (Forest Green) | `#F5F0E8` (Warm Cream) | `#C8A96E` (Aged Bronze) | `#8B6914` (Dark Brass) | `rgba(44,62,45,0.62)` |
| **Automatic Gates** | `#1A1F2E` (Midnight Navy) | `#E8EDF2` (Steel White) | `#4A90D9` (Electric Blue) | `#1C5FA8` (Deep Cobalt) | `rgba(26,31,46,0.70)` |
| **Wooden Pergolas** | `#5C3D2E` (Walnut Brown) | `#FAF6F0` (Linen White) | `#D4956A` (Terracotta) | `#A0522D` (Sienna) | `rgba(92,61,46,0.58)` |
| **Aluminum Pergolas** | `#3A3F47` (Graphite) | `#F2F4F6` (Soft Silver) | `#7EB8A4` (Sage Teal) | `#3D7A6A` (Deep Sage) | `rgba(58,63,71,0.65)` |
| **Outdoor Decking** | `#4A3728` (Dark Teak) | `#F7F3EC` (Ivory) | `#E8A838` (Amber Gold) | `#B07D1A` (Harvest) | `rgba(74,55,40,0.60)` |

> **Usage Rule:** Primary = navbars, section backgrounds, footer. Secondary = page background, card fills. Accent = CTAs, highlights, icon fills. Accent Dark = CTA hover states. Hero Overlay = applied as a CSS gradient over the hero image.

---

### Typography Pairings

**Option A — Craft & Authority (Recommended)**

| Role | Font | Weight | Letter-Spacing | Size Range |
|---|---|---|---|---|
| Display / H1 | `Playfair Display` | 700, 800 | `-0.02em` | 48px–72px |
| H2 / Section Title | `Playfair Display` | 600 | `-0.01em` | 32px–44px |
| Body / Paragraphs | `Inter` | 400, 500 | `0.01em` | 16px–18px |
| Labels / Badges | `Inter` | 600, 700 | `0.08em` (uppercase) | 11px–13px |
| CTA Buttons | `Inter` | 700 | `0.05em` (uppercase) | 14px–16px |

**Option B — Modern Outdoor Living**

| Role | Font | Weight | Letter-Spacing | Size Range |
|---|---|---|---|---|
| Display / H1 | `Raleway` | 700, 800 | `-0.03em` | 48px–68px |
| H2 / Section Title | `Raleway` | 600 | `-0.01em` | 30px–42px |
| Body / Paragraphs | `Source Sans 3` | 400, 500 | `0.005em` | 16px–18px |
| Labels / Badges | `Source Sans 3` | 700 | `0.10em` (uppercase) | 11px–13px |
| CTA Buttons | `Raleway` | 700 | `0.06em` (uppercase) | 14px–16px |

> **Implementation Note:** Load fonts via `@import` from Google Fonts with `display=swap`. Limit to 2 font families maximum per deployment to preserve Lighthouse performance scores above 90.

---

## 2. Image Asset Map (Unsplash References)

| Key | Description | Recommended Search Query |
|---|---|---|
| `hero` | Wide-angle dusk shot of a property with a custom fence or pergola lit by warm exterior lighting, Mediterranean or suburban setting | `"wooden pergola backyard sunset"` / `"custom fence property dusk"` |
| `about` | Close-up of a craftsman's hands measuring or welding a gate panel, sawdust or sparks visible, warm workshop light | `"metalworker welding gate"` / `"carpenter measuring wood outdoor"` |
| `team` | Small crew of 2–3 workers in branded polos installing a fence post or pergola beam, natural outdoor light | `"construction crew outdoor installation"` / `"fence installers working"` |
| `process` | Flat-lay or overhead of blueprints, material samples (wood, aluminum profile, hardware), measuring tape on a workbench | `"construction blueprints materials flat lay"` / `"outdoor design planning desk"` |
| `service1` | Finished aluminum or wrought-iron automatic gate with intercom panel, clean driveway, modern home facade | `"automatic driveway gate modern home"` |
| `service2` | Horizontal timber or composite fence running along a garden edge, green lawn, blue sky | `"horizontal wood fence garden"` / `"composite fence backyard"` |
| `service3` | Freestanding wooden pergola with climbing plants or string lights, outdoor dining set underneath | `"wooden pergola outdoor dining"` / `"garden pergola string lights"` |
| `service4` | Composite or hardwood deck with built-in seating, potted plants, coastal or garden backdrop | `"hardwood deck outdoor living"` / `"composite decking backyard"` |
| `gallery_1` | Steel panel fence with laser-cut decorative pattern, contemporary home | `"decorative steel fence modern"` |
| `gallery_2` | Aluminum louvered pergola with adjustable roof slats, poolside setting | `"louvered pergola pool"` / `"bioclimatic pergola"` |
| `cta_bg` | Aerial drone shot of a landscaped backyard with fencing, deck, and pergola all visible — the complete outdoor package | `"aerial backyard landscaping fence deck"` |

> **Licensing Note:** All Unsplash images are free for commercial use. For rank-and-rent deployments, supplement with client-provided project photos as soon as available — real local project photos dramatically improve local SEO trust signals and conversion rates.

---

## 3. Section Architecture & Word Count Distribution

To hit the **1,000–1,500 word density target**, organize sections with alternating light/dark layouts:

---

### 1. Hero Slider — 150 words

**Layout:** Full-viewport height (`100vh`) slider with 2–3 slides. Each slide uses a high-resolution background image with the Hero Overlay color applied as a CSS `linear-gradient` from bottom-left. Text is left-aligned on desktop, centered on mobile.

**Content Strategy:**
- **Slide 1:** Lead with the primary service keyword. Example: *"Custom Fencing & Automatic Gates — Installed Across [City/Region]."* Sub-headline addresses the core desire: security + aesthetics. Primary CTA: `Get a Free Quote` (accent color button). Secondary CTA: `View Our Work` (ghost button).
- **Slide 2:** Focus on outdoor living. Example: *"Pergolas & Decking That Transform Your Outdoor Space."* Emphasize lifestyle outcome.
- **Slide 3:** Social proof slide. Feature a short testimonial pull-quote overlaid on a finished project photo.

**Trust Micro-elements:** Place 3 icon badges directly below the CTA buttons — e.g., `✓ Free Site Visit`, `✓ 10-Year Warranty`, `✓ Licensed & Insured`.

---

### 2. Trust Bar — 50 words

**Layout:** Full-width horizontal strip in Primary color (dark). Single row of 4–5 items separated by thin vertical dividers. Items are icon + short label pairs.

**Content Strategy:** This bar exists purely to neutralize objections in the first 3 seconds. Suggested items:
- `🏆 15+ Years Experience`
- `⭐ 4.9/5 Google Rating`
- `📍 Serving [City] & Surroundings`
- `🔧 All Materials Supplied`
- `📞 Same-Day Response`

Keep every label under 4 words. Use SVG icons for crisp rendering at all screen sizes.

---

### 3. Welcome / Story Section — 250 words

**Layout:** Two-column on desktop (60/40 split). Left column: headline + 3 paragraphs of body copy. Right column: the `about` image in a slightly rotated frame with a floating accent-color badge (e.g., *"Trusted Since 2009"*). Background: Secondary (light cream/ivory).

**Content Strategy:**
- **Paragraph 1 (Who We Are):** Introduce the company with a local anchor. Name the city/region explicitly for SEO. Mention years of experience and primary services. ~80 words.
- **Paragraph 2 (What We Do Differently):** Describe the process differentiator — custom design, in-house fabrication, single point of contact from design to installation. ~90 words.
- **Paragraph 3 (Community Proof):** Reference local projects, number of completed installations, or a named neighborhood/landmark. This is the local trust signal that converts fence-shoppers into callers. ~80 words.

**SEO Note:** This section should contain the primary H2 keyword (e.g., *"Custom Fencing Contractors in Zadar"*) and 2–3 secondary keywords naturally embedded in the body copy.

---

### 4. Service Grid — 200 words

**Layout:** 2×2 grid on desktop, single column on mobile. Each card contains: service image (16:9 aspect ratio), service name (H3), 2-sentence description, and a `Learn More →` text link. Background: White or very light Secondary.

**Content Strategy:** Each card targets one core service keyword:
- **Card 1 — Custom Fencing:** Emphasize material options (timber, aluminum, steel, composite, stone). Mention residential and commercial applications.
- **Card 2 — Automatic Gates:** Highlight security features, remote/app control, intercom integration, and motor brands supported.
- **Card 3 — Wooden & Aluminum Pergolas:** Contrast the warmth of timber with the low-maintenance durability of aluminum. Mention bioclimatic/louvered options.
- **Card 4 — Outdoor Decking:** Cover composite vs. hardwood, slip resistance, UV stability, and integration with pergola or fence systems.

Each description is ~40–50 words. Include the service keyword in the H3 for on-page SEO value.

---

### 5. Why Choose Us — 200 words

**Layout:** Dark background section (Primary color). 3-column icon grid on desktop. Each column: large SVG icon (accent color), bold H3, 2–3 sentence explanation. Optional: a full-width background texture (subtle wood grain or brushed metal at 5% opacity).

**Content Strategy:** Address the 3 biggest purchase anxieties in this niche:
- **Anxiety 1 — Will it last?** → Column: *"Built to Last Decades."* Discuss material quality, treatment processes, and warranty terms. ~60 words.
- **Anxiety 2 — Will it look right?** → Column: *"Custom Design, Every Time."* Emphasize bespoke design process, 3D visualization offer, and material sample visits. ~60 words.
- **Anxiety 3 — Will the job be clean and on time?** → Column: *"Professional Installation, Zero Mess."* Describe the installation crew, site cleanup protocol, and project timeline guarantees. ~60 words.

**Conversion Booster:** Add a centered CTA button at the bottom of this section: `Schedule Your Free Consultation` in Accent color.

---

### 6. Our Process — 200 words

**Layout:** Horizontal numbered timeline on desktop (4 steps), vertical accordion on mobile. Light background. Each step: number badge (accent color circle), H3 step title, 2–3 sentence description.

**Content Strategy:** Demystify the buying journey. Customers who understand the process are significantly more likely to convert because uncertainty is removed.

- **Step 1 — Free Site Visit & Consultation:** We visit your property, take measurements, discuss your vision, and assess site conditions. No obligation, no pressure. ~40 words.
- **Step 2 — Custom Design & Quote:** Within 48 hours you receive a detailed written quote with material specifications, design drawings, and a clear timeline. ~40 words.
- **Step 3 — Fabrication & Material Sourcing:** Your project enters our production schedule. We fabricate custom elements in-house and source premium materials from certified suppliers. ~40 words.
- **Step 4 — Professional Installation & Handover:** Our certified installation team completes the work to specification. Final walkthrough, care instructions, and warranty documentation provided on completion. ~40 words.

**Trust Reinforcement:** Add a small note below the timeline: *"Most residential projects completed within 5–10 working days of deposit confirmation."*

---

### 7. Interactive Estimate Form — 150 words

**Layout:** Split section. Left half: dark Primary background with a compelling headline (*"Get Your Free, No-Obligation Quote"*), 3 bullet-point reassurances, and the `cta_bg` image as a subtle background. Right half: white card with the form fields.

**Content Strategy:** Keep the form to **5 fields maximum** to maximize completion rates:
1. **Your Name** (text input)
2. **Phone Number** (tel input — primary contact method for this niche)
3. **Email Address** (email input)
4. **Service Interested In** (dropdown: Fencing / Automatic Gate / Pergola / Decking / Full Package)
5. **Brief Project Description** (textarea, 3 rows, placeholder: *"e.g., 40m of timber fence, rear garden, Zadar"*)

**Submit Button:** Full-width, Accent color, bold uppercase label: `SEND MY FREE QUOTE REQUEST`.

**Below Form:** Add micro-copy: *"We respond within 2 business hours. Your details are never shared."* This single line measurably reduces form abandonment.

---

### 8. FAQ Section — 300 words

**Layout:** Light background. Two-column accordion layout on desktop (questions split into 2 columns of 4), single column on mobile. Each question is a clickable H3 that expands to reveal the answer. Use `+` / `−` toggle icons in Accent color.

**Content Strategy:** Target long-tail question keywords that appear in Google's *People Also Ask* for this niche. Each answer should be 30–50 words — enough to satisfy the