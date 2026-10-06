import { Icon } from '@iconify/react'
import Link from '@/i18n/LocaleLink'
import { useLocale } from '@/i18n/useLocale'
import styles from './About.module.css'

// ── Trust signals ─────────────────────────────────────────────────────────────
// `id` is the key of the signal's label and detail in the messages of each language

const signals = [
  { id: 'since', icon: 'tabler:calendar' },
  { id: 'satisfied', icon: 'tabler:thumb-up' },
  { id: 'performance', icon: 'tabler:rocket' },
  { id: 'replies', icon: 'tabler:message-check' },
] as const

// ── Component ─────────────────────────────────────────────────────────────────

const About: React.FC = () => {
  const { t } = useLocale()

  return (
    <section className={styles.section} aria-labelledby="about-heading">

      {/* ── Photo column ──────────────────────────────── */}
      <div className={styles.photoCol}>
        <div className={styles.photoWrap}>
          <img
            src="/kevjrmy.webp"
            alt={t.homeAbout.photoAlt}
            className={styles.photo}
            loading="lazy"
            width={160}
            height={160}
          />
        </div>
      </div>

      {/* ── Content column ────────────────────────────── */}
      <div className={styles.contentCol}>

        {/* Bio */}
        <div className={styles.bio}>
          <p className="eyebrow">{t.homeAbout.eyebrow}</p>
          <h2 id="about-heading" className={styles.heading}>{t.homeAbout.heading}</h2>
          <p className={styles.body}>{t.homeAbout.body1}</p>
          <p className={styles.body}>{t.homeAbout.body2}</p>
        </div>

        {/* Trust signals */}
        <ul className={styles.signals} role="list">
          {signals.map((s) => (
            <li key={s.id} className={styles.signal}>
              <div className={styles.signalIcon}>
                <Icon icon={s.icon} width={20} height={20} />
              </div>
              <div className={styles.signalText}>
                <span className={styles.signalLabel}>{t.homeAbout.signals[s.id].label}</span>
                <span className={styles.signalDetail}>{t.homeAbout.signals[s.id].detail}</span>
              </div>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/about" className={`button-secondary ${styles.cta}`} aria-label={t.homeAbout.ctaLabel}>
          {t.homeAbout.cta}
          <Icon icon="tabler:arrow-up-right" width={16} height={16} aria-hidden="true" />
        </Link>

      </div>

    </section>
  )
}

export default About