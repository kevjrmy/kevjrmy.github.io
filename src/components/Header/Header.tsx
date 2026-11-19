import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import LanguageSwitch from '@/components/LanguageSwitch/LanguageSwitch'
import { useTheme } from '@/hooks/useTheme'
import { basePath } from '@/i18n/locales'
import Link from '@/i18n/LocaleLink'
import { useLocale } from '@/i18n/useLocale'
import { focusPageStart } from '@/utils/focus'
import styles from './Header.module.css'

// ── Navigation ────────────────────────────────────────────────────────────────

// `id` is the key of the link's label in the messages of each language
const navLinks = [
  { to: '/', id: 'home' },
  { to: '/portfolio', id: 'portfolio' },
  { to: '/services', id: 'services' },
  { to: '/ai', id: 'ai' },
  { to: '/about', id: 'about' },
] as const

// Contact is the call to action: a button at the end, not one more link in the row
const cta = { to: '/contact' }

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
  const menuRef = useRef<HTMLDialogElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  // The page being read, whatever its language: /fr/about is /about
  const page = basePath(useLocation().pathname)
  const { theme, toggleTheme } = useTheme()
  const { t } = useLocale()

  // Rendered three times, each after the language switch: in the desktop nav, beside
  // the menu button, and in the menu sheet
  const themeSwitch = (
    <button
      className={styles.themeButton}
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? t.header.toLight : t.header.toDark}
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

  // The menu sheet is a modal <dialog>: the browser keeps focus inside it, hides the
  // page behind it from screen readers, closes it on Escape, and gives focus back to
  // the menu button when it closes. Escape reaches us through onClose.
  useEffect(() => {
    const menu = menuRef.current
    if (!menu) return
    if (isMenuOpen && !menu.open) {
      menu.showModal()
      closeButtonRef.current?.focus()
    } else if (!isMenuOpen && menu.open) {
      menu.close()
    }
  }, [isMenuOpen])

  // The skip link: past the header, to the start of the page. A plain #anchor would
  // go through the router and change the URL.
  const skipToContent = (e: React.MouseEvent) => {
    e.preventDefault()
    focusPageStart()
  }

  return (
    <>
      <a href="#main" className={styles.skipLink} onClick={skipToContent}>
        {t.header.skipToContent}
      </a>

      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <Link to="/" className={styles.logoLink} onClick={closeMenu}>
            <div id="logo">
              <img src="/logo.svg" alt="Kevin Jeremy Gautier" width={41} height={36} />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav} aria-label={t.header.mainNav}>
            <ul role="list" className={styles.navList}>
              {navLinks.map(link => {
                const isActive = page === link.to
                return (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className={`${styles.navLink} ${isActive ? styles.activeLink : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {t.header.nav[link.id]}
                    </Link>
                  </li>
                )
              })}
              <li><LanguageSwitch /></li>
              <li>{themeSwitch}</li>
              <li>
                <Link
                  to={cta.to}
                  className={styles.navCta}
                  aria-current={page === cta.to ? 'page' : undefined}
                >
                  {t.header.contact}
                  <Icon icon="tabler:arrow-right" width={16} height={16} aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile: language, theme switch and menu button */}
          <div className={styles.actions}>
            <LanguageSwitch />
            {themeSwitch}
            <button
              className={styles.menuButton}
              onClick={toggleMenu}
              aria-label={t.header.menu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <Icon icon="tabler:menu" width={24} height={24} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu: full-screen sheet */}
      <dialog
        ref={menuRef}
        id="mobile-menu"
        className={styles.mobileMenu}
        aria-label={t.header.menu}
        onClose={closeMenu}
      >
        {/* Same metrics as the page header, so the logo does not move */}
        <div className={styles.mobileMenuHeader}>
          <Link to="/" className={styles.logoLink} onClick={closeMenu}>
            <img src="/logo.svg" alt="Kevin Jeremy Gautier" width={41} height={36} />
          </Link>
          <div className={styles.actions}>
            <LanguageSwitch />
            {themeSwitch}
            <button
              ref={closeButtonRef}
              onClick={closeMenu}
              aria-label={t.header.closeMenu}
              className={styles.menuButton}
            >
              <Icon icon="tabler:x" width={24} height={24} aria-hidden="true" />
            </button>
          </div>
        </div>

        <nav className={styles.mobileNav} aria-label={t.header.mobileNav}>
          <ul role="list" className={styles.mobileNavList}>
            {navLinks.map((link, i) => {
              const isActive = page === link.to
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
                    {t.header.nav[link.id]}
                    <Icon icon="tabler:arrow-right" width={22} height={22} aria-hidden="true" />
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className={styles.mobileMenuFooter}>
          <Link to={cta.to} onClick={closeMenu} className={styles.mobileCta}>
            {t.header.contact}
            <Icon icon="tabler:arrow-right" width={18} height={18} aria-hidden="true" />
          </Link>
          <p className={styles.mobileTagline}>{t.header.tagline}</p>
        </div>
      </dialog>
    </>
  )
}

export default Header