import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { featuredProjects } from '@/data/projects'
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

// ── Stack badge ───────────────────────────────────────────────────────────────
const Badge: React.FC<{ label: string }> = ({ label }) => (
  <span className={styles.badge}>{label}</span>
)

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

  return (
    <section className={styles.section} aria-labelledby="work-heading">

      {/* Intro */}
      <div className={styles.intro}>
        <h2 id="work-heading" className={styles.heading}>Selected Work</h2>
        <p className={styles.subline}>A few things I've built: more on the portfolio page.</p>
      </div>

      {/* Tabbed interface */}
      <div className={styles.widget}>

        {/* Tab bar */}
        <div className={styles.tabBar} role="tablist" aria-label="Featured projects">
          {featuredProjects.map(project => (
            <button
              key={project.slug}
              role="tab"
              aria-selected={project.slug === activeSlug}
              aria-controls={`panel-${project.slug}`}
              id={`tab-${project.slug}`}
              className={`${styles.tab} ${project.slug === activeSlug ? styles.tabActive : ''}`}
              onClick={() => setActiveSlug(project.slug)}
            >
              {project.title}
            </button>
          ))}
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
        <Icon icon="tabler:arrow-right" width={16} height={16} />
      </Link>

    </section>
  )
}

export default FeaturedWorks
