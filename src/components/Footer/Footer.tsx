import React from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import styles from './Footer.module.css'
import { SITE_DOMAIN } from '@/constants'
import { basePath, localeNames, locales, localizePath } from '@/i18n/locales'
import Link from '@/i18n/LocaleLink'
import { useLocale } from '@/i18n/useLocale'

const Footer: React.FC = () => {
  const year = new Date().getFullYear()
  const { locale, t } = useLocale()
  const { pathname, hash } = useLocation()
  const page = basePath(pathname)

  const socials = [
    { icon: 'mdi:linkedin', href: 'https://linkedin.com/in/kevin-jeremy-gautier', label: t.footer.linkedin, title: 'LinkedIn' },
    { icon: 'mdi:github', href: 'https://github.com/kevjrmy', label: t.footer.github, title: 'GitHub' },
  ]

  return (
    <footer className={styles.footer}>
      {/* Logo */}
      <Link to="/" className={styles.logoLink}>
        <img src="/logo.svg" alt="Kevin Jeremy Gautier" height={32} />
      </Link>

      {/* Social icons */}
      <ul className={styles.socials} role="list">
        {socials.map((s) => (
          <li key={s.title}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              title={s.title}
              className={styles.socialLink}
            >
              <Icon icon={s.icon} width={20} height={20} />
            </a>
          </li>
        ))}
      </ul>

      {/* Languages: the same page in each one, as the switch of the header */}
      <nav aria-label={t.footer.languages}>
        <ul className={styles.languages} role="list">
          {locales.map((option) => (
            <li key={option}>
              <RouterLink
                to={localizePath(page, option) + hash}
                className={styles.languageLink}
                lang={option}
                hrefLang={option}
                aria-current={option === locale ? 'true' : undefined}
              >
                {localeNames[option]}
              </RouterLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          {SITE_DOMAIN} © {year} · {t.footer.rights}
        </p>
        <ul className={styles.legal} role="list">
          <li><Link to="/info#terms" className={styles.legalLink}>{t.footer.terms}</Link></li>
          <li><Link to="/info#privacy" className={styles.legalLink}>{t.footer.privacy}</Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
