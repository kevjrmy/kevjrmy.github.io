import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import styles from './Header.module.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

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

  // Navigation links data
  const navLinks = [
    { to: '/', label: 'Home', icon: 'tabler:home' },
    { to: '/blog', label: 'Blog', icon: 'tabler:pencil' },
    { to: '/portfolio', label: 'Portfolio', icon: 'tabler:briefcase' },
    { to: '/services', label: 'Services', icon: 'tabler:terminal' },
    { to: '/contact', label: 'Contact', icon: 'tabler:mail' }
  ]

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link to="/" className={styles.logoLink} onClick={closeMenu}>
            <div id="logo">
              <img src="/logo.svg" alt="Kevin Jeremy" height={36} width="auto" />
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
                    >
                      <Icon icon={link.icon} width={20} height={20} />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <Icon icon="tabler:menu" width={24} height={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          <div className={styles.overlay} onClick={closeMenu} aria-hidden="true" />
          <aside
            id="mobile-menu"
            ref={menuRef}
            className={styles.mobileMenu}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className={styles.mobileMenuHeader}>
              <img src="/logo.svg" alt="Kevin Jeremy" height={36} width="auto" />
              <button
                ref={closeButtonRef}
                onClick={closeMenu}
                aria-label="Close menu"
                className={styles.closeButton}
              >
                <Icon icon="tabler:x" width={24} height={24} />
              </button>
            </div>

            <nav className={styles.mobileNav} aria-label="Mobile navigation">
              <ul role="list" className={styles.mobileNavList}>
                {navLinks.map(link => {
                  const isActive = location.pathname === link.to
                  return (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        onClick={closeMenu}
                        className={`${styles.mobileNavLink} ${isActive ? styles.activeMobileLink : ''}`}
                      >
                        <Icon icon={link.icon} width={24} height={24} />
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>

            <p className={styles.mobileFooter}>Words are magic</p>
          </aside>
        </>
      )}
    </>
  )
}

export default Header