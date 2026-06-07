import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import styles from './Footer.module.css'
import { SITE_DOMAIN } from '@/constants'

const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  const socials = [
    { icon: 'lucide:linkedin', href: 'https://linkedin.com', label: 'My LinkedIn', title: 'LinkedIn' },
    { icon: 'lucide:twitter', href: 'https://x.com', label: 'My X (Twitter)', title: 'X (Twitter)' },
    { icon: 'lucide:github', href: 'https://github.com/kevjrmy', label: 'My GitHub', title: 'GitHub' },
  ]

  return (
    <footer className={styles.footer}>
      {/* Logo */}
      <Link to="/" className={styles.logoLink}>
        <img src="/logo.svg" alt="Kevin Jeremy" height={32} />
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

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          {SITE_DOMAIN} © {year} — All Rights Reserved
        </p>
        <ul className={styles.legal} role="list">
          <li><Link to="/info" className={styles.legalLink}>Terms of use</Link></li>
          <li><Link to="/info" className={styles.legalLink}>Privacy</Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer