# DESIGN BRIEF — Real Estate (Agencies / Brokers / Property Management)

> **Wired in code:** `themePreset("real-estate")` -> deep green #14532d / gold #ca8a04 | Sora + Inter | sharp corners, solid CTAs, overlay nav.
> Read **DESIGN-SYSTEM.md** first — it carries the global rules (type, nav variants,
> buttons, motion, imagery, anti-slop checklist). This brief adds the niche layer.

## Positioning & feel
Established wealth, local mastery. Architectural photography, gold restraint, confident geometric sans.

## Palette & accent discipline
Preset palette: deep green #14532d / gold #ca8a04. Gold for CTAs, stat numerals, and map pins. Deep green is the suit; gold is the watch.

## Typography
Preset pairing: **Sora + Inter** (weights wired automatically).
Optional premium upgrade: **Real Estate Luxury — Cinzel + Josefin Sans** — set `fontDisplay`/`fontBody` AND
`fontsHref: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Josefin+Sans:wght@300;400;500;600;700&display=swap"` (this family set needs an explicit URL).

## Navigation & hero
Slider hero with overlay nav — property photography carries it. Slide per market promise (sell, buy, manage).
- Primary CTA: **"Request a Valuation"** | Secondary: **"Browse Properties"**
- Form strategy: **premium — popup inquiry modal from CTAs; embedded form only on the contact page**

## Section rhythm
Follow the standard service/location templates (hero -> quick answer -> stats ->
sub-services -> signs -> pros/cons -> comparison -> why-us -> process -> gallery ->
area -> FAQ -> CTA) with the cadence rules from DESIGN-SYSTEM.md s6. Emphasize the
signature sections below; cut anything that would be filler for this niche.

## Signature sections (build these well)
1. Featured listings grid — large photos, price + beds/baths chips, hover reveal
2. Sold/managed stats band (StatsBar) — volume numbers are the trust currency
3. Area guides linking location pages — this niche's topical-authority engine
4. Agent introduction split section with .img-premium portrait

## Imagery direction
Golden-hour exteriors, wide interior shots, neighborhood aerials, architectural detail. Always straightened verticals.

**Unsplash starting queries** (verify every result actually shows the subject):
- "modern house exterior golden hour"
- "luxury living room interior wide"
- "aerial suburban neighborhood"
- "architect detail facade"
- "house keys handover"
- "city residential street trees"

**Never:** fisheye interiors, oversaturated HDR, sold-sign cliches.

## Copy tone
Assured, numbers-forward, locally fluent — name streets and districts.

## Do
- Overlay nav over hero photography — the inventory IS the design
- Use ComparisonTable for with-us vs private-sale
- Sharp corners; this preset reads architectural

## Don't
- Carousel-ing 20 listings on the home page — curate six
- Generic skyline heroes — show actual property types served
- Rounded-bubbly UI; keep edges
