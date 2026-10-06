// The languages of the site. English is the default and has no prefix in the URL;
// the others live under their code: /fr/services, /es/services.
// Nothing is detected: a visitor reads English until they pick another language.

export const locales = ['en', 'fr', 'es'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

/** Each language's name, written in that language */
export const localeNames: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
}

/** '/fr/services' -> 'fr'. A path with no language prefix is English */
export const localeOf = (pathname: string): Locale => {
  const first = pathname.split('/')[1]
  return locales.find((locale) => locale !== defaultLocale && locale === first) ?? defaultLocale
}

/** The same page without its language: '/fr/services' -> '/services', '/fr' -> '/' */
export const basePath = (pathname: string): string => {
  const locale = localeOf(pathname)
  const path = locale === defaultLocale ? pathname : pathname.slice(locale.length + 1)
  // GitHub Pages can add a slash at the end: '/fr/' is the French home page
  return path.replace(/\/+$/, '') || '/'
}

/** A page of the site in a given language: '/info#terms' -> '/fr/info#terms', '/' -> '/fr' */
export const localizePath = (path: string, locale: Locale): string => {
  if (locale === defaultLocale) return path
  return path === '/' ? `/${locale}` : `/${locale}${path}`
}
