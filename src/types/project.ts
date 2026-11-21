/* ══════════════════════════════════════════════════════
   Project — type definition
   ══════════════════════════════════════════════════════ */

import type { Messages } from '@/i18n/messages'

/** A project's slug is also the key of its copy in every language (src/i18n/messages) */
export type ProjectSlug = keyof Messages['projects']

export type ProjectStatus = 'live' | 'archived' | 'wip' | 'upcoming'

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
  /**
   * Unique identifier, used for keys and future routing. The client label, the
   * excerpt and the screenshot's alt text are sentences: they are in the messages
   * of each language, under this slug.
   */
  slug: ProjectSlug

  /** Display title */
  title: string

  /** Service type — maps to the Services section */
  type: ProjectType

  /** Tech stack — displayed as badges */
  stack: string[]

  /** Optional tags for future filtering */
  tags: string[]

  /** Year the project was delivered */
  year: number

  /**
   * Current project status. 'upcoming' is a project not online yet: it is shown
   * apart, in the "Coming soon" group of the portfolio page, and never linked
   */
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
  }
}
