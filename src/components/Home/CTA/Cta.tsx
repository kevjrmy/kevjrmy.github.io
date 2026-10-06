import { Icon } from '@iconify/react'
import { useLocale } from '@/i18n/useLocale'
import styles from './Cta.module.css'

// The heading and subline can be replaced by the page that renders the band;
// the button is the same everywhere.
type CtaProps = {
  heading?: string
  subline?: string
}

const Cta: React.FC<CtaProps> = ({ heading, subline }) => {
  const { t } = useLocale()

  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className={styles.inner}>
        <div className={styles.text}>
          <h2 id="cta-heading" className={styles.heading}>{heading ?? t.cta.heading}</h2>
          <p className={styles.subline}>{subline ?? t.cta.subline}</p>
        </div>
        <a
          href="https://wa.me/34632936909"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btn}
          aria-label={t.cta.label}
        >
          {t.cta.button}
          <Icon icon="tabler:brand-whatsapp" width={18} height={18} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

export default Cta