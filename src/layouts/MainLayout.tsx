import { useEffect, useMemo, useRef } from 'react'
import { Outlet, useLocation, useNavigationType } from 'react-router-dom'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { basePath, localeOf } from '@/i18n/locales'
import { LocaleContext } from '@/i18n/useLocale'
import { messages } from '@/i18n/messages'

export default function MainLayout() {
  // The URL says both which page this is and in which language: /fr/about is the
  // About page in French. `page` is the path without the language.
  const { pathname, hash } = useLocation()
  const locale = localeOf(pathname)
  const page = basePath(pathname)
  // page: / -> home, /about -> about, /contact -> contact, etc
  const pageName = page.replace('/', '') || 'home'
  const navigationType = useNavigationType()

  const localeValue = useMemo(() => ({ locale, t: messages[locale] }), [locale])

  // index.html is served for every language: tell the browser which one is shown
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  // React Router keeps the scroll position between routes: go to the #anchor if there
  // is one, else to the top. On back/forward (POP) the browser restores the position.
  // A change of language is the same place on the same page: nothing moves.
  const lastPlace = useRef<string | null>(null)
  useEffect(() => {
    const place = page + hash
    if (lastPlace.current === place) return
    lastPlace.current = place

    const target = hash ? document.getElementById(hash.slice(1)) : null
    if (target) target.scrollIntoView({ behavior: 'instant' })
    else if (navigationType !== 'POP') window.scrollTo({ top: 0, behavior: 'instant' })
  }, [page, hash, navigationType])

  return (
    <LocaleContext value={localeValue}>
      <Header />
      {/* key: a new <main> per page, so the page-in animation (index.css) replays.
          Not per language: switching it rewrites the text in place. */}
      <main id={pageName} key={page}>
        <Outlet /> {/* Renders the matched child route component */}
      </main>
      <Footer />
    </LocaleContext>
  )
}
