import { Outlet, useLocation } from 'react-router-dom'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export default function MainLayout() {
  // use location() from react-router-dom to dynamically set the main ID
  // pathName: / -> home, /about -> about, /contact -> contact, etc
  const pageName = useLocation().pathname.replace('/', '') || 'home'

  return (
    <>
      <Header />
      <main id={pageName}>
        <Outlet /> {/* Renders the matched child route component */}
      </main>
      <Footer />
    </>
  )
}