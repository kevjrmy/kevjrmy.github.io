import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import styles from './About.module.css'

// ── Trust signals ─────────────────────────────────────────────────────────────

type Signal = {
  icon: string
  label: string
  detail: string
}

const signals: Signal[] = [
  {
    icon: 'tabler:calendar',
    label: 'Since 2021',
    detail: 'building for the web',
  },
  {
    icon: 'tabler:thumb-up',
    label: '100% satisfied',
    detail: 'every client, every project',
  },
  {
    icon: 'tabler:rocket',
    label: 'Performance-first',
    detail: 'fast by default, not by accident',
  },
  {
    icon: 'tabler:message-check',
    label: 'Replies within 24h',
    detail: 'you won\'t be left hanging',
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

const About: React.FC = () => {
  return (
    <section className={styles.section} aria-labelledby="about-heading">

      {/* ── Photo column ──────────────────────────────── */}
      <div className={styles.photoCol}>
        <div className={styles.photoWrap}>
          <img
            src="/kevjrmy.webp"
            alt="Kevin Jeremy — full-stack developer based in Valencia"
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
          <p className={styles.eyebrow}>About me</p>
          <h2 id="about-heading" className={styles.heading}>
            Who am I ?
          </h2>
          <p className={styles.body}>
            I'm Kevin Jeremy, a full-stack developer based in Valencia, Spain.
            I graduated in 2021 as Node.js Developer and started freelancing right after doing WordPress websites at first, then I evolved to modern frameworks for the web and now I'm diving into AI with tools like Claude Code, CodeX & Antigravity.
          </p>
          <p className={styles.body}>
            My stack spans Laravel, Vue, React, and native Android. From a
            WordPress refresh to a production-grade web app. I focus on
            shipping work that is fast, accessible, and built to last.
          </p>
        </div>

        {/* Trust signals */}
        <ul className={styles.signals} role="list">
          {signals.map((s) => (
            <li key={s.label} className={styles.signal}>
              <div className={styles.signalIcon}>
                <Icon icon={s.icon} width={20} height={20} />
              </div>
              <div className={styles.signalText}>
                <span className={styles.signalLabel}>{s.label}</span>
                <span className={styles.signalDetail}>{s.detail}</span>
              </div>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/about" className={styles.cta} aria-label="Learn more about Kevin Jeremy">
          Learn more about me
          <Icon icon="tabler:arrow-right" width={16} height={16} />
        </Link>

      </div>

    </section>
  )
}

export default About