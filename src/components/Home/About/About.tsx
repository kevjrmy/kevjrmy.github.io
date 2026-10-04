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
            alt="Kevin Jeremy Gautier — full-stack developer based in Valencia"
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
            I'm Kevin Jeremy Gautier, a full-stack developer based in Valencia, Spain.
            I graduated in 2021 as a Node.js web developer with OpenClassrooms and started freelancing right away, first with WordPress sites, then with modern web frameworks. Today I build with AI agents: Claude Code above all, after working with Codex, OpenCode and Antigravity.
          </p>
          <p className={styles.body}>
            My stack spans Laravel, Vue, React, and native Android, from a
            quick MVP to a production-grade web app. I focus on shipping
            work that is fast, accessible, and built to last.
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
        <Link to="/about" className={styles.cta} aria-label="Learn more about Kevin Jeremy Gautier">
          Learn more about me
          <Icon icon="tabler:arrow-up-right" width={16} height={16} aria-hidden="true" />
        </Link>

      </div>

    </section>
  )
}

export default About