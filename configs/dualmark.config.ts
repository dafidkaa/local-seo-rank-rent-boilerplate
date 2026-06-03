export type Locale = "en";

export type LocaleConfig = {
  code: Locale;
  label: string;
  path: string;
  connector: string;
};

export type LocalizedText = Record<Locale, string>;

export type ServiceItem = {
  id: string;
  title: LocalizedText;
  short: LocalizedText;
  image: string;
  children: Array<{
    id: string;
    title: LocalizedText;
    short: LocalizedText;
    faq: Array<{ question: LocalizedText; answer: LocalizedText }>;
  }>;
};

export type HeroSlide = {
  image: string;
  title: LocalizedText;
  text: LocalizedText;
  primaryText: LocalizedText;
  primaryHref: string;
  secondaryText?: LocalizedText;
  secondaryHref?: string;
};

export type BlogCategory = {
  id: string;
  label: LocalizedText;
};

export const siteConfig = {
  siteUrl: "https://dualmark.dev",
  defaultLocale: "en" as Locale,
  legalLastUpdated: "2026-01-15",
  locales: [
    { code: "en" as Locale, label: "English", path: "/en", connector: "in" }
  ],
  business: {
    name: "DualMark Digital",
    legalName: "DualMark Digital LLC",
    foundedYear: "2022",
    primaryService: {
      en: "Local SEO"
    },
    primaryGbpCategory: "Marketing agency",
    secondaryGbpCategories: [
      "Advertising agency",
      "Internet marketing service",
      "SEO service",
      "Consultant",
      "Professional services"
    ],
    city: "Austin",
    region: "Texas",
    country: "US",
    serviceArea: "Austin Metro",
    phone: "+1 555 010 2020",
    email: "hello@dualmark.dev",
    address: "Serving Austin Metro",
    hours: {
      Monday: "9:00AM-6:00PM",
      Tuesday: "9:00AM-6:00PM",
      Wednesday: "9:00AM-6:00PM",
      Thursday: "9:00AM-6:00PM",
      Friday: "9:00AM-6:00PM",
      Saturday: "10:00AM-2:00PM",
      Sunday: "Closed"
    },
    description: {
      en: "Austin-based digital marketing agency specializing in local SEO, Google Business Profile optimization, and citation building for service businesses."
    },
    customerProblem: {
      en: "not showing up in local search results, losing leads to competitors, and wasting money on ads that don't convert"
    },
    customerOutcome: {
      en: "dominate local search, get more qualified leads, and grow your service business predictably"
    },
    cta: {
      en: "Get A Free SEO Audit"
    }
  },
  brand: {
    primary: "#0f766e",
    secondary: "#f59e0b",
    dark: "#111827",
    light: "#f8fafc",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80",
    alternateHeroImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1920&q=80",
    teamImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    ogImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    logoText: "DualMark"
  },
  integrations: {
    gtmId: "GTM-XXXXXXX",
    ga4MeasurementId: "G-XXXXXXXXXX",
    clarityProjectId: "",
    googleAdsConversionId: "",
    metaPixelId: "",
    calendlyUrl: "",
    crmWebhookUrl: "",
    reviewWidgetEmbedHtml: "",
    googleMapEmbedUrl: "",
    requireCookieConsent: true
  },
  locations: [
    { id: "austin", name: "Austin", region: "Texas", image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?auto=format&fit=crop&w=900&q=80", detail: "Central Austin businesses, from downtown startups to South Congress shops." },
    { id: "round-rock", name: "Round Rock", region: "Texas", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=900&q=80", detail: "Growing business parks and residential service companies north of Austin." },
    { id: "cedar-park", name: "Cedar Park", region: "Texas", image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=80", detail: "Family-owned businesses and suburban service providers in Cedar Park." },
    { id: "georgetown", name: "Georgetown", region: "Texas", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80", detail: "Historic downtown businesses and new developments in Georgetown." },
    { id: "pflugerville", name: "Pflugerville", region: "Texas", image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80", detail: "Neighborhood services and small businesses in Pflugerville." },
    { id: "leander", name: "Leander", region: "Texas", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80", detail: "Expanding communities and new businesses in Leander." },
    { id: "lakeway", name: "Lakeway", region: "Texas", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80", detail: "Lake-area businesses and premium service providers in Lakeway." },
    { id: "bee-cave", name: "Bee Cave", region: "Texas", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80", detail: "Retail and professional services west of Austin in Bee Cave." },
    { id: "buda", name: "Buda", region: "Texas", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80", detail: "Local businesses south of Austin in growing Buda." }
  ],
  mainServices: [
    {
      id: "local-seo",
      title: { en: "Local SEO" },
      short: { en: "Get found by customers searching for your services in your area. We optimize your entire online presence for local search dominance." },
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=900&q=80",
      children: [
        { id: "google-business-profile", title: { en: "Google Business Profile Optimization" }, short: { en: "Complete GBP setup, optimization, and ongoing management to rank in the Google Local Pack." }, faq: [] },
        { id: "local-keyword-research", title: { en: "Local Keyword Research" }, short: { en: "Find the exact search terms your local customers use, then build content around them." }, faq: [] },
        { id: "on-page-local-seo", title: { en: "On-Page Local SEO" }, short: { en: "Optimize title tags, meta descriptions, headers, and content with local intent signals." }, faq: [] }
      ]
    },
    {
      id: "citation-building",
      title: { en: "Citation Building" },
      short: { en: "Consistent business listings across 100+ directories, maps, and review sites to boost local authority." },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      children: [
        { id: "nap-consistency", title: { en: "NAP Consistency Audit" }, short: { en: "We audit and fix your Name, Address, and Phone across every major directory." }, faq: [] },
        { id: "directory-submissions", title: { en: "Directory Submissions" }, short: { en: "Manual submissions to the highest-authority local and industry-specific directories." }, faq: [] },
        { id: "citation-cleanup", title: { en: "Citation Cleanup" }, short: { en: "Remove duplicates, correct wrong information, and claim unverified listings." }, faq: [] }
      ]
    },
    {
      id: "review-management",
      title: { en: "Review Management" },
      short: { en: "Build a five-star reputation with systematic review generation and professional response management." },
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
      children: [
        { id: "review-generation", title: { en: "Review Generation" }, short: { en: "Automated systems to consistently collect authentic customer reviews." }, faq: [] },
        { id: "review-response", title: { en: "Review Response Service" }, short: { en: "Professional responses to all reviews that strengthen trust and visibility." }, faq: [] },
        { id: "review-monitoring", title: { en: "Review Monitoring" }, short: { en: "Real-time alerts and monthly reports on your reputation across all platforms." }, faq: [] }
      ]
    }
  ] satisfies ServiceItem[],
  secondaryCategories: Array.from({ length: 5 }).map((_, index) => ({
    id: `service-category-${index + 1}`,
    title: { en: `Service Category ${index + 1}` },
    short: { en: "A secondary category page for supporting services and long-tail demand." },
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    children: Array.from({ length: 6 }).map((__, childIndex) => ({
      id: `sub-service-${childIndex + 1}`,
      title: { en: `Subservice ${childIndex + 1}` },
      short: { en: "A unique support page for a specific variation of this service category." },
      faq: []
    }))
  })) satisfies ServiceItem[],
  heroSlides: [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80",
      title: { en: "Austin's Local SEO Experts" },
      text: { en: "We help Austin service businesses dominate local search, get more leads, and grow predictably with proven SEO strategies." },
      primaryText: { en: "Get A Free SEO Audit" },
      primaryHref: "contact",
      secondaryText: { en: "Call Now" },
      secondaryHref: "tel:+1 555 010 2020"
    },
    {
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1920&q=80",
      title: { en: "Rank Higher. Get More Leads." },
      text: { en: "From Google Business Profile to on-page optimization, we handle every aspect of your local search presence." },
      primaryText: { en: "See Our Services" },
      primaryHref: "local-seo"
    },
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80",
      title: { en: "Serving The Entire Austin Metro" },
      text: { en: "Whether you're in Austin, Round Rock, Cedar Park, or beyond, we know the local market and how to get you found." },
      primaryText: { en: "View Service Areas" },
      primaryHref: "service-area"
    }
  ] satisfies HeroSlide[],
  blogCategories: [
    { id: "guides", label: { en: "SEO Guides" } },
    { id: "tips", label: { en: "Local SEO Tips" } },
    { id: "case-studies", label: { en: "Case Studies" } }
  ] satisfies BlogCategory[]
};

export const allServices = [...siteConfig.mainServices, ...siteConfig.secondaryCategories];
