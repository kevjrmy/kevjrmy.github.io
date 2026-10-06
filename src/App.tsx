import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import Home from '@/pages/Home'
import Contact from '@/pages/contact/Contact'
import About from '@/pages/about/About'
import Portfolio from '@/pages/portfolio/Portfolio'
import Services from './pages/services/Services'
import Ai from '@/pages/ai/Ai'
import Info from '@/pages/info/Info'
import { locales, localizePath } from '@/i18n/locales'

// Every page, by its English path. Each one is also served under /fr and /es
// (src/i18n/locales.ts); the language is read from the URL by MainLayout.
const pages = [
  { path: '/', element: <Home /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/contact', element: <Contact /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  // The AI stack and the journey behind it
  { path: '/ai', element: <Ai /> },
  // Terms of use + privacy (linked from the footer)
  { path: '/info', element: <Info /> },
]

export default function App() {
  return (

    <BrowserRouter>
      {/* BrowserRouter wraps the entire application and provides routing capabilities */}

      <Routes>
        {/* Reads the URL and matches it to a route */}

        {/* Main layout for all pages, in every language */}
        <Route element={<MainLayout />}>
          {locales.map((locale) =>
            pages.map((page) => (
              <Route
                key={localizePath(page.path, locale)}
                path={localizePath(page.path, locale)}
                element={page.element}
              />
            ))
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
