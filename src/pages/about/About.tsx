import { Icon } from '@iconify/react'
import Cta from '@/components/Home/CTA/Cta'
import { inkLogoClass } from '@/data/inkLogos'
import { classicStack, creativeTools, currentAiStack } from '@/data/stack'
import Link from '@/i18n/LocaleLink'
import { useLocale } from '@/i18n/useLocale'
import styles from './About.module.css'

// Each list below gives the order and the icons. The words are in the messages of
// each language (src/i18n/messages), under the keys used here.

// ── Timeline ──────────────────────────────────────────────────────────────────
// Oldest first

const timeline = ['graduated', 'frameworks', 'ssr', 'fullstack', 'aiFirst'] as const

// ── Credentials ───────────────────────────────────────────────────────────────

const credentialGroups = [
  { id: 'education', icon: 'tabler:certificate', items: ['diploma'] },
  { id: 'languages', icon: 'tabler:language', items: ['french', 'english', 'spanish'] },
] as const

// ── Values ────────────────────────────────────────────────────────────────────

const values = [
  { id: 'ship', icon: 'tabler:rocket' },
  { id: 'readable', icon: 'tabler:eye' },
  { id: 'ghost', icon: 'tabler:message-2' },
] as const

// ── Component ─────────────────────────────────────────────────────────────────

const About: React.FC = () => {
  const { t } = useLocale()

  return (
    <>

      {/* ── Page header ───────────────────────────────── */}
      <section aria-labelledby="about-heading">
        <div className={styles.headerInner}>

          <div className={styles.headerText}>
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h1 id="about-heading" className={styles.h1}>
              {t.about.h1[0]}<br />{t.about.h1[1]}
            </h1>
            <p className={styles.lead}>{t.about.lead}</p>
          </div>

          <div className={styles.headerPhoto}>
            <img
              src="/kevjrmy.webp"
              alt={t.about.photoAlt}
              className={styles.photo}
              width={320}
              height={320}
            />
          </div>

        </div>
      </section>

      {/* ── Story timeline ────────────────────────────── */}
      <section aria-labelledby="timeline-heading">
        <div className={styles.sectionInner}>

          <div className={styles.sectionIntro}>
            <p className="eyebrow">{t.about.background.eyebrow}</p>
            <h2 id="timeline-heading" className={styles.h2}>{t.about.background.heading}</h2>
          </div>

          <ol className={styles.timeline} role="list">
            {timeline.map((id) => (
              <li key={id} className={styles.timelineItem}>
                <span className={styles.timelineYear}>{t.about.timeline[id].year}</span>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{t.about.timeline[id].title}</h3>
                  <p className={styles.timelineBody}>{t.about.timeline[id].body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className={styles.credentials}>
            {credentialGroups.map((group) => (
              <div key={group.id} className={styles.stackGroup}>
                <div className={styles.stackGroupHeader}>
                  <Icon icon={group.icon} width={18} height={18} aria-hidden="true" />
                  <span className={styles.stackGroupLabel}>{t.about.credentials[group.id]}</span>
                </div>
                <ul className={styles.stackItems} role="list">
                  {group.items.map((item) => (
                    <li key={item} className={styles.credential}>
                      <span className={styles.credentialLabel}>{t.about.credentials.items[item].label}</span>
                      <span className={styles.credentialDetail}>{t.about.credentials.items[item].detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Stack: AI and classic (src/data/stack.ts) ─── */}
      <section id="stack" className={styles.stackSection} aria-labelledby="stack-heading">
        <div className={styles.sectionInner}>

          <div className={styles.sectionIntro}>
            <p className="eyebrow">{t.about.toolkit.eyebrow}</p>
            <h2 id="stack-heading" className={styles.h2}>{t.about.toolkit.heading}</h2>
            <p className={styles.sectionSubline}>{t.about.toolkit.subline}</p>
          </div>

          <div className={styles.stackBlock}>
            <div className={styles.stackBlockHeader}>
              <h3 className={styles.stackBlockTitle}>{t.about.toolkit.ai}</h3>
              <Link to="/ai" className="button-secondary">
                {t.about.toolkit.aiLink}
                <Icon icon="tabler:arrow-up-right" width={16} height={16} aria-hidden="true" />
              </Link>
            </div>
            <ul className={styles.aiItems} role="list">
              {currentAiStack.map((item) => (
                <li key={item.label} className={styles.stackItem}>
                  <Icon icon={item.icon} width={20} height={20} className={inkLogoClass(item.icon)} aria-hidden="true" />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.stackBlock}>
            <div className={styles.stackBlockHeader}>
              <h3 className={styles.stackBlockTitle}>{t.about.toolkit.classic}</h3>
            </div>
            <div className={styles.stackGrid}>
              {classicStack.map((group) => (
                <div key={group.id} className={styles.stackGroup}>
                  <div className={styles.stackGroupHeader}>
                    <Icon icon={group.icon} width={18} height={18} aria-hidden="true" />
                    <span className={styles.stackGroupLabel}>{t.stack.groups[group.id]}</span>
                  </div>
                  <ul className={styles.stackItems} role="list">
                    {group.items.map((item) => (
                      <li key={item.label} className={styles.stackItem}>
                        <Icon icon={item.icon} width={20} height={20} className={inkLogoClass(item.icon)} aria-hidden="true" />
                        <span>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Not a stack: the design and video tools */}
          <div className={styles.stackBlock}>
            <div className={styles.stackBlockHeader}>
              <h3 className={styles.stackBlockTitle}>{t.about.toolkit.creative}</h3>
            </div>
            <ul className={styles.aiItems} role="list">
              {creativeTools.map((item) => (
                <li key={item.label} className={styles.stackItem}>
                  <Icon icon={item.icon} width={20} height={20} className={inkLogoClass(item.icon)} aria-hidden="true" />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ── Values ────────────────────────────────────── */}
      <section aria-labelledby="values-heading">
        <div className={styles.sectionInner}>

          <div className={styles.sectionIntro}>
            <p className="eyebrow">{t.about.values.eyebrow}</p>
            <h2 id="values-heading" className={styles.h2}>{t.about.values.heading}</h2>
          </div>

          <ul className={styles.valuesGrid} role="list">
            {values.map((v) => (
              <li key={v.id} className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <Icon icon={v.icon} width={22} height={22} aria-hidden="true" />
                </div>
                <h3 className={styles.valueTitle}>{t.about.values.items[v.id].title}</h3>
                <p className={styles.valueBody}>{t.about.values.items[v.id].body}</p>
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <Cta />

    </>
  )
}

export default About