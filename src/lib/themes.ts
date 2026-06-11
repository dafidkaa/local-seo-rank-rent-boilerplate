/**
 * Niche Theme Presets
 * ===================
 * Ready-made visual identities per industry, aligned with the DESIGN-*.md
 * briefs. Spread one into `siteConfig.brand` and override what you need:
 *
 *   import { themePreset } from "@/lib/themes";
 *   brand: {
 *     ...themePreset("home-services"),
 *     logoText: "Austin Pro Plumbing",
 *     logoAccent: "Pro",
 *     images: { ... }
 *   }
 *
 * FONT SAFETY: every font family used here carries the full 400–800 weight
 * range on Google Fonts. If you swap in a different family, verify it has
 * weights 400/500/600/700/800 — or provide an explicit `fontsHref` —
 * otherwise the Google Fonts request fails and the site falls back to
 * system fonts.
 */

export type ThemePersonality = {
  /** Corner language: "sharp" (legal/automotive), "soft" (default), "round" (beauty/pets) */
  radius: "sharp" | "soft" | "round";
  /** Primary CTA treatment */
  button: "gradient" | "solid";
  /**
   * Navigation treatment:
   * "solid"   — utility bar + solid glass header above the hero (trades/standard niches)
   * "overlay" — transparent header embedded INSIDE the hero, turns glass on scroll
   *             (premium/visual niches; requires every page to open with a dark hero,
   *             which all boilerplate templates do)
   */
  nav: "solid" | "overlay";
};

export type ThemePreset = {
  primary: string;
  secondary: string;
  accent: string;
  accentDark: string;
  accentLight: string;
  dark: string;
  light: string;
  heroOverlay: string;
  fontDisplay: string;
  fontBody: string;
  /** Optional full Google Fonts URL override (use for families without 400–800) */
  fontsHref?: string;
  /** Visual personality — drives radius scale and button shape site-wide */
  personality?: ThemePersonality;
};

/** Radius token sets per personality (consumed by BaseLayout) */
export const radiusScales: Record<ThemePersonality["radius"], Record<string, string>> = {
  sharp: { sm: "2px", md: "5px",  lg: "8px",  xl: "12px", "2xl": "16px", btn: "6px" },
  soft:  { sm: "4px", md: "8px",  lg: "12px", xl: "20px", "2xl": "28px", btn: "10px" },
  round: { sm: "6px", md: "12px", lg: "18px", xl: "26px", "2xl": "36px", btn: "999px" },
};

export const themes = {
  /** Plumbing, HVAC, electrical, roofing, handyman — navy + amber, confident and practical */
  "home-services": {
    primary: "#1e3a5f", secondary: "#0f2a47",
    accent: "#f59e0b", accentDark: "#d97706", accentLight: "#fef3c7",
    dark: "#0f172a", light: "#f8fafc",
    heroOverlay: "rgba(10, 24, 50, 0.68)",
    fontDisplay: "Poppins", fontBody: "Inter",
    personality: { radius: "soft", button: "gradient", nav: "solid" },
  },
  /** Clinics, dentists, physio — deep teal + mint, calm and clinical-but-warm */
  medical: {
    primary: "#0f766e", secondary: "#115e59",
    accent: "#14b8a6", accentDark: "#0d9488", accentLight: "#ccfbf1",
    dark: "#134e4a", light: "#f0fdfa",
    heroOverlay: "rgba(15, 78, 74, 0.62)",
    fontDisplay: "Plus Jakarta Sans", fontBody: "Inter",
    personality: { radius: "soft", button: "solid", nav: "solid" },
  },
  /** Law firms, notaries, accountants — charcoal + bronze, serif authority */
  legal: {
    primary: "#1f2937", secondary: "#111827",
    accent: "#b45309", accentDark: "#92400e", accentLight: "#fef3c7",
    dark: "#0b0f17", light: "#f9fafb",
    heroOverlay: "rgba(13, 18, 28, 0.72)",
    fontDisplay: "Playfair Display", fontBody: "Inter",
    personality: { radius: "sharp", button: "solid", nav: "overlay" },
  },
  /** Salons, spas, aesthetics — rose + soft neutrals, elegant and airy */
  beauty: {
    primary: "#9d174d", secondary: "#831843",
    accent: "#db2777", accentDark: "#be185d", accentLight: "#fce7f3",
    dark: "#500724", light: "#fdf2f8",
    heroOverlay: "rgba(80, 7, 36, 0.55)",
    fontDisplay: "Playfair Display", fontBody: "Jost",
    personality: { radius: "round", button: "solid", nav: "overlay" },
  },
  /** Agencies, brokers, property management — deep green + gold, established wealth */
  "real-estate": {
    primary: "#14532d", secondary: "#166534",
    accent: "#ca8a04", accentDark: "#a16207", accentLight: "#fef9c3",
    dark: "#052e16", light: "#f7fee7",
    heroOverlay: "rgba(5, 46, 22, 0.62)",
    fontDisplay: "Sora", fontBody: "Inter",
    personality: { radius: "sharp", button: "solid", nav: "overlay" },
  },
  /** Repair shops, detailing, tires — slate + signal red, technical energy */
  automotive: {
    primary: "#0f172a", secondary: "#1e293b",
    accent: "#dc2626", accentDark: "#b91c1c", accentLight: "#fee2e2",
    dark: "#020617", light: "#f8fafc",
    heroOverlay: "rgba(2, 6, 23, 0.7)",
    fontDisplay: "Sora", fontBody: "Inter",
    personality: { radius: "sharp", button: "gradient", nav: "solid" },
  },
  /** Builders, renovation, excavation — warm gray + safety orange, robust */
  construction: {
    primary: "#292524", secondary: "#1c1917",
    accent: "#ea580c", accentDark: "#c2410c", accentLight: "#ffedd5",
    dark: "#0c0a09", light: "#fafaf9",
    heroOverlay: "rgba(12, 10, 9, 0.68)",
    fontDisplay: "Outfit", fontBody: "Inter",
    personality: { radius: "sharp", button: "gradient", nav: "solid" },
  },
  /** Maid services, commercial cleaning, windows — fresh blue + cyan, crisp */
  cleaning: {
    primary: "#0369a1", secondary: "#075985",
    accent: "#06b6d4", accentDark: "#0891b2", accentLight: "#cffafe",
    dark: "#0c4a6e", light: "#f0f9ff",
    heroOverlay: "rgba(7, 60, 92, 0.6)",
    fontDisplay: "Plus Jakarta Sans", fontBody: "DM Sans",
    personality: { radius: "round", button: "gradient", nav: "solid" },
  },
  /** Lawn care, tree service, gardens, fencing — forest green + harvest amber */
  landscaping: {
    primary: "#166534", secondary: "#14532d",
    accent: "#d97706", accentDark: "#b45309", accentLight: "#fef3c7",
    dark: "#052e16", light: "#f7fee7",
    heroOverlay: "rgba(5, 46, 22, 0.6)",
    fontDisplay: "Outfit", fontBody: "Inter",
    personality: { radius: "soft", button: "gradient", nav: "solid" },
  },
  /** Vets, grooming, boarding — friendly teal + coral, approachable */
  "pet-care": {
    primary: "#0d9488", secondary: "#0f766e",
    accent: "#f97316", accentDark: "#ea580c", accentLight: "#ffedd5",
    dark: "#134e4a", light: "#f0fdfa",
    heroOverlay: "rgba(19, 78, 74, 0.58)",
    fontDisplay: "Nunito", fontBody: "Inter",
    personality: { radius: "round", button: "gradient", nav: "solid" },
  },
  /** Gyms, personal training, studios — near-black + lime, high energy */
  fitness: {
    primary: "#18181b", secondary: "#27272a",
    accent: "#84cc16", accentDark: "#65a30d", accentLight: "#ecfccb",
    dark: "#09090b", light: "#fafafa",
    heroOverlay: "rgba(9, 9, 11, 0.72)",
    fontDisplay: "Outfit", fontBody: "Inter",
    personality: { radius: "sharp", button: "gradient", nav: "overlay" },
  },
  /** Tutoring, childcare, courses — indigo + warm yellow, optimistic */
  education: {
    primary: "#4338ca", secondary: "#3730a3",
    accent: "#f59e0b", accentDark: "#d97706", accentLight: "#fef3c7",
    dark: "#1e1b4b", light: "#eef2ff",
    heroOverlay: "rgba(30, 27, 75, 0.64)",
    fontDisplay: "Plus Jakarta Sans", fontBody: "Inter",
    personality: { radius: "round", button: "gradient", nav: "solid" },
  },
  /** Limo, moving, courier, shuttle — deep navy + golden yellow, dependable */
  transportation: {
    primary: "#1e3a8a", secondary: "#1e40af",
    accent: "#eab308", accentDark: "#ca8a04", accentLight: "#fef9c3",
    dark: "#172554", light: "#f8fafc",
    heroOverlay: "rgba(23, 37, 84, 0.66)",
    fontDisplay: "Sora", fontBody: "Inter",
    personality: { radius: "soft", button: "gradient", nav: "solid" },
  },
  /** Alarm systems, smart home, CCTV — graphite + electric blue, precise */
  security: {
    primary: "#111827", secondary: "#1f2937",
    accent: "#2563eb", accentDark: "#1d4ed8", accentLight: "#dbeafe",
    dark: "#030712", light: "#f9fafb",
    heroOverlay: "rgba(3, 7, 18, 0.72)",
    fontDisplay: "Sora", fontBody: "Inter",
    personality: { radius: "sharp", button: "solid", nav: "solid" },
  },
  /** Weddings, venues, catering — plum + rose, celebratory and refined */
  events: {
    primary: "#701a75", secondary: "#581c87",
    accent: "#e11d48", accentDark: "#be123c", accentLight: "#ffe4e6",
    dark: "#3b0764", light: "#fdf4ff",
    heroOverlay: "rgba(59, 7, 100, 0.6)",
    fontDisplay: "Playfair Display", fontBody: "Jost",
    personality: { radius: "round", button: "solid", nav: "overlay" },
  },
  /** Funeral homes, memorials — muted slate + soft gold, dignified serif */
  funeral: {
    primary: "#334155", secondary: "#1e293b",
    accent: "#a16207", accentDark: "#854d0e", accentLight: "#fef9c3",
    dark: "#0f172a", light: "#f8fafc",
    heroOverlay: "rgba(15, 23, 42, 0.62)",
    fontDisplay: "EB Garamond", fontBody: "Inter",
    personality: { radius: "soft", button: "solid", nav: "overlay" },
  },
  /** High-end niches (luxury remodel, yachts, private services) — ink + champagne */
  luxury: {
    primary: "#1c1917", secondary: "#292524",
    accent: "#b45309", accentDark: "#92400e", accentLight: "#fef3c7",
    dark: "#0c0a09", light: "#fafaf9",
    heroOverlay: "rgba(12, 10, 9, 0.66)",
    fontDisplay: "Playfair Display", fontBody: "Inter",
    personality: { radius: "sharp", button: "solid", nav: "overlay" },
  },
} satisfies Record<string, ThemePreset>;

export type ThemeName = keyof typeof themes;

export const themePreset = (name: ThemeName): ThemePreset => themes[name];
