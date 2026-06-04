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
  }
} as const;
export default en;
export type UIStrings = typeof en;
