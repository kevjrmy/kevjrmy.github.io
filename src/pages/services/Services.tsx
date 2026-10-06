import { Icon } from '@iconify/react'
import Cta from '@/components/Home/CTA/Cta'
import { useLocale } from '@/i18n/useLocale'
import styles from './Services.module.css'

// ── Service data ──────────────────────────────────────────────────────────────
// `id` is the key of the card's title and description in the messages of each
// language. WordPress last (docs/content.md, Positioning).

const services = [
  { id: 'automation', icon: 'tabler:settings-automation' },
  { id: 'audit', icon: 'tabler:zoom-check' },
  { id: 'training', icon: 'tabler:school' },
  { id: 'pwa', icon: 'tabler:device-mobile-code' },
  { id: 'webapp', icon: 'tabler:server' },
  { id: 'consulting', icon: 'tabler:map-route' },
  { id: 'mobile', icon: 'tabler:device-mobile' },
  { id: 'wordpress', icon: 'mdi:wordpress' },
] as const

// ── Component ─────────────────────────────────────────────────────────────────

const Services: React.FC = () => {
  const { t } = useLocale()

  return (
    <>

      {/* ── Page header ───────────────────────────────── */}
      <section aria-labelledby="services-heading">
        <div className={styles.headerInner}>
          <p className="eyebrow">{t.services.eyebrow}</p>
          <h1 id="services-heading" className={styles.h1}>{t.services.h1}</h1>
          <p className={styles.lead}>{t.services.lead}</p>
        </div>
      </section>

      {/* ── Services grid ─────────────────────────────── */}
      <section className={styles.gridSection} aria-label={t.services.gridLabel}>
        <div className={styles.gridInner}>
          <ul className={styles.grid} role="list">
            {services.map((service) => (
              <li key={service.id} className={styles.card}>
                <div className={styles.iconWrap}>
                  <Icon icon={service.icon} width={24} height={24} aria-hidden="true" />
                </div>
                <div className={styles.cardBody}>
                  <h2 className={styles.cardTitle}>{t.services.items[service.id].title}</h2>
                  <p className={styles.cardDescription}>{t.services.items[service.id].description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA: the one call to action for every service ─ */}
      <Cta heading={t.services.ctaHeading} subline={t.services.ctaSubline} />

    </>
  )
}

export default Services
