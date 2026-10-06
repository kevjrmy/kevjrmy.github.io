import { Icon } from '@iconify/react'
import Link from '@/i18n/LocaleLink'
import { useLocale } from '@/i18n/useLocale'
import styles from './Hero.module.css'

const Hero: React.FC = () => {
  const { t } = useLocale()

  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.h1}>
        <span>{t.hero.line1}</span>{' '}<br />
        <span>{t.hero.with} <span className={styles.command}>ai-agents</span></span>
      </h1>
      <p className={styles.lead}>{t.hero.lead}</p>
      <div className={styles.ctaRow}>
        <Link to="/portfolio" className={styles.btnPrimary}>
          {t.hero.viewWork}
          <Icon icon="tabler:arrow-right" width={18} height={18} aria-hidden="true" />
        </Link>
        <Link to="/contact" className={styles.btnGhost}>{t.hero.contact}</Link>
      </div>
    </div>
  )
}

export default Hero