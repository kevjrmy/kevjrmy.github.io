import { useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'
import Link from '@/i18n/LocaleLink'
import { useLocale } from '@/i18n/useLocale'
import styles from './Services.module.css'

// `id` is the key of the card's title and description in the messages of each language
const services = [
  { id: 'automation', icon: 'tabler:settings-automation' },
  { id: 'webapp', icon: 'tabler:server' },
  { id: 'pwa', icon: 'tabler:device-mobile-code' },
] as const

const Services: React.FC = () => {
  const { t } = useLocale()
  const gridRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll<HTMLLIElement>(`.${styles.card}`)
    if (!cards) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
            observer.unobserve(entry.target) // fire once
          }
        })
      },
      { threshold: 0.12 }
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} aria-labelledby="services-heading">

      <div className={styles.intro}>
        <h2 id="services-heading" className={styles.heading}>{t.homeServices.heading}</h2>
        <p className={styles.subline}>{t.homeServices.subline}</p>
      </div>

      <ul ref={gridRef} className={styles.grid} role="list">
        {services.map((service, i) => (
          <li
            key={service.id}
            className={styles.card}
            style={{ '--card-delay': `${i * 80}ms` } as React.CSSProperties}
          >
            <div className={styles.iconWrap}>
              <Icon icon={service.icon} width={28} height={28} />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{t.homeServices.items[service.id].title}</h3>
              <p className={styles.cardDescription}>{t.homeServices.items[service.id].description}</p>
            </div>
          </li>
        ))}
      </ul>

      <Link to="/services" className={`button-secondary ${styles.cta}`}>
        {t.homeServices.cta}
        <Icon icon="tabler:arrow-up-right" width={16} height={16} aria-hidden="true" />
      </Link>

    </section>
  )
}

export default Services