import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { featuredProjects } from '@/data/projects'
import { inkLogoClass } from '@/data/inkLogos'
import type { Project } from '@/types/project'
import styles from './FeaturedWorks.module.css'

// ── Placeholder image ─────────────────────────────────────────────────────────
// Rendered when the real screenshot isn't available yet.
// Pure SVG data URI — no extra file needed.
const Placeholder: React.FC<{ title: string }> = ({ title }) => (
  <div className={styles.placeholder} aria-hidden="true">
    <Icon icon="tabler:photo" width={32} height={32} />
    <span>{title}</span>
  </div>
)

// ── Icon map (label → Iconify icon string) ────────────────────────────────────
const techIcons: Record<string, string> = {
  'Laravel': 'logos:laravel',
  'Vue': 'vscode-icons:file-type-vue',
  'React': 'vscode-icons:file-type-reactjs',
  'TypeScript': 'vscode-icons:file-type-typescript-official',
  'Node.js': 'vscode-icons:file-type-node',
  'Vite': 'vscode-icons:file-type-vite',
  'Next.js': 'logos:nextjs-icon',
  'PHP': 'vscode-icons:file-type-php',
  'Kotlin': 'vscode-icons:file-type-kotlin',
  'Git': 'vscode-icons:file-type-git',
  'WordPress': 'mdi:wordpress',
  'Nuxt': 'vscode-icons:file-type-nuxt',
  'JavaScript': 'vscode-icons:file-type-js-official',
  'PWA': 'tabler:device-mobile-code',
  'Android': 'tabler:brand-android',
  'CSS': 'logos:css-3',
  'Markdown': 'vscode-icons:file-type-markdown',
  'SQLite': 'vscode-icons:file-type-sqlite',
  'Firebase': 'logos:firebase-icon',
  'Supabase': 'logos:supabase-icon',
  'Astro': 'logos:astro-icon',
  'Claude Code': 'logos:claude-code',
  'WooCommerce': 'logos:woocommerce-icon'
}

// ── Stack badge (icon + label pill) ──────────────────────────────────────────
const Badge: React.FC<{ label: string }> = ({ label }) => {
  const icon = techIcons[label]
  return (
    <span className={styles.badge}>
      {icon && <Icon icon={icon} width={14} height={14} className={inkLogoClass(icon)} aria-hidden="true" />}
      {label}
    </span>
  )
}

// ── Panel (one project) ───────────────────────────────────────────────────────
// `eager`: the slide shown on arrival loads its screenshot at once; the others wait
// until they are about to be seen
const Panel: React.FC<{ project: Project; eager: boolean }> = ({ project, eager }) => {
  const [imgError, setImgError] = useState(false)

  return (
    <div className={styles.panel}>

      {/* Left — screenshot */}
      <div className={styles.panelImage}>
        {imgError ? (
          <Placeholder title={project.title} />
        ) : (
          <img
            src={project.image.src}
            alt={project.image.alt}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            onError={() => setImgError(true)}
            className={styles.screenshot}
          />
        )}
      </div>

      {/* Right — metadata */}
      <div className={styles.panelMeta}>
        <div className={styles.metaTop}>
          <p className={styles.metaClient}>{project.client}</p>
          <h3 className={styles.metaTitle}>{project.title}</h3>
          <p className={styles.metaExcerpt}>{project.excerpt}</p>
        </div>

        <div className={styles.metaBottom}>
          <div className={styles.metaBadges}>
            {project.stack.map(tech => (
              <Badge key={tech} label={tech} />
            ))}
          </div>

          <div className={styles.metaFooter}>
            <span className={styles.metaYear}>{project.year}</span>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.metaLink}
                aria-label={`Visit ${project.title} — opens in a new tab`}
              >
                Visit site
                <Icon icon="tabler:arrow-up-right" width={15} height={15} />
              </a>
            )}
          </div>
        </div>
      </div>

    </div>
  )
}

// ── FeaturedWorks ──────────────────────────────────────────────────────────────
const FeaturedWorks: React.FC = () => {
  // Every project is a slide in one scroll-snap row, so a swipe (or a trackpad)
  // moves between them on its own. The active project is read back from the scroll
  // position; a tab only scrolls the row.
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // The slide a tab jumped to fades in. One reached by a swipe does not: it slid in.
  const [jumpedTo, setJumpedTo] = useState<number | null>(null)

  const goTo = (index: number) => {
    const track = trackRef.current
    if (!track) return
    setJumpedTo(index)
    setActiveIndex(index)
    track.scrollTo({ left: index * track.clientWidth, behavior: 'instant' })
  }

  const onTrackScroll = () => {
    const track = trackRef.current
    if (!track) return
    const index = Math.round(track.scrollLeft / track.clientWidth)
    setActiveIndex(index)
    setJumpedTo(jumped => (jumped === index ? jumped : null))
  }

  // The tab bar is one row that scrolls sideways: track which sides still hide tabs
  const tabBarRef = useRef<HTMLDivElement>(null)
  const [hidden, setHidden] = useState({ start: false, end: false })

  const updateHidden = () => {
    const bar = tabBarRef.current
    if (!bar) return
    const start = bar.scrollLeft > 1
    const end = bar.scrollLeft + bar.clientWidth < bar.scrollWidth - 1
    setHidden(prev => (prev.start === start && prev.end === end ? prev : { start, end }))
  }

  useEffect(() => {
    const bar = tabBarRef.current
    if (!bar) return
    const observer = new ResizeObserver(updateHidden) // also fires once on observe
    observer.observe(bar)
    return () => observer.disconnect()
  }, [])

  // Keep the active tab in view, whether a tap or a swipe chose it: centering it
  // also reveals its neighbours. Only the bar scrolls, never the page.
  useEffect(() => {
    const bar = tabBarRef.current
    const tab = bar?.children[activeIndex]
    if (!bar || !(tab instanceof HTMLElement)) return
    bar.scrollTo({ left: tab.offsetLeft - (bar.clientWidth - tab.offsetWidth) / 2 })
  }, [activeIndex])

  // Chevrons, for pointers that cannot swipe: move the row by most of its width
  const scrollTabs = (direction: -1 | 1) => {
    const bar = tabBarRef.current
    if (bar) bar.scrollBy({ left: direction * bar.clientWidth * 0.6 })
  }

  return (
    <section className={styles.section} aria-labelledby="work-heading">

      {/* Intro */}
      <div className={styles.intro}>
        <h2 id="work-heading" className={styles.heading}>Selected Work</h2>
        <p className={styles.subline}>A few things I've built (see more on the portfolio page).</p>
      </div>

      {/* Tabbed interface */}
      <div className={styles.widget}>

        {/* Tab bar */}
        <div className={styles.tabBarWrap}>
          <div
            ref={tabBarRef}
            className={`${styles.tabBar} ${hidden.start ? styles.fadeStart : ''} ${hidden.end ? styles.fadeEnd : ''}`}
            role="tablist"
            aria-label="Featured projects"
            onScroll={updateHidden}
          >
            {featuredProjects.map((project, i) => (
              <button
                key={project.slug}
                role="tab"
                aria-selected={i === activeIndex}
                aria-controls={`panel-${project.slug}`}
                id={`tab-${project.slug}`}
                className={`${styles.tab} ${i === activeIndex ? styles.tabActive : ''}`}
                onClick={() => goTo(i)}
              >
                {project.title}
              </button>
            ))}
          </div>

          <button
            className={`${styles.tabArrow} ${styles.tabArrowPrev} ${hidden.start ? styles.tabArrowVisible : ''}`}
            onClick={() => scrollTabs(-1)}
            aria-label="Show previous projects"
          >
            <Icon icon="tabler:chevron-left" width={16} height={16} aria-hidden="true" />
          </button>
          <button
            className={`${styles.tabArrow} ${styles.tabArrowNext} ${hidden.end ? styles.tabArrowVisible : ''}`}
            onClick={() => scrollTabs(1)}
            aria-label="Show more projects"
          >
            <Icon icon="tabler:chevron-right" width={16} height={16} aria-hidden="true" />
          </button>
        </div>

        {/* Panels: one slide per project, swiped on a phone */}
        <div className={styles.panelWrap}>
          <div ref={trackRef} className={styles.track} onScroll={onTrackScroll}>
            {featuredProjects.map((project, i) => (
              <div
                key={project.slug}
                role="tabpanel"
                id={`panel-${project.slug}`}
                aria-labelledby={`tab-${project.slug}`}
                inert={i !== activeIndex}
                className={`${styles.slide} ${i === jumpedTo ? styles.slideIn : ''}`}
              >
                <Panel project={project} eager={i === 0} />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* CTA */}
      <Link to="/portfolio" className={styles.cta} aria-label="See all projects">
        See all projects
        <Icon icon="tabler:arrow-up-right" width={16} height={16} aria-hidden="true" />
      </Link>

    </section>
  )
}

export default FeaturedWorks
