import type { Messages } from '@/i18n/messages'

// French. Same keys as `en.ts`, which is the reference (docs/i18n.md).
// The reader is addressed as "vous". A space before ? ! : ; and inside « » is
// written \u00a0, so the sign never starts a line on its own.

const fr: Messages = {
  // ── Shared ──────────────────────────────────────────────────────────────────
  common: {
    visitSite: 'Voir le site',
    visitLabel: (title: string) => `Voir ${title} (s'ouvre dans un nouvel onglet)`,
    newTabLabel: (label: string) => `${label} (s'ouvre dans un nouvel onglet)`,
  },

  // ── Header and footer ───────────────────────────────────────────────────────
  header: {
    nav: {
      home: 'Accueil',
      portfolio: 'Portfolio',
      services: 'Services',
      ai: 'IA',
      about: 'À propos',
    },
    contact: 'Contact',
    mainNav: 'Navigation principale',
    mobileNav: 'Navigation mobile',
    menu: 'Menu',
    closeMenu: 'Fermer le menu',
    toLight: 'Passer au thème clair',
    toDark: 'Passer au thème sombre',
    language: 'Langue',
    tagline: 'Les mots sont magiques',
  },

  footer: {
    linkedin: 'Mon LinkedIn',
    github: 'Mon GitHub',
    rights: 'Tous droits réservés',
    terms: "Conditions d'utilisation",
    privacy: 'Confidentialité',
    languages: 'Langues',
  },

  // ── Home ────────────────────────────────────────────────────────────────────
  hero: {
    line1: 'Des projets soignés, construits',
    with: 'avec',
    lead: "Bonjour, je suis Kevin Jeremy Gautier, développeur full-stack spécialisé en JavaScript (Node.js, React, TypeScript) et PHP (Laravel). Aujourd'hui, je construis avec Claude Code.",
    viewWork: 'Voir mes projets',
    contact: 'Me contacter',
  },

  cli: {
    role: 'Développeur full-stack',
    nextPrompt: 'prêt à construire',
    working: 'au travail…',
  },

  homeStack: {
    label: 'Stack technique',
    ai: 'Stack IA',
    aiLink: "Comment je travaille avec l'IA",
    classic: 'Stack classique',
    classicLink: 'La stack complète',
  },

  homeServices: {
    heading: 'Mes services',
    subline: 'Ce que je construis le plus, avec des agents IA dans la boucle.',
    items: {
      automation: {
        title: 'Automatisation IA',
        description: 'Le travail manuel sur tableur, transformé en un outil qui le fait pour vous.',
      },
      webapp: {
        title: 'Application web',
        description: 'Des produits full-stack, du MVP à la production.',
      },
      pwa: {
        title: 'PWA',
        description: 'Des applications web installables, qui fonctionnent hors ligne.',
      },
    },
    cta: 'Voir tous les services',
  },

  works: {
    heading: 'Projets choisis',
    subline: 'Quelques-unes de mes réalisations (le reste est sur la page portfolio).',
    tablist: 'Projets à la une',
    prev: 'Afficher les projets précédents',
    next: 'Afficher les projets suivants',
    cta: 'Voir tous les projets',
  },

  award: {
    eyebrow: 'Récompense',
    heading: '1re place au Techstars Startup Weekend Valencia',
    body: 'En juin 2026, notre équipe, Cuanto Cuesta, a remporté le Grand Prize de la compétition avec une idée simple\u00a0: des prix réels et vérifiés pour les services de proximité en Espagne.',
    facts: [
      "De l'idée au pitch final en 54 heures",
      'Une équipe de six',
      'Depuis, je continue de développer sa partie web\u00a0: landing page, application grand public et tableau de bord pour les entreprises',
    ],
    visit: 'Voir Cuanto Cuesta',
    gallery: 'Photos du Techstars Startup Weekend Valencia',
    slideOf: (current: number, total: number) => `${current} sur ${total}`,
    meta: 'Valence · juin 2026',
    prev: 'Photo précédente',
    next: 'Photo suivante',
    photos: {
      'team': {
        alt: "Les six membres de l'équipe Cuanto Cuesta sur scène, tenant le certificat du Grand Prize",
        caption: "L'équipe Cuanto Cuesta",
      },
      'kevin': {
        alt: 'Kevin Jeremy Gautier tenant le certificat du Grand Prize devant la bannière du Techstars Startup Weekend Valencia',
        caption: '1re place, en main',
      },
      'certificate': {
        alt: 'Certificat encadré «\u00a0Grand Prize Winner: Cuanto Cuesta\u00a0» posé sur une table couverte de post-it',
        caption: 'Grand Prize Winner',
      },
      'pitch-market': {
        alt: "Un membre de l'équipe présente la diapositive sur la taille du marché pendant le pitch final",
        caption: 'Le pitch final',
      },
      'pitch-product': {
        alt: "Un membre de l'équipe sur scène, présentant le produit Cuanto Cuesta sur grand écran",
        caption: 'La présentation du produit',
      },
      'pitch-room': {
        alt: 'Le pitch final vu depuis le fond de la salle',
        caption: 'Une salle comble',
      },
      'teammates': {
        alt: 'Kevin et deux coéquipiers souriants avec le certificat du Grand Prize',
        caption: 'Avec Luis et Adriano',
      },
    },
  },

  homeAbout: {
    eyebrow: 'À propos',
    heading: 'Qui suis-je\u00a0?',
    body1: "Je suis Kevin Jeremy Gautier, développeur full-stack basé à Valence, en Espagne. Diplômé en 2021 comme développeur web Node.js chez OpenClassrooms, je me suis aussitôt lancé en freelance, d'abord avec des sites WordPress, puis avec des frameworks web modernes. Aujourd'hui, je construis avec des agents IA\u00a0: Claude Code avant tout, après avoir travaillé avec Codex, OpenCode et Antigravity.",
    body2: "Ma stack va de Laravel à Vue, React et Android natif, du MVP rapide à l'application web prête pour la production. Je m'attache à livrer un travail rapide, accessible et fait pour durer.",
    photoAlt: 'Kevin Jeremy Gautier, développeur full-stack basé à Valence',
    signals: {
      since: { label: 'Depuis 2021', detail: 'je construis pour le web' },
      satisfied: { label: '100\u00a0% satisfaits', detail: 'chaque client, chaque projet' },
      performance: { label: "La performance d'abord", detail: 'rapide par défaut, pas par hasard' },
      replies: { label: 'Réponse sous 24\u00a0h', detail: 'vous ne resterez pas sans nouvelles' },
    },
    cta: 'En savoir plus sur moi',
    ctaLabel: 'En savoir plus sur Kevin Jeremy Gautier',
  },

  cta: {
    heading: 'Un projet en tête\u00a0?',
    subline: 'Voyons ensemble si je suis la bonne personne\u00a0: sans engagement, sans discours commercial, juste une conversation.',
    button: 'Parlons-en',
    label: "Discuter sur WhatsApp (s'ouvre dans un nouvel onglet)",
  },

  // ── Services page ───────────────────────────────────────────────────────────
  services: {
    eyebrow: 'Services',
    h1: 'Ce que je peux faire pour vous',
    lead: "Qu'il s'agisse d'une correction rapide ou d'un produit à construire de zéro, j'ai un service pour ça. Je construis avec des agents IA et je réponds du résultat\u00a0: vous l'obtenez plus vite, avec le même soin.",
    gridLabel: 'Tous les services',
    items: {
      automation: {
        title: 'Automatisation IA',
        description: "Vos tableurs et vos tâches administratives répétitives deviennent un outil qui fait le travail à votre place. Construit avec des agents IA, comme l'application de comptabilité qui a remplacé le classeur Excel d'un client.",
      },
      audit: {
        title: 'Audit',
        description: 'Performance, SEO, accessibilité\u00a0: sachez exactement quoi corriger et quoi optimiser.',
      },
      training: {
        title: 'Formation et cours',
        description: 'Cours particuliers et tutorat en JS/TS.',
      },
      pwa: {
        title: 'PWA',
        description: 'Des applications web installables, qui fonctionnent hors ligne, construites avec Vue ou React.',
      },
      webapp: {
        title: 'Application web',
        description: 'Des applications full-stack avec Laravel ou Node.js, du MVP à la production.',
      },
      consulting: {
        title: 'Conseil',
        description: "Revue d'architecture, choix techniques, feuille de route. Planifier avant de construire.",
      },
      mobile: {
        title: 'Application mobile',
        description: 'Des applications Android natives, ou multiplateformes avec React Native.',
      },
      wordpress: {
        title: 'WordPress',
        description: 'Maintenance et refonte de sites existants, et nouveaux sites quand WordPress est le bon choix.',
      },
    },
    ctaHeading: "Dites-moi ce qu'il vous faut",
    ctaSubline: "Un projet, une idée, une entreprise, une tâche, une mission ponctuelle\u00a0: quoi que ce soit, écrivez-moi et nous verrons ensemble ce qu'il faut. Sans engagement, sans discours commercial, juste une conversation.",
  },

  // ── Portfolio page ──────────────────────────────────────────────────────────
  portfolio: {
    eyebrow: 'Portfolio',
    h1: 'Projets choisis',
    lead: 'Applications full-stack, PWA et sites web. Les plus récents sont construits avec des agents IA.',
    filterLabel: 'Filtrer les projets par catégorie',
    types: {
      'All': 'Tous',
      'Laravel': 'Laravel',
      'Web Application': 'Application web',
      'Mobile App': 'Application mobile',
      'WordPress': 'WordPress',
      'Landing Page': 'Landing page',
      'PWA': 'PWA',
      'Consulting': 'Conseil',
    },
    empty: 'Aucun projet dans cette catégorie pour le moment.',
  },

  projects: {
    'fraichup': {
      client: 'Startup de livraison de repas',
      excerpt: "Plateforme de livraison de produits frais sur la Côte d'Azur. Pensée pour la vitesse\u00a0: commandes, menus et disponibilités dans une seule application JS légère.",
      alt: "Fraichup\u00a0: capture d'écran de l'application web de livraison",
    },
    'sunspot': {
      client: 'Startup bien-être',
      excerpt: 'Application installable qui aide les habitants de Valence à gérer leur exposition au soleil\u00a0: intensité UV en direct et carte de «\u00a0sunspots\u00a0» sélectionnés en plein air. Vue 3 et Firebase, avec thèmes clair et sombre.',
      alt: 'SUNspot\u00a0: écrans carte et exploration de la PWA',
    },
    'limpiezas-el-imperio': {
      client: 'Entreprise de nettoyage',
      excerpt: "Nouveau site pour une entreprise de nettoyage près de Valence, à la place d'une page créée avec un constructeur de sites. Des formulaires guidés de devis, de réservation et de facturation, qui arrivent par e-mail ou WhatsApp. Statique, rapide, sans cookies ni pistage.",
      alt: "Limpiezas El Imperio\u00a0: capture d'écran du site de l'entreprise de nettoyage",
    },
    'pickleball-valencia': {
      client: 'Club de sport',
      excerpt: "Site d'un club de pickleball indoor à Valence\u00a0: terrains, école, café, événements et réservation. Reconstruit depuis WordPress avec Claude Code, en un site Astro statique et rapide.",
      alt: "Pickleball Valencia\u00a0: capture d'écran du site du club",
    },
    'le-petit-cours': {
      client: 'Projet personnel',
      excerpt: 'Cours de français gratuit et open source, écrit pour les hispanophones\u00a0: leçons courtes, exercices et lecture, avec des comptes facultatifs qui synchronisent la progression entre les appareils. Un projet personnel, construit avec Claude Code sur Next.js et Supabase.',
      alt: "Le Petit Cours\u00a0: écrans d'accueil et de leçon de la PWA",
    },
    'planetax': {
      client: 'Station de radio',
      excerpt: 'PWA installable pour un réseau de radios vénézuélien basé à Valence\u00a0: trois stations en direct, un flux TV et une interface disponible hors ligne, dans une seule application Vue légère.',
      alt: "PlanetaX\u00a0: capture d'écran de la PWA de radio",
    },
    'el-imperio-contabilidad': {
      client: 'Entreprise de nettoyage',
      excerpt: "Comptabilité en ligne pour une entreprise de nettoyage près de Valence, à la place d'un classeur Excel tenu à la main. Prestations, clients, coûts et marge réelle par client, avec le mois suivant préparé à partir des prestations qui se répètent.",
      alt: 'Logo de Limpiezas El Imperio',
    },
    'fesma': {
      client: 'Peintre et photographe',
      excerpt: "Site officiel de Fesma, peintre et photographe à Valence\u00a0: projets, œuvres, expositions et presse, le tout piloté par un seul fichier JSON. D'abord construit en HTML et SCSS purs, puis reconstruit avec Nuxt.",
      alt: "Fesma\u00a0: capture d'écran du site d'artiste",
    },
    'rachel-blot': {
      client: 'Autrice',
      excerpt: "Portfolio et vitrine des livres d'une autrice française. Une lecture épurée, avec un lien direct vers son catalogue Amazon KDP.",
      alt: "Rachel Blot\u00a0: capture d'écran du site de l'autrice",
    },
    'ethica': {
      client: 'Institut de beauté',
      excerpt: "Site et boutique en ligne d'un institut de beauté à Alicante\u00a0: prestations, demandes de rendez-vous, blog et boutique WooCommerce, le tout sur WordPress.",
      alt: "Ethica Anabel Orzáez\u00a0: capture d'écran du site de l'institut de beauté",
    },
  },

  // ── About page ──────────────────────────────────────────────────────────────
  about: {
    eyebrow: 'À propos',
    h1: ['Un développeur', "qui s'implique vraiment."],
    lead: "Je suis Kevin Jeremy Gautier, développeur full-stack basé à Valence, en Espagne. Développeur web certifié, freelance depuis 2021, je travaille en français, en anglais et en espagnol. Aujourd'hui je construis avec des agents IA, et je tiens toujours à ce que les choses fonctionnent bien et soient soignées.",
    photoAlt: 'Kevin Jeremy Gautier, développeur full-stack basé à Valence, en Espagne',

    background: {
      eyebrow: 'Parcours',
      heading: "Comment j'en suis arrivé là",
    },
    timeline: {
      graduated: {
        year: '2021',
        title: 'Diplômé, puis freelance',
        body: "J'ai obtenu le diplôme de Développeur web (Node.js) d'OpenClassrooms, inscrit au Répertoire national des certifications professionnelles (RNCP), et j'ai aussitôt pris mes premiers clients\u00a0: surtout des sites WordPress pour de petites entreprises et des commerces de proximité.",
      },
      frameworks: {
        year: '2022',
        title: 'Les frameworks modernes',
        body: "WordPress ne suffisait plus pour le sur-mesure. J'ai adopté Vue et Laravel comme stack principale et mis en production ma première SPA et ma première API REST.",
      },
      ssr: {
        year: '2023',
        title: 'SSR et applications de production',
        body: "Un cran au-dessus avec Nuxt et Next.js, pour les projets où le SEO est décisif. Des back-ends Laravel plus complexes, et plus d'attention à la performance et à l'accessibilité.",
      },
      fullstack: {
        year: '2024',
        title: 'Full-stack et mobile',
        body: "React, TypeScript et Kotlin ont rejoint ma boîte à outils. J'ai construit mes premières PWA et une application Android native, convaincu qu'une seule base de code répond rarement à tous les problèmes.",
      },
      aiFirst: {
        year: 'Depuis 2025',
        title: "Le développement, d'abord avec l'IA",
        body: "L'essentiel de mon travail passe désormais par des agents IA. Claude Code est mon agent principal, après un temps passé avec Codex, OpenCode et Antigravity, et Cursor est mon éditeur. Les agents écrivent vite\u00a0; je dirige, je relis et je réponds du résultat.",
      },
    },
    credentials: {
      education: 'Formation',
      languages: 'Langues',
      items: {
        diploma: { label: 'Développeur web (Node.js)', detail: 'OpenClassrooms, diplôme inscrit au RNCP' },
        french: { label: 'Français', detail: 'Langue maternelle' },
        english: { label: 'Anglais', detail: 'C1, Cambridge' },
        spanish: { label: 'Espagnol', detail: 'C1, DELE, Instituto Cervantes' },
      },
    },

    toolkit: {
      eyebrow: 'Outils',
      heading: 'Avec quoi je construis',
      subline: 'Deux stacks\u00a0: les agents IA qui écrivent avec moi, et la stack classique dans laquelle ils écrivent. À côté, ce avec quoi je dessine et je monte mes vidéos.',
      ai: 'Stack IA',
      aiLink: "Comment je travaille avec l'IA",
      classic: 'Stack classique',
      creative: 'Graphisme et vidéo',
    },

    values: {
      eyebrow: 'Ma façon de travailler',
      heading: 'À quoi vous attendre',
      items: {
        ship: {
          title: 'Livrer, puis itérer',
          body: "Un produit qui fonctionne entre les mains de vrais utilisateurs vaut mieux qu'un produit parfait sur une maquette Figma. Je vise une première version légère, puis j'améliore à partir des retours.",
        },
        readable: {
          title: 'Lisible plutôt que malin',
          body: "Le code est lu bien plus souvent qu'il n'est écrit. Je le garde simple, pour que la personne suivante (souvent moi, six mois plus tard) puisse le reprendre sans mode d'emploi.",
        },
        ghost: {
          title: 'Jamais de silence radio',
          body: 'Si quelque chose change, je le dis tôt. Vous saurez toujours où en est le projet\u00a0: pas de mauvaise surprise à la livraison.',
        },
      },
    },
  },

  stack: {
    groups: {
      backend: 'Backend',
      frontend: 'Frontend',
      mobile: 'Mobile et desktop',
      hosting: 'Mise en ligne',
      tools: 'Outils et autres',
    },
  },

  // ── AI page ─────────────────────────────────────────────────────────────────
  ai: {
    eyebrow: 'IA',
    h1: ["J'utilise l'IA depuis 2022.", 'Je construis avec des agents chaque jour.'],
    lead: "Je n'ai pas découvert l'IA le mois dernier. Je la suis depuis les premiers générateurs d'images, en passant par le chat, la vidéo et la voix, jusqu'aux agents de code avec lesquels je travaille aujourd'hui toute la journée. Je la traite comme le reste du métier\u00a0: apprise sérieusement, relue avec soin, et assumée.",
    facts: {
      since: 'depuis',
      mainAgent: 'agent principal',
      next: 'à venir',
    },

    stack: {
      eyebrow: 'Stack IA',
      heading: 'Avec quoi je travaille',
      subline: 'Claude Code comme agent, Cursor comme éditeur, Markdown pour le contexte que les deux lisent. Les langages et les frameworks dans lesquels ils écrivent forment ma stack classique.',
      everyDay: 'chaque jour',
      roles: {
        'Claude Code': 'Agent principal',
        'Cursor': 'Éditeur principal',
        'Markdown': 'Fichiers de contexte',
      },
      pluggedKey: 'branché',
      plugged: "Claude Code ne travaille pas seul\u00a0: je l'étends avec l'écosystème qui l'entoure.",
      kinds: {
        plugins: 'plugins',
        skills: 'skills',
        connectors: 'connecteurs',
      },
      upcomingTitle: 'À apprendre ensuite',
      comingSoon: 'bientôt',
      upcoming: {
        hermes: {
          label: 'Hermes',
          role: "L'agent open source de Nous Research, avec une mémoire qui dure d'une session à l'autre.",
        },
        jev: {
          label: 'Jev',
          role: 'Un modèle de TypeSafe AI qui renvoie des décisions typées avec un score de confiance, au lieu de texte.',
        },
        local: {
          label: 'LLM locaux',
          role: 'Des modèles open source qui tournent sur ma propre machine, en commençant par Ollama.',
        },
        linear: {
          label: 'Linear',
          role: "L'outil de suivi de tickets où le travail est planifié, et où des tâches peuvent être confiées à des agents de code.",
        },
      },
      classicLink: 'Voir la stack classique',
    },

    journey: {
      eyebrow: 'Parcours',
      heading: "Des prompts d'images aux agents de code",
      toolsLabel: 'Outils',
      entries: {
        images: {
          when: '2022',
          title: 'Tout a commencé par les images',
          body: "DALL·E 2\u00a0: une phrase en entrée, une image en sortie. C'est à ce moment-là que j'ai commencé à suivre le domaine.",
        },
        copilot: {
          when: '2022',
          title: "Copilot dans l'éditeur",
          body: "GitHub Copilot est arrivé dans VS Code et je l'ai activé dès qu'il a été disponible. C'était alors une aide\u00a0: des suggestions et de l'autocomplétion pendant la frappe, des années avant les agents.",
        },
        chatgpt: {
          when: 'Déc. 2022',
          title: 'ChatGPT, dès les premiers jours',
          body: "J'ai créé mon compte quelques jours après sa sortie, quand il tournait sur GPT-3.5. À partir de là, l'IA est devenue un outil de travail, plus une démo que je regardais.",
        },
        imageModels: {
          when: '2023',
          title: "Tous les modèles d'images à ma portée",
          body: "Midjourney d'abord, puis tout ce que je pouvais faire tourner gratuitement sur Hugging Face, pour voir de quoi les modèles ouverts étaient capables.",
        },
        assistants: {
          when: '2023 → 24',
          title: "Plus d'un assistant",
          body: "J'ai essayé Bard avant que Google ne le rebaptise Gemini, et j'ai ouvert mon compte Claude en juin 2024.",
        },
        video: {
          when: '2024 → 25',
          title: 'La vidéo',
          body: "J'ai essayé les générateurs de vidéo à mesure qu'ils sortaient, dont Magnific, Sora et Veo 3. J'ai réalisé mes propres vidéos IA dans Google Flow, avec Nano Banana pour les images.",
        },
        deepseek: {
          when: '2025',
          title: 'DeepSeek-R1, et la voix',
          body: "J'ai commencé avec DeepSeek juste après la sortie de R1, son modèle de raisonnement ouvert, en janvier 2025. J'ai aussi commencé à parler à Grok en mode vocal, ce que je fais toujours en dehors du travail.",
        },
        agents: {
          when: '2025 → 26',
          title: 'Des assistants aux agents',
          body: "Antigravity a mis un agent dans l'éditeur. Le cours d'IA d'OpenClassrooms a structuré ce que j'avais appris par la pratique. Puis les agents se sont mis à construire des applications entières pour moi\u00a0: dans le navigateur avec Google AI Studio, et dans le terminal avec OpenCode et Codex.",
        },
        claudeCode: {
          when: 'Depuis 2026',
          title: 'Claude Code',
          body: "Je suis passé à Claude Code et j'y suis resté. C'est mon agent principal aujourd'hui, et les projets récents de mon portfolio sont construits avec lui. En dehors du terminal, j'utilise Claude dans son application de bureau. J'ai aussi commencé Hermes, que j'apprends sur un cas réel\u00a0: un agent conçu pour préparer les séances du Petit Cours, mon cours de français pour hispanophones, et en relire les leçons. C'est mon premier projet avec lui, et d'autres suivront.",
        },
        next: {
          when: 'Ensuite',
          title: 'Encore sur la liste',
          body: "Jev et Linear viennent ensuite, et les modèles open source en général\u00a0: je n'en ai encore jamais fait tourner sur ma propre machine, et je le ferai.",
        },
      },
    },

    practice: {
      eyebrow: 'Pratique',
      heading: 'Une pratique que je prends au sérieux',
      items: {
        direct: {
          title: 'Je dirige, les agents tapent',
          body: 'Les agents écrivent vite. Je décide de ce qui se construit, je lis ce qui revient et je réponds du résultat.',
        },
        context: {
          title: "Le contexte, c'est le métier",
          body: "Un agent ne vaut que ce qu'on lui dit. Je garde ce contexte dans de simples fichiers Markdown, un format que j'écrivais bien avant que les agents ne le lisent.",
        },
        learned: {
          title: 'Appris, pas improvisé',
          body: "J'ai suivi le cours d'IA d'OpenClassrooms, l'école de mon diplôme de développeur, en plus d'années de pratique quotidienne.",
        },
        room: {
          title: 'Sur place',
          body: 'Je vais à des meetups IA comme AI Tinkerers avec des amis développeurs, et nous échangeons ce qui marche et ce qui ne marche pas.',
        },
      },
    },
  },

  // ── Contact page ────────────────────────────────────────────────────────────
  contact: {
    eyebrow: 'Contact',
    h1: 'Parlons-en',
    lead: 'Choisissez le canal qui vous convient le mieux.',
    email: 'E-mail',
    via: (label: string) => `Me contacter par ${label}`,
  },

  // ── Terms and privacy page ──────────────────────────────────────────────────
  info: {
    eyebrow: 'Infos',
    h1: 'Conditions et confidentialité',
    lead: 'En bref\u00a0: ceci est un portfolio. Il ne vous suit pas et ne vous demande rien.',
    updated: 'Dernière mise à jour\u00a0: 7 octobre 2026',

    terms: {
      heading: "Conditions d'utilisation",
      intro: (domain: string) => `${domain} est le portfolio personnel de Kevin Jeremy Gautier, développeur full-stack freelance basé à Valence, en Espagne. Il présente mon travail et les services que je propose.`,
      using: {
        title: 'Utilisation du site',
        body: "Vous êtes libre de le parcourir, d'y faire un lien et de le partager. Merci de ne pas copier ses textes, son design ou son code pour les présenter comme les vôtres.",
      },
      content: {
        title: 'Contenu',
        body: "Les textes, le design et le code de ce site sont mon propre travail. Les projets clients du portfolio, y compris leurs noms, logos et captures d'écran, appartiennent à leurs propriétaires respectifs et figurent ici comme exemples de travaux que j'ai livrés.",
      },
      prices: {
        title: 'Tarifs',
        body: "La page Services n'affiche aucun tarif. Chaque mission fait l'objet d'un devis une fois que nous en avons parlé, et le prix est convenu avec vous avant le début du travail.",
      },
      links: {
        title: 'Liens externes',
        body: 'Le site renvoie vers des sites de clients et vers des services tiers comme WhatsApp, LinkedIn et GitHub. Je ne contrôle pas ces sites et je ne suis pas responsable de leur contenu.',
      },
      accuracy: {
        title: 'Exactitude',
        body: 'Je fais de mon mieux pour que ce site reste exact et à jour, mais il est fourni tel quel, sans aucune garantie.',
      },
    },

    privacy: {
      heading: 'Confidentialité',
      intro: 'Ce site ne collecte rien à votre sujet.',
      not: {
        title: 'Ce que le site ne fait pas',
        items: [
          'Pas de cookies.',
          "Pas de scripts d'analyse ou de pistage.",
          'Pas de formulaires, de comptes ni de newsletter.',
          "Pas de polices, d'icônes ni de scripts chargés depuis des tiers\u00a0: tout est servi depuis ce site.",
        ],
      },
      saved: {
        title: 'La seule chose enregistrée dans votre navigateur',
        body: "Le site suit le réglage clair ou sombre de votre appareil. Si vous choisissez l'autre avec le bouton de l'en-tête, ce choix est enregistré dans votre navigateur pour que le site s'en souvienne à votre prochaine visite. C'est le mot «\u00a0light\u00a0» ou «\u00a0dark\u00a0», rien d'autre\u00a0; il ne quitte jamais votre appareil, et revenir en arrière le supprime.",
      },
      hosting: {
        title: 'Hébergement',
        before: 'Le site est hébergé sur GitHub Pages. Comme tout hébergeur, GitHub reçoit des données techniques lorsque votre navigateur demande une page, par exemple votre adresse IP, et peut les enregistrer à des fins de sécurité. Cela relève de la ',
        link: 'déclaration de confidentialité de GitHub',
        after: '.',
      },
      contact: {
        title: 'Quand vous me contactez',
        body: "Si vous m'écrivez par e-mail, WhatsApp ou LinkedIn, je reçois ce que vous choisissez d'envoyer\u00a0: votre nom, vos coordonnées et votre message. Je ne m'en sers que pour vous répondre et, si nous travaillons ensemble, pour mener le projet à bien. Je ne les vends pas et ne les transmets à personne. Ces services traitent vos données selon leurs propres politiques de confidentialité.",
      },
      rights: {
        title: 'Vos droits',
        before: 'Vous pouvez me demander à tout moment quelles informations je détiens à votre sujet, et de les corriger ou de les supprimer\u00a0: écrivez à ',
        middle: ". Si vous êtes dans l'UE, vous pouvez aussi déposer une réclamation auprès de votre autorité de protection des données\u00a0; en Espagne, il s'agit de l'",
        after: '.',
      },
      changes: {
        title: 'Modifications',
        body: "Si le site change d'une manière qui touche à votre vie privée, cette page sera mise à jour.",
      },
    },
  },
}

export default fr
