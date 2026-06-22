/**
 * English UI Strings
 * ==================
 * This file contains ALL user-facing copy strings for the English locale.
 *
 * AI INSTRUCTIONS FOR TRANSLATION:
 *   - Copy this file to [locale].ts (e.g., de.ts, es.ts, fr.ts)
 *   - Translate every STRING VALUE — do NOT change the keys
 *   - Keep the same TypeScript structure (nested objects)
 *   - Preserve placeholders like {city}, {service}, {year}, {phone}
 *   - Maintain tone: helpful, clear, locally relevant
 *
 * AI INSTRUCTIONS FOR NEW NICHE:
 *   - Replace generic terms (e.g., "service") with niche-specific terms
 *   - Keep CTAs action-oriented and benefit-focused
 *   - Trust signals must stay truthful for the niche
 */

const en = {

  // ── Navigation ──────────────────────────────────────────────────────────────
  nav: {
    home:        "Home",
    services:    "Transfers",
    locations:   "Routes",
    blog:        "Travel Tips",
    about:       "About Us",
    contact:     "Contact",
    getEstimate: "Request a Quote",
    callNow:     "Call Now",
    allServices: "All Transfers",
    allLocations:"All Routes",
  },

  // ── Utility Bar (top of header) ──────────────────────────────────────────────
  utilityBar: {
    available:   "Private airport transfers",
    licensed:    "Cars · Vans · Buses on request",
    freeQuote:   "English · Hrvatski · Deutsch",
    callUs:      "Call Us:",
  },

  // ── Hero Section ─────────────────────────────────────────────────────────────
  hero: {
    eyebrow:        "Serving {city} & Central Dalmatia",
    callCta:        "Call Us:",
    emailCta:       "Email Us",
    badge:          "Private transfers from {city} Airport",
    cta: {
      primary:      "Request a Quote",
      secondary:    "Call Now",
      learnMore:    "Learn More",
    },
    trust: {
      licensed:     "Private transfers",
      sameDay:      "Cars & vans on request",
      guarantee:    "Family & group friendly",
      freeEstimate: "Return transfers available",
    },
  },

  // ── Services Section ─────────────────────────────────────────────────────────
  services: {
    eyebrow:        "What We Arrange",
    heading:        "Our Transfers",
    subheading:     "Private {service} options for travellers arriving at {city} Airport, across {area}.",
    learnMore:      "Learn More",
    viewAll:        "View All Transfers",
    headingSuffix:  "Transfers",
    featured:       "Featured Transfer",
  },

  // ── Why Choose Us ────────────────────────────────────────────────────────────
  why: {
    eyebrow:        "Why Choose Us",
    heading:        "Your {city} Airport Transfer Specialists",
    subheading:     "Private, door-to-door rides with a clear fixed quote, flight-aware pickup, and the right vehicle for your group and luggage.",
    cta:            "Request a Quote",
    stats: {
      yearsLabel:   "Private & Direct",
      jobsLabel:    "Fixed Quotes",
      ratingLabel:  "Flight-Aware",
      responseLabel:"Group Friendly",
    },
    reasons: {
      licensed:     { title: "Private & Direct",          body: "Door-to-door rides for your party only — no sharing, no detours." },
      pricing:      { title: "Clear Fixed Quote",         body: "A fixed quote for your route with no hidden fees. You know the price before you travel." },
      experience:   { title: "Local Route Knowledge",     body: "We know the roads, towns, and ferry ports across {city} and {region}." },
      availability: { title: "Flight-Aware Pickup",       body: "Share your flight number and the operator can plan the pickup around your arrival time." },
      guarantee:    { title: "The Right Vehicle",         body: "Cars, vans, minibuses and buses on request — matched to your group and luggage." },
      local:        { title: "Multilingual Service",      body: "We help in English, Croatian and German so booking your transfer is easy." },
    },
  },

  // ── Process Section ──────────────────────────────────────────────────────────
  process: {
    eyebrow:        "How It Works",
    heading:        "Simple. Private. Stress-Free.",
    subheading:     "Arranging a {service} to {city} and across {area} is easy.",
    steps: [
      { title: "Request a Quote",            body: "Share your route, flight, passengers and luggage by phone or our quick online form." },
      { title: "Receive Your Fixed Quote",   body: "The operator replies with availability and a clear fixed quote — no surprises." },
      { title: "Meet Your Driver",           body: "Arrive at {city} Airport and meet your driver following the instructions you receive." },
      { title: "Travel Privately",           body: "Relax on a private, direct ride to your destination across {region}." },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────────
  testimonials: {
    eyebrow:        "Travel Notes",
    heading:        "Planning Your {city} Transfer",
    subheading:     "Helpful pointers for arranging a smooth private transfer from the airport.",
    verified:       "Travel Tip",
    readMore:       "Read More Tips",
  },

  // ── Locations Section ────────────────────────────────────────────────────────
  locations: {
    eyebrow:        "Popular Routes",
    heading:        "Transfers Across {city} & {region}",
    subheading:     "Private {service} routes from {city} Airport to destinations across {area}.",
    viewArea:       "View Route",
    viewAll:        "View All Routes",
  },

  // ── CTA Section ──────────────────────────────────────────────────────────────
  cta: {
    eyebrow:        "Ready to Travel?",
    heading:        "Request Your {service} Quote Today",
    subheading:     "No obligation. Just share your route and travel details and the operator will reply with availability and a fixed quote.",
    primary:        "Request a Quote",
    secondary:      "Call {phone}",
    trust:          "Private transfers • Fixed quotes • Cars, vans & buses on request",
    // FinalCta component keys
    callLabel:      "Call Us Now",
    formTitle:      "Get My Transfer Quote",
    formSub:        "The operator replies with availability and a fixed quote.",
    trust1:         "Private door-to-door rides",
    trust2:         "Flight-aware pickup planning",
    trust3:         "The right vehicle for your group",
  },

  // ── Contact Form ─────────────────────────────────────────────────────────────
  form: {
    sending:      "Sending…",
    errorGeneric: "Something went wrong. Please try again or call us directly.",
    heading:        "Request a Transfer Quote",
    subheading:     "Tell us your route and travel details and the operator will reply with availability and a fixed quote.",
    ariaLabel:      "Transfer quote request form",
    firstName:      "First Name",
    lastName:       "Last Name",
    phone:          "Phone Number",
    email:          "Email Address",
    address:        "Pickup location",
    pickup:         "Pickup location",
    pickupPlaceholder: "Split Airport (SPU)",
    destination:    "Destination / drop-off",
    destinationPlaceholder: "Hotel, villa, marina, ferry port or town",
    pickupDate:     "Arrival / pickup date",
    pickupTime:     "Arrival / pickup time",
    passengers:     "Passengers",
    luggage:        "Suitcases / luggage",
    flightNumber:   "Flight number (optional)",
    vehicleType:    "Preferred vehicle",
    vehicleOptions: {
      notSure:      "Not sure — recommend one",
      car:          "Private car (1–3)",
      van:          "Minivan (up to ~8)",
      minibus:      "Minibus",
      bus:          "Bus / coach",
    },
    childSeat:      "Child seat needed",
    returnTransfer: "I also need a return transfer to the airport",
    service:        "Transfer type",
    servicePlaceholder: "Select a transfer type…",
    details:        "Notes (accommodation name, child ages, extra stops…)",
    detailsPlaceholder: "Tell us anything that helps us quote accurately…",
    consentPre:     "I agree to the",
    privacyPolicy:  "Privacy Policy",
    consentAnd:     "and",
    terms:          "Terms of Service",
    submit:         "Request My Quote",
    submitting:     "Sending...",
    privacy:        "Your details are private and used only to prepare your transfer quote.",
    success: {
      heading:      "Quote Request Received",
      body:         "Thank you — the operator will review your route and travel details and reply with availability and quote information.",
    },
    error:          "Something went wrong. Please call us directly.",
    // Legacy field keys (kept for backward compatibility)
    fields: {
      firstName:    "First Name",
      lastName:     "Last Name",
      phone:        "Phone Number",
      email:        "Email Address",
      service:      "Transfer type",
      location:     "Destination",
      message:      "Notes (Optional)",
      messagePlaceholder: "Accommodation name, child ages, extra stops, anything that helps us quote…",
      selectService:"Select a transfer type...",
      selectLocation:"Select your destination...",
    },
  },

  // ── Blog ─────────────────────────────────────────────────────────────────────
  blog: {
    eyebrow:        "Tips & Advice",
    heading:        "{city} Transfer & Travel Tips",
    subheading:     "Practical advice and local tips for arriving at {city} Airport and travelling across {region}.",
    readMore:       "Read Article",
    viewAll:        "View All Articles",
    minRead:        "min read",
    postedOn:       "Posted on",
    by:             "by",
    relatedPosts:   "Related Articles",
    categories:     "Categories",
    allPosts:       "All Articles",
  },

  // ── About Page ───────────────────────────────────────────────────────────────
  about: {
    eyebrow:        "About Us",
    heading:        "Your {city} Airport Transfer Helpers",
    mission:        "Our Mission",
    team:           "Our Service",
    values:         "What We Value",
    cta:            "Get in Touch",
  },

  // ── Location Pages ───────────────────────────────────────────────────────────
  location: {
    eyebrow:        "{service} to {location}",
    heading:        "Private Transfer from {city} Airport to {location}, {region}",
    subheading:     "A private, direct {service} for travellers arriving at {city} Airport and heading to {location}.",
    whyLocal:       "Why Travellers Choose This {location} Transfer",
    coverage:       "Where We Drop Off in {location}",
    cta:            "Request a {location} Transfer Quote",
    nearbyAreas:    "Nearby Routes",
  },

  // ── Service Pages ────────────────────────────────────────────────────────────
  service: {
    eyebrow:        "Private {service}",
    getEstimate:    "Request a Quote",
    callNow:        "Call Now",
    relatedServices:"Related Transfers",
    faq:            "Frequently Asked Questions",
    coverage:       "Routes & Destinations",
    process:        "How It Works",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────────
  faq: {
    eyebrow:        "FAQ",
    heading:        "Common Questions About {service} from {city} Airport",
    subheading:     "Can't find your answer? Send us your route — we're happy to help.",
    callUs:         "Contact Us Directly",
  },

  // ── Footer ───────────────────────────────────────────────────────────────────
  footer: {
    tagline:        "Private airport transfers from {city} across {region}.",
    servicesHeading:"Our Transfers",
    areasHeading:   "Popular Routes",
    companyHeading: "Company",
    contactHeading: "Contact Us",
    hours:          "Inquiry Hours",
    copyright:      "© {year} {name}. All rights reserved.",
    viewAll:        "View All Routes",
    links: {
      privacy:      "Privacy Policy",
      terms:        "Terms of Service",
      sitemap:      "Sitemap",
      disclaimer:   "Disclaimer",
    },
    social: {
      follow:       "Follow Us",
    },
  },

  // ── Cookie Consent ───────────────────────────────────────────────────────────
  cookie: {
    heading:        "We Use Cookies",
    body:           "We use cookies to improve your experience and analyze site traffic. You can accept all cookies or customize your preferences.",
    acceptAll:      "Accept All",
    rejectAll:      "Reject Non-Essential",
    customize:      "Customize",
  },

  // ── Breadcrumbs ──────────────────────────────────────────────────────────────
  breadcrumbs: {
    home:           "Home",
  },

  // ── 404 Page ─────────────────────────────────────────────────────────────────
  notFound: {
    heading:        "Page Not Found",
    body:           "The page you're looking for doesn't exist or has been moved.",
    cta:            "Back to Home",
  },

  // ── Mobile CTA Bar ───────────────────────────────────────────────────────────
  mobileCta: {
    call:           "Call Now",
    estimate:       "Request a Quote",
  },
  // ── Utility Bar ──────────────────────────────────────────────────────────────
  util: {
    available:      "Private airport transfers",
    licensed:       "Cars · Vans · Buses on request",
    freeEstimates:  "English · Hrvatski · Deutsch",
  },
  // ── Nav extra ────────────────────────────────────────────────────────────────
  // ── Accessibility ────────────────────────────────────────────────────────────
  a11y: {
    skipToContent:  "Skip to main content",
    openMenu:       "Open navigation menu",
    closeMenu:      "Close navigation menu",
    changeLanguage: "Change language",
    nextSlide:       "Next slide",
    prevSlide:       "Previous slide",
    externalLink:   "Opens in new tab",
  },
  // ── Problems Section ─────────────────────────────────────────────────────────
  problems: {
    eyebrow:  "Sound Familiar?",
    heading:  "Need a {service} from {city} Airport?",
    p1:       "Tired of searching for transport after a long flight when you just want to reach your accommodation?",
    p2:       "Travelling with luggage and children and want a comfortable, private ride waiting for you?",
    p3:       "Want a clear fixed price in advance — no hidden fees or surprises?",
    p4:       "Need to reach a town, villa, marina or ferry port across {area}?",
    p5:       "Coordinating a group and want one vehicle that fits everyone and their bags?",
    p6:       "Worried about a late or early arrival and want a pickup planned around your flight?",
  },
  // ── Welcome Section ──────────────────────────────────────────────────────────
  welcome: {
    eyebrow:  "About Us",
    heading:  "Welcome to {name}",
    badge:    "Private transfers",
    check1:   "Private transfers from {city} Airport across {area}",
    check2:   "Cars, vans, minibuses and buses on request",
    check3:   "Clear fixed quotes and flight-aware pickup",
  },

  // ── Page Content Blocks ──────────────────────────────────────────────────────
  // ALL body copy for the dynamic templates (service / location / sub-service
  // pages) lives here so a new niche or language NEVER requires template edits.
  // Placeholders: {business} {service} {serviceLower} {city} {area} {region}
  //               {founded} {phone} {location} {short} {parent} {parentLower}
  //               {child} {childLower} {years} {rating} {jobs}
  // AI INSTRUCTIONS: rewrite these per niche. Keep claims honest — do not
  // invent licenses, guarantees, fleets, or response times the business doesn't offer.
  blocks: {
    statsBar: {
      years: "Private & Direct",
      jobs: "Fixed Quotes",
      rating: "Flight-Aware",
      satisfaction: "Group Friendly",
    },
    common: {
      getEstimate:   "Request a Quote",
      requestQuote:  "Request a Quote",
      requestEstimate: "Request a Quote",
      callPhone:     "Call {phone}",
      learnMore:     "Learn more →",
    },
    servicePage: {
      heroText: "Private {serviceLower} for travellers arriving at {city} Airport. Fixed quote · Flight-aware pickup · Cars, vans and buses on request.",
      intro: {
        heading: "Private {service} You Can Rely On from {city} Airport",
        p1: "When you need a {serviceLower} after landing at {city} Airport, you want a private, direct ride that is waiting and planned around your flight. {business} arranges private transfers across {city} and the wider {area}. You share your route and travel details, and the operator replies with availability and a clear fixed quote — no hidden fees.",
        p2: "Our {serviceLower} is designed for travellers who want a comfortable, stress-free arrival. We arrange the right vehicle for your group and luggage, plan the pickup around your arrival time, and can add child seats or a return transfer on request.",
        p3: "{short} Whether you are heading to a hotel, villa, marina, ferry port or old-town address, the operator knows the routes across {city} and {region} — which means smooth planning and a relaxed ride to your destination.",
      },
      sub: {
        eyebrow: "What We Arrange",
        heading: "{service} Options from {city} Airport",
        lead: "{business} arranges a full range of private {serviceLower} options for travellers arriving at {city} Airport. From a private car for two to a minibus or bus for a group, every ride is matched to your party and luggage.",
      },
      signs: {
        eyebrow: "Good to Know",
        heading: "Who This {service} Suits & What to Know",
        lead: "A private {serviceLower} from {city} Airport suits many travellers. Here is who it works best for and a few things worth knowing before you request a quote.",
        items: [
          { icon: "alert-triangle", title: "Arriving after a long flight", desc: "If you would rather not search for transport on arrival, a private {serviceLower} means your driver is planned around your flight and your ride is ready." },
          { icon: "trending-down", title: "Travelling with luggage", desc: "With suitcases, sports gear or a pram, a private vehicle sized for your bags makes the trip from {city} Airport far easier." },
          { icon: "refresh-cw", title: "Return transfers", desc: "Heading back to the airport at the end of your stay? Mention it and a return transfer can be arranged in advance alongside your arrival." },
          { icon: "volume", title: "Families with children", desc: "Child seats can be added on request, so families travelling from {city} can ride comfortably and safely." },
          { icon: "calendar", title: "Catching a ferry", desc: "If your route includes a ferry port, share your timing and the operator can plan the transfer to suit the sailing." },
          { icon: "home", title: "Groups travelling together", desc: "For larger parties, a minivan, minibus or bus on request keeps everyone and their luggage in one vehicle." },
        ],
      },
      why: {
        eyebrow: "Why Choose Us",
        heading: "Why Travellers Choose {business} for {service}",
        lead: "Choosing how to get from {city} Airport to your destination matters. Here is what sets a {business} transfer apart.",
        items: [
          { title: "Private & Direct", desc: "Your {serviceLower} is for your party only — door-to-door, no sharing and no detours. You travel straight to your destination across {city} and {region}." },
          { title: "Clear Fixed Quote", desc: "Share your route and the operator replies with a fixed quote. The price you are quoted is the price you pay — no hidden fees and no surprises." },
          { title: "Flight-Aware Pickup", desc: "Share your flight number and the operator can plan the pickup around your arrival time, so your driver is ready when you land at {city} Airport." },
          { title: "The Right Vehicle", desc: "Cars, vans, minibuses and buses are available on request, matched to your group size and luggage so everyone travels comfortably." },
          { title: "Local Route Knowledge", desc: "The operator knows the roads, towns, marinas and ferry ports across {city} and the {area}, which makes planning your transfer smooth and reliable." },
          { title: "Multilingual & Easy to Book", desc: "We help in English, Croatian and German, so requesting a quote and arranging your {serviceLower} is simple from wherever you are." },
        ],
      },
      process: {
        title: "How a {service} from {city} Airport Works",
        subtitle: "Arranging a private {serviceLower} with {business} is simple. Here is what to expect.",
        steps: [
          { title: "Request a Quote", text: "Call {phone} or use our quick form to share your route, flight, passengers and luggage." },
          { title: "Receive Your Fixed Quote", text: "The operator replies with availability and a clear fixed quote for your {serviceLower} — no hidden fees." },
          { title: "Meet Your Driver", text: "Arrive at {city} Airport and meet your driver following the instructions you receive." },
          { title: "Travel Privately", text: "Relax on a private, direct ride to your destination across {region}." },
        ],
      },
      problems: {
        eyebrow: "Common Situations",
        heading: "Common {service} Questions from Travellers to {city}",
        lead: "Many travellers arriving at {city} Airport think about the same things. Here are common situations our guests ask about — and how a private transfer helps.",
        items: [
          { icon: "zap", title: "Late or early arrivals", desc: "Share your flight number and the operator can plan the pickup around your arrival time, even if the flight shifts." },
          { icon: "banknote", title: "Wanting a price in advance", desc: "You receive a clear fixed quote for your route before you travel, so there are no surprises on arrival." },
          { icon: "search", title: "Choosing the right vehicle", desc: "Not sure what you need? Tell us your group and luggage and the operator can recommend a car, van, minibus or bus on request." },
          { icon: "check-circle", title: "Travelling with children", desc: "Child seats can be added on request so families travelling from {city} ride comfortably and safely." },
          { icon: "clock", title: "Catching a ferry or onward connection", desc: "Share your timing and the operator can plan the {serviceLower} around your ferry or onward travel." },
          { icon: "clipboard", title: "Return journeys", desc: "Mention your return and a transfer back to {city} Airport can be arranged in advance alongside your arrival." },
        ],
      },
      about: {
        eyebrow: "About {business}",
        heading: "Private {service} from {city} Airport",
        p1: "{business} helps travellers arrange private airport transfers from {city} Airport to destinations across {city} and the surrounding {area}. You share your route and travel details, and the operator replies with availability and a clear fixed quote.",
        p2: "We believe every traveller deserves to know the price before they travel. That is why you receive a clear fixed quote with no hidden fees. Pickups are planned around your flight, and the right vehicle is arranged for your group and luggage.",
        p3: "When you arrange a {serviceLower} through {business}, you get a private, direct ride and local route knowledge across {region} — so your arrival in {city} is relaxed from the moment you land.",
      },
      area: {
        eyebrow: "Routes & Destinations",
        heading: "{service} Across {area}",
        lead: "{business} arranges private {serviceLower} throughout {area}. Whether you are heading into {city} or out to a surrounding town, villa, marina or ferry port, your route can be quoted.",
      },
      related: {
        eyebrow: "Our Transfers",
        heading: "Other {service} Options from {city} Airport",
      },
      shortAnswer: {
        label: "Quick Answer",
        text: "{business} arranges private {serviceLower} for travellers arriving at {city} Airport, across {city} and the surrounding {area}. Share your route and the operator replies with availability and a fixed quote. Cars, vans, minibuses and buses are available on request. Call {phone} or send a quick inquiry online.",
      },
      prosCons: {
        title: "Private {service} vs. Other Ways to Travel",
        lead: "An honest look at when a private {serviceLower} from {city} Airport makes sense — and what to weigh before you decide.",
        prosTitle: "Benefits of a private transfer",
        consTitle: "Things to consider",
        pros: [
          "A private, direct ride for your party only — no sharing and no detours",
          "A clear fixed quote agreed before you travel, with no hidden fees",
          "Pickup planned around your flight, so your driver is ready when you land",
          "The right vehicle for your group and luggage, with child seats on request",
          "Return transfers and ferry-port timing can be arranged in advance",
        ],
        cons: [
          "Usually costs more than a shared shuttle for a single traveller",
          "Best arranged in advance so availability can be confirmed",
          "Quotes are by email or form — prices are confirmed by the operator, not instant",
        ],
      },
      comparison: {
        title: "Private Transfer vs. Shared Options to {city}",
        lead: "How the choices compare on the factors that matter most when arriving at {city} Airport.",
        columns: ["", "Shared / public", "Private transfer"],
        rows: [
          ["Privacy", "Shared with other passengers", "Your party only, door-to-door"],
          ["Timing", "Fixed schedules and stops", "Planned around your flight arrival"],
          ["Luggage", "Limited space, can be tight", "Vehicle sized for your bags on request"],
          ["Groups", "May need separate tickets", "One vehicle for the whole group on request"],
          ["Pricing", "Per person, varies", "A clear fixed quote for the route, agreed in advance"],
        ],
      },
      gallery: {
        eyebrow: "Destinations",
        title: "Popular {service} Routes from {city}",
        lead: "A look at the kinds of destinations travellers reach with {business} from {city} Airport.",
      },
      faqTitle: "Frequently Asked Questions About {service} from {city} Airport",
      faqs: [
        { q: "How do I request a {serviceLower} from {city} Airport?", a: "Share your route, flight, passengers and luggage by phone or our quick form. The operator replies with availability and a clear fixed quote for your {serviceLower}." },
        { q: "What happens if my flight is delayed?", a: "Share your flight number and the operator can plan the pickup around your arrival time, so a delay or early landing is taken into account." },
        { q: "Is the transfer private or shared?", a: "It is private. Your {serviceLower} is for your party only — a direct, door-to-door ride with no sharing." },
        { q: "Can you arrange a vehicle for a group?", a: "Yes. Cars, vans, minibuses and buses are available on request, matched to your group size and luggage." },
        { q: "What areas do you cover?", a: "We arrange transfers from {city} Airport across {city} and the surrounding {area}. Send your route to confirm and receive a quote." },
      ],
      ctaStrip: {
        heading: "Ready to Arrange Your {service} to {city}?",
        sub: "Fixed quote · Flight-aware pickup · Cars, vans & buses on request",
      },
      finalCta: {
        title: "Request a {service} Quote for {city}",
        text: "Fill out the quick form to share your route and travel details. The operator will reply with availability and a fixed quote for your {serviceLower}.",
      },
    },
    locationPage: {
      heroText: "Private transfer from {city} Airport to {location}. Fixed quote · Flight-aware pickup · Cars, vans and buses on request.",
      intro: {
        heading: "Private Transfer from {city} Airport to {location}",
        p1: "When you land at {city} Airport and need to reach {location}, a private {serviceLower} means a direct, door-to-door ride planned around your flight. {business} arranges transfers to {location} and throughout the {area}. Share your route and travel details, and the operator replies with availability and a clear fixed quote.",
        p3: "This route suits travellers heading to hotels, villas, marinas, ferry connections and the old town in {location}. With a private vehicle sized for your group and luggage, getting from {city} Airport to {location} is comfortable and stress-free.",
        landmarksLabel: "Popular drop-off points near:",
        ctaPrimary: "Request a {location} Transfer Quote",
      },
      services: {
        eyebrow: "What We Arrange",
        heading: "Transfer Options to {location}",
        lead: "{business} arranges private {serviceLower} from {city} Airport to {location} for travellers, families and groups. Cars, vans, minibuses and buses are available on request, with a clear fixed quote and flight-aware pickup.",
      },
      why: {
        eyebrow: "Why Choose Us",
        heading: "Why Travellers Choose {business} for {location}",
        lead: "There are several ways to reach {location} from the airport. Here is why travellers arriving at {city} Airport choose a private {business} transfer.",
        items: [
          { title: "We Know the Route to {location}", desc: "The operator knows the roads, towns and ferry ports between {city} Airport and {location}. That local knowledge means smooth planning and a relaxed ride to your destination." },
          { title: "Private & Direct to {location}", desc: "Your {serviceLower} to {location} is for your party only — door-to-door, with no sharing and no detours. You travel straight to your accommodation." },
          { title: "Flight-Aware Pickup", desc: "Share your flight number and the operator can plan the pickup around your arrival time, so your driver is ready when you land at {city} Airport." },
          { title: "A Clear Fixed Quote", desc: "Share your route to {location} and the operator replies with a fixed quote. The price you are quoted is the price you pay — no hidden fees and no surprises." },
        ],
      },
      process: {
        title: "How Your Transfer to {location} Works",
        subtitle: "Here is what to expect when you arrange a {serviceLower} to {location} with {business}.",
        steps: [
          { title: "Request a Quote", text: "Call {phone} or fill out our form with your route to {location}, flight, passengers and luggage." },
          { title: "Receive Your Fixed Quote", text: "The operator replies with availability and a clear fixed quote for your transfer to {location}." },
          { title: "Meet Your Driver", text: "Arrive at {city} Airport and meet your driver following the instructions you receive." },
          { title: "Travel Privately to {location}", text: "Relax on a private, direct ride to your destination in {location}." },
        ],
      },
      map: {
        eyebrow: "Route",
        heading: "Transfer Route to {location}, {region}",
        lead: "{business} arranges private transfers from {city} Airport to {location} and the surrounding communities across {area}, with drop-off at your accommodation or the nearest suitable point.",
      },
      about: {
        eyebrow: "About {business}",
        heading: "Private Transfers to {location} from {city} Airport",
        p1: "{business} helps travellers arrange private airport transfers from {city} Airport to destinations across {city} and the surrounding {area}, including {location}.",
        p2: "We believe every traveller deserves to know the price before they travel. That is why you receive a clear fixed quote with no hidden fees. Pickups are planned around your flight and the right vehicle is arranged for your group and luggage.",
        p3: "When you arrange a {serviceLower} to {location} through {business}, you get a private, direct ride and local route knowledge — so your arrival is relaxed from the moment you land.",
      },
      shortAnswer: {
        label: "Quick Answer",
        text: "Yes — {business} arranges private {serviceLower} from {city} Airport to {location} and the surrounding {area}. Share your route and the operator replies with availability and a fixed quote. Cars, vans, minibuses and buses are available on request. Call {phone} or send an inquiry online.",
      },
      faqTitle: "Frequently Asked Questions About Transfers to {location}",
      faqs: [
        { q: "Do you arrange transfers from {city} Airport to {location}?", a: "Yes. {business} arranges private {serviceLower} from {city} Airport to {location} and the surrounding {area}. Share your route to receive availability and a fixed quote." },
        { q: "Can you plan the pickup around my flight to {location}?", a: "Yes. Share your flight number and the operator can plan the pickup around your arrival time, so your driver is ready when you land." },
        { q: "How do I get a price for a transfer to {location}?", a: "Share your route, passengers and luggage and the operator replies with a clear fixed quote — no hidden fees. Quotes are by email or form." },
        { q: "Can you drop us at the old town in {location}?", a: "Yes. Where streets are pedestrian, the driver will drop you at the nearest suitable point to your address in {location}." },
        { q: "Can you carry a group to {location}?", a: "Yes. Cars, vans, minibuses and buses are available on request, matched to your group size and luggage." },
      ],
      ctaStrip: {
        heading: "Need a Transfer to {location}?",
        sub: "Fixed quote · Flight-aware pickup · Cars, vans & buses on request",
      },
      finalCta: {
        title: "Request a Transfer Quote to {location}",
        text: "Fill out the quick form to share your route to {location} and travel details. The operator will reply with availability and a fixed quote.",
      },
    },
    childPage: {
      heroText: "Private {childLower} from {city} Airport. Fixed quote, flight-aware pickup, and the right vehicle on request.",
      intro: {
        heading: "{child} from {city} Airport: What to Know",
        p1: "When it comes to {childLower} from {city} Airport, a comfortable arrival comes down to planning the pickup around your flight and matching the vehicle to your party. {business} arranges {childLower} for travellers across {city} — from a couple in a private car to a group in a minibus or bus on request.",
        p2: "Every {childLower} starts with your route and travel details. You share where you are going, your flight, your passengers and your luggage, and the operator replies with availability and a clear fixed quote — so you know the price before you travel.",
        p3: "We understand that arrivals do not always run to plan. That is why pickups for {childLower} are planned around your flight number, and child seats or a return transfer can be added on request throughout {city}.",
      },
      trust: {
        heading: "Why Choose {business}?",
        items: [
          { strong: "Private & Direct", rest: " — your party only, door-to-door" },
          { strong: "Flight-Aware Pickup", rest: " — planned around your arrival in {city}" },
          { strong: "Clear Fixed Quote", rest: " — agreed before you travel, no hidden fees" },
          { strong: "The Right Vehicle", rest: " — cars, vans and buses on request" },
          { strong: "Child Seats on Request", rest: " — comfortable for families" },
          { strong: "Return Transfers", rest: " — arranged in advance" },
        ],
      },
      signs: {
        heading: "Who {child} Suits in {city}",
        lead: "A private {childLower} works for many travellers. Here are common situations where it makes your arrival in {city} easier.",
        items: [
          "You are arriving after a long flight and want a private ride waiting",
          "You are travelling with suitcases, sports gear or a pram and need space",
          "You are a family and would like a child seat added on request",
          "You are a group and want one vehicle for everyone and their luggage",
          "Your route includes a ferry port and the timing needs to line up",
          "You also need a return transfer back to {city} Airport later",
        ],
        outro: "If any of these apply, share your route and travel details and {business} can plan your {childLower} around your flight. Request a quote and the operator will reply with availability and a fixed quote.",
      },
      benefits: {
        heading: "Benefits of a Private {child}",
        lead: "Choosing a private {childLower} from {city} Airport gives travellers a comfortable, planned arrival.",
        cards: [
          { title: "Private & Direct", desc: "A {childLower} is for your party only — a direct, door-to-door ride with no sharing and no detours." },
          { title: "Planned Around Your Flight", desc: "Share your flight number and the operator can plan the pickup around your arrival time at {city} Airport." },
          { title: "The Right Vehicle", desc: "Cars, vans, minibuses and buses are available on request, matched to your group and luggage for a comfortable ride." },
          { title: "A Clear Fixed Quote", desc: "You receive a fixed quote before you travel, so you know the price of your {childLower} with no hidden fees." },
        ],
      },
      process: {
        title: "How {child} Works in {city}",
        subtitle: "Here is exactly what to expect when you arrange {childLower} with {business}.",
        steps: [
          { title: "Request a Quote", text: "Call {phone} or submit our quick form with your route, flight, passengers and luggage." },
          { title: "Receive Your Fixed Quote", text: "The operator reviews your details and replies with availability and a clear fixed quote — no hidden fees." },
          { title: "Meet Your Driver", text: "Arrive at {city} Airport and meet your driver following the instructions you receive." },
          { title: "Travel Privately", text: "Relax on a private, direct ride to your destination, with child seats or a return transfer added on request." },
        ],
      },
      siblings: {
        eyebrow: "Part of {parent}",
        heading: "Related {parent} Options in {city}",
        lead: "{child} is one of our {parentLower} options. Explore the other private transfer choices we arrange from {city} Airport.",
      },
      more: {
        eyebrow: "More Transfers",
        heading: "Other Transfers We Arrange from {city} Airport",
      },
      faqTitle: "{child} in {city} — Frequently Asked Questions",
      faqs: [
        { q: "What does {childLower} involve?", a: "{child} covers {short} You share your route and travel details and the operator arranges a private ride with a clear fixed quote." },
        { q: "How do I get a price for {childLower} in {city}?", a: "Share your route, passengers and luggage and the operator replies with a clear fixed quote — no hidden fees. Quotes are by email or form." },
        { q: "Can you plan {childLower} around my flight?", a: "Yes. Share your flight number and the operator can plan the pickup around your arrival time at {city} Airport." },
        { q: "Is {childLower} private?", a: "Yes. {childLower} arranged by {business} is private — a direct, door-to-door ride for your party only, with no sharing." },
        { q: "Do I need {childLower} or another {parentLower} option?", a: "{child} is one of our {parentLower} options. If you are unsure which suits your group and luggage, tell us your details and the operator will recommend one." },
      ],
    },
  },
} as const;
export default en;
export type UIStrings = typeof en;
