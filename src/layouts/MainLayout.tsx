import { useEffect } from 'react'
import { Outlet, useLocation, useNavigationType } from 'react-router-dom'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export default function MainLayout() {
  // use location() from react-router-dom to dynamically set the main ID
  // pathName: / -> home, /about -> about, /contact -> contact, etc
  const { pathname, hash } = useLocation()
  const pageName = pathname.replace('/', '') || 'home'
  const navigationType = useNavigationType()

  // React Router keeps the scroll position between routes: go to the #anchor if there
  // is one, else to the top. On back/forward (POP) the browser restores the position.
  useEffect(() => {
    const target = hash ? document.getElementById(hash.slice(1)) : null
    if (target) target.scrollIntoView({ behavior: 'instant' })
    else if (navigationType !== 'POP') window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash, navigationType])

  return (
    <>
      <Header />
      {/* key: a new <main> per route, so the page-in animation (index.css) replays */}
      <main id={pageName} key={pathname}>
        <Outlet /> {/* Renders the matched child route component */}
      </main>
      <Footer />
    </>
  )
}