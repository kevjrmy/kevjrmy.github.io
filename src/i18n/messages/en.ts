// English: the reference copy. `fr.ts` and `es.ts` follow this file key for key
// (docs/i18n.md). What is not a sentence stays in the components and in src/data/:
// icons, links, years, brand names.

const en = {
  // ── Shared ──────────────────────────────────────────────────────────────────
  common: {
    visitSite: 'Visit site',
    visitLabel: (title: string) => `Visit ${title} (opens in a new tab)`,
    newTabLabel: (label: string) => `${label} (opens in a new tab)`,
  },

  // ── Header and footer ───────────────────────────────────────────────────────
  header: {
    nav: {
      home: 'Home',
      portfolio: 'Portfolio',
      services: 'Services',
      ai: 'AI',
      about: 'About',
    },
    contact: 'Contact',
    mainNav: 'Main navigation',
    mobileNav: 'Mobile navigation',
    menu: 'Menu',
    closeMenu: 'Close menu',
    toLight: 'Switch to light theme',
    toDark: 'Switch to dark theme',
    language: 'Language',
    tagline: 'Words are magic',
  },

  footer: {
    linkedin: 'My LinkedIn',
    github: 'My GitHub',
    rights: 'All Rights Reserved',
    terms: 'Terms of use',
    privacy: 'Privacy',
    languages: 'Languages',
  },

  // ── Home ────────────────────────────────────────────────────────────────────
  hero: {
    // The headline ends with the "/ai-agents" command, which is not translated
    line1: 'Building crafted projects',
    with: 'with',
    lead: "Hi, I'm Kevin Jeremy Gautier, a full-stack developer specialized in JavaScript (Node.js, React, TypeScript) and PHP (Laravel), now building with Claude Code.",
    viewWork: 'View My Work',
    contact: 'Contact Me',
  },

  // The keys of the terminal (role, stack, ai, langs) and its command stay in English
  cli: {
    role: 'Full-stack developer',
    nextPrompt: 'ready to build',
    working: 'working…',
  },

  homeStack: {
    label: 'Tech stack',
    ai: 'AI stack',
    aiLink: 'How I work with AI',
    classic: 'Classic stack',
    classicLink: 'The full stack',
  },

  homeServices: {
    heading: 'My Services',
    subline: 'What I build most, with AI agents in the loop.',
    items: {
      automation: {
        title: 'AI Automation',
        description: 'Manual spreadsheet work, turned into a tool that does it for you.',
      },
      webapp: {
        title: 'Web Application',
        description: 'Full-stack products, from MVP to production.',
      },
      pwa: {
        title: 'PWA',
        description: 'Installable, offline-ready web apps.',
      },
    },
    cta: 'See all services',
  },

  works: {
    heading: 'Selected Work',
    subline: "A few things I've built (see more on the portfolio page).",
    tablist: 'Featured projects',
    prev: 'Show previous projects',
    next: 'Show more projects',
    cta: 'See all projects',
  },

  award: {
    eyebrow: 'Award',
    heading: '1st place at Techstars Startup Weekend Valencia',
    body: "In June 2026 our team, Cuanto Cuesta, won the competition's Grand Prize with a simple idea: real, verified prices for local services in Spain.",
    facts: [
      'From idea to final pitch in 54 hours',
      'A team of six',
      'I have kept building its web side since: landing page, consumer app and business dashboard',
    ],
    visit: 'Visit Cuanto Cuesta',
    gallery: 'Photos from Techstars Startup Weekend Valencia',
    slideOf: (current: number, total: number) => `${current} of ${total}`,
    meta: 'Valencia · June 2026',
    prev: 'Previous photo',
    next: 'Next photo',
    photos: {
      'team': {
        alt: 'The six members of the Cuanto Cuesta team on stage, holding the Grand Prize certificate',
        caption: 'The Cuanto Cuesta team',
      },
      'kevin': {
        alt: 'Kevin Jeremy Gautier holding the Grand Prize certificate in front of the Techstars Startup Weekend Valencia banner',
        caption: '1st place, in hand',
      },
      'certificate': {
        alt: 'Framed "Grand Prize Winner: Cuanto Cuesta" certificate on a table covered in sticky notes',
        caption: 'Grand Prize Winner',
      },
      'pitch-market': {
        alt: 'A teammate presenting the market-size slide during the final pitch',
        caption: 'The final pitch',
      },
      'pitch-product': {
        alt: 'A teammate on stage presenting the Cuanto Cuesta product on a large screen',
        caption: 'Presenting the product',
      },
      'pitch-room': {
        alt: 'The final pitch seen from the back of the audience',
        caption: 'A full room',
      },
      'teammates': {
        alt: 'Kevin and two teammates smiling with the Grand Prize certificate',
        caption: 'With Luis and Adriano',
      },
    },
  },

  homeAbout: {
    eyebrow: 'About me',
    heading: 'Who am I ?',
    body1: "I'm Kevin Jeremy Gautier, a full-stack developer based in Valencia, Spain. I graduated in 2021 as a Node.js web developer with OpenClassrooms and started freelancing right away, first with WordPress sites, then with modern web frameworks. Today I build with AI agents: Claude Code above all, after working with Codex, OpenCode and Antigravity.",
    body2: 'My stack spans Laravel, Vue, React, and native Android, from a quick MVP to a production-grade web app. I focus on shipping work that is fast, accessible, and built to last.',
    photoAlt: 'Kevin Jeremy Gautier, full-stack developer based in Valencia',
    signals: {
      since: { label: 'Since 2021', detail: 'building for the web' },
      satisfied: { label: '100% satisfied', detail: 'every client, every project' },
      performance: { label: 'Performance-first', detail: 'fast by default, not by accident' },
      replies: { label: 'Replies within 24h', detail: "you won't be left hanging" },
    },
    cta: 'Learn more about me',
    ctaLabel: 'Learn more about Kevin Jeremy Gautier',
  },

  cta: {
    heading: 'Have a project in mind?',
    subline: "Let's figure out if I'm the right fit, no commitment, no pitch, just a conversation.",
    button: "Let's talk",
    label: 'Chat on WhatsApp (opens in a new tab)',
  },

  // ── Services page ───────────────────────────────────────────────────────────
  services: {
    eyebrow: 'Services',
    h1: 'What I can do for you',
    lead: "Whether you need a quick fix or a product built from scratch, I've got a service for that. I build with AI agents and answer for the result, so you get it sooner with the same care.",
    gridLabel: 'All services',
    items: {
      automation: {
        title: 'AI Automation',
        description: "Spreadsheets and repetitive admin turned into a tool that does the work for you. Built with AI agents, like the accounting app that replaced one client's Excel workbook.",
      },
      audit: {
        title: 'Audit',
        description: 'Performance, SEO, accessibility: know exactly what to fix and to optimize.',
      },
      training: {
        title: 'Training & Classes',
        description: 'Private JS/TS classes/tutoring sessions.',
      },
      pwa: {
        title: 'PWA',
        description: 'Installable, offline-ready web apps built with Vue or React.',
      },
      webapp: {
        title: 'Web Application',
        description: 'Full-stack apps with Laravel or Node.js, from MVP to production.',
      },
      consulting: {
        title: 'Consulting',
        description: 'Architecture review, tech choices, roadmap. Planning before building.',
      },
      mobile: {
        title: 'Mobile App',
        description: 'Native Android or cross-platform apps with React Native.',
      },
      wordpress: {
        title: 'WordPress',
        description: 'Maintenance and redesigns for existing sites, and new ones when WordPress is the right fit.',
      },
    },
    // The one call to action of the page (docs/content.md, Services)
    ctaHeading: 'Tell me what you need',
    ctaSubline: "A project, an idea, a business, a task, a gig: whatever it is, send me a message and we'll work out what it takes. No commitment, no pitch, just a conversation.",
  },

  // ── Portfolio page ──────────────────────────────────────────────────────────
  portfolio: {
    eyebrow: 'Portfolio',
    h1: 'Selected work',
    lead: 'Full-stack apps, PWAs and websites. The recent ones are built with AI agents.',
    filterLabel: 'Filter projects by category',
    // One label per ProjectType (src/types/project.ts)
    types: {
      'All': 'All',
      'Laravel': 'Laravel',
      'Web Application': 'Web Application',
      'Mobile App': 'Mobile App',
      'WordPress': 'WordPress',
      'Landing Page': 'Landing Page',
      'PWA': 'PWA',
      'Consulting': 'Consulting',
    },
    empty: 'No projects in this category yet.',
  },

  // One entry per project of src/data/projects.ts, under its slug
  projects: {
    'fraichup': {
      client: 'Food delivery startup',
      excerpt: 'Fresh food delivery platform for the French Riviera. Built for speed: orders, menus, and availability in one lightweight JS app.',
      alt: 'Fraichup: food delivery web app screenshot',
    },
    'sunspot': {
      client: 'Wellness startup',
      excerpt: 'Installable app that helps people in Valencia manage their sun exposure: live UV intensity and a map of curated outdoor "sunspots". Vue 3 and Firebase, with light and dark themes.',
      alt: 'SUNspot: map and explore screens of the PWA',
    },
    'limpiezas-el-imperio': {
      client: 'Cleaning company',
      excerpt: 'New website for a cleaning company near Valencia, replacing a site-builder page. Guided quote, booking and billing forms that arrive by email or WhatsApp. Static, fast, and free of cookies and tracking.',
      alt: 'Limpiezas El Imperio: cleaning company website screenshot',
    },
    'pickleball-valencia': {
      client: 'Sports club',
      excerpt: 'Website for an indoor pickleball club in Valencia: courts, school, café, events and booking. Rebuilt from WordPress with Claude Code as a fast static Astro site.',
      alt: 'Pickleball Valencia: club website screenshot',
    },
    'le-petit-cours': {
      client: 'Personal project',
      excerpt: 'Free, open-source French course written for Spanish speakers: short lessons, drills and reading, with optional accounts that sync progress across devices. A personal project, built with Claude Code on Next.js and Supabase.',
      alt: 'Le Petit Cours: home and lesson screens of the PWA',
    },
    'planetax': {
      client: 'Radio station',
      excerpt: 'Installable PWA for a Valencia-based Venezuelan radio network: three live stations, TV stream, and offline-ready shell in one lightweight Vue app.',
      alt: 'PlanetaX: radio PWA screenshot',
    },
    'el-imperio-contabilidad': {
      client: 'Cleaning company',
      excerpt: 'Online accounting for a cleaning company near Valencia, replacing a hand-kept Excel workbook. Services, clients, costs and real margin per client, with next month drafted from the jobs that repeat.',
      alt: 'Limpiezas El Imperio logo',
    },
    'fesma': {
      client: 'Painter & photographer',
      excerpt: 'Official site for a Valencia-based painter and photographer: projects, artworks, exhibitions and press, all driven by one JSON file. First built in vanilla HTML and SCSS, then rebuilt in Nuxt.',
      alt: 'Fesma: artist website screenshot',
    },
    'rachel-blot': {
      client: 'Book author',
      excerpt: 'Author portfolio and book showcase for a French writer. Clean reading experience with a direct link to her Amazon KDP catalogue.',
      alt: 'Rachel Blot: author website screenshot',
    },
    'ethica': {
      client: 'Beauty salon',
      excerpt: 'Website and online shop for a beauty salon in Alicante: services, appointment requests, a blog and a WooCommerce store, all on WordPress.',
      alt: 'Ethica Anabel Orzáez: beauty salon website screenshot',
    },
  },

  // ── About page ──────────────────────────────────────────────────────────────
  about: {
    eyebrow: 'About me',
    // One line of the headline per entry
    h1: ['A developer who', 'gives a damn.'],
    lead: "I'm Kevin Jeremy Gautier, a full-stack developer based in Valencia, Spain. Certified web developer, freelance since 2021, working in French, English and Spanish. These days I build with AI agents, and I still care that things work well and look the part.",
    photoAlt: 'Kevin Jeremy Gautier, full-stack developer based in Valencia, Spain',

    background: {
      eyebrow: 'Background',
      heading: 'How I got here',
    },
    timeline: {
      graduated: {
        year: '2021',
        title: 'Graduated & went freelance',
        body: "Earned the Web Developer (Node.js) diploma from OpenClassrooms, listed in France's national register of professional certifications (RNCP), and immediately started taking on clients, mostly WordPress sites for small businesses and local shops.",
      },
      frameworks: {
        year: '2022',
        title: 'Modern frameworks',
        body: 'Outgrew WordPress for anything custom. Picked up Vue and Laravel as my main stack and shipped my first SPA and first REST API in production.',
      },
      ssr: {
        year: '2023',
        title: 'SSR & production-grade apps',
        body: 'Levelled up with Nuxt and Next.js for SEO-critical projects. More complex Laravel back-ends, sharper focus on performance and accessibility.',
      },
      fullstack: {
        year: '2024',
        title: 'Going full-stack & mobile',
        body: 'Added React, TypeScript, and Kotlin to the toolkit. Built my first PWAs and a native Android app, convinced that one codebase rarely fits every problem.',
      },
      aiFirst: {
        year: '2025 → now',
        title: 'AI-first development',
        body: 'Most of my work now runs through AI agents. Claude Code is my main one, after time with Codex, OpenCode and Antigravity, and Cursor is my editor. The agents write fast; I direct, review and answer for the result.',
      },
    },
    credentials: {
      education: 'Education',
      languages: 'Languages',
      items: {
        diploma: { label: 'Web Developer (Node.js)', detail: 'OpenClassrooms, RNCP-registered diploma' },
        french: { label: 'French', detail: 'Native' },
        english: { label: 'English', detail: 'C1, Cambridge' },
        spanish: { label: 'Spanish', detail: 'C1, DELE, Instituto Cervantes' },
      },
    },

    toolkit: {
      eyebrow: 'Toolkit',
      heading: 'What I build with',
      subline: 'Two stacks: the AI agents that write with me, and the classic one they write in. Beside them, what I draw and edit video with.',
      ai: 'AI stack',
      aiLink: 'How I work with AI',
      classic: 'Classic stack',
      creative: 'Graphics & video',
    },

    values: {
      eyebrow: 'How I work',
      heading: 'What to expect',
      items: {
        ship: {
          title: 'Ship, then iterate',
          body: 'A working product in front of real users beats a perfect one on a Figma board. I push for a lean first release, then improve from feedback.',
        },
        readable: {
          title: 'Readable over clever',
          body: "Code is read far more often than it's written. I keep it straightforward so the next person (usually me, six months later) can pick it up without a manual.",
        },
        ghost: {
          title: 'No ghost clients',
          body: "If something changes, I say so early. You'll always know where the project stands: no unpleasant surprises at delivery.",
        },
      },
    },
  },

  // The titled columns of the classic stack (src/data/stack.ts)
  stack: {
    groups: {
      backend: 'Backend',
      frontend: 'Frontend',
      mobile: 'Mobile & desktop',
      hosting: 'Hosting & deploy',
      tools: 'Tools & other',
    },
  },

  // ── AI page ─────────────────────────────────────────────────────────────────
  ai: {
    eyebrow: 'AI',
    h1: ['Using AI since 2022.', 'Building with agents every day.'],
    lead: 'I did not discover AI last month. I have followed it since the first image generators, through chat, video and voice, to the coding agents I now work with all day. I treat it like the rest of the job: learned properly, reviewed carefully, and answered for.',
    // The keys of the status line under the intro
    facts: {
      since: 'since',
      mainAgent: 'main agent',
      next: 'next',
    },

    stack: {
      eyebrow: 'AI stack',
      heading: 'What I work with',
      subline: 'Claude Code as the agent, Cursor as the editor, Markdown for the context they both read. The languages and frameworks they write in are my classic stack.',
      everyDay: 'every day',
      // What each current tool is, in a few words, under its label in src/data/stack.ts
      roles: {
        'Claude Code': 'Main agent',
        'Cursor': 'Main editor',
        'Markdown': 'Context files',
      },
      pluggedKey: 'plugged in',
      plugged: 'Claude Code does not work alone: I extend it with the ecosystem around it.',
      kinds: {
        plugins: 'plugins',
        skills: 'skills',
        connectors: 'connectors',
      },
      upcomingTitle: 'Learning next',
      comingSoon: 'coming soon',
      upcoming: {
        hermes: {
          label: 'Hermes',
          role: 'The open-source agent by Nous Research, with a memory that lasts between sessions.',
        },
        jev: {
          label: 'Jev',
          role: 'A model by TypeSafe AI that returns typed decisions with a confidence score, instead of text.',
        },
        local: {
          label: 'Local LLMs',
          role: 'Open-source models running on my own machine, starting with Ollama.',
        },
        linear: {
          label: 'Linear',
          role: 'The issue tracker where the work is planned, and where tasks can be handed to coding agents.',
        },
      },
      classicLink: 'See the classic stack',
    },

    journey: {
      eyebrow: 'Journey',
      heading: 'From image prompts to coding agents',
      toolsLabel: 'Tools',
      // `when` is a year only where the year is known (docs/ai-journey.md)
      entries: {
        images: {
          when: '2022',
          title: 'It started with images',
          body: 'DALL·E 2: a sentence in, a picture out. That was the moment I started following the field.',
        },
        copilot: {
          when: '2022',
          title: 'Copilot in the editor',
          body: 'GitHub Copilot came to VS Code and I turned it on as soon as it was there. It was a helper then: hints and autocompletion as I typed, years before agents.',
        },
        chatgpt: {
          when: 'Dec 2022',
          title: 'ChatGPT, from the first days',
          body: 'I created my account a few days after it was released, when it ran on GPT-3.5. From then on, AI was something I worked with, not a demo I watched.',
        },
        imageModels: {
          when: '2023',
          title: 'Every image model I could try',
          body: 'Midjourney first, then whatever I could run for free on Hugging Face, to see what open models were capable of.',
        },
        assistants: {
          when: '2023 → 24',
          title: 'More than one assistant',
          body: 'I tried Bard before Google renamed it Gemini, and opened my Claude account in June 2024.',
        },
        video: {
          when: '2024 → 25',
          title: 'Video',
          body: 'I went through the video generators as they came out, Magnific, Sora and Veo 3 among them. I made my own AI videos in Google Flow, with Nano Banana for the images.',
        },
        deepseek: {
          when: '2025',
          title: 'DeepSeek-R1, and voice',
          body: 'I started with DeepSeek right after R1, its open reasoning model, was released in January 2025. I also began talking to Grok in voice mode, which I still do outside of work.',
        },
        agents: {
          when: '2025 → 26',
          title: 'From assistants to agents',
          body: 'Antigravity put an agent inside the editor. The AI course on OpenClassrooms gave structure to what I had learned by doing. Then agents started building whole apps for me: in the browser with Google AI Studio, and in the terminal with OpenCode and Codex.',
        },
        claudeCode: {
          when: '2026 → now',
          title: 'Claude Code',
          body: 'I switched to Claude Code and stayed. It is my main agent today, and the recent projects in my portfolio are built with it. Outside the terminal, I use Claude in its desktop app.',
        },
        next: {
          when: 'Next',
          title: 'Still on the list',
          body: 'Hermes, Jev and Linear come next, and open-source models in general: I have not run one on my own machine yet, and I will.',
        },
      },
    },

    practice: {
      eyebrow: 'Practice',
      heading: 'How I keep it serious',
      items: {
        direct: {
          title: 'I direct, the agents type',
          body: 'The agents write fast. I decide what gets built, read what comes back, and answer for the result.',
        },
        context: {
          title: 'Context is the craft',
          body: 'An agent is only as good as what it is told. I keep that context in plain Markdown files, a format I was writing long before agents read it.',
        },
        learned: {
          title: 'Learned, not improvised',
          body: 'I took the AI course on OpenClassrooms, the school of my developer diploma, on top of years of daily practice.',
        },
        room: {
          title: 'In the room',
          body: 'I go to AI meetups such as AI Tinkerers with developer friends, and we trade what works and what does not.',
        },
      },
    },
  },

  // ── Contact page ────────────────────────────────────────────────────────────
  contact: {
    eyebrow: 'Contact',
    h1: "Let's talk",
    lead: 'Pick whatever channel works best for you.',
    email: 'Email',
    via: (label: string) => `Contact via ${label}`,
  },

  // ── Terms and privacy page ──────────────────────────────────────────────────
  // A paragraph with a link in it is cut around the link: before, link, after
  info: {
    eyebrow: 'Info',
    h1: 'Terms & privacy',
    lead: "The short version: this is a portfolio. It doesn't track you and it doesn't ask you for anything.",
    updated: 'Last updated: 7 October 2026',

    terms: {
      heading: 'Terms of use',
      intro: (domain: string) => `${domain} is the personal portfolio of Kevin Jeremy Gautier, a freelance full-stack developer based in Valencia, Spain. It presents my work and the services I offer.`,
      using: {
        title: 'Using the site',
        body: "You're free to browse it, link to it and share it. Please don't copy its text, design or code and present them as your own.",
      },
      content: {
        title: 'Content',
        body: 'The text, design and code of this site are my own work. The client projects in the portfolio, including their names, logos and screenshots, belong to their respective owners and appear here as examples of work I delivered.',
      },
      prices: {
        title: 'Prices',
        body: "The Services page lists no prices. Each job is quoted once we've talked about it, and the price is agreed with you before any work starts.",
      },
      links: {
        title: 'External links',
        body: "The site links to client websites and to third-party services such as WhatsApp, LinkedIn and GitHub. I don't control those sites and I'm not responsible for their content.",
      },
      accuracy: {
        title: 'Accuracy',
        body: 'I keep this site accurate and up to date as best I can, but it is provided as is, without any guarantee.',
      },
    },

    privacy: {
      heading: 'Privacy',
      intro: "This site doesn't collect anything about you.",
      not: {
        title: "What the site doesn't do",
        items: [
          'No cookies.',
          'No analytics or tracking scripts.',
          'No forms, accounts or newsletter.',
          'No fonts, icons or scripts loaded from third parties: everything is served from this site.',
        ],
      },
      saved: {
        title: 'The one thing saved in your browser',
        body: 'The site follows your device\'s light or dark setting. If you pick the other one with the switch in the header, that choice is saved in your browser so the site remembers it on your next visit. It is the word "light" or "dark", nothing else; it never leaves your device, and switching back removes it.',
      },
      hosting: {
        title: 'Hosting',
        before: 'The site is hosted on GitHub Pages. Like any web host, GitHub receives technical data when your browser requests a page, such as your IP address, and may log it for security purposes. That is covered by ',
        link: "GitHub's privacy statement",
        after: '.',
      },
      contact: {
        title: 'When you contact me',
        body: "If you write to me by email, WhatsApp or LinkedIn, I receive what you choose to send: your name, your contact details and your message. I use it only to reply and, if we work together, to carry out the project. I don't sell it or pass it on. Those services handle your data under their own privacy policies.",
      },
      // before, the email address, middle, the link to the AEPD, after
      rights: {
        title: 'Your rights',
        before: 'You can ask me at any time what information I hold about you, and to correct or delete it: write to ',
        middle: '. If you are in the EU you can also complain to your data protection authority; in Spain that is the ',
        after: '.',
      },
      changes: {
        title: 'Changes',
        body: 'If the site changes in a way that affects your privacy, this page will be updated.',
      },
    },
  },
}

export default en
