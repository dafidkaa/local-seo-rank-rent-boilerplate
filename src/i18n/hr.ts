/**
 * Croatian (hr) UI Strings
 * Mirror of en.ts — keys MUST match en.ts exactly.
 * AI: translate values only; never add/remove keys.
 */
const hr = {

  // ── Navigation ──────────────────────────────────────────────────────────────
  nav: {
    home:        "Početna",
    services:    "Transferi",
    locations:   "Rute",
    blog:        "Savjeti za putovanje",
    about:       "O nama",
    contact:     "Kontakt",
    getEstimate: "Zatražite ponudu",
    callNow:     "Nazovite sada",
    allServices: "Svi transferi",
    allLocations:"Sve rute",
  },

  // ── Utility Bar (top of header) ──────────────────────────────────────────────
  utilityBar: {
    available:   "Privatni transferi iz zračne luke",
    licensed:    "Auti · Kombiji · Autobusi na upit",
    freeQuote:   "English · Hrvatski · Deutsch",
    callUs:      "Nazovite nas:",
  },

  // ── Hero Section ─────────────────────────────────────────────────────────────
  hero: {
    eyebrow:        "Pokrivamo {city} i srednju Dalmaciju",
    callCta:        "Nazovite nas:",
    emailCta:       "Pošaljite e-mail",
    badge:          "Privatni transferi iz Zračne luke {city}",
    cta: {
      primary:      "Zatražite ponudu",
      secondary:    "Nazovite sada",
      learnMore:    "Saznajte više",
    },
    trust: {
      licensed:     "Privatni transferi",
      sameDay:      "Auti i kombiji na upit",
      guarantee:    "Pogodno za obitelji i grupe",
      freeEstimate: "Dostupni povratni transferi",
    },
  },

  // ── Services Section ─────────────────────────────────────────────────────────
  services: {
    eyebrow:        "Što organiziramo",
    heading:        "Naši transferi",
    subheading:     "Privatne opcije za {service} za putnike koji slijeću u Zračnu luku {city}, diljem područja {area}.",
    learnMore:      "Saznajte više",
    viewAll:        "Svi transferi",
    headingSuffix:  "transferi",
    featured:       "Istaknuti transfer",
  },

  // ── Why Choose Us ────────────────────────────────────────────────────────────
  why: {
    eyebrow:        "Zašto mi?",
    heading:        "Vaši stručnjaci za transfer iz Zračne luke {city}",
    subheading:     "Privatne vožnje od vrata do vrata uz jasnu fiksnu ponudu, preuzimanje usklađeno s letom i pravo vozilo za vašu grupu i prtljagu.",
    cta:            "Zatražite ponudu",
    stats: {
      yearsLabel:   "Privatno i izravno",
      jobsLabel:    "Fiksne ponude",
      ratingLabel:  "Usklađeno s letom",
      responseLabel:"Pogodno za grupe",
    },
    reasons: {
      licensed:     { title: "Privatno i izravno",         body: "Vožnje od vrata do vrata samo za vaše društvo — bez dijeljenja i bez zaobilaženja." },
      pricing:      { title: "Jasna fiksna ponuda",        body: "Fiksna ponuda za vašu rutu bez skrivenih troškova. Cijenu znate prije putovanja." },
      experience:   { title: "Poznavanje lokalnih ruta",   body: "Poznajemo ceste, mjesta i trajektne luke diljem {city} i regije {region}." },
      availability: { title: "Preuzimanje uz let",         body: "Pošaljite broj leta i operater može uskladiti preuzimanje s vremenom vašeg dolaska." },
      guarantee:    { title: "Pravo vozilo",               body: "Auti, kombiji, minibusevi i autobusi na upit — prilagođeni vašoj grupi i prtljazi." },
      local:        { title: "Višejezična usluga",         body: "Pomažemo na engleskom, hrvatskom i njemačkom kako bi rezervacija transfera bila jednostavna." },
    },
  },

  // ── Process Section ──────────────────────────────────────────────────────────
  process: {
    eyebrow:        "Kako funkcionira",
    heading:        "Jednostavno. Privatno. Bez stresa.",
    subheading:     "Organizirati {service} do {city} i diljem {area} vrlo je jednostavno.",
    steps: [
      { title: "Zatražite ponudu",            body: "Pošaljite rutu, let, broj putnika i prtljagu telefonom ili putem našeg brzog online obrasca." },
      { title: "Primite fiksnu ponudu",       body: "Operater odgovara s dostupnošću i jasnom fiksnom ponudom — bez iznenađenja." },
      { title: "Susret s vozačem",            body: "Stignete u Zračnu luku {city} i susretnete vozača prema uputama koje ste primili." },
      { title: "Putujte privatno",            body: "Opustite se na privatnoj, izravnoj vožnji do odredišta diljem regije {region}." },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────────
  testimonials: {
    eyebrow:        "Savjeti za putovanje",
    heading:        "Planiranje vašeg transfera do {city}",
    subheading:     "Korisni savjeti za organizaciju glatkog privatnog transfera iz zračne luke.",
    verified:       "Savjet za putovanje",
    readMore:       "Pročitajte više savjeta",
  },

  // ── Locations Section ────────────────────────────────────────────────────────
  locations: {
    eyebrow:        "Popularne rute",
    heading:        "Transferi diljem {city} i regije {region}",
    subheading:     "Privatne rute za {service} iz Zračne luke {city} do odredišta diljem područja {area}.",
    viewArea:       "Pogledajte rutu",
    viewAll:        "Pogledajte sve rute",
  },

  // ── CTA Section ──────────────────────────────────────────────────────────────
  cta: {
    eyebrow:        "Spremni za putovanje?",
    heading:        "Zatražite ponudu za {service} danas",
    subheading:     "Bez obveze. Samo pošaljite rutu i podatke o putovanju, a operater će odgovoriti s dostupnošću i fiksnom ponudom.",
    primary:        "Zatražite ponudu",
    secondary:      "Nazovite {phone}",
    trust:          "Privatni transferi • Fiksne ponude • Auti, kombiji i autobusi na upit",
    // FinalCta component keys
    callLabel:      "Nazovite nas sada",
    formTitle:      "Zatražite ponudu za transfer",
    formSub:        "Operater odgovara s dostupnošću i fiksnom ponudom.",
    trust1:         "Privatne vožnje od vrata do vrata",
    trust2:         "Preuzimanje usklađeno s letom",
    trust3:         "Pravo vozilo za vašu grupu",
  },

  // ── Contact Form ─────────────────────────────────────────────────────────────
  form: {
    sending:      "Slanje…",
    errorGeneric: "Nešto je pošlo po krivu. Pokušajte ponovno ili nas nazovite izravno.",
    heading:        "Zatražite ponudu za transfer",
    subheading:     "Recite nam svoju rutu i podatke o putovanju, a operater će odgovoriti s dostupnošću i fiksnom ponudom.",
    ariaLabel:      "Obrazac za zahtjev ponude za transfer",
    firstName:      "Ime",
    lastName:       "Prezime",
    phone:          "Broj telefona",
    email:          "E-mail adresa",
    address:        "Mjesto preuzimanja",
    pickup:         "Mjesto preuzimanja",
    pickupPlaceholder: "Zračna luka Split (SPU)",
    destination:    "Odredište / dostava",
    destinationPlaceholder: "Hotel, vila, marina, trajektna luka ili mjesto",
    pickupDate:     "Datum dolaska / preuzimanja",
    pickupTime:     "Vrijeme dolaska / preuzimanja",
    passengers:     "Putnici",
    luggage:        "Kovčezi / prtljaga",
    flightNumber:   "Broj leta (neobavezno)",
    vehicleType:    "Željeno vozilo",
    vehicleOptions: {
      notSure:      "Nisam siguran — preporučite",
      car:          "Privatni auto (1–3)",
      van:          "Kombi (do ~8)",
      minibus:      "Minibus",
      bus:          "Autobus",
    },
    childSeat:      "Potrebna dječja sjedalica",
    returnTransfer: "Trebam i povratni transfer do zračne luke",
    service:        "Vrsta transfera",
    servicePlaceholder: "Odaberite vrstu transfera…",
    details:        "Napomene (naziv smještaja, dob djece, dodatna zaustavljanja…)",
    detailsPlaceholder: "Recite nam sve što pomaže da vam točno izradimo ponudu…",
    consentPre:     "Slažem se s",
    privacyPolicy:  "Politikom privatnosti",
    consentAnd:     "i",
    terms:          "Uvjetima korištenja",
    submit:         "Zatražite ponudu",
    submitting:     "Slanje...",
    privacy:        "Vaši su podaci privatni i koriste se isključivo za pripremu vaše ponude za transfer.",
    success: {
      heading:      "Zahtjev za ponudu primljen",
      body:         "Hvala — operater će pregledati vašu rutu i podatke o putovanju te odgovoriti s dostupnošću i informacijama o ponudi.",
    },
    error:          "Nešto je pošlo po krivu. Molimo nazovite nas izravno.",
    // Legacy field keys (kept for backward compatibility)
    fields: {
      firstName:    "Ime",
      lastName:     "Prezime",
      phone:        "Broj telefona",
      email:        "E-mail adresa",
      service:      "Vrsta transfera",
      location:     "Odredište",
      message:      "Napomene (neobavezno)",
      messagePlaceholder: "Naziv smještaja, dob djece, dodatna zaustavljanja — sve što pomaže izradi ponude…",
      selectService:"Odaberite vrstu transfera...",
      selectLocation:"Odaberite odredište...",
    },
  },

  // ── Blog ─────────────────────────────────────────────────────────────────────
  blog: {
    eyebrow:        "Savjeti i upute",
    heading:        "Savjeti za transfer i putovanje — {city}",
    subheading:     "Praktični savjeti i lokalne informacije za dolazak u Zračnu luku {city} i putovanje diljem regije {region}.",
    readMore:       "Pročitajte članak",
    viewAll:        "Svi članci",
    minRead:        "min čitanja",
    postedOn:       "Objavljeno",
    by:             "autor",
    relatedPosts:   "Povezani članci",
    categories:     "Kategorije",
    allPosts:       "Svi članci",
  },

  // ── About Page ───────────────────────────────────────────────────────────────
  about: {
    eyebrow:        "O nama",
    heading:        "Vaša pomoć za transfer iz Zračne luke {city}",
    mission:        "Naša misija",
    team:           "Naša usluga",
    values:         "Što cijenimo",
    cta:            "Kontaktirajte nas",
  },

  // ── Location Pages ───────────────────────────────────────────────────────────
  location: {
    eyebrow:        "{service} do {location}",
    heading:        "Privatni transfer iz Zračne luke {city} do {location}, {region}",
    subheading:     "Privatni, izravni {service} za putnike koji slijeću u Zračnu luku {city} i putuju prema {location}.",
    whyLocal:       "Zašto putnici biraju ovaj transfer do {location}",
    coverage:       "Gdje vršimo dostavu u {location}",
    cta:            "Zatražite ponudu za transfer do {location}",
    nearbyAreas:    "Obližnje rute",
  },

  // ── Service Pages ────────────────────────────────────────────────────────────
  service: {
    eyebrow:        "Privatni {service}",
    getEstimate:    "Zatražite ponudu",
    callNow:        "Nazovite sada",
    relatedServices:"Povezani transferi",
    faq:            "Često postavljana pitanja",
    coverage:       "Rute i odredišta",
    process:        "Kako funkcionira",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────────
  faq: {
    eyebrow:        "FAQ",
    heading:        "Česta pitanja o transferu {service} iz Zračne luke {city}",
    subheading:     "Ne možete pronaći odgovor? Pošaljite nam svoju rutu — rado ćemo pomoći.",
    callUs:         "Kontaktirajte nas izravno",
  },

  // ── Footer ───────────────────────────────────────────────────────────────────
  footer: {
    tagline:        "Privatni transferi iz Zračne luke {city} diljem regije {region}.",
    servicesHeading:"Naši transferi",
    areasHeading:   "Popularne rute",
    companyHeading: "Tvrtka",
    contactHeading: "Kontaktirajte nas",
    hours:          "Vrijeme za upite",
    copyright:      "© {year} {name}. Sva prava pridržana.",
    viewAll:        "Pogledajte sve rute",
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

  // ── Cookie Consent ───────────────────────────────────────────────────────────
  cookie: {
    heading:        "Koristimo kolačiće",
    body:           "Koristimo kolačiće za poboljšanje vašeg iskustva i analizu prometa. Možete prihvatiti sve kolačiće ili prilagoditi svoje postavke.",
    acceptAll:      "Prihvati sve",
    rejectAll:      "Odbij neobavezne",
    customize:      "Prilagodi",
  },

  // ── Breadcrumbs ──────────────────────────────────────────────────────────────
  breadcrumbs: {
    home:           "Početna",
  },

  // ── 404 Page ─────────────────────────────────────────────────────────────────
  notFound: {
    heading:        "Stranica nije pronađena",
    body:           "Stranica koju tražite ne postoji ili je premještena.",
    cta:            "Povratak na početnu",
  },

  // ── Mobile CTA Bar ───────────────────────────────────────────────────────────
  mobileCta: {
    call:           "Nazovite sada",
    estimate:       "Zatražite ponudu",
  },
  // ── Utility Bar ──────────────────────────────────────────────────────────────
  util: {
    available:      "Privatni transferi iz zračne luke",
    licensed:       "Auti · Kombiji · Autobusi na upit",
    freeEstimates:  "English · Hrvatski · Deutsch",
  },
  // ── Nav extra ────────────────────────────────────────────────────────────────
  // ── Accessibility ────────────────────────────────────────────────────────────
  a11y: {
    skipToContent:  "Preskoči na sadržaj",
    openMenu:       "Otvori navigacijski izbornik",
    closeMenu:      "Zatvori navigacijski izbornik",
    changeLanguage: "Promijeni jezik",
    nextSlide:      "Sljedeći slajd",
    prevSlide:      "Prethodni slajd",
    externalLink:   "Otvara se u novoj kartici",
  },
  // ── Problems Section ─────────────────────────────────────────────────────────
  problems: {
    eyebrow:  "Prepoznajete li se?",
    heading:  "Trebate {service} iz Zračne luke {city}?",
    p1:       "Umorni ste od traženja prijevoza nakon dugog leta kada samo želite stići do svog smještaja?",
    p2:       "Putujete s prtljagom i djecom i želite udobnu, privatnu vožnju koja vas čeka?",
    p3:       "Želite jasnu fiksnu cijenu unaprijed — bez skrivenih troškova ili iznenađenja?",
    p4:       "Trebate stići do mjesta, vile, marine ili trajektne luke diljem područja {area}?",
    p5:       "Organizirate grupu i želite jedno vozilo koje će primiti sve putnike i prtljagu?",
    p6:       "Brinete zbog kasnog ili ranog dolaska i želite preuzimanje usklađeno s vašim letom?",
  },
  // ── Welcome Section ──────────────────────────────────────────────────────────
  welcome: {
    eyebrow:  "O nama",
    heading:  "Dobrodošli u {name}",
    badge:    "Privatni transferi",
    check1:   "Privatni transferi iz Zračne luke {city} diljem područja {area}",
    check2:   "Auti, kombiji, minibusevi i autobusi na upit",
    check3:   "Jasne fiksne ponude i preuzimanje usklađeno s letom",
  },

  // ── Page Content Blocks ──────────────────────────────────────────────────────
  blocks: {
    statsBar: {
      years: "Privatno i izravno",
      jobs: "Fiksne ponude",
      rating: "Usklađeno s letom",
      satisfaction: "Pogodno za grupe",
    },
    common: {
      getEstimate:   "Zatražite ponudu",
      requestQuote:  "Zatražite ponudu",
      requestEstimate: "Zatražite ponudu",
      callPhone:     "Nazovite {phone}",
      learnMore:     "Saznajte više →",
    },
    servicePage: {
      heroText: "Privatni {serviceLower} za putnike koji slijeću u Zračnu luku {city}. Fiksna ponuda · Preuzimanje usklađeno s letom · Auti, kombiji i autobusi na upit.",
      intro: {
        heading: "Privatni {service} na koji se možete osloniti iz Zračne luke {city}",
        p1: "Kada vam treba {serviceLower} nakon slijetanja u Zračnu luku {city}, želite privatnu, izravnu vožnju koja vas čeka i planirana je oko vašeg leta. {business} organizira privatne transfere diljem {city} i šireg područja {area}. Pošaljete rutu i podatke o putovanju, a operater odgovori s dostupnošću i jasnom fiksnom ponudom — bez skrivenih troškova.",
        p2: "Naš {serviceLower} osmišljen je za putnike koji žele udoban dolazak bez stresa. Organiziramo pravo vozilo za vašu grupu i prtljagu, planiramo preuzimanje oko vašeg vremena dolaska, a na upit dodajemo dječje sjedalice ili povratni transfer.",
        p3: "{short} Bilo da putujete do hotela, vile, marine, trajektne luke ili adrese u starogradskoj jezgri, operater poznaje rute diljem {city} i regije {region} — što znači glatko planiranje i opuštenu vožnju do odredišta.",
      },
      sub: {
        eyebrow: "Što organiziramo",
        heading: "Opcije za {service} iz Zračne luke {city}",
        lead: "{business} organizira cijeli raspon privatnih opcija za {serviceLower} za putnike koji slijeću u Zračnu luku {city}. Od privatnog auta za dvoje do minibusa ili autobusa za grupu, svaka je vožnja prilagođena vašem društvu i prtljazi.",
      },
      signs: {
        eyebrow: "Dobro je znati",
        heading: "Kome odgovara ovaj {service} i što treba znati",
        lead: "Privatni {serviceLower} iz Zračne luke {city} odgovara mnogim putnicima. Evo kome najbolje odgovara i nekoliko korisnih informacija prije nego zatražite ponudu.",
        items: [
          { icon: "alert-triangle", title: "Dolazak nakon dugog leta", desc: "Ako radije ne biste tražili prijevoz po dolasku, privatni {serviceLower} znači da je vozač planiran oko vašeg leta, a vožnja vas čeka spremna." },
          { icon: "trending-down", title: "Putovanje s prtljagom", desc: "S kovčezima, sportskom opremom ili kolicima, privatno vozilo prilagođeno vašoj prtljazi čini put iz Zračne luke {city} puno lakšim." },
          { icon: "refresh-cw", title: "Povratni transferi", desc: "Vraćate se u zračnu luku na kraju boravka? Spomenite to i povratni transfer može se unaprijed organizirati zajedno s dolaskom." },
          { icon: "volume", title: "Obitelji s djecom", desc: "Dječje sjedalice mogu se dodati na upit, pa obitelji koje putuju iz {city} mogu putovati udobno i sigurno." },
          { icon: "calendar", title: "Stizanje na trajekt", desc: "Ako vaša ruta uključuje trajektnu luku, pošaljite svoje vrijeme i operater može uskladiti transfer s polaskom trajekta." },
          { icon: "home", title: "Grupe koje putuju zajedno", desc: "Za veća društva, kombi, minibus ili autobus na upit drži sve putnike i prtljagu u jednom vozilu." },
        ],
      },
      why: {
        eyebrow: "Zašto mi",
        heading: "Zašto putnici biraju {business} za {service}",
        lead: "Način dolaska iz Zračne luke {city} do odredišta je važan. Evo što izdvaja transfer tvrtke {business}.",
        items: [
          { title: "Privatno i izravno", desc: "Vaš {serviceLower} samo je za vaše društvo — od vrata do vrata, bez dijeljenja i bez zaobilaženja. Putujete izravno do odredišta diljem {city} i regije {region}." },
          { title: "Jasna fiksna ponuda", desc: "Pošaljete rutu i operater odgovara fiksnom ponudom. Cijena koju vam navedu je cijena koju plaćate — bez skrivenih troškova i bez iznenađenja." },
          { title: "Preuzimanje usklađeno s letom", desc: "Pošaljete broj leta i operater može planirati preuzimanje oko vašeg vremena dolaska, pa je vozač spreman kada sletite u Zračnu luku {city}." },
          { title: "Pravo vozilo", desc: "Auti, kombiji, minibusevi i autobusi dostupni su na upit, prilagođeni veličini vaše grupe i prtljazi kako biste svi putovali udobno." },
          { title: "Poznavanje lokalnih ruta", desc: "Operater poznaje ceste, mjesta, marine i trajektne luke diljem {city} i područja {area}, što planiranje vašeg transfera čini glatkim i pouzdanim." },
          { title: "Višejezično i jednostavno za rezervaciju", desc: "Pomažemo na engleskom, hrvatskom i njemačkom, pa je traženje ponude i organizacija {serviceLower} jednostavna gdje god se nalazili." },
        ],
      },
      process: {
        title: "Kako funkcionira {service} iz Zračne luke {city}",
        subtitle: "Organizacija privatnog {serviceLower} s tvrtkom {business} je jednostavna. Evo što očekivati.",
        steps: [
          { title: "Zatražite ponudu", text: "Nazovite {phone} ili putem našeg brzog obrasca pošaljite rutu, let, broj putnika i prtljagu." },
          { title: "Primite fiksnu ponudu", text: "Operater odgovara s dostupnošću i jasnom fiksnom ponudom za vaš {serviceLower} — bez skrivenih troškova." },
          { title: "Susret s vozačem", text: "Stignete u Zračnu luku {city} i susretnete vozača prema uputama koje ste primili." },
          { title: "Putujte privatno", text: "Opustite se na privatnoj, izravnoj vožnji do odredišta diljem regije {region}." },
        ],
      },
      problems: {
        eyebrow: "Česte situacije",
        heading: "Česta pitanja putnika o transferu {service} do {city}",
        lead: "Mnogi putnici koji slijeću u Zračnu luku {city} razmišljaju o istim stvarima. Evo čestih situacija o kojima nas gosti pitaju — i kako privatni transfer pomaže.",
        items: [
          { icon: "zap", title: "Kasni ili rani dolasci", desc: "Pošaljite broj leta i operater može planirati preuzimanje oko vašeg vremena dolaska, čak i ako se let pomakne." },
          { icon: "banknote", title: "Želja za cijenom unaprijed", desc: "Primate jasnu fiksnu ponudu za svoju rutu prije putovanja, pa nema iznenađenja po dolasku." },
          { icon: "search", title: "Odabir pravog vozila", desc: "Niste sigurni što vam treba? Recite nam svoju grupu i prtljagu, a operater može preporučiti auto, kombi, minibus ili autobus na upit." },
          { icon: "check-circle", title: "Putovanje s djecom", desc: "Dječje sjedalice mogu se dodati na upit, pa obitelji koje putuju iz {city} putuju udobno i sigurno." },
          { icon: "clock", title: "Stizanje na trajekt ili daljnju vezu", desc: "Pošaljite svoje vrijeme i operater može planirati {serviceLower} oko vašeg trajekta ili daljnjeg putovanja." },
          { icon: "clipboard", title: "Povratna putovanja", desc: "Spomenite povratak i transfer natrag do Zračne luke {city} može se unaprijed organizirati zajedno s vašim dolaskom." },
        ],
      },
      about: {
        eyebrow: "O tvrtki {business}",
        heading: "Privatni {service} iz Zračne luke {city}",
        p1: "{business} pomaže putnicima organizirati privatne transfere iz Zračne luke {city} do odredišta diljem {city} i okolnog područja {area}. Pošaljete rutu i podatke o putovanju, a operater odgovori s dostupnošću i jasnom fiksnom ponudom.",
        p2: "Vjerujemo da svaki putnik zaslužuje znati cijenu prije putovanja. Zato primate jasnu fiksnu ponudu bez skrivenih troškova. Preuzimanja se planiraju oko vašeg leta, a pravo vozilo organizira se za vašu grupu i prtljagu.",
        p3: "Kada organizirate {serviceLower} putem tvrtke {business}, dobivate privatnu, izravnu vožnju i poznavanje lokalnih ruta diljem regije {region} — pa je vaš dolazak u {city} opušten od trenutka slijetanja.",
      },
      area: {
        eyebrow: "Rute i odredišta",
        heading: "{service} diljem područja {area}",
        lead: "{business} organizira privatni {serviceLower} diljem područja {area}. Bilo da putujete u {city} ili prema okolnom mjestu, vili, marini ili trajektnoj luci, vaša ruta može dobiti ponudu.",
      },
      related: {
        eyebrow: "Naši transferi",
        heading: "Ostale opcije za {service} iz Zračne luke {city}",
      },
      shortAnswer: {
        label: "Brzi odgovor",
        text: "{business} organizira privatni {serviceLower} za putnike koji slijeću u Zračnu luku {city}, diljem {city} i okolnog područja {area}. Pošaljete rutu, a operater odgovori s dostupnošću i fiksnom ponudom. Auti, kombiji, minibusevi i autobusi dostupni su na upit. Nazovite {phone} ili pošaljite brzi upit online.",
      },
      prosCons: {
        title: "Privatni {service} naspram drugih načina putovanja",
        lead: "Iskren pogled na to kada privatni {serviceLower} iz Zračne luke {city} ima smisla — i što razmotriti prije odluke.",
        prosTitle: "Prednosti privatnog transfera",
        consTitle: "Što treba uzeti u obzir",
        pros: [
          "Privatna, izravna vožnja samo za vaše društvo — bez dijeljenja i bez zaobilaženja",
          "Jasna fiksna ponuda dogovorena prije putovanja, bez skrivenih troškova",
          "Preuzimanje planirano oko vašeg leta, pa je vozač spreman kada sletite",
          "Pravo vozilo za vašu grupu i prtljagu, uz dječje sjedalice na upit",
          "Povratni transferi i usklađivanje s trajektom mogu se organizirati unaprijed",
        ],
        cons: [
          "Obično košta više od dijeljenog prijevoza za jednog putnika",
          "Najbolje je organizirati unaprijed kako bi se potvrdila dostupnost",
          "Ponude se daju e-mailom ili obrascem — cijene potvrđuje operater, nisu trenutne",
        ],
      },
      comparison: {
        title: "Privatni transfer naspram dijeljenih opcija do {city}",
        lead: "Kako se opcije uspoređuju po faktorima koji su najvažniji pri dolasku u Zračnu luku {city}.",
        columns: ["", "Dijeljeno / javno", "Privatni transfer"],
        rows: [
          ["Privatnost", "Dijeljeno s drugim putnicima", "Samo vaše društvo, od vrata do vrata"],
          ["Vrijeme", "Fiksni rasporedi i zaustavljanja", "Planirano oko vašeg dolaska leta"],
          ["Prtljaga", "Ograničen prostor, može biti tijesno", "Vozilo prilagođeno vašoj prtljazi na upit"],
          ["Grupe", "Možda su potrebne odvojene karte", "Jedno vozilo za cijelu grupu na upit"],
          ["Cijena", "Po osobi, varira", "Jasna fiksna ponuda za rutu, dogovorena unaprijed"],
        ],
      },
      gallery: {
        eyebrow: "Odredišta",
        title: "Popularne rute za {service} iz {city}",
        lead: "Pogled na vrste odredišta do kojih putnici stižu s tvrtkom {business} iz Zračne luke {city}.",
      },
      faqTitle: "Često postavljana pitanja o transferu {service} iz Zračne luke {city}",
      faqs: [
        { q: "Kako zatražiti {serviceLower} iz Zračne luke {city}?", a: "Pošaljite rutu, let, broj putnika i prtljagu telefonom ili putem našeg brzog obrasca. Operater odgovara s dostupnošću i jasnom fiksnom ponudom za vaš {serviceLower}." },
        { q: "Što ako mi let kasni?", a: "Pošaljite broj leta i operater može planirati preuzimanje oko vašeg vremena dolaska, pa se kašnjenje ili ranije slijetanje uzima u obzir." },
        { q: "Je li transfer privatan ili dijeljen?", a: "Privatan je. Vaš {serviceLower} samo je za vaše društvo — izravna vožnja od vrata do vrata, bez dijeljenja." },
        { q: "Možete li organizirati vozilo za grupu?", a: "Da. Auti, kombiji, minibusevi i autobusi dostupni su na upit, prilagođeni veličini vaše grupe i prtljazi." },
        { q: "Koja područja pokrivate?", a: "Organiziramo transfere iz Zračne luke {city} diljem {city} i okolnog područja {area}. Pošaljite svoju rutu za potvrdu i ponudu." },
      ],
      ctaStrip: {
        heading: "Spremni organizirati {service} do {city}?",
        sub: "Fiksna ponuda · Preuzimanje usklađeno s letom · Auti, kombiji i autobusi na upit",
      },
      finalCta: {
        title: "Zatražite ponudu za {service} do {city}",
        text: "Ispunite brzi obrazac i pošaljite svoju rutu i podatke o putovanju. Operater će odgovoriti s dostupnošću i fiksnom ponudom za vaš {serviceLower}.",
      },
    },
    locationPage: {
      heroText: "Privatni transfer iz Zračne luke {city} do {location}. Fiksna ponuda · Preuzimanje usklađeno s letom · Auti, kombiji i autobusi na upit.",
      intro: {
        heading: "Privatni transfer iz Zračne luke {city} do {location}",
        p1: "Kada sletite u Zračnu luku {city} i trebate stići do {location}, privatni {serviceLower} znači izravnu vožnju od vrata do vrata planiranu oko vašeg leta. {business} organizira transfere do {location} i diljem područja {area}. Pošaljete rutu i podatke o putovanju, a operater odgovori s dostupnošću i jasnom fiksnom ponudom.",
        p3: "Ova ruta odgovara putnicima koji putuju do hotela, vila, marina, trajektnih veza i starogradske jezgre u {location}. Uz privatno vozilo prilagođeno vašoj grupi i prtljazi, dolazak iz Zračne luke {city} do {location} udoban je i bez stresa.",
        landmarksLabel: "Popularna mjesta dostave u blizini:",
        ctaPrimary: "Zatražite ponudu za transfer do {location}",
      },
      services: {
        eyebrow: "Što organiziramo",
        heading: "Opcije transfera do {location}",
        lead: "{business} organizira privatni {serviceLower} iz Zračne luke {city} do {location} za putnike, obitelji i grupe. Auti, kombiji, minibusevi i autobusi dostupni su na upit, uz jasnu fiksnu ponudu i preuzimanje usklađeno s letom.",
      },
      why: {
        eyebrow: "Zašto mi",
        heading: "Zašto putnici biraju {business} za {location}",
        lead: "Postoji nekoliko načina da stignete do {location} iz zračne luke. Evo zašto putnici koji slijeću u Zračnu luku {city} biraju privatni transfer tvrtke {business}.",
        items: [
          { title: "Poznajemo rutu do {location}", desc: "Operater poznaje ceste, mjesta i trajektne luke između Zračne luke {city} i {location}. To lokalno znanje znači glatko planiranje i opuštenu vožnju do odredišta." },
          { title: "Privatno i izravno do {location}", desc: "Vaš {serviceLower} do {location} samo je za vaše društvo — od vrata do vrata, bez dijeljenja i bez zaobilaženja. Putujete izravno do svog smještaja." },
          { title: "Preuzimanje usklađeno s letom", desc: "Pošaljete broj leta i operater može planirati preuzimanje oko vašeg vremena dolaska, pa je vozač spreman kada sletite u Zračnu luku {city}." },
          { title: "Jasna fiksna ponuda", desc: "Pošaljete rutu do {location} i operater odgovara fiksnom ponudom. Cijena koju vam navedu je cijena koju plaćate — bez skrivenih troškova i iznenađenja." },
        ],
      },
      process: {
        title: "Kako funkcionira vaš transfer do {location}",
        subtitle: "Evo što očekivati kada organizirate {serviceLower} do {location} s tvrtkom {business}.",
        steps: [
          { title: "Zatražite ponudu", text: "Nazovite {phone} ili ispunite naš obrazac s rutom do {location}, letom, brojem putnika i prtljagom." },
          { title: "Primite fiksnu ponudu", text: "Operater odgovara s dostupnošću i jasnom fiksnom ponudom za vaš transfer do {location}." },
          { title: "Susret s vozačem", text: "Stignete u Zračnu luku {city} i susretnete vozača prema uputama koje ste primili." },
          { title: "Putujte privatno do {location}", text: "Opustite se na privatnoj, izravnoj vožnji do odredišta u {location}." },
        ],
      },
      map: {
        eyebrow: "Ruta",
        heading: "Ruta transfera do {location}, {region}",
        lead: "{business} organizira privatne transfere iz Zračne luke {city} do {location} i okolnih zajednica diljem područja {area}, uz dostavu do vašeg smještaja ili najbližeg prikladnog mjesta.",
      },
      about: {
        eyebrow: "O tvrtki {business}",
        heading: "Privatni transferi do {location} iz Zračne luke {city}",
        p1: "{business} pomaže putnicima organizirati privatne transfere iz Zračne luke {city} do odredišta diljem {city} i okolnog područja {area}, uključujući {location}.",
        p2: "Vjerujemo da svaki putnik zaslužuje znati cijenu prije putovanja. Zato primate jasnu fiksnu ponudu bez skrivenih troškova. Preuzimanja se planiraju oko vašeg leta, a pravo vozilo organizira se za vašu grupu i prtljagu.",
        p3: "Kada organizirate {serviceLower} do {location} putem tvrtke {business}, dobivate privatnu, izravnu vožnju i poznavanje lokalnih ruta — pa je vaš dolazak opušten od trenutka slijetanja.",
      },
      shortAnswer: {
        label: "Brzi odgovor",
        text: "Da — {business} organizira privatni {serviceLower} iz Zračne luke {city} do {location} i okolnog područja {area}. Pošaljete rutu, a operater odgovori s dostupnošću i fiksnom ponudom. Auti, kombiji, minibusevi i autobusi dostupni su na upit. Nazovite {phone} ili pošaljite upit online.",
      },
      faqTitle: "Često postavljana pitanja o transferima do {location}",
      faqs: [
        { q: "Organizirate li transfere iz Zračne luke {city} do {location}?", a: "Da. {business} organizira privatni {serviceLower} iz Zračne luke {city} do {location} i okolnog područja {area}. Pošaljite rutu za dostupnost i fiksnu ponudu." },
        { q: "Možete li planirati preuzimanje oko mog leta do {location}?", a: "Da. Pošaljite broj leta i operater može planirati preuzimanje oko vašeg vremena dolaska, pa je vozač spreman kada sletite." },
        { q: "Kako dobiti cijenu za transfer do {location}?", a: "Pošaljite rutu, broj putnika i prtljagu, a operater odgovara jasnom fiksnom ponudom — bez skrivenih troškova. Ponude se daju e-mailom ili obrascem." },
        { q: "Možete li nas ostaviti u starogradskoj jezgri u {location}?", a: "Da. Gdje su ulice pješačke, vozač će vas ostaviti na najbližem prikladnom mjestu uz vašu adresu u {location}." },
        { q: "Možete li prevesti grupu do {location}?", a: "Da. Auti, kombiji, minibusevi i autobusi dostupni su na upit, prilagođeni veličini vaše grupe i prtljazi." },
      ],
      ctaStrip: {
        heading: "Trebate transfer do {location}?",
        sub: "Fiksna ponuda · Preuzimanje usklađeno s letom · Auti, kombiji i autobusi na upit",
      },
      finalCta: {
        title: "Zatražite ponudu za transfer do {location}",
        text: "Ispunite brzi obrazac i pošaljite svoju rutu do {location} i podatke o putovanju. Operater će odgovoriti s dostupnošću i fiksnom ponudom.",
      },
    },
    childPage: {
      heroText: "Privatni {childLower} iz Zračne luke {city}. Fiksna ponuda, preuzimanje usklađeno s letom i pravo vozilo na upit.",
      intro: {
        heading: "{child} iz Zračne luke {city}: što trebate znati",
        p1: "Kada je riječ o {childLower} iz Zračne luke {city}, udoban dolazak svodi se na planiranje preuzimanja oko vašeg leta i usklađivanje vozila s vašim društvom. {business} organizira {childLower} za putnike diljem {city} — od para u privatnom autu do grupe u minibusu ili autobusu na upit.",
        p2: "Svaki {childLower} počinje vašom rutom i podacima o putovanju. Pošaljete kamo putujete, svoj let, broj putnika i prtljagu, a operater odgovori s dostupnošću i jasnom fiksnom ponudom — pa cijenu znate prije putovanja.",
        p3: "Razumijemo da dolasci ne idu uvijek po planu. Zato se preuzimanja za {childLower} planiraju oko vašeg broja leta, a dječje sjedalice ili povratni transfer mogu se dodati na upit diljem {city}.",
      },
      trust: {
        heading: "Zašto odabrati {business}?",
        items: [
          { strong: "Privatno i izravno", rest: " — samo vaše društvo, od vrata do vrata" },
          { strong: "Preuzimanje usklađeno s letom", rest: " — planirano oko vašeg dolaska u {city}" },
          { strong: "Jasna fiksna ponuda", rest: " — dogovorena prije putovanja, bez skrivenih troškova" },
          { strong: "Pravo vozilo", rest: " — auti, kombiji i autobusi na upit" },
          { strong: "Dječje sjedalice na upit", rest: " — udobno za obitelji" },
          { strong: "Povratni transferi", rest: " — organizirani unaprijed" },
        ],
      },
      signs: {
        heading: "Kome odgovara {child} u {city}",
        lead: "Privatni {childLower} odgovara mnogim putnicima. Evo čestih situacija u kojima vam olakšava dolazak u {city}.",
        items: [
          "Dolazite nakon dugog leta i želite privatnu vožnju koja vas čeka",
          "Putujete s kovčezima, sportskom opremom ili kolicima i trebate prostor",
          "Obitelj ste i želite dječju sjedalicu na upit",
          "Grupa ste i želite jedno vozilo za sve putnike i prtljagu",
          "Vaša ruta uključuje trajektnu luku i vremena se moraju uskladiti",
          "Trebate i povratni transfer natrag do Zračne luke {city} kasnije",
        ],
        outro: "Ako se nešto od navedenog odnosi na vas, pošaljite rutu i podatke o putovanju, a {business} može planirati vaš {childLower} oko vašeg leta. Zatražite ponudu i operater će odgovoriti s dostupnošću i fiksnom ponudom.",
      },
      benefits: {
        heading: "Prednosti privatnog: {child}",
        lead: "Odabir privatnog {childLower} iz Zračne luke {city} putnicima donosi udoban, isplaniran dolazak.",
        cards: [
          { title: "Privatno i izravno", desc: "{child} je samo za vaše društvo — izravna vožnja od vrata do vrata, bez dijeljenja i bez zaobilaženja." },
          { title: "Planirano oko vašeg leta", desc: "Pošaljete broj leta i operater može planirati preuzimanje oko vašeg vremena dolaska u Zračnu luku {city}." },
          { title: "Pravo vozilo", desc: "Auti, kombiji, minibusevi i autobusi dostupni su na upit, prilagođeni vašoj grupi i prtljazi za udobnu vožnju." },
          { title: "Jasna fiksna ponuda", desc: "Primate fiksnu ponudu prije putovanja, pa znate cijenu svog {childLower} bez skrivenih troškova." },
        ],
      },
      process: {
        title: "Kako funkcionira {child} u {city}",
        subtitle: "Evo što točno očekivati kada organizirate {childLower} s tvrtkom {business}.",
        steps: [
          { title: "Zatražite ponudu", text: "Nazovite {phone} ili pošaljite naš brzi obrazac s rutom, letom, brojem putnika i prtljagom." },
          { title: "Primite fiksnu ponudu", text: "Operater pregleda vaše podatke i odgovori s dostupnošću i jasnom fiksnom ponudom — bez skrivenih troškova." },
          { title: "Susret s vozačem", text: "Stignete u Zračnu luku {city} i susretnete vozača prema uputama koje ste primili." },
          { title: "Putujte privatno", text: "Opustite se na privatnoj, izravnoj vožnji do odredišta, uz dječje sjedalice ili povratni transfer na upit." },
        ],
      },
      siblings: {
        eyebrow: "Dio ponude {parent}",
        heading: "Povezane opcije {parent} u {city}",
        lead: "{child} je jedna od naših opcija {parentLower}. Istražite ostale privatne transfere koje organiziramo iz Zračne luke {city}.",
      },
      more: {
        eyebrow: "Više transfera",
        heading: "Ostali transferi koje organiziramo iz Zračne luke {city}",
      },
      faqTitle: "{child} u {city} — često postavljana pitanja",
      faqs: [
        { q: "Što uključuje {childLower}?", a: "{child} pokriva: {short} Pošaljete rutu i podatke o putovanju, a operater organizira privatnu vožnju uz jasnu fiksnu ponudu." },
        { q: "Kako dobiti cijenu za {childLower} u {city}?", a: "Pošaljite rutu, broj putnika i prtljagu, a operater odgovara jasnom fiksnom ponudom — bez skrivenih troškova. Ponude se daju e-mailom ili obrascem." },
        { q: "Možete li planirati {childLower} oko mog leta?", a: "Da. Pošaljite broj leta i operater može planirati preuzimanje oko vašeg vremena dolaska u Zračnu luku {city}." },
        { q: "Je li {childLower} privatan?", a: "Da. {childLower} koji organizira {business} je privatan — izravna vožnja od vrata do vrata samo za vaše društvo, bez dijeljenja." },
        { q: "Trebam li {childLower} ili drugu opciju {parentLower}?", a: "{child} je jedna od naših opcija {parentLower}. Ako niste sigurni koja odgovara vašoj grupi i prtljazi, pošaljite svoje podatke i operater će preporučiti." },
      ],
    },
  },
} as const;
export default hr;
