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
  siteUrl: "https://isitagentready.com",
  defaultLocale: "en" as Locale,
  legalLastUpdated: "2026-01-15",
  locales: [
    { code: "en" as Locale, label: "English", path: "/en", connector: "for" }
  ],
  business: {
    name: "Is It Agent Ready",
    legalName: "Is It Agent Ready LLC",
    foundedYear: "2025",
    primaryService: {
      en: "AI Readiness Assessment"
    },
    primaryGbpCategory: "Software company",
    secondaryGbpCategories: [
      "Technology company",
      "Consultant",
      "Business management consultant",
      "Professional services",
      "Software training institute"
    ],
    city: "Online",
    region: "Worldwide",
    country: "US",
    serviceArea: "Online — Worldwide",
    phone: "+1 555 020 3030",
    email: "hello@isitagentready.com",
    address: "Remote-first company",
    hours: {
      Monday: "9:00AM-6:00PM",
      Tuesday: "9:00AM-6:00PM",
      Wednesday: "9:00AM-6:00PM",
      Thursday: "9:00AM-6:00PM",
      Friday: "9:00AM-6:00PM",
      Saturday: "Closed",
      Sunday: "Closed"
    },
    description: {
      en: "AI readiness assessment platform that evaluates your business processes, data infrastructure, and team capabilities for successful AI agent deployment."
    },
    customerProblem: {
      en: "not knowing which business processes are ready for AI automation, wasting time and money on the wrong tools"
    },
    customerOutcome: {
      en: "get a clear AI readiness score and step-by-step implementation roadmap tailored to your business"
    },
    cta: {
      en: "Run Free Audit"
    }
  },
  brand: {
    primary: "#6366f1",
    secondary: "#10b981",
    accent: "#f59e0b",
    accentDark: "#d97706",
    accentLight: "#fef3c7",
    dark: "#0f172a",
    light: "#f8fafc",
    images: {
      hero1: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80",
      hero2: "https://images.unsplash.com/photo-1675557009875-436f7a5a1536?auto=format&fit=crop&w=1920&q=80",
      hero3: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80",
      about: "https://images.unsplash.com/photo-1675557009875-436f7a5a1536?auto=format&fit=crop&w=1920&q=80",
      team:  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      process: "https://images.unsplash.com/photo-1675557009875-436f7a5a1536?auto=format&fit=crop&w=1920&q=80",
      cta:   "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80",
      og:    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    },
    logoText: "IsItAgentReady"
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
    requireCookieConsent: false
  },
  stats: {
    yearsInBusiness: "10+",
    jobsCompleted: "2,500+",
    satisfactionRate: "99%",
    citiesServed: "9+",
    averageRating: "4.9",
    responseTime: "2",
  },
    locations: [
    { id: "remote", name: "Online", region: "Worldwide", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80", detail: "Our AI readiness assessment is available to businesses worldwide, delivered remotely." }
  ],
  mainServices: [
    {
      id: "ai-readiness-audit",
      title: { en: "AI Readiness Audit" },
      short: { en: "Comprehensive assessment of your business processes, data quality, and infrastructure for AI agent deployment." },
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
      children: [
        { id: "process-analysis", title: { en: "Process Analysis" }, short: { en: "Map and score each business workflow for AI automation potential." }, faq: [] },
        { id: "data-readiness", title: { en: "Data Readiness Check" }, short: { en: "Evaluate your data infrastructure, quality, and accessibility for AI training." }, faq: [] },
        { id: "infrastructure-review", title: { en: "Infrastructure Review" }, short: { en: "Assess your current tech stack and integration capabilities for AI tools." }, faq: [] }
      ]
    },
    {
      id: "agent-readiness-score",
      title: { en: "Agent Readiness Score" },
      short: { en: "Get a quantified readiness score with prioritized recommendations for your AI journey." },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      children: [
        { id: "scoring-methodology", title: { en: "Scoring Methodology" }, short: { en: "Our proprietary framework evaluates 47 dimensions across people, process, and technology." }, faq: [] },
        { id: "benchmark-report", title: { en: "Benchmark Report" }, short: { en: "See how your readiness compares to industry peers and top performers." }, faq: [] },
        { id: "gap-analysis", title: { en: "Gap Analysis" }, short: { en: "Identify the highest-impact improvements to increase your score fastest." }, faq: [] }
      ]
    },
    {
      id: "implementation-roadmap",
      title: { en: "Implementation Roadmap" },
      short: { en: "Step-by-step plan from assessment to deployed AI agents, tailored to your timeline and budget." },
      image: "https://images.unsplash.com/photo-1675557009875-436f7a5a1536?auto=format&fit=crop&w=900&q=80",
      children: [
        { id: "pilot-planning", title: { en: "Pilot Planning" }, short: { en: "Design a focused pilot project to prove AI value in one high-impact workflow." }, faq: [] },
        { id: "team-enablement", title: { en: "Team Enablement" }, short: { en: "Training and change management to get your team confident with AI-powered tools." }, faq: [] },
        { id: "scale-strategy", title: { en: "Scale Strategy" }, short: { en: "Expand from pilot to production with monitoring, optimization, and governance." }, faq: [] }
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
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80",
      title: { en: "Is Your Business Ready For AI Agents?" },
      text: { en: "Get a comprehensive readiness assessment with a clear score and implementation roadmap. Know exactly where to start." },
      primaryText: { en: "Run Free Audit" },
      primaryHref: "contact",
      secondaryText: { en: "See How It Works" },
      secondaryHref: "ai-readiness-audit"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80",
      title: { en: "Score Your AI Readiness In Minutes" },
      text: { en: "Our assessment evaluates your processes, data, infrastructure, and team to generate a quantified readiness score." },
      primaryText: { en: "Get Your Score" },
      primaryHref: "contact"
    },
    {
      image: "https://images.unsplash.com/photo-1675557009875-436f7a5a1536?auto=format&fit=crop&w=1920&q=80",
      title: { en: "From Score To Deployment" },
      text: { en: "A clear, prioritized roadmap that takes you from assessment to deployed AI agents — no guesswork required." },
      primaryText: { en: "View Implementation Roadmap" },
      primaryHref: "implementation-roadmap"
    }
  ] satisfies HeroSlide[],
  blogCategories: [
    { id: "guides", label: { en: "AI Guides" } },
    { id: "industry-reports", label: { en: "Industry Reports" } },
    { id: "product-updates", label: { en: "Product Updates" } }
  ] satisfies BlogCategory[]
};

export const allServices = [...siteConfig.mainServices, ...siteConfig.secondaryCategories];
