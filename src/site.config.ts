export type Locale = "en" | "hr";

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
  siteUrl: "https://example.com",
  defaultLocale: "en" as Locale,
  legalLastUpdated: "2026-01-15",
  locales: [
    { code: "en" as Locale, label: "English", path: "/en", connector: "in" },
    { code: "hr" as Locale, label: "Hrvatski", path: "/hr", connector: "u" }
  ],
  business: {
    name: "Local Service Pros",
    legalName: "Local Service Pros LLC",
    foundedYear: "2018",
    primaryService: {
      en: "Primary Service",
      hr: "Primarna Usluga"
    },
    primaryGbpCategory: "Service establishment",
    secondaryGbpCategories: [
      "Contractor",
      "Home services",
      "Repair service",
      "Maintenance service",
      "Professional services"
    ],
    city: "Austin",
    region: "Texas",
    country: "US",
    serviceArea: "Austin Metro",
    phone: "+1 555 010 2020",
    email: "hello@example.com",
    address: "Serving Austin Metro",
    hours: {
      Monday: "8:00AM-5:00PM",
      Tuesday: "8:00AM-5:00PM",
      Wednesday: "8:00AM-5:00PM",
      Thursday: "8:00AM-5:00PM",
      Friday: "8:00AM-5:00PM",
      Saturday: "8:00AM-2:00PM",
      Sunday: "Closed"
    },
    description: {
      en: "Reliable local service with clear communication, simple scheduling, and professional follow-through.",
      hr: "Pouzdana lokalna usluga s jasnom komunikacijom, jednostavnim narucivanjem i profesionalnom izvedbom."
    },
    customerProblem: {
      en: "getting the right local help without delays, vague pricing, or confusing communication",
      hr: "pronalazak prave lokalne pomoci bez cekanja, nejasnih cijena ili zbunjujuce komunikacije"
    },
    customerOutcome: {
      en: "get the job handled clearly, quickly, and correctly",
      hr: "rijesite posao jasno, brzo i ispravno"
    },
    cta: {
      en: "Get A Free Estimate",
      hr: "Zatrazite besplatnu procjenu"
    }
  },
  brand: {
    primary: "#0f766e",
    secondary: "#f59e0b",
    dark: "#111827",
    light: "#f8fafc",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80",
    alternateHeroImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1920&q=80",
    teamImage: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=80",
    ogImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    logoText: "Local Service Pros"
  },
  integrations: {
    gtmId: "GTM-XXXXXXX",
    ga4MeasurementId: "",
    clarityProjectId: "",
    googleAdsConversionId: "",
    metaPixelId: "",
    calendlyUrl: "",
    crmWebhookUrl: "",
    reviewWidgetEmbedHtml: "",
    googleMapEmbedUrl: "",
    requireCookieConsent: false
  },
  locations: [
    { id: "austin", name: "Austin", region: "Texas", image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?auto=format&fit=crop&w=900&q=80", detail: "Central neighborhoods, established homes, and busy commercial corridors." },
    { id: "round-rock", name: "Round Rock", region: "Texas", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=900&q=80", detail: "Fast-growing residential areas and business parks north of Austin." },
    { id: "cedar-park", name: "Cedar Park", region: "Texas", image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=80", detail: "Family homes, local shops, and suburban service requests." },
    { id: "georgetown", name: "Georgetown", region: "Texas", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80", detail: "Historic properties, newer developments, and planned communities." },
    { id: "pflugerville", name: "Pflugerville", region: "Texas", image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80", detail: "Neighborhoods, rental homes, and small-business properties." },
    { id: "leander", name: "Leander", region: "Texas", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80", detail: "Expanding communities where reliable scheduling matters." },
    { id: "lakeway", name: "Lakeway", region: "Texas", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80", detail: "Lake-area homes and premium service expectations." },
    { id: "bee-cave", name: "Bee Cave", region: "Texas", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80", detail: "Residential and retail service calls west of Austin." },
    { id: "buda", name: "Buda", region: "Texas", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80", detail: "Homes and local businesses south of the city." }
  ],
  mainServices: [
    {
      id: "main-service-1",
      title: { en: "Main Service 1", hr: "Glavna usluga 1" },
      short: { en: "A primary money-making service page ready to rename for your niche.", hr: "Primarna usluga spremna za preimenovanje prema nisi." },
      image: "https://images.unsplash.com/photo-1581091215367-59ab6b4f4f76?auto=format&fit=crop&w=900&q=80",
      children: [
        { id: "sub-service-1", title: { en: "Subservice 1", hr: "Podusluga 1" }, short: { en: "A focused child page for a specific customer intent.", hr: "Fokusirana podstranica za specificnu namjeru korisnika." }, faq: [] },
        { id: "sub-service-2", title: { en: "Subservice 2", hr: "Podusluga 2" }, short: { en: "Use this for a high-value service variation.", hr: "Koristite ovo za vrijednu varijaciju usluge." }, faq: [] },
        { id: "sub-service-3", title: { en: "Subservice 3", hr: "Podusluga 3" }, short: { en: "Add local examples and internal links before publishing.", hr: "Dodajte lokalne primjere i interne poveznice prije objave." }, faq: [] }
      ]
    },
    {
      id: "main-service-2",
      title: { en: "Main Service 2", hr: "Glavna usluga 2" },
      short: { en: "A second core service page with subservice expansion built in.", hr: "Druga glavna usluga s vec ugradenim podstranicama." },
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80",
      children: [
        { id: "sub-service-1", title: { en: "Subservice 1", hr: "Podusluga 1" }, short: { en: "Explain the problem, timing, and desired outcome.", hr: "Objasnite problem, rok i zeljeni ishod." }, faq: [] },
        { id: "sub-service-2", title: { en: "Subservice 2", hr: "Podusluga 2" }, short: { en: "Use unique FAQs to avoid thin duplicate pages.", hr: "Koristite jedinstvena pitanja kako biste izbjegli tanke duplikate." }, faq: [] },
        { id: "sub-service-3", title: { en: "Subservice 3", hr: "Podusluga 3" }, short: { en: "Link to parent service and related location pages.", hr: "Povezite s nadredenom uslugom i lokalnim stranicama." }, faq: [] }
      ]
    },
    {
      id: "main-service-3",
      title: { en: "Main Service 3", hr: "Glavna usluga 3" },
      short: { en: "A third core service for larger Rank-and-Rent builds.", hr: "Treca glavna usluga za vece Rank-and-Rent stranice." },
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
      children: [
        { id: "sub-service-1", title: { en: "Subservice 1", hr: "Podusluga 1" }, short: { en: "Customize the copy around a narrow search intent.", hr: "Prilagodite tekst uskoj namjeri pretrazivanja." }, faq: [] },
        { id: "sub-service-2", title: { en: "Subservice 2", hr: "Podusluga 2" }, short: { en: "Use this page for comparison, urgent, or specialty needs.", hr: "Koristite za usporedbe, hitne ili specijalne potrebe." }, faq: [] },
        { id: "sub-service-3", title: { en: "Subservice 3", hr: "Podusluga 3" }, short: { en: "Add proof, real images, and city-specific detail.", hr: "Dodajte dokaze, stvarne slike i lokalne detalje." }, faq: [] }
      ]
    }
  ] satisfies ServiceItem[],
  secondaryCategories: Array.from({ length: 5 }).map((_, index) => ({
    id: `service-category-${index + 1}`,
    title: { en: `Service Category ${index + 1}`, hr: `Kategorija usluge ${index + 1}` },
    short: { en: "A secondary category page for supporting services and long-tail demand.", hr: "Sekundarna kategorija za dodatne usluge i long-tail potraznju." },
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    children: Array.from({ length: 6 }).map((__, childIndex) => ({
      id: `sub-service-${childIndex + 1}`,
      title: { en: `Subservice ${childIndex + 1}`, hr: `Podusluga ${childIndex + 1}` },
      short: { en: "A unique support page for a specific variation of this service category.", hr: "Jedinstvena pomocna stranica za specificnu varijaciju ove kategorije." },
      faq: []
    }))
  })) satisfies ServiceItem[],
  heroSlides: [
    {
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80",
      title: { en: "We Are The Best Local Service In Austin", hr: "Mi smo najbolja lokalna usluga u Austinu" },
      text: { en: "Offering reliable local service in Austin, Texas, and surrounding areas. We help customers solve problems with clear communication, professional service, and simple scheduling.", hr: "Nudimo pouzdanu lokalnu uslugu u Austinu, Teksasu i okolnim podrucjima." },
      primaryText: { en: "Get A Free Estimate", hr: "Zatrazite besplatnu procjenu" },
      primaryHref: "contact",
      secondaryText: { en: "Call Now", hr: "Pozovite sada" },
      secondaryHref: "tel:+1 555 010 2020"
    },
    {
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1920&q=80",
      title: { en: "Professional Service You Can Trust", hr: "Profesionalna usluga kojoj mozete vjerovati" },
      text: { en: "From first contact to completed service, we keep things clear, simple, and professional. No surprises, no hidden costs.", hr: "Od prvog kontakta do zavrsene usluge, odrzavamo stvari jasnim i profesionalnim." },
      primaryText: { en: "Contact Us Today", hr: "Kontaktirajte nas danas" },
      primaryHref: "contact"
    },
    {
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1920&q=80",
      title: { en: "Serving The Entire Austin Metro Area", hr: "Sluzimo cijelom podrucju metropola Austin" },
      text: { en: "Whether you are in Austin, Round Rock, Cedar Park, or nearby communities, our team is ready to help.", hr: "Bilo da ste u Austinu, Round Rocku, Cedar Parku ili obližnjim zajednicama, nas tim je spreman pomoci." },
      primaryText: { en: "View Service Areas", hr: "Pogledajte podrucja usluge" },
      primaryHref: "service-area"
    }
  ] satisfies HeroSlide[],
  blogCategories: [
    { id: "guides", label: { en: "Guides", hr: "Vodici" } },
    { id: "tips", label: { en: "Tips", hr: "Savjeti" } },
    { id: "company-news", label: { en: "Company News", hr: "Vijesti" } }
  ] satisfies BlogCategory[]
};

export const allServices = [...siteConfig.mainServices, ...siteConfig.secondaryCategories];
