/**
 * site.config.ts — Single Source of Truth
 * =========================================
 * This file controls ALL structured data for the site.
 * UI copy strings live in src/i18n/[locale].ts instead.
 *
 * SITE: Split Airport Transfers — splitairporttransfers.com.hr
 * MODEL: Online local lead-generation site for PRIVATE airport transfer
 *        inquiries. It is NOT a physical storefront.
 *
 * TRUTH RULES (do not break):
 *   - No street address. No invented reviews, ratings, licenses, fleet
 *     ownership, company history, founding year, driver names, or guarantees
 *     that depend on a future operating partner.
 *   - Vehicles are phrased as inquiry/request capability (cars, vans,
 *     minibuses, buses "on request"), never owned-fleet inventory.
 *   - Phone is a temporary call-tracking placeholder until a real number is
 *     configured.
 */

import { themePreset } from "./lib/themes";

// ── Locale Types ─────────────────────────────────────────────────────────────

export type Locale = "en" | "hr";
// To add a locale: add its code here AND create src/i18n/[code].ts

export type LocaleConfig = {
  code: Locale;
  label: string;
  path: string;
  connector: string; // grammatical connector used in URL slugs (e.g. "to", "do")
};

// ── Data Types ───────────────────────────────────────────────────────────────

/**
 * LocalizedText: used for structured data fields that differ by locale.
 * For UI copy strings, use src/i18n/[locale].ts instead.
 */
export type LocalizedText = Record<Locale, string>;

export type ServiceItem = {
  id: string;
  /**
   * Optional translated URL slugs per locale, e.g.
   * slug: { hr: "transferi-zracna-luka-split" } → /hr/transferi-zracna-luka-split/
   * Locales without an entry fall back to `id`.
   */
  slug?: Partial<LocalizedText>;
  title: LocalizedText;
  short: LocalizedText;
  image: string;
  /** Optional gallery images (used by the Gallery section on service pages) */
  gallery?: Array<{ src: string; alt: string }>;
  /** Optional before/after pair (renders a draggable comparison slider) */
  beforeAfter?: {
    before: { src: string; alt: string };
    after: { src: string; alt: string };
  };
  children: Array<{
    id: string;
    slug?: Partial<LocalizedText>;
    title: LocalizedText;
    short: LocalizedText;
    faq: Array<{ question: LocalizedText; answer: LocalizedText }>;
  }>;
};

export type LocationItem = {
  id: string;
  name: string;
  region: string;
  image: string;
  detail: string;
  /** 1-2 sentences about the destination and why the route matters */
  knowledge?: string;
  /** 2-4 notable local landmarks, attractions, or well-known places */
  attractions?: string[];
  /** Google Maps embed search query, e.g. "Trogir, Croatia" */
  mapEmbedQuery?: string;
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

// ── Site Configuration ────────────────────────────────────────────────────────

export const siteConfig = {

  siteUrl:         "https://splitairporttransfers.com.hr",
  defaultLocale:   "en" as Locale,
  legalLastUpdated:"2026-06-22",

  locales: [
    { code: "en" as Locale, label: "English",   path: "/en", connector: "to" },
    { code: "hr" as Locale, label: "Hrvatski",  path: "/hr", connector: "do" }
  ] satisfies LocaleConfig[],

  // ── Business Data ─────────────────────────────────────────────────────────
  business: {
    name:          "Split Airport Transfers",
    legalName:     "Split Airport Transfers",
    foundedYear:   "", // no invented company history
    primaryService: {
      en: "Split Airport Transfer",
      hr: "Transfer Zračna Luka Split"
    },
    primaryGbpCategory:    "Airport shuttle service",
    secondaryGbpCategories:[
      "Airport transfer service",
      "Private car service",
      "Van rental with driver",
      "Shuttle service",
      "Tour operator"
    ],
    city:          "Split",
    region:        "Dalmatia",
    country:       "HR",
    serviceArea:   "Split & Central Dalmatia",
    phone:         "0800 123 456", // TEMPORARY call-tracking placeholder — replace before launch
    email:         "info@splitairporttransfers.com.hr",
    /**
     * ctaMode controls which contact CTAs appear in Hero, HeroSlider, Header, Footer.
     * Options: "form_phone" | "form_email" | "form_phone_email" | "phone_only" | "email_only"
     */
    ctaMode:       "form_phone_email" as "form_phone" | "form_email" | "form_phone_email" | "phone_only" | "email_only",
    address:       "Online private transfer requests for Split Airport (SPU) & Central Dalmatia — no walk-in office",
    hours: {
      Monday:    "Online quote requests 24/7",
      Tuesday:   "Online quote requests 24/7",
      Wednesday: "Online quote requests 24/7",
      Thursday:  "Online quote requests 24/7",
      Friday:    "Online quote requests 24/7",
      Saturday:  "Online quote requests 24/7",
      Sunday:    "Online quote requests 24/7"
    },
    description: {
      en: "Private Split Airport transfers to Split, Trogir, Kaštela, Podstrana, Omiš, the ferry port, marinas, hotels, villas and nearby Dalmatian destinations. Request a fixed quote for a car, van, minibus or bus — easy for families, groups, ferry and marina guests.",
      hr: "Privatni transferi iz Zračne luke Split do Splita, Trogira, Kaštela, Podstrane, Omiša, trajektne luke, marina, hotela, vila i obližnjih dalmatinskih odredišta. Zatražite fiksnu ponudu za automobil, kombi, minibus ili autobus — jednostavno za obitelji, grupe te goste trajekta i marina."
    },
    customerProblem: {
      en: "arriving at Split Airport and needing a reliable private ride to your hotel, villa, marina, ferry or holiday destination without searching for transport after a long flight",
      hr: "dolazak u Zračnu luku Split i potreba za pouzdanim privatnim prijevozom do hotela, vile, marine, trajekta ili odredišta bez traženja prijevoza nakon dugog leta"
    },
    customerOutcome: {
      en: "arrive comfortably and stress-free with a private transfer booked in advance, at a clear fixed quote, in the right vehicle for your group and luggage",
      hr: "stići udobno i bez stresa uz privatni transfer rezerviran unaprijed, po jasnoj fiksnoj ponudi i u pravom vozilu za vašu grupu i prtljagu"
    },
    cta: {
      en: "Request a Quote",
      hr: "Zatražite ponudu"
    }
  },

  // ── Brand / Visual Identity ───────────────────────────────────────────────
  brand: {
    ...themePreset("transportation"),
    // Deep Adriatic navy + warm amber CTA for a premium coastal travel feel
    primary:    "#10294d",
    secondary:  "#163a6b",
    accent:     "#f59e0b",
    accentDark: "#d97706",
    accentLight:"#fef3c7",
    heroOverlay:"rgba(8, 25, 48, 0.62)",

    logoText:      "Split Airport Transfers",
    logoAccent:    "Transfers",  // this word gets the accent color

    // ── Image Map ─────────────────────────────────────────────────────────
    // Coastal Dalmatia / airport arrival / vehicle / marina imagery.
    // NOTE: verify each Unsplash photo actually shows the intended subject
    // before launch and swap any that don't.
    images: {
      hero1: "https://images.unsplash.com/photo-1559682468-a6a29e7d9517?auto=format&fit=crop&w=1920&q=80",
      hero2: "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1920&q=80",
      hero3: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1920&q=80",
      about: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80",
      team:  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
      process: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80",
      cta:   "https://images.unsplash.com/photo-1559682468-a6a29e7d9517?auto=format&fit=crop&w=1920&q=80",
      og:    "https://images.unsplash.com/photo-1559682468-a6a29e7d9517?auto=format&fit=crop&w=1200&q=80",
    }
  },

  // ── Analytics & Integrations ──────────────────────────────────────────────
  integrations: {
    gtmId:                   "",
    ga4MeasurementId:        "",
    clarityProjectId:        "",
    googleAdsConversionId:   "",
    metaPixelId:             "",
    calendlyUrl:             "",
    /** Zero-backend lead delivery via formsubmit.co — the inbox that receives
     *  transfer inquiries. The first submission triggers a one-time activation
     *  email from formsubmit.co that must be confirmed before leads flow. */
    formsubmitEmail:         "info@splitairporttransfers.com.hr",
    crmWebhookUrl:           "",
    reviewWidgetEmbedHtml:   "",
    googleMapEmbedUrl:       "",
    requireCookieConsent:    true
  },

  // ── Trust Signals ─────────────────────────────────────────────────────────
  // Only truthful, offering-based figures — NOT history, reviews or ratings.
  stats: {
    destinationsServed: "60+",
    vehicleOptions:     "4",   // car · van · minibus · bus (all on request)
    languages:          "3",   // EN · HR · DE
    quoteChannel:       "24/7",
    // legacy keys kept so any un-migrated template degrades gracefully
    yearsInBusiness: "",
    jobsCompleted:   "",
    averageRating:   "",
    responseTime:    "",
    satisfactionRate: "",
    citiesServed:    "60+",
  },

  // ── Destinations (each generates a "Split Airport to X" route page) ────────
  locations: [
    {
      id: "split", name: "Split", region: "Split",
      image: "https://images.unsplash.com/photo-1555990538-c2d2c4b3c6c8?auto=format&fit=crop&w=900&q=80",
      detail: "The main arrival route — hotels, apartments, the old town, ferry port and beaches across the city of Split.",
      knowledge: "Split is Dalmatia's largest city and the busiest destination for Split Airport arrivals. Guests head to hotels and apartments near Bačvice, Žnjan and the Riva, to old-town accommodation, or onward to the ferry port for the islands.",
      attractions: ["Diocletian's Palace", "Riva waterfront", "Bačvice beach", "Marjan Hill"],
      mapEmbedQuery: "Split, Croatia"
    },
    {
      id: "split-old-town", name: "Split Old Town", region: "Split",
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=900&q=80",
      detail: "Accommodation inside and around Diocletian's Palace, where pedestrian zones mean a nearby drop-off point.",
      knowledge: "Much of Split's old town sits inside a pedestrian-only UNESCO core. Cars cannot reach every address, so a private transfer drops guests at the nearest suitable access point — sharing the accommodation name in advance helps the driver plan it.",
      attractions: ["Diocletian's Palace", "Peristyle Square", "Cathedral of Saint Domnius", "Marmontova"],
      mapEmbedQuery: "Diocletian's Palace, Split"
    },
    {
      id: "split-ferry-port", name: "Split Ferry Port", region: "Split",
      image: "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=900&q=80",
      detail: "Time-sensitive connection for catamarans and car ferries to Hvar, Brač, Vis, Šolta and Korčula.",
      knowledge: "Split Ferry Port is the gateway to the central Dalmatian islands. Ferry and catamaran departures are time-sensitive, and summer traffic near the port can be heavy — a private transfer with luggage space makes the connection far less stressful.",
      attractions: ["Jadrolinija terminal", "Catamaran berths", "Split bus station", "Split train station"],
      mapEmbedQuery: "Split Ferry Port, Croatia"
    },
    {
      id: "trogir", name: "Trogir", region: "Trogir Riviera",
      image: "https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=900&q=80",
      detail: "One of the closest routes to the airport — a UNESCO old town popular with tourists and yacht guests.",
      knowledge: "Trogir is only minutes from Split Airport, which makes it one of the most popular short transfer routes. Its UNESCO-listed old town has narrow streets and a bridge to Čiovo, so drivers use the nearest suitable drop-off point near the historic core.",
      attractions: ["Trogir old town (UNESCO)", "Kamerlengo Fortress", "Cathedral of St. Lawrence", "Čiovo bridge"],
      mapEmbedQuery: "Trogir, Croatia"
    },
    {
      id: "ciovo", name: "Čiovo", region: "Trogir Riviera",
      image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=900&q=80",
      detail: "Villas, apartments and beaches across the bridge from Trogir — ideal for families staying by the sea.",
      knowledge: "Čiovo island is connected to Trogir by a short bridge and is full of villas and apartments popular with families. Summer bridge traffic can build up, so a private transfer direct to the accommodation saves time and hassle with luggage.",
      attractions: ["Okrug Gornji beaches", "Arbanija", "Slatine", "Čiovo coastline"],
      mapEmbedQuery: "Čiovo, Croatia"
    },
    {
      id: "okrug-gornji", name: "Okrug Gornji", region: "Trogir Riviera",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
      detail: "A favourite Čiovo holiday spot known for Copacabana beach, apartments and family villas.",
      knowledge: "Okrug Gornji on Čiovo is one of the most popular family holiday areas near Trogir, known for its long pebble beach and self-catering apartments. A private transfer reaches the accommodation door directly, avoiding bus changes with luggage and children.",
      attractions: ["Copacabana beach", "Okrug seaside promenade", "Toto beach", "Čiovo villas"],
      mapEmbedQuery: "Okrug Gornji, Croatia"
    },
    {
      id: "seget-donji", name: "Seget Donji", region: "Trogir Riviera",
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=900&q=80",
      detail: "Coastal town just west of Trogir with hotels, apartments and camping close to the airport.",
      knowledge: "Seget Donji sits just west of Trogir and is an easy, short transfer from Split Airport. It is popular for seaside hotels, apartments and camping, and is right next to Marina Baotić for charter guests.",
      attractions: ["Seget waterfront", "Marina Baotić", "Trogir old town", "Seget beaches"],
      mapEmbedQuery: "Seget Donji, Croatia"
    },
    {
      id: "kastela", name: "Kaštela", region: "Kaštela",
      image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=900&q=80",
      detail: "The seven Kaštela towns sit right beside the airport — short transfers to coastal hotels, apartments and marinas.",
      knowledge: "Kaštela is a string of seven historic coastal towns between Split and Trogir, immediately next to the airport. Transfers here are short and ideal for guests in seaside apartments, local hotels and marina berths.",
      attractions: ["Kaštel Stari", "Kaštel Lukšić", "Marina Kaštela", "Kaštela waterfront"],
      mapEmbedQuery: "Kaštela, Croatia"
    },
    {
      id: "marina-kastela", name: "Marina Kaštela", region: "Kaštela",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80",
      detail: "Major charter base minutes from the airport — built for crews arriving with sailing luggage.",
      knowledge: "Marina Kaštela is one of the largest charter bases near Split Airport, just a short drive away. Sailing crews arrive with bulky luggage and provisions, so a van or minibus transfer is often the easiest way to reach the berth before check-in.",
      attractions: ["Marina Kaštela charter base", "Kaštel Gomilica", "Split harbour", "Kaštela bay"],
      mapEmbedQuery: "Marina Kaštela, Croatia"
    },
    {
      id: "podstrana", name: "Podstrana", region: "Omiš Riviera",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=80",
      detail: "Resort and villa coast just east of Split — hotels, family apartments and beachfront stays.",
      knowledge: "Podstrana stretches along the coast just east of Split and is a major hotel, resort and villa area for families. The coastal road can be busy in summer, so a private transfer booked in advance keeps arrivals smooth.",
      attractions: ["Le Méridien Lav", "Podstrana beaches", "Mutogras", "Strožanac"],
      mapEmbedQuery: "Podstrana, Croatia"
    },
    {
      id: "stobrec", name: "Stobreč", region: "Split",
      image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=900&q=80",
      detail: "Close coastal destination for camping, apartments and family beach holidays east of Split.",
      knowledge: "Stobreč is a relaxed coastal suburb just east of Split, well known for its large campsite, apartments and family beaches. It is an easy private transfer from the airport and close to both Split and Podstrana.",
      attractions: ["Stobreč beach", "Camping Stobreč", "Stobreč peninsula", "Žnjan nearby"],
      mapEmbedQuery: "Stobreč, Croatia"
    },
    {
      id: "omis", name: "Omiš", region: "Omiš Riviera",
      image: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=900&q=80",
      detail: "Dramatic river-meets-sea town for beaches, rafting and family villa holidays southeast of Split.",
      knowledge: "Omiš sits where the Cetina river meets the sea and is hugely popular for beaches, rafting and villa stays. The coastal road through Split can be slow in peak season, so a direct private transfer is far easier than coordinating buses with luggage.",
      attractions: ["Cetina river canyon", "Omiš town beach", "Mirabella Fortress", "Punta beach"],
      mapEmbedQuery: "Omiš, Croatia"
    },
    {
      id: "duce", name: "Duće", region: "Omiš Riviera",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80",
      detail: "Long sandy-pebble beach and family apartments just past Omiš on the Riviera.",
      knowledge: "Duće is a quiet beach village next to Omiš with a long shoreline and many family apartments and villas. A private transfer drops guests right at the accommodation — handy along this stretch of coastal road.",
      attractions: ["Duće beach", "Cetina river mouth", "Omiš nearby", "Riviera coastline"],
      mapEmbedQuery: "Duće, Croatia"
    },
    {
      id: "dugi-rat", name: "Dugi Rat", region: "Omiš Riviera",
      image: "https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?auto=format&fit=crop&w=900&q=80",
      detail: "Coastal apartments and villas between Podstrana and Omiš, close to the beach.",
      knowledge: "Dugi Rat lies on the coast between Podstrana and Omiš and is popular for seaside apartments and villas. It is a straightforward private transfer along the Omiš Riviera road from Split Airport.",
      attractions: ["Dugi Rat waterfront", "Omiš nearby", "Krilo Jesenice", "Riviera beaches"],
      mapEmbedQuery: "Dugi Rat, Croatia"
    },
    {
      id: "marina-baotic", name: "Marina Baotić", region: "Trogir Riviera",
      image: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=900&q=80",
      detail: "High-value charter base at Seget Donji — minutes from the airport for yacht crews.",
      knowledge: "Marina Baotić in Seget Donji is a popular charter base very close to Split Airport. Crews arriving for a sailing week often need a van or minibus for sailing luggage and provisions, making this a high-value transfer route.",
      attractions: ["Marina Baotić charter base", "Seget Donji", "Trogir old town", "Čiovo"],
      mapEmbedQuery: "Marina Baotić, Seget Donji"
    },
    {
      id: "aci-marina-split", name: "ACI Marina Split", region: "Split",
      image: "https://images.unsplash.com/photo-1527679124726-21d7b6f0f5c1?auto=format&fit=crop&w=900&q=80",
      detail: "Split's city marina below Marjan — convenient for yacht guests staying close to the centre.",
      knowledge: "ACI Marina Split sits just below Marjan Hill near the city centre and is a frequent destination for yacht charter guests. A private transfer with luggage space connects the airport directly to the berth.",
      attractions: ["ACI Marina Split", "Marjan Hill", "Split old town", "Matejuška"],
      mapEmbedQuery: "ACI Marina Split, Croatia"
    },
    {
      id: "solin", name: "Solin", region: "Split",
      image: "https://images.unsplash.com/photo-1558642084-fd07fae5282e?auto=format&fit=crop&w=900&q=80",
      detail: "Local and business route on the edge of Split, home to the Salona Roman ruins.",
      knowledge: "Solin sits just inland of Split and blends local accommodation, business stays and the ancient Roman site of Salona. It is a quick, practical transfer from the airport with easy access to the wider Split area.",
      attractions: ["Salona Roman ruins", "Solin riverside", "Split nearby", "Klis Fortress nearby"],
      mapEmbedQuery: "Solin, Croatia"
    },
    {
      id: "klis", name: "Klis", region: "Split",
      image: "https://images.unsplash.com/photo-1589657836378-d3a0a7f3aa6e?auto=format&fit=crop&w=900&q=80",
      detail: "Hilltop fortress village above Split, popular with day visitors and inland stays.",
      knowledge: "Klis is famous for its hilltop fortress overlooking Split and the coast. It draws history and film-location visitors, and a private transfer pairs well with a day-trip or an inland villa stay.",
      attractions: ["Klis Fortress", "Klis viewpoints", "Salona nearby", "Split panorama"],
      mapEmbedQuery: "Klis Fortress, Croatia"
    },
    {
      id: "makarska", name: "Makarska", region: "Makarska Riviera",
      image: "https://images.unsplash.com/photo-1530841344095-7ce4bc6d4d5b?auto=format&fit=crop&w=900&q=80",
      detail: "Higher-value longer route to the Makarska Riviera's beaches beneath the Biokovo mountains.",
      knowledge: "Makarska is the heart of a popular riviera of beach resorts beneath the Biokovo massif, roughly an hour and a quarter south of the airport. The longer distance makes a comfortable private transfer especially worthwhile for families and groups.",
      attractions: ["Makarska riviera beaches", "Biokovo Nature Park", "Makarska promenade", "Brela & Tučepi nearby"],
      mapEmbedQuery: "Makarska, Croatia"
    },
    {
      id: "sibenik", name: "Šibenik", region: "Šibenik",
      image: "https://images.unsplash.com/photo-1602002418082-dd4a8f7d4a1b?auto=format&fit=crop&w=900&q=80",
      detail: "Regional route north of the airport — a UNESCO cathedral city and gateway to Krka National Park.",
      knowledge: "Šibenik lies north of Split Airport and is known for its UNESCO-listed cathedral and as a gateway to Krka National Park. A private transfer is a comfortable option for this longer regional route, especially with luggage or a group.",
      attractions: ["Cathedral of St. James (UNESCO)", "St. Michael's Fortress", "Krka National Park nearby", "Šibenik old town"],
      mapEmbedQuery: "Šibenik, Croatia"
    }
  ] satisfies LocationItem[],

  // ── Main Services (vehicle & intent pages + subservice children) ──────────
  mainServices: [
    {
      id:    "private-airport-transfers",
      slug:  { en: "split-airport-transfers", hr: "transferi-zracna-luka-split" },
      title: { en: "Private Split Airport Transfers", hr: "Privatni transferi iz Zračne luke Split" },
      short: { en: "Private door-to-door transfers from Split Airport to your hotel, villa, apartment, ferry or marina — a comfortable car for couples and individual travellers.", hr: "Privatni transferi od vrata do vrata iz Zračne luke Split do hotela, vile, apartmana, trajekta ili marine — udoban automobil za parove i pojedinačne putnike." },
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=900&q=80",
      children: [
        {
          id:    "return-transfers",
          slug:  { en: "return-transfer-to-split-airport", hr: "povratni-transfer-zracna-luka-split" },
          title: { en: "Return Transfers to Split Airport", hr: "Povratni transferi do Zračne luke Split" },
          short: { en: "Book your ride back to Split Airport at the same time and avoid last-minute transport stress before your flight.", hr: "Rezervirajte i povratak do Zračne luke Split istovremeno te izbjegnite stres oko prijevoza prije leta." },
          faq: [
            {
              question: { en: "Can I book the return transfer at the same time as my arrival?", hr: "Mogu li rezervirati povratni transfer istovremeno kad i dolazak?" },
              answer:   { en: "Yes. You can request both your arrival and return transfer in one inquiry, and the operator will confirm a pickup time that leaves enough margin for your departure flight.", hr: "Da. Možete zatražiti dolazni i povratni transfer u jednom upitu, a operater će potvrditi vrijeme preuzimanja s dovoljnom rezervom za vaš odlazni let." }
            }
          ]
        },
        {
          id:    "late-night-transfers",
          slug:  { en: "late-night-split-airport-transfer", hr: "nocni-transfer-zracna-luka-split" },
          title: { en: "Late-Night Split Airport Transfers", hr: "Noćni transferi iz Zračne luke Split" },
          short: { en: "Arriving on a late or early flight? Request a private transfer in advance so a driver is ready when you land.", hr: "Stižete kasnim ili ranim letom? Zatražite privatni transfer unaprijed kako bi vozač bio spreman kad sletite." },
          faq: []
        },
        {
          id:    "business-transfers",
          slug:  { en: "split-airport-business-transfer", hr: "poslovni-transfer-zracna-luka-split" },
          title: { en: "Split Airport Business Transfers", hr: "Poslovni transferi iz Zračne luke Split" },
          short: { en: "A punctual, comfortable private transfer for business travellers heading to a hotel, meeting or conference around Split.", hr: "Točan i udoban privatni transfer za poslovne putnike koji idu u hotel, na sastanak ili konferenciju u okolici Splita." },
          faq: []
        }
      ]
    },
    {
      id:    "van-group-transfers",
      slug:  { en: "split-airport-van-transfer", hr: "kombi-transfer-zracna-luka-split" },
      title: { en: "Split Airport Van & Group Transfers", hr: "Kombi i grupni transferi iz Zračne luke Split" },
      short: { en: "One vehicle for the whole group. Request a van, minibus or bus from Split Airport for groups of 5–8 or more, with space for luggage.", hr: "Jedno vozilo za cijelu grupu. Zatražite kombi, minibus ili autobus iz Zračne luke Split za grupe od 5–8 ili više osoba, s prostorom za prtljagu." },
      image: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?auto=format&fit=crop&w=900&q=80",
      children: [
        {
          id:    "minibus-transfers",
          slug:  { en: "split-airport-minibus-transfer", hr: "minibus-transfer-zracna-luka-split" },
          title: { en: "Minibus Transfers", hr: "Minibus transferi" },
          short: { en: "A minibus on request for mid-sized groups who want to travel together in one vehicle with their luggage.", hr: "Minibus na upit za srednje velike grupe koje žele putovati zajedno u jednom vozilu sa svojom prtljagom." },
          faq: []
        },
        {
          id:    "bus-coach-transfers",
          slug:  { en: "split-airport-bus-transfer", hr: "autobusni-transfer-zracna-luka-split" },
          title: { en: "Bus & Coach Transfers", hr: "Autobusni transferi" },
          short: { en: "Larger coaches on request for big arrivals — sports teams, tours and large groups travelling together from Split Airport.", hr: "Veći autobusi na upit za velike dolaske — sportske ekipe, ture i velike grupe koje putuju zajedno iz Zračne luke Split." },
          faq: []
        },
        {
          id:    "wedding-event-transfers",
          slug:  { en: "split-airport-wedding-transfer", hr: "transfer-za-vjencanja-zracna-luka-split" },
          title: { en: "Wedding & Event Group Transfers", hr: "Grupni transferi za vjenčanja i događaje" },
          short: { en: "Coordinated transfers for wedding and event guests arriving at Split Airport, planned around your schedule.", hr: "Usklađeni transferi za goste vjenčanja i događaja koji stižu u Zračnu luku Split, planirani prema vašem rasporedu." },
          faq: []
        }
      ]
    },
    {
      id:    "family-transfers",
      slug:  { en: "split-airport-family-transfer", hr: "obiteljski-transfer-zracna-luka-split" },
      title: { en: "Split Airport Family Transfers", hr: "Obiteljski transferi iz Zračne luke Split" },
      short: { en: "A family-friendly private transfer with space for luggage and child seats on request — comfortable for parents arriving with children.", hr: "Obiteljima prilagođen privatni transfer s prostorom za prtljagu i dječjim sjedalicama na upit — udobno za roditelje koji stižu s djecom." },
      image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=900&q=80",
      children: [
        {
          id:    "child-seat-transfers",
          slug:  { en: "split-airport-transfer-with-child-seat", hr: "transfer-s-djecjom-sjedalicom-zracna-luka-split" },
          title: { en: "Transfers with Child Seats", hr: "Transferi s dječjim sjedalicama" },
          short: { en: "Child and booster seats on request so younger children travel safely from Split Airport — just tell us their ages when you inquire.", hr: "Dječje i booster sjedalice na upit kako bi mlađa djeca sigurno putovala iz Zračne luke Split — javite nam dob djece pri upitu." },
          faq: [
            {
              question: { en: "Can you provide child seats for the transfer?", hr: "Možete li osigurati dječje sjedalice za transfer?" },
              answer:   { en: "Child and booster seats can be arranged on request. Please tell us the number and ages of children when you send your inquiry so the operator can prepare the right seats.", hr: "Dječje i booster sjedalice mogu se osigurati na upit. Molimo navedite broj i dob djece pri slanju upita kako bi operater pripremio odgovarajuće sjedalice." }
            }
          ]
        },
        {
          id:    "family-villa-transfers",
          slug:  { en: "split-airport-family-villa-transfer", hr: "obiteljski-transfer-do-vile-zracna-luka-split" },
          title: { en: "Family Villa Transfers", hr: "Obiteljski transferi do vile" },
          short: { en: "Door-to-door transfers for families heading to a villa or apartment, with room for suitcases, strollers and beach gear.", hr: "Transferi od vrata do vrata za obitelji koje idu u vilu ili apartman, s prostorom za kovčege, kolica i opremu za plažu." },
          faq: []
        }
      ]
    },
    {
      id:    "marina-yacht-transfers",
      slug:  { en: "split-airport-marina-transfers", hr: "transferi-do-marina-zracna-luka-split" },
      title: { en: "Split Airport Marina & Yacht Transfers", hr: "Transferi do marina i jahti iz Zračne luke Split" },
      short: { en: "Transfers to charter bases and marinas around Split and Trogir, with space for sailing luggage and whole crews in one vehicle.", hr: "Transferi do charter baza i marina oko Splita i Trogira, s prostorom za jedriličarsku prtljagu i cijele posade u jednom vozilu." },
      image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=900&q=80",
      children: [
        {
          id:    "yacht-charter-transfers",
          slug:  { en: "split-airport-yacht-charter-transfer", hr: "transfer-za-charter-jahti-zracna-luka-split" },
          title: { en: "Yacht Charter Crew Transfers", hr: "Transferi za charter posade" },
          short: { en: "Transfers timed around your charter check-in, with a van or minibus on request for crews and sailing luggage.", hr: "Transferi usklađeni s prijavom za charter, s kombijem ili minibusom na upit za posade i jedriličarsku prtljagu." },
          faq: [
            {
              question: { en: "Can the transfer fit sailing luggage for a full crew?", hr: "Može li transfer primiti jedriličarsku prtljagu za cijelu posadu?" },
              answer:   { en: "Yes — a van or minibus can be requested so a full crew travels together with bags and provisions. Tell us your crew size and luggage when you inquire and the operator will suggest the right vehicle.", hr: "Da — kombi ili minibus može se zatražiti kako bi cijela posada putovala zajedno s torbama i namirnicama. Navedite veličinu posade i prtljagu pri upitu te će operater predložiti odgovarajuće vozilo." }
            }
          ]
        },
        {
          id:    "ferry-port-transfers",
          slug:  { en: "split-airport-ferry-transfer", hr: "transfer-do-trajektne-luke-zracna-luka-split" },
          title: { en: "Ferry Port & Island Connection Transfers", hr: "Transferi do trajektne luke i otoka" },
          short: { en: "Time-sensitive transfers to Split Ferry Port for catamarans and ferries to Hvar, Brač, Vis and Korčula.", hr: "Vremenski osjetljivi transferi do trajektne luke Split za katamarane i trajekte za Hvar, Brač, Vis i Korčulu." },
          faq: []
        }
      ]
    }
  ] satisfies ServiceItem[],

  // ── Secondary Service Categories (broader intent pages) ───────────────────
  secondaryCategories: [
    {
      id:    "hotel-transfers",
      slug:  { en: "split-airport-hotel-transfer", hr: "transfer-do-hotela-zracna-luka-split" },
      title: { en: "Split Airport Hotel Transfers", hr: "Transferi do hotela iz Zračne luke Split" },
      short: { en: "Private transfers from Split Airport directly to your hotel across Split, the Riviera and nearby resorts.", hr: "Privatni transferi iz Zračne luke Split izravno do vašeg hotela u Splitu, na Rivijeri i u obližnjim odmaralištima." },
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80",
      children: [
        { id: "resort-transfers", title: { en: "Resort Transfers", hr: "Transferi do odmarališta" }, short: { en: "Door-to-door arrivals to coastal resorts and hotel complexes around Split.", hr: "Dolasci od vrata do vrata do obalnih odmarališta i hotelskih kompleksa oko Splita." }, faq: [] },
        { id: "city-hotel-transfers", title: { en: "City Hotel Transfers", hr: "Transferi do gradskih hotela" }, short: { en: "Transfers to hotels in central Split, with old-town drop-off guidance where streets are pedestrian-only.", hr: "Transferi do hotela u središtu Splita, uz upute za iskrcaj u blizini pješačke zone starog grada." }, faq: [] }
      ]
    },
    {
      id:    "villa-transfers",
      slug:  { en: "split-airport-villa-transfer", hr: "transfer-do-vile-zracna-luka-split" },
      title: { en: "Split Airport Villa Transfers", hr: "Transferi do vila iz Zračne luke Split" },
      short: { en: "Direct private transfers to villas and private accommodation around Split, Trogir, Čiovo, Podstrana and Omiš.", hr: "Izravni privatni transferi do vila i privatnog smještaja oko Splita, Trogira, Čiova, Podstrane i Omiša." },
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
      children: [
        { id: "private-accommodation-transfers", title: { en: "Private Accommodation Transfers", hr: "Transferi do privatnog smještaja" }, short: { en: "Door-to-door drop-off at apartments and private accommodation — share the address when you inquire.", hr: "Iskrcaj od vrata do vrata do apartmana i privatnog smještaja — navedite adresu pri upitu." }, faq: [] }
      ]
    },
    {
      id:    "private-day-trips",
      slug:  { en: "private-day-trips-from-split", hr: "privatni-izleti-iz-splita" },
      title: { en: "Private Day Trips with Driver", hr: "Privatni izleti s vozačem" },
      short: { en: "Private day trips from Split with a driver — Krka, Trogir, Klis, the Omiš valley and more, on request.", hr: "Privatni izleti iz Splita s vozačem — Krka, Trogir, Klis, dolina Omiša i više, na upit." },
      image: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?auto=format&fit=crop&w=900&q=80",
      children: [
        { id: "krka-day-trip", title: { en: "Krka Waterfalls Day Trip", hr: "Izlet na slapove Krke" }, short: { en: "A private day trip from Split to Krka National Park, planned around your schedule.", hr: "Privatni izlet iz Splita u Nacionalni park Krka, planiran prema vašem rasporedu." }, faq: [] },
        { id: "klis-day-trip", title: { en: "Klis Fortress Day Trip", hr: "Izlet do tvrđave Klis" }, short: { en: "Visit the hilltop Klis Fortress above Split with a private driver.", hr: "Posjetite tvrđavu Klis na brdu iznad Splita uz privatnog vozača." }, faq: [] }
      ]
    },
    {
      id:    "long-distance-transfers",
      slug:  { en: "split-airport-long-distance-transfer", hr: "transfer-na-vece-udaljenosti-zracna-luka-split" },
      title: { en: "Long-Distance Transfers", hr: "Transferi na veće udaljenosti" },
      short: { en: "Comfortable longer transfers from Split Airport to Makarska, Šibenik, Krka, Zadar, Dubrovnik and beyond, on request.", hr: "Udobni dulji transferi iz Zračne luke Split do Makarske, Šibenika, Krke, Zadra, Dubrovnika i dalje, na upit." },
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=900&q=80",
      children: [
        { id: "makarska-transfer", title: { en: "Transfer to Makarska", hr: "Transfer do Makarske" }, short: { en: "A comfortable private transfer to the Makarska Riviera beneath the Biokovo mountains.", hr: "Udoban privatni transfer do Makarske rivijere ispod planine Biokovo." }, faq: [] },
        { id: "sibenik-transfer", title: { en: "Transfer to Šibenik", hr: "Transfer do Šibenika" }, short: { en: "A private transfer north to Šibenik and the gateway to Krka National Park.", hr: "Privatni transfer prema sjeveru do Šibenika i ulaza u Nacionalni park Krka." }, faq: [] },
        { id: "krka-transfer", title: { en: "Transfer to Krka National Park", hr: "Transfer do NP Krka" }, short: { en: "A private transfer from Split Airport to Krka National Park or Skradin.", hr: "Privatni transfer iz Zračne luke Split do Nacionalnog parka Krka ili Skradina." }, faq: [] }
      ]
    }
  ] satisfies ServiceItem[],

  // ── Hero Slides ───────────────────────────────────────────────────────────
  heroSlides: [
    {
      image:         "https://images.unsplash.com/photo-1559682468-a6a29e7d9517?auto=format&fit=crop&w=1920&q=80",
      title:         { en: "Private Split Airport Transfers", hr: "Privatni transferi iz Zračne luke Split" },
      text:          { en: "Arrive at Split Airport and get a private, comfortable transfer to your hotel, villa, marina, ferry or holiday destination around Split. Request a fixed quote today.", hr: "Stignite u Zračnu luku Split i dobijte privatni, udoban transfer do hotela, vile, marine, trajekta ili odredišta u okolici Splita. Zatražite fiksnu ponudu već danas." },
      primaryText:   { en: "Request a Fixed Quote", hr: "Zatražite fiksnu ponudu" },
      primaryHref:   "contact",
      secondaryText: { en: "View Popular Routes", hr: "Pogledajte popularne rute" },
      secondaryHref: "split-airport-transfers"
    },
    {
      image:         "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?auto=format&fit=crop&w=1920&q=80",
      title:         { en: "Cars, Vans & Buses for Every Group", hr: "Automobili, kombiji i autobusi za svaku grupu" },
      text:          { en: "From couples to families and groups of 8 or more — request the right vehicle, with space for luggage, child seats and sailing bags on request.", hr: "Od parova do obitelji i grupa od 8 ili više — zatražite pravo vozilo, s prostorom za prtljagu, dječje sjedalice i jedriličarske torbe na upit." },
      primaryText:   { en: "Request a Van Transfer", hr: "Zatražite kombi transfer" },
      primaryHref:   "split-airport-van-transfer"
    },
    {
      image:         "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=1920&q=80",
      title:         { en: "Ferry Port, Marinas & Nearby Destinations", hr: "Trajektna luka, marine i obližnja odredišta" },
      text:          { en: "Connecting to an island ferry or a charter base? We cover Split Ferry Port, the marinas, Trogir, Kaštela, Podstrana, Omiš and more.", hr: "Povezujete se s trajektom za otok ili charter bazom? Pokrivamo trajektnu luku Split, marine, Trogir, Kaštela, Podstranu, Omiš i više." },
      primaryText:   { en: "Request a Marina Transfer", hr: "Zatražite transfer do marine" },
      primaryHref:   "split-airport-marina-transfers"
    }
  ] satisfies HeroSlide[],

  // ── Blog Categories ───────────────────────────────────────────────────────
  blogCategories: [
    { id: "guides",      label: { en: "Arrival Guides",     hr: "Vodiči za dolazak" } },
    { id: "routes",      label: { en: "Route Guides",       hr: "Vodiči po rutama" } },
    { id: "ferry-marina",label: { en: "Ferry & Marina",     hr: "Trajekt i marine" } },
    { id: "family-group",label: { en: "Family & Group",     hr: "Obitelj i grupe" } }
  ] satisfies BlogCategory[]

};

export const allServices = [...siteConfig.mainServices, ...siteConfig.secondaryCategories];
