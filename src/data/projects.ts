/* ══════════════════════════════════════════════════════
   projects.ts — static project data
   All portfolio projects live here.
   Featured ones (featured: true) appear on the homepage.
   What is a sentence (client, excerpt, alt text) is in
   src/i18n/messages, once per language, under the slug.
   ══════════════════════════════════════════════════════ */

import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    slug: 'fraichup',
    title: 'Fraichup',
    type: 'Web Application',
    stack: ['JavaScript', 'Vue', 'CSS'],
    tags: ['frontend', 'food', 'delivery'],
    year: 2024,
    status: 'live',
    lang: 'fr',
    link: 'https://fraichup06.fr',
    featured: true,
    order: 1,
    image: {
      src: '/images/projects/fraichup.webp',
    },
  },
  {
    slug: 'sunspot',
    title: 'SUNspot',
    type: 'PWA',
    stack: ['Vue', 'Firebase', 'PWA'],
    tags: ['pwa', 'maps', 'health', 'firebase'],
    year: 2026,
    // An MVP handed over to its founders (2026): no link, as the live site is
    // no longer Kevin's work to answer for
    status: 'archived',
    lang: 'es',
    link: null,
    featured: true,
    order: 2,
    image: {
      src: '/images/projects/sunspot.webp',
    },
  },
  {
    slug: 'limpiezas-el-imperio',
    title: 'Limpiezas El Imperio',
    type: 'Web Application',
    stack: ['Claude Code', 'Next.js', 'TypeScript', 'CSS'],
    tags: ['frontend', 'business', 'local', 'seo'],
    year: 2026,
    status: 'live',
    lang: 'es',
    link: 'https://www.limpiezaselimperio.es',
    featured: true,
    order: 3,
    image: {
      src: '/images/projects/limpiezas-el-imperio.webp',
    },
  },
  // Deissy Olarte's two sites, both still in progress and already live
  {
    slug: 'turesiliencia-org',
    title: 'TuResiliencia',
    type: 'Web Application',
    stack: ['Claude Code', 'Next.js', 'TypeScript'],
    tags: ['ai', 'claude-code', 'nextjs', 'association', 'non-profit', 'bilingual'],
    year: 2026,
    status: 'wip',
    lang: 'es',
    link: 'https://www.turesiliencia.org',
    featured: true,
    order: 4,
    image: {
      src: '/images/projects/turesiliencia-org.webp',
    },
  },
  {
    slug: 'turesiliencia-com',
    title: 'Deissy Olarte',
    type: 'Web Application',
    stack: ['Claude Code', 'Astro', 'Sanity'],
    tags: ['ai', 'claude-code', 'astro', 'sanity', 'blog', 'author', 'speaker'],
    year: 2026,
    status: 'wip',
    lang: 'es',
    link: 'https://turesiliencia.com',
    featured: true,
    order: 5,
    image: {
      src: '/images/projects/turesiliencia-com.webp',
    },
  },
  {
    slug: 'pickleball-valencia',
    title: 'Pickleball Valencia',
    type: 'Web Application',
    stack: ['Claude Code', 'Astro'],
    tags: ['ai', 'claude-code', 'astro', 'static', 'sports', 'local', 'club'],
    year: 2026,
    status: 'live',
    lang: 'es',
    link: 'https://pickleballvalencia.es',
    featured: true,
    order: 6,
    image: {
      src: '/images/projects/pickleball-valencia.webp',
    },
  },
  {
    slug: 'le-petit-cours',
    title: 'Le Petit Cours',
    type: 'PWA',
    stack: ['Claude Code', 'Next.js', 'Supabase', 'PWA'],
    tags: ['ai', 'claude-code', 'pwa', 'education', 'french', 'supabase'],
    year: 2026,
    status: 'live',
    lang: 'fr',
    link: 'https://lepetitcours.vercel.app',
    featured: true,
    order: 7,
    image: {
      src: '/images/projects/le-petit-cours.webp',
    },
  },
  {
    slug: 'planetax',
    title: 'PlanetaX',
    type: 'PWA',
    stack: ['Vue', 'Vite', 'PWA'],
    tags: ['pwa', 'radio', 'media', 'streaming'],
    year: 2024,
    status: 'live',
    lang: 'es',
    link: 'https://planetax.netlify.app',
    featured: true,
    order: 8,
    image: {
      src: '/images/projects/planetax.webp',
    },
  },
  {
    slug: 'el-imperio-contabilidad',
    title: 'El Imperio Contabilidad',
    type: 'Web Application',
    stack: ['Claude Code', 'Next.js', 'React', 'SQLite'],
    tags: ['fullstack', 'accounting', 'internal-tool', 'business'],
    year: 2026,
    status: 'live',
    lang: 'es',
    link: null,
    featured: true,
    order: 9,
    image: {
      src: '/images/projects/el-imperio-contabilidad.webp',
    },
  },
  {
    slug: 'fesma',
    title: 'Fesma',
    type: 'Web Application',
    stack: ['Nuxt', 'Vue', 'CSS'],
    tags: ['frontend', 'art', 'portfolio', 'gallery'],
    year: 2023,
    status: 'archived',
    lang: 'en',
    link: null,
    featured: true,
    order: 10,
    image: {
      src: '/images/projects/fesma.webp',
    },
  },
  {
    slug: 'rachel-blot',
    title: 'Rachel Blot',
    type: 'Web Application',
    stack: ['Nuxt', 'Markdown'],
    tags: ['frontend', 'editorial', 'author'],
    year: 2024,
    status: 'live',
    lang: 'fr',
    link: 'https://rachel-blot.com',
    featured: true,
    order: 11,
    image: {
      src: '/images/projects/rachel-blot.webp',
    },
  },
  {
    slug: 'ethica',
    title: 'Ethica Anabel Orzáez',
    type: 'WordPress',
    stack: ['WordPress', 'WooCommerce'],
    tags: ['wordpress', 'woocommerce', 'beauty', 'local', 'shop'],
    year: 2026,
    status: 'live',
    lang: 'es',
    link: 'https://ethicaanabelorzaez.com',
    featured: true,
    order: 12,
    image: {
      src: '/images/projects/ethica.webp',
    },
  },
  // Upcoming: in the portfolio's "Coming soon" group, apart from the work above.
  // No link until marcasquedejanhuellas.com serves it: mqdh.vercel.app is only
  // for testing and is never linked
  {
    slug: 'mqdh',
    title: 'Marcas Que Dejan Huellas',
    type: 'Web Application',
    stack: ['Claude Code', 'Next.js', 'TypeScript'],
    tags: ['ai', 'claude-code', 'nextjs', 'community', 'entrepreneurs', 'bilingual'],
    year: 2026,
    status: 'upcoming',
    lang: 'es',
    link: null,
    featured: false,
    order: 13,
    image: {
      src: '/images/projects/mqdh.webp',
    },
  },
]

/** Convenience export: homepage featured projects, sorted by order */
export const featuredProjects = projects
  .filter(p => p.featured && p.status !== 'upcoming')
  .sort((a, b) => a.order - b.order)