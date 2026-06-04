# Niche Design Brief: Fitness, Gyms & Personal Training

This document defines the visual guidelines, typography, color palette, and asset map for the **CrossFit Boxes, Traditional Gyms, Yoga Studios, Personal Training, and Wellness Centers** niche.

---

## 1. Brand Identity & Visual Strategy

### Tone & Mood

The fitness niche demands a brand identity that communicates **transformation, energy, and expert guidance**. The overarching tone should be **motivating and aspirational**, yet also **approachable and results-focused**. Visitors arrive with a specific goal — weight loss, muscle gain, athletic performance, or stress relief — and the design must immediately validate that goal and present a credible path forward.

The core emotional drivers are the **desire for self-improvement**, the **fear of stagnation**, and the **joy of visible progress**. Trust signals are critical: certifications (NASM, ACE, NSCA), before/after testimonials, and transparent pricing all reduce the friction that prevents sign-ups. The design must feel like a place where real people achieve real results, not a glossy magazine spread.

Sub-niche tone variations are important. High-intensity and CrossFit brands should lean into **raw power, community, and competitive spirit**. Yoga and wellness studios should shift toward **calm, balance, and mindful restoration**. Personal training brands should emphasize **personalized attention, accountability, and measurable outcomes**.

### Color Palette Presets

| Sub-Niche Preset | Primary (Dominant) Hex | Secondary (Dark Surface) Hex | Accent (Action Color) Hex | Accent Dark Hex | Hero Overlay (RGBA) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **High-Intensity / CrossFit** | `#1c1c1e` (Near Black) | `#0a0a0b` (Pure Dark) | `#ef4444` (Power Red) | `#dc2626` | `rgba(28,28,30,0.72)` |
| **Yoga & Wellness Studio** | `#1e3a2f` (Deep Forest) | `#0f2a1f` (Dark Moss) | `#84cc16` (Lime Green) | `#65a30d` | `rgba(15,42,31,0.68)` |
| **Traditional Gym / Bodybuilding** | `#0f172a` (Charcoal Navy) | `#060d1a` (Deep Dark) | `#f59e0b` (Amber Gold) | `#d97706` | `rgba(9,13,26,0.75)` |
| **Personal Training (Premium)** | `#312e81` (Deep Indigo) | `#1e1b4b` (Dark Indigo) | `#38bdf8` (Sky Blue) | `#0284c7` | `rgba(30,27,75,0.70)` |

### Typography Pairings

- **Display Font (Headings):** `Barlow Condensed` (800 weight, `-0.02em` letter-spacing, `1.05` line-height for hero) — bold, athletic, high-impact. Communicates strength and urgency.
- **Body Font:** `DM Sans` or `Inter` (400 weight for copy, 600/700 for subheadings) — clean, readable, modern. Ensures legibility across all device sizes.

---

## 2. Image Asset Map (Unsplash References)

Use photography representing real athletes in action, professional training environments, and visible results. Avoid stock-photo clichés (people laughing on treadmills).

| Image Key | Description | Recommended Search Query |
| :--- | :--- | :--- |
| `hero` | Athletes training intensely in a modern, well-lit gym | `modern gym workout training intensity` |
| `about` | Gym interior with equipment and natural light | `gym interior equipment modern clean` |
| `team` | Certified personal trainer coaching a client with proper form | `personal trainer coaching client form` |
| `process` | Client performing a structured, focused workout session | `structured workout session focused` |
| `service1` | One-on-one personal training session with weights | `personal training one on one weights` |
| `service2` | Energetic group fitness class in action | `group fitness class energetic HIIT` |
| `service3` | Peaceful yoga or stretching class in a bright studio | `yoga class studio peaceful light` |
| `service4` | Nutrition coaching or healthy meal planning session | `nutrition coaching healthy food planning` |

---

## 3. Section Architecture & Word Count Distribution

To hit the **1,000–1,500 word density target**, organize sections with alternating light/dark layouts:

1. **Hero Slider:** Bold, city-specific headline targeting local fitness seekers ("Transform Your Body in [City]"). Dual CTA: "Start Free Trial" (accent button) + "Call Now" (phone link). Trust badge row: Certified Trainers, No Long-Term Contract, Results Guaranteed. (150 words)

2. **Trust Bar:** 4 stat badges displayed in a high-contrast dark strip: "500+ Members Transformed", "NASM/ACE Certified Trainers", "No Long-Term Contracts", "First Session Free". (50 words)

3. **Welcome / Story Section:** Origin story of the gym or trainer. Philosophy of personalized fitness and commitment to member results. Include a pull quote from a real transformation story. Emphasize the local community angle. (250 words)

4. **Service Grid:** Cards for Personal Training, Group Classes, Nutrition Coaching, and Online Training. Each card includes a benefit-driven description (not just a list of features), a price range, and a "Learn More" CTA. (200 words)

5. **Why Choose Us:** Certified trainers, state-of-the-art equipment, flexible scheduling, proven methodology, and community atmosphere. Use a 3-column icon grid with short, punchy benefit statements. (200 words)

6. **Our Process:** 4-step journey displayed on a dark background: Free Assessment → Custom Program Design → Guided Training Sessions → Progress Tracking & Adjustment. Each step includes a 2-3 sentence description. (200 words)

7. **Interactive Estimate Form:** Wide 2-column form with fields for fitness goal (dropdown: Weight Loss, Muscle Gain, Athletic Performance, General Fitness), preferred schedule, and contact info. Headline: "Start Your Free Assessment Today". (150 words)

8. **FAQ Section:** Address the most common objections: "Am I fit enough to start?", "How quickly will I see results?", "Do you offer payment plans?", "What if I miss a session?", "Do you offer nutrition advice?". Each answer should be 2-3 sentences. (300 words)

---

## 4. High-Converting Component Layouts

### A. The Niche-Specific Hero Section

The fitness hero must immediately communicate energy and transformation. Use a full-bleed action photography background (athlete mid-workout, not posed) with the niche-appropriate dark overlay. The headline should be large (`clamp(2.5rem, 6vw, 4.5rem)`), bold (800 weight), and contain the city name for local SEO. Place a primary CTA button in the accent color alongside a secondary "Call Now" link. A row of 3 trust badges (Certified, No Contract, Free Trial) should appear immediately below the headline in a semi-transparent dark pill strip.

### B. Service Cards Grid

Use a 3-column grid on desktop, 2-column on tablet, 1-column on mobile. Each card uses `aspect-ratio: 4/3` for the image. On hover, the image scales to `scale(1.05)` and the card lifts with `translateY(-4px)` and `box-shadow: 0 20px 40px rgba(0,0,0,0.15)`. The card background is pure white with a `1px solid #e2e8f0` border. The service name uses the display font at 700 weight. Include a price range badge in the top-right corner of the image using the accent color.

### C. Trust Signals & Interactive Elements

Display certification badges (NASM, ACE, NSCA) as small, recognizable logo images in a horizontal row below the hero. The estimate form should include a "Fitness Goal" dropdown to personalize the experience. Add a subtle urgency element near the form CTA ("Limited spots available this week"). Member testimonials with specific, measurable results ("Lost 18kg in 4 months") are the highest-converting trust element in this niche and should be prominently featured.

---

## 5. AI Prompting Blueprint

Copy and paste this exact prompt into your AI tool (Cursor, Claude, etc.) when customizing this boilerplate for a Fitness niche:

```text
You are an expert frontend developer and conversion rate optimizer.
Customize the rank-and-rent Astro boilerplate for a [NICHE] fitness business in [CITY], [STATE/REGION].
Follow these steps exactly:
1. Update `src/site.config.ts`:
   - Change `business` fields to reflect "[GYM/STUDIO NAME]" in [CITY].
   - Apply the fitness design tokens from DESIGN-fitness-gyms-personal-training.md.
   - Replace the `images` URLs with high-quality, action-oriented Unsplash photos of real athletes.
   - Set up the main services: Personal Training, Group Classes, Nutrition Coaching, Online Training.
2. Update `src/i18n/en.ts` (and other locale files):
   - Replace generic terms with fitness-specific, motivational copy.
   - Example: Instead of "Request Estimate", use "Start Your Free Assessment".
   - Write transformation-focused copy: "From where you are to where you want to be."
   - FAQ answers should address real objections: fitness level, results timeline, payment plans.
3. Verify that the build is completely static, with zero client-side JS runtime except for the hero slider and form submission handlers.
```
