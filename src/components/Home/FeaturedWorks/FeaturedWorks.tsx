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

// ── Panel (active project) ────────────────────────────────────────────────────
const Panel: React.FC<{ project: Project }> = ({ project }) => {
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
  const [activeSlug, setActiveSlug] = useState(featuredProjects[0]?.slug ?? '')
  const activeProject = featuredProjects.find(p => p.slug === activeSlug)

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
            {featuredProjects.map(project => (
              <button
                key={project.slug}
                role="tab"
                aria-selected={project.slug === activeSlug}
                aria-controls={`panel-${project.slug}`}
                id={`tab-${project.slug}`}
                className={`${styles.tab} ${project.slug === activeSlug ? styles.tabActive : ''}`}
                onClick={(e) => {
                  setActiveSlug(project.slug)
                  // The bar scrolls sideways: bring the chosen tab into view, which reveals its neighbours
                  e.currentTarget.scrollIntoView({ inline: 'center', block: 'nearest' })
                }}
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

        {/* Active panel */}
        {activeProject && (
          <div
            role="tabpanel"
            id={`panel-${activeProject.slug}`}
            aria-labelledby={`tab-${activeProject.slug}`}
            className={styles.panelWrap}
            key={activeProject.slug}
          >
            <Panel project={activeProject} />
          </div>
        )}

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
