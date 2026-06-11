/* ══════════════════════════════════════════════════════
   Project — type definition
   ══════════════════════════════════════════════════════ */

export type ProjectStatus = 'live' | 'archived' | 'wip'

export type ProjectType =
  | 'All'
  | 'Laravel'
  | 'Web Application'
  | 'Mobile App'
  | 'WordPress'
  | 'Landing Page'
  | 'PWA'
  | 'Consulting'

export type Project = {
  /** Unique identifier, used for keys and future routing */
  slug: string

  /** Display title */
  title: string

  /** Client or project category (shown on the tab / card) */
  client: string

  /** Service type — maps to the Services section */
  type: ProjectType

  /** Short punchy description for card display (1–2 sentences max) */
  excerpt: string

  /** Tech stack — displayed as badges */
  stack: string[]

  /** Optional tags for future filtering */
  tags: string[]

  /** Year the project was delivered */
  year: number

  /** Current project status */
  status: ProjectStatus

  /** Primary language of the site */
  lang: 'fr' | 'en' | 'es'

  /** Public URL (null if private/archived) */
  link: string | null

  /** Whether to show in the homepage featured section */
  featured: boolean

  /** Manual sort order for the homepage */
  order: number

  /** Project thumbnail */
  image: {
    src: string
    alt: string
  }
}
