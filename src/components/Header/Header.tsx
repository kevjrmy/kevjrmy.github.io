import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useTheme } from '@/hooks/useTheme'
import styles from './Header.module.css'

// ── Navigation ────────────────────────────────────────────────────────────────

const navLinks = [
  { to: '/', label: 'Home' },
  // { to: '/blog', label: 'Blog' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/services', label: 'Services' },
  { to: '/ai', label: 'AI' },
]

// Contact is the call to action: a button at the end, not one more link in the row
const cta = { to: '/contact', label: 'Contact' }

// The theme switch has one icon for both themes, our own drawing rather than one
// from a set: a disc in two tones of the text color, split on a diagonal that
// climbs like the hero slash. The solid half is the tone a click leads to: light
// on the dark theme, dark on the light one. It sits on top of the whole disc, so
// no seam shows between the two.
const ThemeIcon = () => (
  <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden="true">
    <circle cx="12" cy="12" r="9.5" opacity="0.4" />
    <path d="M5.28 18.72A9.5 9.5 0 0 1 18.72 5.28z" />
  </svg>
)

// ── Component ─────────────────────────────────────────────────────────────────

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 8)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  // Rendered three times: in the desktop nav, beside the menu button, and in the menu sheet
  const themeSwitch = (
    <button
      className={styles.themeButton}
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <ThemeIcon />
    </button>
  )

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Sticky header: switch to the blurred backdrop once the page has moved
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Handle body scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = 'hidden'

      // Focus trap: move focus to menu when opened
      closeButtonRef.current?.focus()

      return () => {
        document.body.style.overflow = originalStyle
      }
    }
  }, [isMenuOpen])

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu()
      }
    }

    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isMenuOpen])

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <Link to="/" className={styles.logoLink} onClick={closeMenu}>
            <div id="logo">
              <img src="/logo.svg" alt="Kevin Jeremy Gautier" height={36} width="auto" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav} aria-label="Main navigation">
            <ul role="list" className={styles.navList}>
              {navLinks.map(link => {
                const isActive = location.pathname === link.to
                return (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className={`${styles.navLink} ${isActive ? styles.activeLink : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
              <li>{themeSwitch}</li>
              <li>
                <Link
                  to={cta.to}
                  className={styles.navCta}
                  aria-current={location.pathname === cta.to ? 'page' : undefined}
                >
                  {cta.label}
                  <Icon icon="tabler:arrow-right" width={16} height={16} aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile: theme switch and menu button */}
          <div className={styles.actions}>
            {themeSwitch}
            <button
              className={styles.menuButton}
              onClick={toggleMenu}
              aria-label="Menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <Icon icon="tabler:menu" width={24} height={24} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu — full-screen sheet */}
      {isMenuOpen && (
        <aside
          id="mobile-menu"
          className={styles.mobileMenu}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          {/* Same metrics as the page header, so the logo does not move */}
          <div className={styles.mobileMenuHeader}>
            <Link to="/" className={styles.logoLink} onClick={closeMenu}>
              <img src="/logo.svg" alt="Kevin Jeremy Gautier" height={36} width="auto" />
            </Link>
            <div className={styles.actions}>
              {themeSwitch}
              <button
                ref={closeButtonRef}
                onClick={closeMenu}
                aria-label="Close menu"
                className={styles.menuButton}
              >
                <Icon icon="tabler:x" width={24} height={24} aria-hidden="true" />
              </button>
            </div>
          </div>

          <nav className={styles.mobileNav} aria-label="Mobile navigation">
            <ul role="list" className={styles.mobileNavList}>
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.to
                return (
                  <li
                    key={link.to}
                    className={styles.mobileNavItem}
                    style={{ '--item-delay': `${i * 40}ms` } as React.CSSProperties}
                  >
                    <Link
                      to={link.to}
                      onClick={closeMenu}
                      className={`${styles.mobileNavLink} ${isActive ? styles.activeMobileLink : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                      <Icon icon="tabler:arrow-right" width={22} height={22} aria-hidden="true" />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className={styles.mobileMenuFooter}>
            <Link to={cta.to} onClick={closeMenu} className={styles.mobileCta}>
              {cta.label}
              <Icon icon="tabler:arrow-right" width={18} height={18} aria-hidden="true" />
            </Link>
            <p className={styles.mobileTagline}>Words are magic</p>
          </div>
        </aside>
      )}
    </>
  )
}

export default Header