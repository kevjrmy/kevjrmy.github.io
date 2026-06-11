import { Icon } from '@iconify/react'
import styles from './Contact.module.css'

// ── Contact methods ───────────────────────────────────────────────────────────

type ContactMethod = {
  icon: string
  label: string
  value: string
  href: string
  external: boolean
}

const methods: ContactMethod[] = [
  {
    icon: 'tabler:brand-whatsapp',
    label: 'WhatsApp',
    value: '+34 632 936 909',
    href: 'https://wa.me/34632936909',
    external: true,
  },
  {
    icon: 'tabler:brand-linkedin',
    label: 'LinkedIn',
    value: '/kevin-jeremy-gautier',
    href: 'https://linkedin.com/in/kevin-jeremy-gautier',
    external: true,
  },
  {
    icon: 'tabler:brand-github',
    label: 'GitHub',
    value: '/kevjrmy',
    href: 'https://github.com/kevjrmy',
    external: true,
  },
  {
    icon: 'tabler:mail',
    label: 'Email',
    value: 'kevin.jgnetworks@gmail.com',
    href: 'mailto:kevin.jgnetworks@gmail.com',
    external: false,
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

const Contact: React.FC = () => {
  return (
    <section className={styles.section} aria-labelledby="contact-heading">
      <div className={styles.inner}>

        <div className={styles.intro}>
          <p className={styles.eyebrow}>Contact</p>
          <h1 id="contact-heading" className={styles.h1}>Let's talk</h1>
          <p className={styles.lead}>
            Pick whatever channel works best for you.
          </p>
        </div>

        <ul className={styles.list} role="list">
          {methods.map((method) => (
            <li key={method.label}>
              <a
                href={method.href}
                className={styles.item}
                {...(method.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                aria-label={`Contact via ${method.label}`}
              >
                <div className={styles.iconWrap}>
                  <Icon icon={method.icon} width={24} height={24} aria-hidden="true" />
                </div>
                <div className={styles.itemText}>
                  <span className={styles.itemLabel}>{method.label}</span>
                  <span className={styles.itemValue}>{method.value}</span>
                </div>
                <Icon
                  icon='tabler:arrow-up-right'
                  width={18}
                  height={18}
                  className={styles.itemArrow}
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default Contact