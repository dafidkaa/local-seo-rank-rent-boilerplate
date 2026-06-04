/**
 * Croatian (hr) UI Strings
 * ========================
 * Mirror of en.ts — all keys identical, all values translated.
 * Placeholders like {city}, {service}, {year} are preserved as-is.
 */

const hr = {

  nav: {
    home:        "Početna",
    services:    "Usluge",
    locations:   "Lokacije",
    blog:        "Blog",
    about:       "O Nama",
    contact:     "Kontakt",
    getEstimate: "Zatražite procjenu",
    callNow:     "Pozovite sada",
    allServices: "Sve usluge",
    allLocations:"Sva servisna područja",
  },

  utilityBar: {
    available:   "Dostupni 24/7 za hitne slučajeve",
    licensed:    "Licencirani i osigurani",
    freeQuote:   "Besplatne procjene",
    callUs:      "Nazovite:",
  },

  hero: {
    eyebrow:        "Servisiramo {city} i okolicu",
    callCta:        "Nazovite:",
    badge:          "Servisiramo {city} od {year}. godine",
    cta: {
    callLabel:      "Nazovite nas",
    formTitle:      "Zatražite besplatnu procjenu",
    formSub:        "Odgovaramo unutar jednog radnog sata.",
    trust1:         "Licencirani i osigurani stručnjaci",
    trust2:         "Odgovor isti dan zajamčen",
    trust3:         "100% zadovoljstvo ili rješavamo problem",
      primary:      "Zatražite besplatnu procjenu",
      secondary:    "Pozovite sada",
      learnMore:    "Saznajte više",
    },
    trust: {
      licensed:     "Licencirani i osigurani",
      sameDay:      "Usluga isti dan",
      guarantee:    "Zadovoljstvo zajamčeno",
      freeEstimate: "Besplatne procjene",
    },
  },

  services: {
    eyebrow:        "Što radimo",
    heading:        "Naše usluge",
    subheading:     "Profesionalne usluge {service} za domove i tvrtke u {city}.",
    learnMore:      "Saznajte više",
    viewAll:        "Pogledajte sve usluge",
    featured:       "Istaknuta usluga",
  },

  why: {
    eyebrow:        "Zašto odabrati nas",
    heading:        "Stručnjaci za {service} u {city}",
    subheading:     "Izgradili smo reputaciju na kvalitetnom radu, poštenim cijenama i točnosti.",
    cta:            "Zatražite besplatnu procjenu",
    stats: {
      yearsLabel:   "Godina iskustva",
      jobsLabel:    "Završenih poslova",
      ratingLabel:  "Prosječna ocjena",
      responseLabel:"Sati odgovora",
    },
    reasons: {
      licensed:     { title: "Licencirani i osigurani",     body: "Potpuno licencirani, vezani i osigurani za vaš potpuni mir." },
      pricing:      { title: "Transparentne cijene",        body: "Ponude unaprijed bez skrivenih naknada. Znate cijenu prije nego počnemo." },
      experience:   { title: "Godina iskustva",             body: "Više od desetljeća u službi vlasnika domova i tvrtki u {city}." },
      availability: { title: "Hitna usluga 24/7",           body: "Odgovaramo na telefon kada nam najviše trebate — danju i noću." },
      guarantee:    { title: "Zadovoljstvo zajamčeno",      body: "Stojimo iza svakog posla. Ako niste zadovoljni, ispravit ćemo." },
      local:        { title: "Lokalno vlasništvo",          body: "I mi živimo i radimo ovdje. Vaši susjedi, ne nacionalni lanac." },
    },
  },

  process: {
    eyebrow:        "Kako funkcionira",
    heading:        "Jednostavno. Brzo. Profesionalno.",
    subheading:     "Dobivanje usluge {service} u {city} nikad nije bilo lakše.",
    steps: [
      { title: "Nazovite ili zatražite online", body: "Kontaktirajte nas telefonom ili ispunite kratki online obrazac. Odgovaramo unutar sat vremena." },
      { title: "Dobijte besplatnu procjenu",    body: "Procjenjujemo posao i dajemo vam jasnu, unaprijed određenu cijenu — bez iznenađenja." },
      { title: "Mi obavljamo posao",            body: "Naši licencirani tehničari dolaze na vrijeme i završavaju posao prema najvišim standardima." },
      { title: "Vi ste zadovoljni",             body: "Ne odlazimo dok posao nije obavljen kako treba i dok niste potpuno zadovoljni." },
    ],
  },

  testimonials: {
    eyebrow:        "Recenzije kupaca",
    heading:        "Što kažu stanovnici {city}",
    subheading:     "Ne vjerujte nam na riječ — evo što naši kupci govore.",
    verified:       "Verificirani kupac",
    readMore:       "Pročitajte više recenzija",
  },

  locations: {
    eyebrow:        "Servisna područja",
    heading:        "Servisiramo cijelo područje {city}",
    subheading:     "Pružamo usluge {service} u {city} i svim okolnim zajednicama.",
    viewArea:       "Pogledajte servisno područje",
    viewAll:        "Pogledajte sva servisna područja",
  },

  cta: {
    callLabel:      "Nazovite nas",
    formTitle:      "Zatražite besplatnu procjenu",
    formSub:        "Odgovaramo unutar jednog radnog sata.",
    trust1:         "Licencirani i osigurani stručnjaci",
    trust2:         "Odgovor isti dan zajamčen",
    trust3:         "100% zadovoljstvo ili rješavamo problem",
    eyebrow:        "Spremni za početak?",
    heading:        "Zatražite besplatnu procjenu za {service} danas",
    subheading:     "Bez obveza. Bez pritiska. Samo pošteni savjet i pravedna cijena od vaših lokalnih stručnjaka u {city}.",
    primary:        "Zatražite besplatnu procjenu",
    secondary:      "Pozovite {phone}",
    trust:          "Odgovor isti dan • Besplatne procjene • Licencirani i osigurani",
  },

  form: {
    ariaLabel:      "Obrazac za besplatnu procjenu",
    firstName:      "Ime",
    lastName:       "Prezime",
    phone:          "Broj telefona",
    email:          "E-mail adresa",
    address:        "Adresa usluge",
    service:        "Potrebna usluga",
    servicePlaceholder: "Odaberite uslugu...",
    details:        "Dodatne informacije (neobavezno)",
    detailsPlaceholder: "Opišite problem, hitnost ili posebne zahtjeve...",
    consentPre:     "Slažem se s",
    privacyPolicy:  "Politikom privatnosti",
    consentAnd:     "i",
    terms:          "Uvjetima korištenja",
    submit:         "Zatražite besplatnu procjenu",
    submitting:     "Slanje...",
    privacy:        "Vaši podaci su privatni i nikada neće biti dijeljeni.",
    heading:        "Zatražite besplatnu procjenu",
    subheading:     "Ispunite obrazac i javit ćemo se unutar jednog radnog sata.",
    fields: {
      firstName:    "Ime",
      lastName:     "Prezime",
      phone:        "Broj telefona",
      email:        "E-mail adresa",
      service:      "Potrebna usluga",
      location:     "Vaša lokacija",
      message:      "Recite nam više (neobavezno)",
      messagePlaceholder: "Opišite problem, hitnost ili pitanja koja imate...",
      selectService:"Odaberite uslugu...",
      selectLocation:"Odaberite područje...",
    },
    submit:         "Pošalji upit",
    submitting:     "Slanje...",
    success: {
      heading:      "Upit primljen!",
      body:         "Hvala — javit ćemo se unutar jednog radnog sata.",
    },
    error:          "Nešto je pošlo po krivu. Molimo nazovite nas izravno.",
    privacy:        "Vaši podaci su privatni i nikada neće biti dijeljeni.",
  },

  blog: {
    eyebrow:        "Savjeti i upute",
    heading:        "Blog o {service} u {city}",
    subheading:     "Stručni savjeti, vodiči i lokalni nasveti od vaših stručnjaka za {service} u {city}.",
    readMore:       "Pročitajte članak",
    viewAll:        "Pogledajte sve članke",
    minRead:        "min čitanja",
    postedOn:       "Objavljeno",
    by:             "autor",
    relatedPosts:   "Slični članci",
    categories:     "Kategorije",
    allPosts:       "Svi članci",
  },

  about: {
    eyebrow:        "O nama",
    heading:        "Vaši pouzdani stručnjaci za {service} u {city}",
    mission:        "Naša misija",
    team:           "Naš tim",
    values:         "Naše vrijednosti",
    cta:            "Kontaktirajte nas",
  },

  location: {
    eyebrow:        "{service} u {location}",
    heading:        "Usluge {service} u {location}, {region}",
    subheading:     "Profesionalni, pouzdani {service} za vlasnike domova i tvrtke u {location}.",
    whyLocal:       "Zašto stanovnici {location} biraju nas",
    coverage:       "Područja koja pokrivamo u {location}",
    cta:            "Zatražite besplatnu procjenu u {location}",
    nearbyAreas:    "Obližnja servisna područja",
  },

  service: {
    eyebrow:        "Profesionalni {service}",
    getEstimate:    "Zatražite besplatnu procjenu",
    callNow:        "Pozovite sada",
    relatedServices:"Srodne usluge",
    faq:            "Često postavljana pitanja",
    coverage:       "Servisna područja",
    process:        "Naš proces",
  },

  faq: {
    eyebrow:        "Česta pitanja",
    heading:        "Česta pitanja o {service} u {city}",
    subheading:     "Ne možete pronaći odgovor? Nazovite nas izravno — rado ćemo pomoći.",
    callUs:         "Nazovite nas izravno",
  },

  footer: {
    tagline:        "Vaši pouzdani lokalni stručnjaci za {service}.",
    servicesHeading:"Naše usluge",
    areasHeading:   "Servisna područja",
    companyHeading: "Tvrtka",
    contactHeading: "Kontaktirajte nas",
    hours:          "Radno vrijeme",
    copyright:      "© {year} {name}. Sva prava pridržana.",
    viewAll:        "View All Areas",
    links: {
      privacy:      "Politika privatnosti",
      terms:        "Uvjeti korištenja",
      sitemap:      "Mapa stranice",
      disclaimer:   "Odricanje odgovornosti",
    },
    social: {
      follow:       "Pratite nas",
    },
  },

  cookie: {
    heading:        "Koristimo kolačiće",
    body:           "Koristimo kolačiće za poboljšanje vašeg iskustva i analizu prometa. Možete prihvatiti sve kolačiće ili prilagoditi postavke.",
    acceptAll:      "Prihvati sve",
    rejectAll:      "Odbij neobavezne",
    customize:      "Prilagodi",
  },

  breadcrumbs: {
    home:           "Početna",
  },

  notFound: {
    heading:        "Stranica nije pronađena",
    body:           "Stranica koju tražite ne postoji ili je premještena.",
    cta:            "Natrag na početnu",
  },

  a11y: {
    skipToContent:  "Preskoči na glavni sadržaj",
    openMenu:       "Otvori navigacijski izbornik",
    closeMenu:      "Zatvori navigacijski izbornik",
    changeLanguage: "Promijeni jezik",
    nextSlide:       "Sljedeći slajd",
    prevSlide:       "Prethodni slajd",
    externalLink:   "Otvara se u novoj kartici",
  },
  // ── Problems Section ─────────────────────────────────────────────────────────
  problems: {
    eyebrow:  "Prepoznajete li se?",
    heading:  "Tražite {service} u {city}?",
    p1:       "Trebate pomoć s curenjem, začepljenjem ili hitnim slučajevima, a ne znate kome vjerovati?",
    p2:       "Tražite lokalnog pružatelja usluga koji brzo reagira i dolazi na dogovoreno vrijeme?",
    p3:       "Želite jasnu cijenu unaprijed — bez skrivenih troškova?",
    p4:       "Trebate pouzdanu pomoć u {city} ili okolici?",
    p5:       "Pokušavate usporediti opcije bez gubljenja sati vremena?",
    p6:       "Želite da posao bude obavljen ispravno prvi put, uz jamstvo zadovoljstva?",
  },
  // ── Welcome Section ──────────────────────────────────────────────────────────
  welcome: {
    eyebrow:  "O nama",
    heading:  "Dobrodošli u {name}",
    badge:    "Osnovano 2012.",
    check1:   "Pružamo usluge u {city} i okolnim mjestima",
    check2:   "Licencirani, vezani i osigurani stručnjaci",
    check3:   "100% jamstvo zadovoljstva na svakom poslu",
  }
} as const;
export default hr;
