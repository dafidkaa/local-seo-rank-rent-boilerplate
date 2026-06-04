# Visual Design & Customization Brief: Transportation Niche
**Target Niches:** Airport Transfers, Chauffeur Services, Limo Rentals, Moving Companies, Local Delivery, Towing

This document serves as the **exact visual and structural brief** for customizing the Astro Rank & Rent Boilerplate for any transportation or logistics service. It is optimized for both human designers and AI-generation tools (e.g., Claude, GPT, Cursor) to produce a high-converting, authoritative, "$10,000-firm" aesthetic.

---

## 1. Core Brand Strategy: "Precision & Prestige"

Transportation websites must convey **reliability, punctuality, safety, and luxury (or speed)**. The design must feel clean, sleek, and highly organized, emphasizing fleet quality and ease of booking.

### Visual Pillars
*   **Sleek Minimalism:** Wide layouts, clean borders, high-contrast typography, and generous white space.
*   **Fleet-Forward Imagery:** Large, high-resolution photos of vehicles, professional drivers, and pristine interiors.
*   **Instant Booking Path:** Clear step-by-step process showing how easy it is to schedule a ride or transfer.

---

## 2. Niche-Specific Design Tokens

To apply a niche style, replace the `brand` object in `src/site.config.ts` with one of the following presets.

### Palette Presets

| Niche | Primary (Navy/Charcoal) | Secondary (Dark Surface) | Accent (Action Color) | Accent Dark | Hero Overlay |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Chauffeur / Limo** | `#0f172a` (Slate Black) | `#020617` (Deep Night) | `#c9a96e` (Champagne Gold) | `#b49156` | `rgba(2, 6, 23, 0.72)` |
| **Airport Transfer** | `#1e3a5f` (Deep Navy) | `#0f2a47` (Dark Navy) | `#10b981` (Emerald Green) | `#059669` | `rgba(10, 24, 50, 0.65)` |
| **Moving Services** | `#1e293b` (Slate Dark) | `#0f172a` (Charcoal) | `#f97316` (Safety Orange) | `#ea580c` | `rgba(15, 23, 42, 0.70)` |
| **Towing / Recovery** | `#18181b` (Near Black) | `#09090b` (Pure Dark) | `#eab308` (Caution Yellow) | `#ca8a04` | `rgba(9, 9, 11, 0.78)` |

### Typography Pairings
*   **Display Font (Headings):** `Plus Jakarta Sans` or `Syne` (800/900 weight, tight letter-spacing `-0.03em`, wide tracking for a modern, sleek feel).
*   **Body Font:** `DM Sans` or `Inter` (400 weight for copy, 500/600 for structured lists and pricing).

---

## 3. High-Converting Component Layouts

When building or modifying components for Transportation, enforce these exact layout rules:

### A. The Full-Bleed Fleet Hero
*   **Background:** High-resolution, crisp image of a premium vehicle (e.g., a black sedan or a modern moving truck) parked in a clean, iconic city setting.
*   **Overlay:** A rich dark blue or charcoal overlay (`brand.heroOverlay`) to ensure text readability.
*   **Layout:** Centered or left-aligned text with an **instant booking widget** or a prominent phone number CTA that stands out in accent color.

### B. Fleet / Service Grid
*   Instead of generic service icons, use **real or AI-generated vehicle photography**.
*   Each card should include key specifications below the title (e.g., "Up to 4 Passengers", "3 Large Bags", "Free Wi-Fi").
*   Use subtle, elegant dividers between spec lines (`1px solid #f1f5f9`).

### C. Trust Signals & Stats
*   Include a prominent **Trust Bar** immediately below the hero slide with stats:
    *   `100%` On-Time Guarantee
    *   `Licensed & Insured` Fleet
    *   `24/7` Flight Tracking & Dispatch

---

## 4. AI Prompting Blueprint

Copy and paste this exact prompt into your AI tool (Cursor, Claude, etc.) when customizing this boilerplate for a Transportation niche:

```text
You are an expert frontend developer and conversion rate optimizer.
Customize the rank-and-rent Astro boilerplate for a [NICHE] business in [CITY], [STATE/REGION].

Follow these steps exactly:
1. Update `src/site.config.ts`:
   - Change `business` fields to reflect "[BUSINESS NAME]" in [CITY].
   - Apply the [NICHE] design tokens (colors, fonts, overlays) in the `brand` object.
   - Replace the `images` URLs with high-quality, vehicle-specific Unsplash photos (avoid vector illustrations).
   - Set up the fleet/service categories and subservices specific to [NICHE].
2. Update `src/i18n/en.ts` (and other locale files):
   - Replace generic terms with transportation-specific, precision-oriented copy.
   - Example: Instead of "Request Estimate", use "Book My Transfer" or "Get a Ride Quote".
3. Verify that the build is completely static, with zero client-side JS runtime except for the hero slider and form submission handlers.
```
