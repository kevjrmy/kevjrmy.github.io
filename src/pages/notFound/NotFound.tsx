import { Icon } from '@iconify/react'
import Link from '@/i18n/LocaleLink'
import { useLocale } from '@/i18n/useLocale'
import styles from './NotFound.module.css'

// Any URL that matches no page (App.tsx, path="*"), in the language of its prefix.
// GitHub Pages serves the app for every unknown path, so a mistyped link lands here.
const NotFound: React.FC = () => {
  const { t } = useLocale()

  return (
    <section className={styles.section} aria-labelledby="not-found-heading">
      <p className="eyebrow">{t.notFound.eyebrow}</p>
      <h1 id="not-found-heading" className={styles.h1}>{t.notFound.h1}</h1>
      <p className={styles.lead}>{t.notFound.lead}</p>

      <div className={styles.links}>
        <Link to="/" className="button-secondary">
          {t.notFound.home}
          <Icon icon="tabler:arrow-up-right" width={16} height={16} aria-hidden="true" />
        </Link>
        <Link to="/portfolio" className="button-secondary">
          {t.notFound.portfolio}
          <Icon icon="tabler:arrow-up-right" width={16} height={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}

export default NotFound
