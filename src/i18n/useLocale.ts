import { createContext, useContext } from 'react'
import { defaultLocale, type Locale } from '@/i18n/locales'
import { messages, type Messages } from '@/i18n/messages'

type LocaleValue = {
  locale: Locale

  /** The copy of the site in that language */
  t: Messages
}

// Provided by MainLayout, which reads the language from the URL
export const LocaleContext = createContext<LocaleValue>({
  locale: defaultLocale,
  t: messages[defaultLocale],
})

export const useLocale = () => useContext(LocaleContext)
