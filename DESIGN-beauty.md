# DESIGN BRIEF — Beauty (Salons / Spas / Aesthetics)

> **Wired in code:** `themePreset("beauty")` -> plum #9d174d / rose #db2777 | Playfair Display + Jost | round corners, solid pill CTAs, overlay nav.
> Read **DESIGN-SYSTEM.md** first — it carries the global rules (type, nav variants,
> buttons, motion, imagery, anti-slop checklist). This brief adds the niche layer.

## Positioning & feel
Sensorial, airy, editorial. Soft light, texture close-ups, unhurried pacing — a magazine spread that books appointments.

## Palette & accent discipline
Preset palette: plum #9d174d / rose #db2777. Rose for pill CTAs and small highlights. Let photography carry the color; UI stays quiet around it.

## Typography
Preset pairing: **Playfair Display + Jost** (weights wired automatically).
Optional premium upgrade: **Luxury Serif — Cormorant + Montserrat** — set `fontDisplay`/`fontBody` AND
`fontsHref: "https://fonts.googleapis.com/css2?family=Cormorant:wght@500;600;700&family=Montserrat:wght@400;500;600;700&display=swap"` (this family set needs an explicit URL).

## Navigation & hero
Slider hero with overlay nav — 3 editorial slides (signature treatment, ambience, results). Dots only, slow Ken Burns.
- Primary CTA: **"Book an Appointment"** | Secondary: **"View Treatments"**
- Form strategy: **premium — popup inquiry modal from CTAs; embedded form only on the contact page**

## Section rhythm
Follow the standard service/location templates (hero -> quick answer -> stats ->
sub-services -> signs -> pros/cons -> comparison -> why-us -> process -> gallery ->
area -> FAQ -> CTA) with the cadence rules from DESIGN-SYSTEM.md s6. Emphasize the
signature sections below; cut anything that would be filler for this niche.

## Signature sections (build these well)
1. Treatment menu — elegant list layout (name, duration, from-price) over cards
2. Results gallery with lightbox (service.gallery) — skin/hair/nails close-ups
3. Ambience section — full-bleed interior photo with one floating quote
4. Gift card / package CTA band in the accent-light tint

## Imagery direction
Soft natural light, treatment close-ups, botanical/towel/stone textures, serene interiors. Editorial portraits welcome here (the exception to the faces rule).

**Unsplash starting queries** (verify every result actually shows the subject):
- "spa treatment ambience candles"
- "salon interior soft light"
- "facial treatment closeup serene"
- "botanical skincare flatlay"
- "massage stones towels texture"
- "elegant manicure detail"

**Never:** clinical white boxes, duck-face selfies, harsh flash photography.

## Copy tone
Second person, sensory verbs, short lines. Sell the feeling, list the facts.

## Do
- Round everything — the pill buttons and 26px cards are the brand
- Extra line-height and letter-space on eyebrows; airiness is the aesthetic
- Overlay nav + slider is mandatory; this is the flagship premium treatment

## Don't
- Dense grids — max 3 columns, ever
- Discount-shouting (50% OFF!!) — premium pricing language only
- More than one dark section per page
