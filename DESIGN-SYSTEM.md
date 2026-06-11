# DESIGN SYSTEM — Global Visual Playbook

This is the master design playbook for every site built from this boilerplate.
Each `DESIGN-[niche].md` brief layers niche personality on top of these rules —
read THIS file first, then the niche brief. Where the two disagree, the niche
brief wins.

The goal for every site: **beautiful, simple, modern, premium**. It should read
as the work of a design agency — confident type, generous space, one accent
used with restraint, photography that looks chosen rather than generated, and
motion you feel rather than notice.

---

## 1. What is wired in code vs. what you decide

Wired automatically by the theme preset (`src/lib/themes.ts` → `siteConfig.brand`):

| Concern | Mechanism |
|---|---|
| Colors (primary/secondary/accent + light/dark tints) | preset values → CSS vars |
| Surfaces, borders, shadows, photo overlays, dark sections | computed from brand colors via `color-mix` — never hardcode a color in a template |
| Fonts | `fontDisplay`/`fontBody` (+ `fontsHref` for families without 400–800 weights) |
| Corner language | `personality.radius`: `"sharp" \| "soft" \| "round"` → all radius tokens |
| Button shape & fill | `personality.button`: `"solid" \| "gradient"` + `--btn-radius` |
| Navigation treatment | `personality.nav`: `"solid" \| "overlay"` (see §3) |

You decide per site: imagery, copy, section emphasis, hero pattern, and any
preset overrides the niche brief calls for.

## 2. Typography

- Two families only: display (headings, buttons, eyebrows) + body. Never a third.
- Headings: tight tracking (wired via `--heading-tracking`), `text-wrap: balance`,
  weight 700–800. H1 on heroes may go larger than the scale — presence over politeness.
- Body: 16px minimum, line-height ~1.7, max width ~68ch. Never grey-on-grey below
  4.5:1 contrast.
- Eyebrows/kickers: small caps, 0.12–0.14em tracking, accent rule before the text
  (wired as `.eyebrow`). One per section, always paired with a real heading.
- FONT SAFETY: the default font URL requests weights 400–800. If a niche brief
  recommends a family without all of those (Cormorant, Cinzel, Bebas Neue,
  Varela Round…), it MUST also provide the exact `fontsHref` URL — otherwise the
  request 404s and the site silently falls back to system fonts.

## 3. Navigation — two treatments

**Solid (default — trades & standard local services).** Utility bar (phone +
trust badges) above a glass sticky header. Reads dependable and service-like.

**Overlay (premium & visual niches).** No utility bar. The header is transparent
and *embedded inside the hero* — white logo/nav over the photography — and turns
into the glass bar on scroll. Reads editorial and high-end.
Set by `personality.nav: "overlay"`; requires every page to open with a dark
hero (all templates do). Don't mix: choose one treatment per site.

## 4. Hero patterns

Pick ONE per site, per the master prompt's logic:

1. **Slider hero** — premium/visual niches. 3–4 slides, no visible arrows; dots
   carry an auto-advance progress fill. Each slide: real photo, strong headline,
   one primary + one secondary CTA, glass trust badges.
2. **Static hero** — authority niches (legal, medical, funeral). One excellent
   photo, H1, short supporting line, CTA pair. Calm beats clever.
3. **Static hero + embedded form** — high-intent standard services. Form card on
   the right (desktop), under the headline on mobile. Never put a form on a slider.

All heroes use the brand-derived overlay (auto): directional gradient from
`--brand-secondary` plus a soft accent glow — never a flat black scrim.

## 5. Buttons & CTAs

- Primary: accent fill (solid or gradient per personality), inset top highlight,
  accent-tinted glow shadow, lift on hover (wired). One primary per view.
- Secondary: outline — white-on-dark sections, primary-on-light.
- Labels are verbs with outcomes: "Get a Free Estimate", "Book an Appointment",
  "Check Your Date" — never "Submit", "Click Here", "Learn More" on a CTA
  (card links may use "Learn more →").
- Form strategy: premium niches = popup inquiry modal from CTAs, embedded form
  only on the contact page. Standard niches = embedded hero/contact forms + popups
  on inner pages. (Master prompt §8.)

## 6. Sections & rhythm

- Alternate backgrounds so the page breathes: white → brand-tinted
  (`.section-light`) → white → dark gradient (`.section-charcoal`) — roughly one
  dark band per 4–5 sections, used for "why us", process, or stats.
- Dark sections get the wired gradient + accent glow; never flat near-black.
- Section headers: eyebrow + H2 + one-sentence lead, centered for grids,
  left-aligned for split layouts.
- Split (image + text) sections: wrap the image in `.img-premium` for the offset
  accent frame. Alternate image left/right down the page.
- Generous padding (`--section-pad`), and trust the whitespace — premium is
  mostly the confidence to leave things out.

## 7. Motion — subtle or not at all

Wired: scroll-reveal with stagger, stat count-ups, hover lifts, slider progress.
Rules (from UX research — violating these reads as AI slop):

- UI transitions 150–300ms; nothing over 500ms. Ease-out for entrances.
- Animation must convey meaning (arrival, hierarchy, feedback) — no decoration
  loops, no infinite pulses, no parallax for its own sake.
- Never rely on hover alone (touch devices); never animate width/height (jank).
- `prefers-reduced-motion` is always respected (wired — keep it that way).
- One signature moment per page is enough: the hero reveal IS the show.

## 8. Imagery

- Photography is the single biggest premium signal. Budget 6–10 images per major
  page: hero + one per major section + a 4–6 image gallery (`service.gallery`).
- **Verify every image actually shows its subject before shipping** — open it.
  A headphones photo on a plumbing page destroys more trust than no photo.
- Subjects: the work, the result, the tools, the environment, honest before/after.
  Avoid: posed grinning teams, watermarked stock clichés, AI-looking faces,
  random skylines, identical-vibe images repeated.
- Treatment is wired: brand-tinted overlays on heroes/cards, rounded corners per
  personality, `.img-premium` frames on splits. Don't add filters in the images
  themselves.
- Icons: ALWAYS `Icon.astro` (SVG stroke set) in tinted squircle chips. Emoji as
  icons is a hard anti-pattern.

## 9. Anti-slop checklist (run before shipping)

- [ ] One accent color, used sparingly; no rainbow gradients
- [ ] No emoji icons anywhere; SVG strokes only
- [ ] Every image verified relevant; alt text descriptive, not stuffed
- [ ] No wall-to-wall card grids — vary section layouts down the page
- [ ] Headings are statements, not keyword strings
- [ ] No infinite/looping animations; motion under 300ms
- [ ] Buttons say what happens next; exactly one primary CTA per view
- [ ] Dark sections ≤ 1 in 4; light mode overall (master prompt)
- [ ] Real trust signals only — never invent licenses, ratings, or guarantees
- [ ] Mobile: 44px tap targets, no horizontal scroll, sticky CTA bar works
