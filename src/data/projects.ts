/* ══════════════════════════════════════════════════════
   projects.ts — static project data
   All portfolio projects live here.
   Featured ones (featured: true) appear on the homepage.
   ══════════════════════════════════════════════════════ */

import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    slug: 'fraichup',
    title: 'Fraichup',
    client: 'Food delivery startup',
    type: 'Web Application',
    excerpt: 'Fresh food delivery platform for the French Riviera. Built for speed — orders, menus, and availability in one lightweight JS app.',
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
      alt: 'Fraichup — food delivery web app screenshot',
    },
  },
  {
    slug: 'rachel-blot',
    title: 'Rachel Blot',
    client: 'Book author',
    type: 'Web Application',
    excerpt: 'Author portfolio and book showcase for a French writer. Clean reading experience with a direct link to her Amazon KDP catalogue.',
    stack: ['Nuxt', 'Markdown'],
    tags: ['frontend', 'editorial', 'author'],
    year: 2024,
    status: 'live',
    lang: 'fr',
    link: 'https://rachel-blot.com',
    featured: true,
    order: 2,
    image: {
      src: '/images/projects/rachel-blot.webp',
      alt: 'Rachel Blot — author website screenshot',
    },
  },
  {
    slug: 'planetax',
    title: 'PlanetaX',
    client: 'Radio station',
    type: 'PWA',
    excerpt: 'Installable PWA for a Valencia-based Venezuelan radio network — three live stations, TV stream, and offline-ready shell in one lightweight Vue app.',
    stack: ['Vue', 'Vite', 'PWA'],
    tags: ['pwa', 'radio', 'media', 'streaming'],
    year: 2024,
    status: 'live',
    lang: 'es',
    link: 'https://planetax.netlify.app',
    featured: true,
    order: 3,
    image: {
      src: '/images/projects/planetax.webp',
      alt: 'PlanetaX — radio PWA screenshot',
    },
  },
  {
    slug: 'marcasquedejanhuellas',
    title: 'Marcas que dejan huellas',
    client: 'Bladimir Morales',
    type: 'WordPress',
    excerpt: 'Entrepreneurship blog and community hub for Valencia\'s South American professionals. WordPress with Russafa Radio integration — a React Native app is on the roadmap.',
    stack: ['WordPress'],
    tags: ['wordpress', 'blog', 'community', 'entrepreneurship'],
    year: 2024,
    status: 'live',
    lang: 'es',
    link: 'https://marcasquedejanhuellas.com',
    featured: true,
    order: 4,
    image: {
      src: '/images/projects/marcasquedejanhuellas.webp',
      alt: 'Marcas que dejan huellas — WordPress website screenshot',
    },
  },
  {
    slug: 'pickleball-valencia',
    title: 'Pickleball Valencia',
    client: 'Sports club',
    type: 'WordPress',
    excerpt: 'Launch site for a recently opened indoor pickleball club in Valencia — courts, school, café, and events all in one clean WordPress build.',
    stack: ['WordPress'],
    tags: ['wordpress', 'sports', 'local', 'club'],
    year: 2025,
    status: 'live',
    lang: 'es',
    link: 'https://pickleballvalencia.es',
    featured: true,
    order: 5,
    image: {
      src: '/images/projects/pickleball-valencia.webp',
      alt: 'Pickleball Valencia — club website screenshot',
    },
  },
]

/** Convenience export: homepage featured projects, sorted by order */
export const featuredProjects = projects
  .filter(p => p.featured)
  .sort((a, b) => a.order - b.order)