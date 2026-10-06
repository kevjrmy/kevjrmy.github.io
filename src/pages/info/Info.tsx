import { Fragment } from 'react'
import { SITE_DOMAIN } from '@/constants'
import { useLocale } from '@/i18n/useLocale'
import styles from './Info.module.css'

const EMAIL = 'kevin.jgnetworks@gmail.com'

// The titled paragraphs of the terms, in order. The words of the whole page are in
// the messages of each language (src/i18n/messages); a paragraph with a link in it
// is cut there around the link.
const termSections = ['using', 'content', 'prices', 'links', 'accuracy'] as const

// ── Component ─────────────────────────────────────────────────────────────────

const Info: React.FC = () => {
  const { locale, t } = useLocale()
  const { terms, privacy } = t.info

  return (
    <section className={styles.section} aria-labelledby="info-heading">
      <div className={styles.inner}>

        {/* ── Page header ───────────────────────────────── */}
        <div className={styles.intro}>
          <p className="eyebrow">{t.info.eyebrow}</p>
          <h1 id="info-heading" className={styles.h1}>{t.info.h1}</h1>
          <p className={styles.lead}>{t.info.lead}</p>
          <p className={styles.updated}>{t.info.updated}</p>
        </div>

        {/* ── Terms of use ──────────────────────────────── */}
        <article id="terms" className={styles.block} aria-labelledby="terms-heading">
          <h2 id="terms-heading" className={styles.h2}>{terms.heading}</h2>
          <p>{terms.intro(SITE_DOMAIN)}</p>

          {termSections.map((id) => (
            <Fragment key={id}>
              <h3 className={styles.h3}>{terms[id].title}</h3>
              <p>{terms[id].body}</p>
            </Fragment>
          ))}
        </article>

        {/* ── Privacy ───────────────────────────────────── */}
        <article id="privacy" className={styles.block} aria-labelledby="privacy-heading">
          <h2 id="privacy-heading" className={styles.h2}>{privacy.heading}</h2>
          <p>{privacy.intro}</p>

          <h3 className={styles.h3}>{privacy.not.title}</h3>
          <ul className={styles.list}>
            {privacy.not.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 className={styles.h3}>{privacy.saved.title}</h3>
          <p>{privacy.saved.body}</p>

          <h3 className={styles.h3}>{privacy.hosting.title}</h3>
          <p>
            {privacy.hosting.before}
            <a
              href={`https://docs.github.com/${locale}/site-policy/privacy-policies/github-general-privacy-statement`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {privacy.hosting.link}
            </a>
            {privacy.hosting.after}
          </p>

          <h3 className={styles.h3}>{privacy.contact.title}</h3>
          <p>{privacy.contact.body}</p>

          <h3 className={styles.h3}>{privacy.rights.title}</h3>
          <p>
            {privacy.rights.before}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            {privacy.rights.middle}
            <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">AEPD</a>
            {privacy.rights.after}
          </p>

          <h3 className={styles.h3}>{privacy.changes.title}</h3>
          <p>{privacy.changes.body}</p>
        </article>

      </div>
    </section>
  )
}

export default Info
