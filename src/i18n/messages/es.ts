import type { Messages } from '@/i18n/messages'

// Spanish, as written in Spain. Same keys as `en.ts`, which is the reference
// (docs/i18n.md). The reader is addressed as "tú".

const es: Messages = {
  // ── Shared ──────────────────────────────────────────────────────────────────
  common: {
    visitSite: 'Ver el sitio',
    visitLabel: (title: string) => `Visitar ${title} (se abre en una pestaña nueva)`,
    newTabLabel: (label: string) => `${label} (se abre en una pestaña nueva)`,
  },

  // ── Header and footer ───────────────────────────────────────────────────────
  header: {
    nav: {
      home: 'Inicio',
      portfolio: 'Portfolio',
      services: 'Servicios',
      ai: 'IA',
      about: 'Sobre mí',
    },
    contact: 'Contacto',
    mainNav: 'Navegación principal',
    mobileNav: 'Navegación móvil',
    menu: 'Menú',
    closeMenu: 'Cerrar el menú',
    toLight: 'Cambiar al tema claro',
    toDark: 'Cambiar al tema oscuro',
    language: 'Idioma',
    tagline: 'Las palabras son magia',
  },

  footer: {
    linkedin: 'Mi LinkedIn',
    github: 'Mi GitHub',
    rights: 'Todos los derechos reservados',
    terms: 'Condiciones de uso',
    privacy: 'Privacidad',
    languages: 'Idiomas',
  },

  // ── Home ────────────────────────────────────────────────────────────────────
  hero: {
    line1: 'Proyectos cuidados, creados',
    with: 'con',
    lead: 'Hola, soy Kevin Jeremy Gautier, desarrollador full-stack especializado en JavaScript (Node.js, React, TypeScript) y PHP (Laravel). Ahora construyo con Claude Code.',
    viewWork: 'Ver mis proyectos',
    contact: 'Contactar',
  },

  cli: {
    role: 'Desarrollador full-stack',
    nextPrompt: 'listo para construir',
    working: 'trabajando…',
  },

  homeStack: {
    label: 'Stack técnico',
    ai: 'Stack de IA',
    aiLink: 'Cómo trabajo con la IA',
    classic: 'Stack clásico',
    classicLink: 'El stack completo',
  },

  homeServices: {
    heading: 'Mis servicios',
    subline: 'Lo que más construyo, con agentes de IA en el proceso.',
    items: {
      automation: {
        title: 'Automatización con IA',
        description: 'El trabajo manual en hojas de cálculo, convertido en una herramienta que lo hace por ti.',
      },
      webapp: {
        title: 'Aplicación web',
        description: 'Productos full-stack, del MVP a producción.',
      },
      pwa: {
        title: 'PWA',
        description: 'Aplicaciones web instalables que funcionan sin conexión.',
      },
    },
    cta: 'Ver todos los servicios',
  },

  works: {
    heading: 'Trabajos seleccionados',
    subline: 'Algunas cosas que he construido (hay más en la página de portfolio).',
    tablist: 'Proyectos destacados',
    prev: 'Mostrar proyectos anteriores',
    next: 'Mostrar más proyectos',
    cta: 'Ver todos los proyectos',
  },

  award: {
    eyebrow: 'Premio',
    heading: '1.er puesto en Techstars Startup Weekend Valencia',
    body: 'En junio de 2026 nuestro equipo, Cuanto Cuesta, ganó el Grand Prize de la competición con una idea sencilla: precios reales y verificados de servicios locales en España.',
    facts: [
      'De la idea al pitch final en 54 horas',
      'Un equipo de seis',
      'Desde entonces sigo desarrollando su parte web: landing page, app para consumidores y panel para empresas',
    ],
    visit: 'Visitar Cuanto Cuesta',
    gallery: 'Fotos de Techstars Startup Weekend Valencia',
    slideOf: (current: number, total: number) => `${current} de ${total}`,
    meta: 'Valencia · junio de 2026',
    prev: 'Foto anterior',
    next: 'Foto siguiente',
    photos: {
      'team': {
        alt: 'Los seis miembros del equipo Cuanto Cuesta en el escenario, con el certificado del Grand Prize',
        caption: 'El equipo Cuanto Cuesta',
      },
      'kevin': {
        alt: 'Kevin Jeremy Gautier con el certificado del Grand Prize delante del cartel de Techstars Startup Weekend Valencia',
        caption: '1.er puesto, en la mano',
      },
      'certificate': {
        alt: 'Certificado enmarcado «Grand Prize Winner: Cuanto Cuesta» sobre una mesa cubierta de pósits',
        caption: 'Grand Prize Winner',
      },
      'pitch-market': {
        alt: 'Una persona del equipo presenta la diapositiva del tamaño del mercado durante el pitch final',
        caption: 'El pitch final',
      },
      'pitch-product': {
        alt: 'Una persona del equipo en el escenario, presentando el producto Cuanto Cuesta en una pantalla grande',
        caption: 'Presentando el producto',
      },
      'pitch-room': {
        alt: 'El pitch final visto desde el fondo de la sala',
        caption: 'Sala llena',
      },
      'teammates': {
        alt: 'Kevin y dos compañeros de equipo sonriendo con el certificado del Grand Prize',
        caption: 'Con Luis y Adriano',
      },
    },
  },

  homeAbout: {
    eyebrow: 'Sobre mí',
    heading: '¿Quién soy?',
    body1: 'Soy Kevin Jeremy Gautier, desarrollador full-stack afincado en Valencia, España. Me titulé en 2021 como desarrollador web Node.js con OpenClassrooms y empecé enseguida como freelance, primero con sitios WordPress y después con frameworks web modernos. Hoy construyo con agentes de IA: Claude Code sobre todo, después de trabajar con Codex, OpenCode y Antigravity.',
    body2: 'Mi stack abarca Laravel, Vue, React y Android nativo, desde un MVP rápido hasta una aplicación web lista para producción. Me centro en entregar trabajo rápido, accesible y hecho para durar.',
    photoAlt: 'Kevin Jeremy Gautier, desarrollador full-stack afincado en Valencia',
    signals: {
      since: { label: 'Desde 2021', detail: 'construyendo para la web' },
      satisfied: { label: '100 % satisfechos', detail: 'cada cliente, cada proyecto' },
      performance: { label: 'El rendimiento primero', detail: 'rápido por defecto, no por casualidad' },
      replies: { label: 'Respuesta en 24 h', detail: 'no te quedarás sin respuesta' },
    },
    cta: 'Saber más sobre mí',
    ctaLabel: 'Saber más sobre Kevin Jeremy Gautier',
  },

  cta: {
    heading: '¿Tienes un proyecto en mente?',
    subline: 'Veamos si soy la persona adecuada: sin compromiso, sin discurso de ventas, solo una conversación.',
    button: 'Hablemos',
    label: 'Chatear por WhatsApp (se abre en una pestaña nueva)',
  },

  // ── Services page ───────────────────────────────────────────────────────────
  services: {
    eyebrow: 'Servicios',
    h1: 'Lo que puedo hacer por ti',
    lead: 'Tanto si necesitas un arreglo rápido como un producto creado desde cero, tengo un servicio para eso. Construyo con agentes de IA y respondo del resultado, así que lo tienes antes y con el mismo cuidado.',
    gridLabel: 'Todos los servicios',
    items: {
      automation: {
        title: 'Automatización con IA',
        description: 'Hojas de cálculo y tareas administrativas repetitivas convertidas en una herramienta que hace el trabajo por ti. Creada con agentes de IA, como la aplicación de contabilidad que sustituyó el libro de Excel de un cliente.',
      },
      audit: {
        title: 'Auditoría',
        description: 'Rendimiento, SEO, accesibilidad: descubre exactamente qué arreglar y qué optimizar.',
      },
      training: {
        title: 'Formación y clases',
        description: 'Clases particulares y tutorías de JS/TS.',
      },
      pwa: {
        title: 'PWA',
        description: 'Aplicaciones web instalables que funcionan sin conexión, hechas con Vue o React.',
      },
      webapp: {
        title: 'Aplicación web',
        description: 'Aplicaciones full-stack con Laravel o Node.js, del MVP a producción.',
      },
      consulting: {
        title: 'Consultoría',
        description: 'Revisión de arquitectura, decisiones técnicas, hoja de ruta. Planificar antes de construir.',
      },
      mobile: {
        title: 'App móvil',
        description: 'Apps nativas para Android o multiplataforma con React Native.',
      },
      wordpress: {
        title: 'WordPress',
        description: 'Mantenimiento y rediseño de sitios existentes, y sitios nuevos cuando WordPress es la opción adecuada.',
      },
    },
    ctaHeading: 'Cuéntame qué necesitas',
    ctaSubline: 'Un proyecto, una idea, un negocio, una tarea, un encargo puntual: sea lo que sea, escríbeme y vemos qué hace falta. Sin compromiso, sin discurso de ventas, solo una conversación.',
  },

  // ── Portfolio page ──────────────────────────────────────────────────────────
  portfolio: {
    eyebrow: 'Portfolio',
    h1: 'Trabajos seleccionados',
    lead: 'Aplicaciones full-stack, PWA y sitios web. Los más recientes están hechos con agentes de IA.',
    filterLabel: 'Filtrar proyectos por categoría',
    types: {
      'All': 'Todos',
      'Laravel': 'Laravel',
      'Web Application': 'Aplicación web',
      'Mobile App': 'App móvil',
      'WordPress': 'WordPress',
      'Landing Page': 'Landing page',
      'PWA': 'PWA',
      'Consulting': 'Consultoría',
    },
    empty: 'Todavía no hay proyectos en esta categoría.',
  },

  projects: {
    'fraichup': {
      client: 'Startup de reparto de comida',
      excerpt: 'Plataforma de reparto de comida fresca en la Costa Azul. Pensada para ser rápida: pedidos, menús y disponibilidad en una sola aplicación JS ligera.',
      alt: 'Fraichup: captura de la aplicación web de reparto',
    },
    'sunspot': {
      client: 'Startup de bienestar',
      excerpt: 'App instalable que ayuda a la gente de Valencia a gestionar su exposición al sol: intensidad UV en directo y un mapa de «sunspots» seleccionados al aire libre. Vue 3 y Firebase, con temas claro y oscuro.',
      alt: 'SUNspot: pantallas de mapa y exploración de la PWA',
    },
    'limpiezas-el-imperio': {
      client: 'Empresa de limpieza',
      excerpt: 'Nueva web para una empresa de limpieza cerca de Valencia, que sustituye una página hecha con un creador de sitios. Formularios guiados de presupuesto, reserva y facturación que llegan por correo o WhatsApp. Estática, rápida y sin cookies ni rastreo.',
      alt: 'Limpiezas El Imperio: captura de la web de la empresa de limpieza',
    },
    'pickleball-valencia': {
      client: 'Club deportivo',
      excerpt: 'Web de un club de pickleball indoor en Valencia: pistas, escuela, cafetería, eventos y reservas. Reconstruida desde WordPress con Claude Code como un sitio Astro estático y rápido.',
      alt: 'Pickleball Valencia: captura de la web del club',
    },
    'le-petit-cours': {
      client: 'Proyecto personal',
      excerpt: 'Curso de francés gratuito y de código abierto, escrito para hispanohablantes: lecciones cortas, ejercicios y lectura, con cuentas opcionales que sincronizan el progreso entre dispositivos. Un proyecto personal, hecho con Claude Code sobre Next.js y Supabase.',
      alt: 'Le Petit Cours: pantallas de inicio y de lección de la PWA',
    },
    'planetax': {
      client: 'Emisora de radio',
      excerpt: 'PWA instalable para una red de radios venezolana con sede en Valencia: tres emisoras en directo, emisión de TV y una interfaz disponible sin conexión, en una sola aplicación Vue ligera.',
      alt: 'PlanetaX: captura de la PWA de radio',
    },
    'el-imperio-contabilidad': {
      client: 'Empresa de limpieza',
      excerpt: 'Contabilidad en línea para una empresa de limpieza cerca de Valencia, que sustituye un libro de Excel llevado a mano. Servicios, clientes, costes y margen real por cliente, con el mes siguiente preparado a partir de los trabajos que se repiten.',
      alt: 'Logo de Limpiezas El Imperio',
    },
    'fesma': {
      client: 'Pintura y fotografía',
      excerpt: 'Web oficial de Fesma, artista de Valencia que pinta y fotografía: proyectos, obras, exposiciones y prensa, todo gestionado desde un único archivo JSON. Hecha primero en HTML y SCSS puros y después reconstruida con Nuxt.',
      alt: 'Fesma: captura de la web de artista',
    },
    'rachel-blot': {
      client: 'Escritora',
      excerpt: 'Portfolio y escaparate de los libros de una escritora francesa. Una lectura limpia, con enlace directo a su catálogo de Amazon KDP.',
      alt: 'Rachel Blot: captura de la web de la escritora',
    },
    'ethica': {
      client: 'Centro de estética',
      excerpt: 'Web y tienda online de un centro de estética en Alicante: servicios, solicitudes de cita, un blog y una tienda WooCommerce, todo en WordPress.',
      alt: 'Ethica Anabel Orzáez: captura de la web del centro de estética',
    },
  },

  // ── About page ──────────────────────────────────────────────────────────────
  about: {
    eyebrow: 'Sobre mí',
    h1: ['Un desarrollador', 'al que le importa.'],
    lead: 'Soy Kevin Jeremy Gautier, desarrollador full-stack afincado en Valencia, España. Desarrollador web titulado, freelance desde 2021, trabajo en francés, inglés y español. Ahora construyo con agentes de IA, y me sigue importando que las cosas funcionen bien y tengan buen aspecto.',
    photoAlt: 'Kevin Jeremy Gautier, desarrollador full-stack afincado en Valencia, España',

    background: {
      eyebrow: 'Trayectoria',
      heading: 'Cómo he llegado hasta aquí',
    },
    timeline: {
      graduated: {
        year: '2021',
        title: 'Titulado y freelance',
        body: 'Obtuve el título de Desarrollador web (Node.js) de OpenClassrooms, inscrito en el registro nacional francés de certificaciones profesionales (RNCP), y enseguida empecé a tener clientes: sobre todo sitios WordPress para pequeñas empresas y comercios locales.',
      },
      frameworks: {
        year: '2022',
        title: 'Frameworks modernos',
        body: 'WordPress se me quedó corto para todo lo que fuera a medida. Adopté Vue y Laravel como stack principal y puse en producción mi primera SPA y mi primera API REST.',
      },
      ssr: {
        year: '2023',
        title: 'SSR y aplicaciones de producción',
        body: 'Subí de nivel con Nuxt y Next.js para proyectos en los que el SEO es clave. Back-ends de Laravel más complejos y más atención al rendimiento y la accesibilidad.',
      },
      fullstack: {
        year: '2024',
        title: 'Full-stack y móvil',
        body: 'Añadí React, TypeScript y Kotlin a mis herramientas. Hice mis primeras PWA y una app nativa para Android, convencido de que una sola base de código rara vez sirve para todos los problemas.',
      },
      aiFirst: {
        year: 'Desde 2025',
        title: 'Desarrollo con la IA primero',
        body: 'La mayor parte de mi trabajo pasa ahora por agentes de IA. Claude Code es el principal, después de un tiempo con Codex, OpenCode y Antigravity, y Cursor es mi editor. Los agentes escriben rápido; yo dirijo, reviso y respondo del resultado.',
      },
    },
    credentials: {
      education: 'Formación',
      languages: 'Idiomas',
      items: {
        diploma: { label: 'Desarrollador web (Node.js)', detail: 'OpenClassrooms, título inscrito en el RNCP' },
        french: { label: 'Francés', detail: 'Nativo' },
        english: { label: 'Inglés', detail: 'C1, Cambridge' },
        spanish: { label: 'Español', detail: 'C1, DELE, Instituto Cervantes' },
      },
    },

    toolkit: {
      eyebrow: 'Herramientas',
      heading: 'Con qué construyo',
      subline: 'Dos stacks: los agentes de IA que escriben conmigo y el clásico en el que escriben. Al lado, las herramientas con las que dibujo y edito vídeo.',
      ai: 'Stack de IA',
      aiLink: 'Cómo trabajo con la IA',
      classic: 'Stack clásico',
      creative: 'Gráficos y vídeo',
    },

    values: {
      eyebrow: 'Cómo trabajo',
      heading: 'Qué puedes esperar',
      items: {
        ship: {
          title: 'Entregar y luego iterar',
          body: 'Un producto que funciona delante de usuarios reales vale más que uno perfecto en un tablero de Figma. Apuesto por una primera versión ligera y después mejoro con los comentarios.',
        },
        readable: {
          title: 'Legible antes que ingenioso',
          body: 'El código se lee muchas más veces de las que se escribe. Lo mantengo sencillo para que la siguiente persona (normalmente yo, seis meses después) pueda retomarlo sin manual.',
        },
        ghost: {
          title: 'Nunca desaparezco',
          body: 'Si algo cambia, lo digo pronto. Siempre sabrás en qué punto está el proyecto: sin sorpresas desagradables en la entrega.',
        },
      },
    },
  },

  stack: {
    groups: {
      backend: 'Backend',
      frontend: 'Frontend',
      mobile: 'Móvil y escritorio',
      hosting: 'Hosting y despliegue',
      tools: 'Herramientas y otros',
    },
  },

  // ── AI page ─────────────────────────────────────────────────────────────────
  ai: {
    eyebrow: 'IA',
    h1: ['Uso la IA desde 2022.', 'Construyo con agentes cada día.'],
    lead: 'No descubrí la IA el mes pasado. La sigo desde los primeros generadores de imágenes, pasando por el chat, el vídeo y la voz, hasta los agentes de programación con los que ahora trabajo todo el día. La trato como el resto del oficio: aprendida en serio, revisada con cuidado y con mi responsabilidad detrás.',
    facts: {
      since: 'desde',
      mainAgent: 'agente principal',
      next: 'próximamente',
    },

    stack: {
      eyebrow: 'Stack de IA',
      heading: 'Con qué trabajo',
      subline: 'Claude Code como agente, Cursor como editor y Markdown para el contexto que leen los dos. Los lenguajes y frameworks en los que escriben son mi stack clásico.',
      everyDay: 'cada día',
      roles: {
        'Claude Code': 'Agente principal',
        'Cursor': 'Editor principal',
        'Markdown': 'Archivos de contexto',
      },
      pluggedKey: 'conectado',
      plugged: 'Claude Code no trabaja solo: lo amplío con el ecosistema que lo rodea.',
      kinds: {
        plugins: 'plugins',
        skills: 'skills',
        connectors: 'conectores',
      },
      upcomingTitle: 'Lo próximo que voy a aprender',
      comingSoon: 'próximamente',
      upcoming: {
        hermes: {
          label: 'Hermes',
          role: 'El agente de código abierto de Nous Research, con una memoria que dura entre sesiones.',
        },
        jev: {
          label: 'Jev',
          role: 'Un modelo de TypeSafe AI que devuelve decisiones tipadas con una puntuación de confianza, en lugar de texto.',
        },
        local: {
          label: 'LLM locales',
          role: 'Modelos de código abierto ejecutándose en mi propia máquina, empezando por Ollama.',
        },
        linear: {
          label: 'Linear',
          role: 'El gestor de incidencias donde se planifica el trabajo y donde se pueden asignar tareas a agentes de programación.',
        },
      },
      classicLink: 'Ver el stack clásico',
    },

    journey: {
      eyebrow: 'Recorrido',
      heading: 'De los prompts de imágenes a los agentes de programación',
      toolsLabel: 'Herramientas',
      entries: {
        images: {
          when: '2022',
          title: 'Empezó con las imágenes',
          body: 'DALL·E 2: entra una frase, sale una imagen. Ese fue el momento en que empecé a seguir este campo.',
        },
        copilot: {
          when: '2022',
          title: 'Copilot en el editor',
          body: 'GitHub Copilot llegó a VS Code y lo activé en cuanto estuvo disponible. Entonces era una ayuda: sugerencias y autocompletado mientras escribía, años antes de los agentes.',
        },
        chatgpt: {
          when: 'Dic. 2022',
          title: 'ChatGPT, desde los primeros días',
          body: 'Creé mi cuenta pocos días después de su lanzamiento, cuando funcionaba con GPT-3.5. Desde entonces la IA fue algo con lo que trabajaba, no una demo que miraba.',
        },
        imageModels: {
          when: '2023',
          title: 'Todos los modelos de imagen que pude probar',
          body: 'Primero Midjourney y luego todo lo que podía ejecutar gratis en Hugging Face, para ver de qué eran capaces los modelos abiertos.',
        },
        assistants: {
          when: '2023 → 24',
          title: 'Más de un asistente',
          body: 'Probé Bard antes de que Google lo rebautizara como Gemini y abrí mi cuenta de Claude en junio de 2024.',
        },
        video: {
          when: '2024 → 25',
          title: 'Vídeo',
          body: 'Fui probando los generadores de vídeo según iban saliendo, entre ellos Magnific, Sora y Veo 3. Hice mis propios vídeos con IA en Google Flow, con Nano Banana para las imágenes.',
        },
        deepseek: {
          when: '2025',
          title: 'DeepSeek-R1, y la voz',
          body: 'Empecé con DeepSeek justo después de que saliera R1, su modelo de razonamiento abierto, en enero de 2025. También empecé a hablar con Grok en modo de voz, algo que sigo haciendo fuera del trabajo.',
        },
        agents: {
          when: '2025 → 26',
          title: 'De los asistentes a los agentes',
          body: 'Antigravity puso un agente dentro del editor. El curso de IA de OpenClassrooms dio estructura a lo que había aprendido con la práctica. Después los agentes empezaron a construirme aplicaciones enteras: en el navegador con Google AI Studio y en la terminal con OpenCode y Codex.',
        },
        claudeCode: {
          when: 'Desde 2026',
          title: 'Claude Code',
          body: 'Me pasé a Claude Code y me quedé. Hoy es mi agente principal, y los proyectos recientes de mi portfolio están hechos con él. Fuera de la terminal, uso Claude en su aplicación de escritorio.',
        },
        next: {
          when: 'Después',
          title: 'Todavía en la lista',
          body: 'Después vienen Hermes, Jev y Linear, y los modelos de código abierto en general: todavía no he ejecutado ninguno en mi propia máquina, y lo haré.',
        },
      },
    },

    practice: {
      eyebrow: 'Práctica',
      heading: 'Cómo me lo tomo en serio',
      items: {
        direct: {
          title: 'Yo dirijo, los agentes teclean',
          body: 'Los agentes escriben rápido. Yo decido qué se construye, leo lo que vuelve y respondo del resultado.',
        },
        context: {
          title: 'El contexto es el oficio',
          body: 'Un agente solo es tan bueno como lo que se le dice. Guardo ese contexto en simples archivos Markdown, un formato que yo escribía mucho antes de que los agentes lo leyeran.',
        },
        learned: {
          title: 'Aprendido, no improvisado',
          body: 'Hice el curso de IA de OpenClassrooms, la escuela de mi título de desarrollador, además de años de práctica diaria.',
        },
        room: {
          title: 'En la sala',
          body: 'Voy a meetups de IA como AI Tinkerers con amigos desarrolladores, e intercambiamos lo que funciona y lo que no.',
        },
      },
    },
  },

  // ── Contact page ────────────────────────────────────────────────────────────
  contact: {
    eyebrow: 'Contacto',
    h1: 'Hablemos',
    lead: 'Elige el canal que más te convenga.',
    email: 'Correo',
    via: (label: string) => `Contactar por ${label}`,
  },

  // ── Terms and privacy page ──────────────────────────────────────────────────
  info: {
    eyebrow: 'Info',
    h1: 'Condiciones y privacidad',
    lead: 'En resumen: esto es un portfolio. No te rastrea y no te pide nada.',
    updated: 'Última actualización: 7 de octubre de 2026',

    terms: {
      heading: 'Condiciones de uso',
      intro: (domain: string) => `${domain} es el portfolio personal de Kevin Jeremy Gautier, desarrollador full-stack freelance afincado en Valencia, España. Presenta mi trabajo y los servicios que ofrezco.`,
      using: {
        title: 'Uso del sitio',
        body: 'Puedes navegar por él, enlazarlo y compartirlo libremente. Por favor, no copies sus textos, su diseño ni su código para presentarlos como tuyos.',
      },
      content: {
        title: 'Contenido',
        body: 'Los textos, el diseño y el código de este sitio son obra mía. Los proyectos de clientes del portfolio, incluidos sus nombres, logotipos y capturas de pantalla, pertenecen a sus respectivos propietarios y aparecen aquí como ejemplos de trabajos que entregué.',
      },
      prices: {
        title: 'Precios',
        body: 'La página de Servicios no muestra precios. Cada trabajo se presupuesta después de hablarlo, y el precio se acuerda contigo antes de empezar.',
      },
      links: {
        title: 'Enlaces externos',
        body: 'El sitio enlaza a webs de clientes y a servicios de terceros como WhatsApp, LinkedIn y GitHub. No controlo esos sitios y no soy responsable de su contenido.',
      },
      accuracy: {
        title: 'Exactitud',
        body: 'Mantengo este sitio exacto y actualizado lo mejor que puedo, pero se ofrece tal cual, sin ninguna garantía.',
      },
    },

    privacy: {
      heading: 'Privacidad',
      intro: 'Este sitio no recoge nada sobre ti.',
      not: {
        title: 'Lo que el sitio no hace',
        items: [
          'Sin cookies.',
          'Sin scripts de analítica ni de rastreo.',
          'Sin formularios, cuentas ni newsletter.',
          'Sin fuentes, iconos ni scripts cargados desde terceros: todo se sirve desde este sitio.',
        ],
      },
      saved: {
        title: 'Lo único que se guarda en tu navegador',
        body: 'El sitio sigue el ajuste claro u oscuro de tu dispositivo. Si eliges el otro con el botón de la cabecera, esa elección se guarda en tu navegador para que el sitio la recuerde en tu próxima visita. Es la palabra «light» o «dark», nada más; nunca sale de tu dispositivo, y volver al ajuste anterior la elimina.',
      },
      hosting: {
        title: 'Alojamiento',
        before: 'El sitio está alojado en GitHub Pages. Como cualquier servicio de alojamiento, GitHub recibe datos técnicos cuando tu navegador solicita una página, como tu dirección IP, y puede registrarlos por motivos de seguridad. Eso está cubierto por la ',
        link: 'declaración de privacidad de GitHub',
        after: '.',
      },
      contact: {
        title: 'Cuando me escribes',
        body: 'Si me escribes por correo, WhatsApp o LinkedIn, recibo lo que decidas enviar: tu nombre, tus datos de contacto y tu mensaje. Lo uso solo para responderte y, si trabajamos juntos, para llevar a cabo el proyecto. No lo vendo ni lo cedo a nadie. Esos servicios tratan tus datos según sus propias políticas de privacidad.',
      },
      rights: {
        title: 'Tus derechos',
        before: 'Puedes pedirme en cualquier momento qué información tengo sobre ti, y que la corrija o la elimine: escribe a ',
        middle: '. Si estás en la UE, también puedes reclamar ante tu autoridad de protección de datos; en España es la ',
        after: '.',
      },
      changes: {
        title: 'Cambios',
        body: 'Si el sitio cambia de una forma que afecte a tu privacidad, esta página se actualizará.',
      },
    },
  },
}

export default es
