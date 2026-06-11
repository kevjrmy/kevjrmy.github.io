import { Icon } from '@iconify/react'
import Cta from '@/components/Home/CTA/Cta'
import styles from './About.module.css'

// ── Timeline ──────────────────────────────────────────────────────────────────

type TimelineEntry = {
  year: string
  title: string
  body: string
}

const timeline: TimelineEntry[] = [
  {
    year: '2021',
    title: 'Graduated & went freelance',
    body: 'Finished my Node.js developer program and immediately started taking on clients — mostly WordPress sites for small businesses and local shops.',
  },
  {
    year: '2022',
    title: 'Modern frameworks',
    body: 'Outgrew WordPress for anything custom. Picked up Vue and Laravel as my main stack and shipped my first SPA and first REST API in production.',
  },
  {
    year: '2023',
    title: 'SSR & production-grade apps',
    body: 'Levelled up with Nuxt and Next.js for SEO-critical projects. More complex Laravel back-ends, sharper focus on performance and accessibility.',
  },
  {
    year: '2024',
    title: 'Going full-stack & mobile',
    body: 'Added React, TypeScript, and Kotlin to the toolkit. Built my first PWAs and a native Android app — convinced that one codebase rarely fits every problem.',
  },
  {
    year: '2025 → now',
    title: 'AI-accelerated development',
    body: 'Integrating AI tooling (Claude Code, CodeX, Antigravity) into the daily workflow, not to replace craft, but to ship better work faster.',
  },
]

// ── Stack groups ──────────────────────────────────────────────────────────────

type StackGroup = {
  label: string
  icon: string
  items: { icon: string; label: string }[]
}

const stackGroups: StackGroup[] = [
  {
    label: 'Backend',
    icon: 'tabler:server',
    items: [
      { icon: 'logos:laravel', label: 'Laravel' },
      { icon: 'vscode-icons:file-type-php', label: 'PHP' },
      { icon: 'vscode-icons:file-type-node', label: 'Node.js' },
    ],
  },
  {
    label: 'Frontend',
    icon: 'tabler:layout',
    items: [
      { icon: 'vscode-icons:file-type-vue', label: 'Vue' },
      { icon: 'vscode-icons:file-type-reactjs', label: 'React' },
      { icon: 'vscode-icons:file-type-typescript-official', label: 'TypeScript' },
      { icon: 'vscode-icons:file-type-vite', label: 'Vite' },
      { icon: 'logos:nextjs-icon', label: 'Next.js' },
    ],
  },
  {
    label: 'Mobile',
    icon: 'tabler:device-mobile',
    items: [
      { icon: 'vscode-icons:file-type-kotlin', label: 'Kotlin' },
      { icon: 'tabler:device-mobile-code', label: 'PWA' },
    ],
  },
  {
    label: 'Tools & other',
    icon: 'tabler:tools',
    items: [
      { icon: 'mdi:wordpress', label: 'WordPress' },
      { icon: 'vscode-icons:file-type-git', label: 'Git' },
      { icon: 'logos:css-3', label: 'CSS' },
    ],
  },
]

// ── Values ────────────────────────────────────────────────────────────────────

type Value = {
  icon: string
  title: string
  body: string
}

const values: Value[] = [
  {
    icon: 'tabler:rocket',
    title: 'Ship, then iterate',
    body: 'A working product in front of real users beats a perfect one on a Figma board. I push for a lean first release, then improve from feedback.',
  },
  {
    icon: 'tabler:eye',
    title: 'Readable over clever',
    body: "Code is read far more often than it's written. I keep it straightforward so the next person (usually me, six months later) can pick it up without a manual.",
  },
  {
    icon: 'tabler:message-2',
    title: 'No ghost clients',
    body: "If something changes, I say so early. You'll always know where the project stands — no unpleasant surprises at delivery.",
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

const About: React.FC = () => {
  return (
    <>

      {/* ── Page header ───────────────────────────────── */}
      <section className={styles.header} aria-labelledby="about-heading">
        <div className={styles.headerInner}>

          <div className={styles.headerText}>
            <p className={styles.eyebrow}>About me</p>
            <h1 id="about-heading" className={styles.h1}>
              A developer who<br />gives a damn.
            </h1>
            <p className={styles.lead}>
              I'm Kevin Jeremy — full-stack developer based in Valencia, Spain.
              Self-taught, freelance since 2021, and genuinely excited about building
              things that work well and look the part.
            </p>
          </div>

          <div className={styles.headerPhoto}>
            <img
              src="/kevjrmy.webp"
              alt="Kevin Jeremy — full-stack developer based in Valencia, Spain"
              className={styles.photo}
              width={320}
              height={320}
            />
          </div>

        </div>
      </section>

      {/* ── Story timeline ────────────────────────────── */}
      <section className={styles.timelineSection} aria-labelledby="timeline-heading">
        <div className={styles.sectionInner}>

          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Background</p>
            <h2 id="timeline-heading" className={styles.h2}>How I got here</h2>
          </div>

          <ol className={styles.timeline} role="list">
            {timeline.map((entry) => (
              <li key={entry.year} className={styles.timelineItem}>
                <span className={styles.timelineYear}>{entry.year}</span>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{entry.title}</h3>
                  <p className={styles.timelineBody}>{entry.body}</p>
                </div>
              </li>
            ))}
          </ol>

        </div>
      </section>

      {/* ── Stack ─────────────────────────────────────── */}
      <section className={styles.stackSection} aria-labelledby="stack-heading">
        <div className={styles.sectionInner}>

          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Toolkit</p>
            <h2 id="stack-heading" className={styles.h2}>What I build with</h2>
            <p className={styles.sectionSubline}>
              I pick the right tool for the job — here's what I reach for most.
            </p>
          </div>

          <div className={styles.stackGrid}>
            {stackGroups.map((group) => (
              <div key={group.label} className={styles.stackGroup}>
                <div className={styles.stackGroupHeader}>
                  <Icon icon={group.icon} width={18} height={18} aria-hidden="true" />
                  <span className={styles.stackGroupLabel}>{group.label}</span>
                </div>
                <ul className={styles.stackItems} role="list">
                  {group.items.map((item) => (
                    <li key={item.label} className={styles.stackItem}>
                      <Icon icon={item.icon} width={20} height={20} aria-hidden="true" />
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Values ────────────────────────────────────── */}
      <section className={styles.valuesSection} aria-labelledby="values-heading">
        <div className={styles.sectionInner}>

          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>How I work</p>
            <h2 id="values-heading" className={styles.h2}>What to expect</h2>
          </div>

          <ul className={styles.valuesGrid} role="list">
            {values.map((v) => (
              <li key={v.title} className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <Icon icon={v.icon} width={22} height={22} aria-hidden="true" />
                </div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueBody}>{v.body}</p>
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