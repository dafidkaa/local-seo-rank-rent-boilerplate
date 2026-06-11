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
 *   - Maintain tone: professional, trustworthy, locally relevant
 *
 * AI INSTRUCTIONS FOR NEW NICHE:
 *   - Replace generic terms (e.g., "service") with niche-specific terms
 *   - Keep CTAs action-oriented and benefit-focused
 *   - Trust signals should match the niche (e.g., "Licensed & Insured" for trades)
 */

const en = {

  // ── Navigation ──────────────────────────────────────────────────────────────
  nav: {
    home:        "Home",
    services:    "Services",
    locations:   "Locations",
    blog:        "Blog",
    about:       "About Us",
    contact:     "Contact",
    getEstimate: "Get Free Estimate",
    callNow:     "Call Now",
    allServices: "All Services",
    allLocations:"All Service Areas",
  },

  // ── Utility Bar (top of header) ──────────────────────────────────────────────
  utilityBar: {
    available:   "Available 24/7 for Emergencies",
    licensed:    "Licensed & Insured",
    freeQuote:   "Free Estimates",
    callUs:      "Call Us:",
  },

  // ── Hero Section ─────────────────────────────────────────────────────────────
  hero: {
    eyebrow:        "Serving {city} & Surrounding Areas",
    callCta:        "Call Us:",
    badge:          "Serving {city} Since {year}",
    cta: {
      primary:      "Get a Free Estimate",
      secondary:    "Call Now",
      learnMore:    "Learn More",
    },
    trust: {
      licensed:     "Licensed & Insured",
      sameDay:      "Same-Day Service",
      guarantee:    "Satisfaction Guaranteed",
      freeEstimate: "Free Estimates",
    },
  },

  // ── Services Section ─────────────────────────────────────────────────────────
  services: {
    eyebrow:        "What We Do",
    heading:        "Our Services",
    subheading:     "Professional {service} services for homes and businesses across {city}.",
    learnMore:      "Learn More",
    viewAll:        "View All Services",
    headingSuffix:  "Services",
    featured:       "Featured Service",
  },

  // ── Why Choose Us ────────────────────────────────────────────────────────────
  why: {
    eyebrow:        "Why Choose Us",
    heading:        "The {city} {service} Experts",
    subheading:     "We've built our reputation on quality work, honest pricing, and showing up when we say we will.",
    cta:            "Get Your Free Estimate",
    stats: {
      yearsLabel:   "Years in Business",
      jobsLabel:    "Jobs Completed",
      ratingLabel:  "Average Rating",
      responseLabel:"Hour Response Time",
    },
    reasons: {
      licensed:     { title: "Licensed & Insured",       body: "Fully licensed, bonded, and insured for your complete peace of mind." },
      pricing:      { title: "Transparent Pricing",      body: "Upfront quotes with no hidden fees. You know the cost before we start." },
      experience:   { title: "Years of Experience",      body: "Over a decade serving {city} homeowners and businesses." },
      availability: { title: "24/7 Emergency Service",   body: "We answer the phone when you need us most — day or night." },
      guarantee:    { title: "Satisfaction Guaranteed",  body: "We stand behind every job. If you're not happy, we make it right." },
      local:        { title: "Locally Owned & Operated", body: "We live and work here too. Your neighbors, not a national chain." },
    },
  },

  // ── Process Section ──────────────────────────────────────────────────────────
  process: {
    eyebrow:        "How It Works",
    heading:        "Simple. Fast. Professional.",
    subheading:     "Getting {service} service in {city} has never been easier.",
    steps: [
      { title: "Call or Request Online", body: "Reach us by phone or submit a quick online form. We respond within the hour." },
      { title: "Get a Free Estimate",    body: "We assess the job and give you a clear, upfront price — no surprises." },
      { title: "We Do the Work",         body: "Our licensed technicians arrive on time and complete the job to the highest standard." },
      { title: "You're Satisfied",       body: "We don't leave until the job is done right and you're completely happy." },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────────
  testimonials: {
    eyebrow:        "Customer Reviews",
    heading:        "What {city} Homeowners Say",
    subheading:     "Don't take our word for it — here's what our customers have to say.",
    verified:       "Verified Customer",
    readMore:       "Read More Reviews",
  },

  // ── Locations Section ────────────────────────────────────────────────────────
  locations: {
    eyebrow:        "Service Areas",
    heading:        "Serving the Entire {city} Metro",
    subheading:     "We provide {service} services across {city} and all surrounding communities.",
    viewArea:       "View Service Area",
    viewAll:        "View All Service Areas",
  },

  // ── CTA Section ──────────────────────────────────────────────────────────────
  cta: {
    eyebrow:        "Ready to Get Started?",
    heading:        "Get Your Free {service} Estimate Today",
    subheading:     "No obligation. No pressure. Just honest advice and a fair price from your local {city} experts.",
    primary:        "Request Free Estimate",
    secondary:      "Call {phone}",
    trust:          "Same-day response • Free estimates • Licensed & insured",
    // FinalCta component keys
    callLabel:      "Call Us Now",
    formTitle:      "Get Your Free Estimate",
    formSub:        "We respond within one business hour.",
    trust1:         "Licensed & Insured Professionals",
    trust2:         "Same-Day Response Guaranteed",
    trust3:         "100% Satisfaction or We Make It Right",
  },

  // ── Contact Form ─────────────────────────────────────────────────────────────
  form: {
    sending:      "Sending…",
    errorGeneric: "Something went wrong. Please try again or call us directly.",
    heading:        "Request a Free Estimate",
    subheading:     "Fill out the form below and we'll get back to you within one business hour.",
    ariaLabel:      "Free estimate request form",
    firstName:      "First Name",
    lastName:       "Last Name",
    phone:          "Phone Number",
    email:          "Email Address",
    address:        "Service Address",
    service:        "Service Needed",
    servicePlaceholder: "Select a service...",
    details:        "Additional Details (Optional)",
    detailsPlaceholder: "Describe the issue, any urgency, or special requirements...",
    consentPre:     "I agree to the",
    privacyPolicy:  "Privacy Policy",
    consentAnd:     "and",
    terms:          "Terms of Service",
    submit:         "Get My Free Estimate",
    submitting:     "Sending...",
    privacy:        "Your information is private and will never be shared.",
    success: {
      heading:      "Request Received!",
      body:         "Thank you — we'll be in touch within one business hour.",
    },
    error:          "Something went wrong. Please call us directly.",
    // Legacy field keys (kept for backward compatibility)
    fields: {
      firstName:    "First Name",
      lastName:     "Last Name",
      phone:        "Phone Number",
      email:        "Email Address",
      service:      "Service Needed",
      location:     "Your Location",
      message:      "Tell Us More (Optional)",
      messagePlaceholder: "Describe the issue, any urgency, or questions you have...",
      selectService:"Select a service...",
      selectLocation:"Select your area...",
    },
  },

  // ── Blog ─────────────────────────────────────────────────────────────────────
  blog: {
    eyebrow:        "Tips & Advice",
    heading:        "{city} {service} Blog",
    subheading:     "Expert advice, how-to guides, and local tips from your {city} {service} pros.",
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
    heading:        "Your Trusted {city} {service} Experts",
    mission:        "Our Mission",
    team:           "Our Team",
    values:         "Our Values",
    cta:            "Get in Touch",
  },

  // ── Location Pages ───────────────────────────────────────────────────────────
  location: {
    eyebrow:        "{service} in {location}",
    heading:        "{service} Services in {location}, {region}",
    subheading:     "Professional, reliable {service} for homeowners and businesses in {location}.",
    whyLocal:       "Why {location} Residents Choose Us",
    coverage:       "Areas We Cover in {location}",
    cta:            "Get a Free Estimate in {location}",
    nearbyAreas:    "Nearby Service Areas",
  },

  // ── Service Pages ────────────────────────────────────────────────────────────
  service: {
    eyebrow:        "Professional {service}",
    getEstimate:    "Get a Free Estimate",
    callNow:        "Call Now",
    relatedServices:"Related Services",
    faq:            "Frequently Asked Questions",
    coverage:       "Service Areas",
    process:        "Our Process",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────────
  faq: {
    eyebrow:        "FAQ",
    heading:        "Common Questions About {service} in {city}",
    subheading:     "Can't find your answer? Call us directly — we're happy to help.",
    callUs:         "Call Us Directly",
  },

  // ── Footer ───────────────────────────────────────────────────────────────────
  footer: {
    tagline:        "Your trusted local {service} experts.",
    servicesHeading:"Our Services",
    areasHeading:   "Service Areas",
    companyHeading: "Company",
    contactHeading: "Contact Us",
    hours:          "Business Hours",
    copyright:      "© {year} {name}. All rights reserved.",
    viewAll:        "View All Areas",
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
    estimate:       "Free Estimate",
  },
  // ── Utility Bar ──────────────────────────────────────────────────────────────
  util: {
    available:      "Available 24/7",
    licensed:       "Licensed & Insured",
    freeEstimates:  "Free Estimates",
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
    heading:  "Looking For {service} In {city}?",
    p1:       "Need help with leaks, clogs, or emergencies without knowing who to trust?",
    p2:       "Looking for a local provider who responds quickly and shows up on time?",
    p3:       "Want clear, upfront pricing before the work begins — no hidden fees?",
    p4:       "Need reliable help in {city} or nearby areas?",
    p5:       "Trying to compare your options without wasting hours of your time?",
    p6:       "Want the job done right the first time, with a satisfaction guarantee?",
  },
  // ── Welcome Section ──────────────────────────────────────────────────────────
  welcome: {
    eyebrow:  "About Us",
    heading:  "Welcome to {name}",
    badge:    "Est. 2012",
    check1:   "Serving {city} and surrounding communities",
    check2:   "Licensed, bonded, and insured professionals",
    check3:   "100% satisfaction guarantee on every job",
  },

  // ── Page Content Blocks ──────────────────────────────────────────────────────
  // ALL body copy for the dynamic templates (service / location / sub-service
  // pages) lives here so a new niche or language NEVER requires template edits.
  // Placeholders: {business} {service} {serviceLower} {city} {area} {region}
  //               {founded} {phone} {location} {short} {parent} {parentLower}
  //               {child} {childLower} {years} {rating} {jobs}
  // AI INSTRUCTIONS: rewrite these per niche. Keep claims honest — do not
  // invent licenses, guarantees, or response times the business doesn't offer.
  blocks: {
    statsBar: {
      years: "Years in Business",
      jobs: "Jobs Completed",
      rating: "Average Rating",
      satisfaction: "Satisfaction Rate",
    },
    common: {
      getEstimate:   "Get a Free Estimate",
      requestQuote:  "Request a Free Quote",
      requestEstimate: "Request a Free Estimate",
      callPhone:     "Call {phone}",
      learnMore:     "Learn more →",
    },
    servicePage: {
      heroText: "Professional, licensed {serviceLower} for {city} homeowners and businesses. Free estimates · Same-day service · 100% satisfaction guaranteed.",
      intro: {
        heading: "Professional {service} You Can Trust in {city}",
        p1: "When you need {serviceLower} in {city}, you deserve a team that shows up on time, communicates clearly, and gets the job done right the first time. {business} has been serving {city} and the surrounding {area} since {founded}. We are licensed, bonded, and insured — and every job we complete is backed by our 100% satisfaction guarantee.",
        p2: "Our {serviceLower} service is designed for homeowners and businesses who want professional results without the stress. We provide free, no-obligation estimates, upfront pricing with no hidden fees, and same-day service for most requests in {city}.",
        p3: "{short} Whether you are dealing with a minor issue or a major problem, our experienced team has the tools, training, and local knowledge to handle it efficiently and professionally. We have completed thousands of {serviceLower} jobs throughout {city} and the {area}, earning a reputation for reliability, quality, and honest communication.",
      },
      sub: {
        eyebrow: "What We Cover",
        heading: "{service} Services We Offer in {city}",
        lead: "{business} provides a full range of {serviceLower} solutions for {city} homes and businesses. From routine maintenance to emergency repairs, our licensed team handles every aspect of {serviceLower} with the same high standard of care.",
      },
      signs: {
        eyebrow: "Warning Signs",
        heading: "Signs You Need {service} in {city}",
        lead: "Many {city} homeowners and businesses delay calling a professional until a small problem becomes a costly emergency. Here are the most common warning signs that you need {serviceLower} right away.",
        items: [
          { icon: "alert-triangle", title: "Visible damage or deterioration", desc: "If you can see signs of wear, damage, or failure, do not wait. Early intervention for {serviceLower} in {city} almost always costs less than emergency repairs." },
          { icon: "trending-down", title: "Reduced performance or efficiency", desc: "A noticeable drop in performance is often the first sign that {serviceLower} is needed. Address it early to avoid more serious problems." },
          { icon: "refresh-cw", title: "Recurring issues that keep coming back", desc: "If the same problem returns after temporary fixes, the root cause has not been addressed. A professional assessment gets it solved permanently." },
          { icon: "volume", title: "Unusual sounds or smells", desc: "Strange noises or odors are often early warning signs of a problem that requires professional {serviceLower} attention." },
          { icon: "calendar", title: "It has been more than a year", desc: "Regular maintenance is the best way to prevent costly repairs. If you have not had a professional {serviceLower} inspection in over a year, now is the time." },
          { icon: "home", title: "Older property or aging systems", desc: "Older properties in {city} often have systems that are approaching the end of their service life. A professional assessment can prevent unexpected failures." },
        ],
      },
      why: {
        eyebrow: "Why Choose Us",
        heading: "Why {city} Chooses {business} for {service}",
        lead: "Choosing the right {serviceLower} provider in {city} matters. Here is what sets {business} apart from other companies in the {area}.",
        items: [
          { title: "Licensed, Bonded & Insured", desc: "Every professional on our team is fully licensed and insured for {serviceLower} work in {city}. You are protected from the moment we arrive on site. We carry full liability insurance and are happy to provide documentation on request." },
          { title: "Transparent Upfront Pricing", desc: "We provide a clear, written estimate before any {serviceLower} work begins in {city}. The price we quote is the price you pay — no hidden fees, no surprise charges, no pressure. Our goal is to earn your trust, not maximize your invoice." },
          { title: "Same-Day Service Available", desc: "We understand that {serviceLower} issues in {city} often cannot wait. We offer same-day appointments for most requests and emergency service around the clock. Call us now and we will do our best to be there today." },
          { title: "100% Satisfaction Guarantee", desc: "We do not consider any {serviceLower} job in {city} complete until you are fully satisfied with the result. If anything is not right, we return and fix it at no additional cost. That is our written commitment on every job." },
          { title: "Local {city} Expertise", desc: "Our team has completed thousands of {serviceLower} jobs throughout {city} and the {area}. We know the local conditions, requirements, and common challenges specific to this area — which means faster diagnosis and better results for you." },
          { title: "Clean, Respectful Work", desc: "We treat every home and business in {city} with the same care and respect we would give our own. We protect the work area, keep it clean throughout the job, and leave your property in better condition than we found it." },
        ],
      },
      process: {
        title: "How Our {service} Process Works in {city}",
        subtitle: "Professional {serviceLower} service in {city}. Here is what to expect when you contact {business}.",
        steps: [
          { title: "Contact Us", text: "Call {phone} or submit our quick online form. We respond within the hour and confirm your appointment." },
          { title: "Free Written Estimate", text: "We assess the {serviceLower} job and provide a clear, written price — no hidden fees, no surprises, no pressure." },
          { title: "We Get to Work", text: "Our licensed {city} team arrives on time, fully equipped, and completes the job to the highest professional standard." },
          { title: "Satisfaction Guaranteed", text: "We do not consider the {serviceLower} job done until you are completely satisfied. All work is backed by a written guarantee." },
        ],
      },
      problems: {
        eyebrow: "Common Challenges",
        heading: "Common {service} Problems in {city}",
        lead: "Many {city} homeowners and businesses face similar challenges. Here are the most common situations our customers contact us about — and how we resolve them.",
        items: [
          { icon: "zap", title: "Unexpected emergencies", desc: "Problems can arise without warning. Our team is available for same-day and emergency {serviceLower} service throughout {city}." },
          { icon: "banknote", title: "Uncertainty about costs", desc: "Many customers are unsure what a fair price looks like. We provide free estimates and transparent pricing so you can make an informed decision." },
          { icon: "search", title: "Finding a reliable provider", desc: "Not all {serviceLower} providers are equal. {business} is licensed, insured, and has a proven track record in {city}." },
          { icon: "check-circle", title: "Concerns about quality", desc: "Our work is backed by a satisfaction guarantee. We do not consider a job complete until you are satisfied with the result." },
          { icon: "clock", title: "Tight schedules", desc: "We offer flexible appointment times and same-day service to work around your schedule in {city}." },
          { icon: "clipboard", title: "Hidden fees and surprises", desc: "We provide written estimates before work begins. The price we quote is the price you pay — always." },
        ],
      },
      about: {
        eyebrow: "About {business}",
        heading: "Trusted {service} Professionals in {city} Since {founded}",
        p1: "{business} was founded in {founded} with a simple mission: to provide honest, professional {serviceLower} services to homeowners and businesses in {city} and the surrounding {area}. Since then, we have completed thousands of jobs throughout the area, earning a reputation for reliability, quality, and honest communication.",
        p2: "We believe that every customer deserves to know exactly what they are paying for before work begins. That is why we provide free, written estimates with no obligation. Our pricing is transparent, our work is guaranteed, and our team is always on time.",
        p3: "When you choose {business} for {serviceLower} in {city}, you are choosing a locally owned company that is invested in this community. We live and work here — and our reputation depends on every single job we complete.",
      },
      area: {
        eyebrow: "Service Area",
        heading: "{service} Across {area}",
        lead: "{business} provides {serviceLower} throughout {area}. Whether you are in {city} or a surrounding community, our licensed team is nearby and ready to help.",
      },
      related: {
        eyebrow: "Our Services",
        heading: "Other {service} Services in {city}",
      },
      shortAnswer: {
        label: "Quick Answer",
        text: "{business} provides professional {serviceLower} for homes and businesses in {city} and the surrounding {area}. You get a free written estimate, same-day availability for most requests, and every job is backed by a satisfaction guarantee. Call {phone} or send a quick inquiry online.",
      },
      prosCons: {
        title: "Professional {service} vs. Doing It Yourself",
        lead: "An honest look at when it makes sense to hire a professional for {serviceLower} in {city} — and what to weigh before you decide.",
        prosTitle: "Benefits of hiring a professional",
        consTitle: "Things to consider",
        pros: [
          "The root cause gets fixed, not just the visible symptom",
          "Professional-grade equipment and materials deliver a cleaner, longer-lasting result",
          "Work is done safely and meets local {city} requirements",
          "A written guarantee protects you if anything is not right",
          "Most jobs are completed in a single visit, saving you a weekend of trial and error",
        ],
        cons: [
          "Costs more upfront than a DIY attempt",
          "Requires scheduling an appointment",
          "A quote or inspection may be needed before work can start",
        ],
      },
      comparison: {
        title: "DIY vs. Professional {service} in {city}",
        lead: "How the two approaches compare on the factors that matter most.",
        columns: ["", "DIY approach", "Professional service"],
        rows: [
          ["Upfront cost", "Lower — tools and materials only", "Higher — but quoted in writing before work starts"],
          ["Time required", "Often a full day or weekend, plus research", "Most jobs completed in a single scheduled visit"],
          ["Quality of result", "Depends on experience; mistakes are common", "Done right the first time, to professional standard"],
          ["Risk", "Errors can cause damage that costs more to fix later", "Insured work with a written satisfaction guarantee"],
          ["Long-term value", "Temporary fixes often need repeating", "Root cause addressed — the problem stays solved"],
        ],
      },
      gallery: {
        eyebrow: "Our Work",
        title: "Recent {service} Work in {city}",
        lead: "A look at the kind of results customers in {city} can expect from {business}.",
      },
      faqTitle: "Frequently Asked Questions About {service} in {city}",
      faqs: [
        { q: "How much does {serviceLower} cost in {city}?", a: "The cost of {serviceLower} in {city} depends on the scope and complexity of the work. {business} provides free, written estimates with no obligation. Contact us to schedule your assessment and receive a clear upfront price." },
        { q: "How quickly can you respond for {serviceLower} in {city}?", a: "We offer same-day service for most {serviceLower} requests in {city}. Emergency service is available around the clock. Call us now to confirm availability and book your appointment." },
        { q: "Is {business} licensed for {serviceLower} in {city}?", a: "Yes. {business} is fully licensed, bonded, and insured for all {serviceLower} work in {city} and the surrounding {area}. We are happy to provide documentation on request." },
        { q: "Do you offer a warranty on {serviceLower} work?", a: "Yes. All our {serviceLower} work in {city} is backed by a written satisfaction guarantee. If you are not satisfied with the result, we return and make it right at no additional cost." },
        { q: "What areas do you serve for {serviceLower}?", a: "We serve {city} and the surrounding {area}. Contact us to confirm coverage in your area." },
      ],
      ctaStrip: {
        heading: "Ready to Book {service} in {city}?",
        sub: "Free estimates · Same-day service · 100% satisfaction guaranteed",
      },
      finalCta: {
        title: "Get A Free {service} Estimate in {city}",
        text: "Fill out the quick form to schedule a no-pressure, no-obligation quote for {serviceLower} in {city} and nearby areas. We respond within one business hour.",
      },
    },
    locationPage: {
      heroText: "Professional, licensed {serviceLower} for {location} homeowners and businesses. Free estimates · Same-day service · 100% satisfaction guaranteed.",
      intro: {
        heading: "Your Trusted {service} Company in {location}",
        p1: "When you need {serviceLower} in {location}, you deserve a team that knows the area, shows up on time, and gets the job done right the first time. {business} has been serving {location} and the surrounding {area} since {founded}. We are licensed, bonded, and insured — and every job we complete is backed by our 100% satisfaction guarantee.",
        p3: "Our team has completed hundreds of {serviceLower} jobs throughout {location}. We know the local conditions and the specific challenges that properties in this area face — which means faster diagnosis and better results for you.",
        landmarksLabel: "Local landmarks we serve near:",
        ctaPrimary: "Get a Free Estimate in {location}",
      },
      services: {
        eyebrow: "What We Offer",
        heading: "{service} Services Available in {location}",
        lead: "{business} provides a complete range of {serviceLower} services for {location} homes and businesses. All work is performed by licensed professionals with free estimates and a written satisfaction guarantee.",
      },
      why: {
        eyebrow: "Why Choose Us",
        heading: "Why {location} Chooses {business}",
        lead: "There are many {serviceLower} companies serving {location}. Here is why homeowners and businesses in {location} consistently choose {business}.",
        items: [
          { title: "We Know {location}", desc: "Our team has worked throughout {location} for years. We understand the local conditions, common property types, and the specific {serviceLower} challenges that come with properties in this area. That local knowledge translates into faster service and better outcomes for you." },
          { title: "Licensed & Insured in {region}", desc: "{business} is fully licensed, bonded, and insured for all {serviceLower} work in {location} and throughout {region}. You are protected from the moment we arrive on site. We carry full liability insurance and are happy to provide documentation on request." },
          { title: "Same-Day Service in {location}", desc: "We understand that {serviceLower} problems in {location} often cannot wait. We offer same-day appointments for most requests and emergency service around the clock. Call us now and we will do our best to be there today." },
          { title: "Transparent Pricing — No Surprises", desc: "We provide a clear, written estimate before any work begins in {location}. The price we quote is the price you pay — no hidden fees, no surprise charges, no pressure. Our goal is to earn your trust, not maximize your invoice." },
        ],
      },
      process: {
        title: "How Our {service} Service Works in {location}",
        subtitle: "Here is what to expect when you contact {business} for {serviceLower} in {location}.",
        steps: [
          { title: "Contact Us", text: "Call {phone} or fill out our online form. We confirm your appointment and respond within the hour." },
          { title: "Free Written Estimate", text: "We assess the job in {location} and provide a clear, written price — no hidden fees, no surprises." },
          { title: "We Get to Work", text: "Our licensed {location} team arrives on time, fully equipped, and completes the job to the highest standard." },
          { title: "Satisfaction Guaranteed", text: "We do not consider the job done until you are fully satisfied. All work in {location} is backed by a written guarantee." },
        ],
      },
      map: {
        eyebrow: "Service Area",
        heading: "{service} Coverage in {location}, {region}",
        lead: "{business} serves {location} and the surrounding communities throughout {area}. Our team is strategically located to provide fast response times across the entire {location} area.",
      },
      about: {
        eyebrow: "About {business}",
        heading: "Trusted {service} Professionals in {location} Since {founded}",
        p1: "{business} was founded in {founded} with a simple mission: to provide honest, professional {serviceLower} services to homeowners and businesses in {city} and the surrounding {area}, including {location}.",
        p2: "We believe that every customer deserves to know exactly what they are paying for before work begins. That is why we provide free, written estimates with no obligation. Our pricing is transparent, our work is guaranteed, and our team is always on time.",
        p3: "When you choose {business} for {serviceLower} in {location}, you are choosing a locally owned company that is invested in this community. Our reputation depends on every single job we complete — and we take that seriously.",
      },
      shortAnswer: {
        label: "Quick Answer",
        text: "Yes — {business} provides {serviceLower} throughout {location} and the surrounding {area}. You get a free written estimate, same-day availability for most requests, and a satisfaction guarantee on every job. Call {phone} or send an inquiry online.",
      },
      faqTitle: "Frequently Asked Questions About {service} in {location}",
      faqs: [
        { q: "Do you provide {serviceLower} in {location}?", a: "Yes. {business} provides full {serviceLower} services in {location} and the surrounding {area}. We offer same-day service, free estimates, and a 100% satisfaction guarantee on all work." },
        { q: "How quickly can you respond to a {serviceLower} call in {location}?", a: "We offer same-day service for most {serviceLower} requests in {location}. Emergency service is available around the clock. Call {phone} to confirm availability." },
        { q: "How much does {serviceLower} cost in {location}?", a: "The cost of {serviceLower} in {location} depends on the scope and complexity of the work. {business} provides free, written estimates with no obligation. Contact us to schedule your assessment." },
        { q: "Is {business} licensed to work in {location}?", a: "Yes. {business} is fully licensed, bonded, and insured for all {serviceLower} work in {location} and throughout {region}. We are happy to provide documentation on request." },
        { q: "What {serviceLower} services do you offer in {location}?", a: "{business} offers a full range of {serviceLower} services in {location}. Contact us to discuss your specific needs and we will recommend the right solution." },
      ],
      ctaStrip: {
        heading: "Need {service} in {location}?",
        sub: "Free estimates · Same-day service · 100% satisfaction guaranteed",
      },
      finalCta: {
        title: "Get A Free {service} Estimate in {location}",
        text: "Fill out the quick form to schedule a no-pressure, no-obligation quote for {serviceLower} in {location}. We respond within one business hour.",
      },
    },
    childPage: {
      heroText: "Professional {childLower} services in {city}. Licensed, insured, and backed by a 100% satisfaction guarantee.",
      intro: {
        heading: "{child} in {city}: What You Need to Know",
        p1: "When it comes to {childLower} in {city}, the difference between a quick fix and a lasting solution comes down to experience and the right equipment. At {business}, our licensed professionals have handled hundreds of {childLower} jobs across {city} — from straightforward residential calls to complex commercial projects.",
        p2: "Every {childLower} job we take on starts with a thorough assessment. We identify the root cause, not just the symptom, so you are not paying for the same repair twice. Our team arrives fully prepared with professional-grade tools and materials, so most {childLower} work is completed in a single visit.",
        p3: "We understand that {childLower} issues rarely happen at a convenient time. That is why {business} offers same-day scheduling for urgent {childLower} needs throughout {city}. Our team will give you a realistic arrival window and keep you updated — no waiting around all day.",
      },
      trust: {
        heading: "Why Choose {business}?",
        items: [
          { strong: "Licensed & Insured", rest: " — All professionals fully certified" },
          { strong: "Same-Day Service", rest: " — Available across {city}" },
          { strong: "Transparent Pricing", rest: " — Written estimate before we start" },
          { strong: "100% Satisfaction Guarantee", rest: " — We make it right" },
          { strong: "{years} Years Experience", rest: " — Trusted in {city}" },
          { strong: "{rating}-Star Rated", rest: " — {jobs} jobs completed" },
        ],
      },
      signs: {
        heading: "Signs You Need {child} in {city}",
        lead: "Recognizing the warning signs early can save you significant time and money. Here are the most common indicators that you need professional {childLower} right away.",
        items: [
          "Visible damage, wear, or deterioration that is getting progressively worse",
          "Recurring issues that temporary fixes have not resolved permanently",
          "Unusual sounds, smells, or performance issues related to {parentLower}",
          "An upcoming property inspection, sale, or renovation that requires everything to be in order",
          "Your current system is more than 10 years old and showing its age",
          "You have noticed a sudden increase in utility bills or operating costs",
        ],
        outro: "If any of these apply to your situation, do not wait for the problem to escalate. Early intervention with professional {childLower} is almost always more cost-effective than emergency repairs later. Contact {business} today for a free assessment.",
      },
      benefits: {
        heading: "Benefits of Professional {child}",
        lead: "Choosing a licensed professional for {childLower} in {city} delivers results that DIY attempts simply cannot match.",
        cards: [
          { title: "Lasting Results", desc: "Professional {childLower} addresses the root cause, not just the surface symptom — so the problem stays fixed." },
          { title: "Code Compliance", desc: "All work meets local {city} requirements and manufacturer specifications, protecting your warranty and property value." },
          { title: "Safety Assurance", desc: "Licensed professionals identify and eliminate safety risks that untrained eyes might miss during {childLower}." },
          { title: "Cost Efficiency", desc: "A properly executed {childLower} job prevents costly repeat repairs and extends the life of your system significantly." },
        ],
      },
      process: {
        title: "Our {child} Process in {city}",
        subtitle: "Here is exactly what to expect when you book {childLower} with {business}.",
        steps: [
          { title: "Contact & Schedule", text: "Call {phone} or submit our quick online form. We will confirm your appointment and give you an accurate arrival window." },
          { title: "On-Site Assessment", text: "Our licensed professional inspects the situation thoroughly and provides a clear, written estimate before any work begins — no surprises." },
          { title: "Professional Execution", text: "We complete the {childLower} using professional-grade tools and materials. Most jobs are finished in a single visit." },
          { title: "Final Inspection & Guarantee", text: "We walk you through the completed work, answer your questions, and ensure you are 100% satisfied before we leave." },
        ],
      },
      siblings: {
        eyebrow: "Part of {parent}",
        heading: "Related {parent} Services in {city}",
        lead: "{child} is one component of our complete {parentLower} offering. Explore the other specialized services we provide in {city}.",
      },
      more: {
        eyebrow: "More Services",
        heading: "Other Services We Offer in {city}",
      },
      faqTitle: "{child} in {city} — Frequently Asked Questions",
      faqs: [
        { q: "What does {childLower} involve?", a: "{child} covers {short} Our licensed team handles every step professionally, from initial assessment through to final inspection." },
        { q: "How much does {childLower} cost in {city}?", a: "Costs vary depending on the scope, complexity, and materials required. We provide free, no-obligation written estimates before any work begins. Contact us today for a transparent quote." },
        { q: "How quickly can you provide {childLower} in {city}?", a: "We offer same-day and next-day service for most {childLower} requests in {city}. Our team is fully equipped and ready to respond quickly to urgent needs." },
        { q: "Is {childLower} covered by your satisfaction guarantee?", a: "Yes. All {childLower} work by {business} is backed by our 100% satisfaction guarantee. If you are not fully satisfied, we will return to make it right at no additional cost." },
        { q: "Do I need {childLower} or the full {parentLower} service?", a: "{child} is a specialized component of our broader {parentLower} offering. If you are unsure which service you need, our team will assess your situation and recommend the most cost-effective solution." },
      ],
    },
  },
} as const;
export default en;
export type UIStrings = typeof en;
