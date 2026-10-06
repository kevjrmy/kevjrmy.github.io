import type { Locale } from '@/i18n/locales'
import en from './en'
import fr from './fr'
import es from './es'

// English is the reference: the two other files must have exactly its shape,
// so a sentence missing from a translation fails the build.
export type Messages = typeof en

export const messages: Record<Locale, Messages> = { en, fr, es }
