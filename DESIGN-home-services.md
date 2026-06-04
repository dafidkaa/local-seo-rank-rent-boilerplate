# Visual Design & Customization Brief: Home Services Niche
**Target Niches:** Plumbing, HVAC, Roofing, Electrical, Landscaping, Pest Control, Locksmith

This document serves as the **exact visual and structural brief** for customizing the Astro Rank & Rent Boilerplate for any home services business. It is optimized for both human designers and AI-generation tools (e.g., Claude, GPT, Cursor) to produce a high-converting, authoritative, "$10,000-firm" aesthetic.

---

## 1. Core Brand Strategy: "The Authority Tradesman"

Home services websites must immediately convey three things: **trust, availability, and professionalism**. The design must feel like a long-standing, highly-rated local business, not a generic lead-generation site.

### Visual Pillars
*   **High-Contrast Authority:** Strong, deep colors for background surfaces (Navy, Forest Green, Charcoal) combined with bright, action-oriented accents (Amber, Gold, Electric Blue).
*   **Trust Gating:** Prominent display of badges (Licensed & Insured, Same-Day Service) immediately below or within the Hero section.
*   **Frictionless Actions:** A phone number and a simple form must be visible within the first 3 seconds of page load.

---

## 2. Niche-Specific Design Tokens

To apply a niche style, replace the `brand` object in `src/site.config.ts` with one of the following presets.

### Palette Presets

| Niche | Primary (Navy/Charcoal) | Secondary (Dark Surface) | Accent (Action Color) | Accent Dark | Hero Overlay |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Plumbing** | `#1e3a5f` (Deep Blue) | `#0f2a47` (Dark Navy) | `#f59e0b` (Amber Gold) | `#d97706` | `rgba(10, 24, 50, 0.68)` |
| **HVAC / Climate** | `#1e293b` (Slate Dark) | `#0f172a` (Charcoal) | `#38bdf8` (Ice Blue) | `#0284c7` | `rgba(15, 23, 42, 0.72)` |
| **Roofing** | `#2d3748` (Slate Grey) | `#1a202c` (Charcoal Grey) | `#e53e3e` (Safety Red) | `#9b2c2c` | `rgba(26, 32, 44, 0.75)` |
| **Electrical** | `#18181b` (Near Black) | `#09090b` (Pure Dark) | `#eab308` (Volt Yellow) | `#ca8a04` | `rgba(9, 9, 11, 0.75)` |
| **Landscaping** | `#14532d` (Forest Green) | `#0f2f1d` (Deep Moss) | `#f59e0b` (Warm Amber) | `#d97706` | `rgba(15, 47, 29, 0.70)` |

### Typography Pairings
*   **Display Font (Headings):** `Plus Jakarta Sans` or `Cabinet Grotesk` (900 weight, tight letter-spacing `-0.03em`, line-height `1.05` for hero, `1.15` for section headings).
*   **Body Font:** `DM Sans` or `Inter` (400 weight for copy, 600/700 for subheadings and strong text).

---

## 3. High-Converting Component Layouts

When building or modifying components for Home Services, enforce these exact layout rules:

### A. The Split Hero (Alternative to Slider)
*   **Left Column (60%):** Eyebrow badge with glowing dot → Massive H1 with bold keyword → Trust badges (Licensed, Same-Day) → Dual CTAs (Accent Button + Phone Link).
*   **Right Column (40%):** An inline **Estimate Form** nested inside a card with a subtle border and high-depth shadow (`box-shadow: var(--shadow-xl)`).
*   **Background:** High-quality, real-life photography of the trade in action (e.g., a professional plumber inspecting a pipe), darkened by the `brand.heroOverlay` gradient.

### B. Service Cards Grid
*   Must use **aspect-ratio 3/2** for service images.
*   **Hover Effect:** Image must scale up slightly (`scale(1.06)`), and the card must lift up (`translateY(-4px)`).
*   The card background must be pure white, with a subtle border (`1px solid #e2e8f0`) and high shadow contrast.

### C. The Process Section ("Simple as 1-2-3")
*   Must use a **dark charcoal background** (`#0f172a`) to break up the page flow.
*   Display exactly **4 steps** with large, glowing accent-colored numbers (e.g., `01`, `02`).
*   Connecting lines between steps are required on desktop (hidden on mobile).

---

## 4. AI Prompting Blueprint

Copy and paste this exact prompt into your AI tool (Cursor, Claude, etc.) when customizing this boilerplate for a Home Services niche:

```text
You are an expert frontend developer and conversion rate optimizer.
Customize the rank-and-rent Astro boilerplate for a [NICHE] business in [CITY], [STATE/REGION].

Follow these steps exactly:
1. Update `src/site.config.ts`:
   - Change `business` fields to reflect "[BUSINESS NAME]" in [CITY].
   - Apply the [NICHE] design tokens (colors, fonts, overlays) in the `brand` object.
   - Replace the `images` URLs with high-quality, trade-specific Unsplash photos (avoid vector illustrations).
   - Set up the main services and subservices specific to [NICHE].
2. Update `src/i18n/en.ts` (and other locale files):
   - Replace generic terms with trade-specific, action-oriented copy.
   - Example: Instead of "Service Completed", use "System Restored" or "Leak Repaired".
3. Verify that the build is completely static, with zero client-side JS runtime except for the hero slider and form submission handlers.
```
