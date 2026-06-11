import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import Home from '@/pages/Home'
import Contact from '@/pages/contact/Contact'
import About from '@/pages/about/About'
import Portfolio from '@/pages/portfolio/Portfolio'

export default function App() {
  return (

    <BrowserRouter>
      {/* BrowserRouter wraps the entire application and provides routing capabilities */}

      <Routes>
        {/* Reads the URL and matches it to a route */}

        {/* Main layout for all pages */}
        <Route element={<MainLayout />}>

          {/* Home page is set to render on the root route */}
          <Route path="/" element={<Home />} />

          {/* Portfolio page */}
          <Route path="/portfolio" element={<Portfolio />} />

          {/* Contact page */}
          <Route path="/contact" element={<Contact />} />

          {/* About page */}
          <Route path="/about" element={<About />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}