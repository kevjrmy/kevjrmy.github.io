import { useState } from 'react'
import { Icon } from '@iconify/react'
import { projects } from '@/data/projects'
import { inkLogoClass } from '@/data/inkLogos'
import { techIcons } from '@/data/techIcons'
import type { Project, ProjectType } from '@/types/project'
import { useLocale } from '@/i18n/useLocale'
import styles from './Portfolio.module.css'

// ── Filter categories ─────────────────────────────────────────────────────────

const TYPE_ORDER: ProjectType[] = ['Web Application', 'PWA', 'Mobile App', 'Landing Page', 'Laravel', 'Consulting', 'WordPress']

const usedTypes = new Set(projects.map(p => p.type))
const categories: ProjectType[] = ['All', ...TYPE_ORDER.filter(t => usedTypes.has(t))]

// ── Badge ─────────────────────────────────────────────────────────────────────

const Badge: React.FC<{ label: string }> = ({ label }) => {
  const icon = techIcons[label]
  return (
    <span className={styles.badge}>
      {icon && <Icon icon={icon} width={13} height={13} className={inkLogoClass(icon)} aria-hidden="true" />}
      {label}
    </span>
  )
}

// ── Project card ──────────────────────────────────────────────────────────────

const Card: React.FC<{ project: Project }> = ({ project }) => {
  const [imgError, setImgError] = useState(false)
  const { t } = useLocale()
  // The sentences of the project, in the language being read
  const copy = t.projects[project.slug]

  return (
    <article className={styles.card}>

      {/* Thumbnail */}
      <div className={styles.thumbnail}>
        {imgError ? (
          <div className={styles.placeholder} aria-hidden="true">
            <Icon icon="tabler:photo" width={28} height={28} />
          </div>
        ) : (
          <img
            src={project.image.src}
            alt={copy.alt}
            className={styles.thumbnailImg}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {/* Body */}
      <div className={styles.cardBody}>
        <div className={styles.cardTop}>
          <div className={styles.cardMeta}>
            <span className={styles.cardYear}>{project.year}</span>
            <span className={styles.cardClient}>{copy.client}</span>
          </div>
          <h2 className={styles.cardTitle}>{project.title}</h2>
          <p className={styles.cardExcerpt}>{copy.excerpt}</p>
        </div>

        <div className={styles.cardBottom}>
          <div className={styles.badges}>
            {project.stack.map(tech => (
              <Badge key={tech} label={tech} />
            ))}
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLink}
              aria-label={t.common.visitLabel(project.title)}
            >
              {t.common.visitSite}
              <Icon icon="tabler:arrow-up-right" width={15} height={15} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

    </article>
  )
}

// ── Portfolio page ────────────────────────────────────────────────────────────

const Portfolio: React.FC = () => {
  const [active, setActive] = useState<ProjectType>('All')
  const { t } = useLocale()

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.type === active)

  return (
    <section className={styles.section} aria-labelledby="portfolio-heading">

      {/* Header */}
      <div className={styles.header}>
        <p className="eyebrow">{t.portfolio.eyebrow}</p>
        <h1 id="portfolio-heading" className={styles.h1}>{t.portfolio.h1}</h1>
        <p className={styles.lead}>{t.portfolio.lead}</p>
      </div>

      {/* Filters */}
      <div className={styles.filters} role="group" aria-label={t.portfolio.filterLabel}>
        {categories.map(cat => (
          <button
            key={cat}
            className={`${styles.filter} ${active === cat ? styles.filterActive : ''}`}
            onClick={(e) => {
              setActive(cat)
              e.currentTarget.scrollIntoView({ inline: 'center', block: 'nearest' })
            }}
            aria-pressed={active === cat}
          >
            {t.portfolio.types[cat]}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <ul className={styles.grid} role="list">
          {filtered.map(project => (
            <li key={project.slug}>
              <Card project={project} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.empty}>{t.portfolio.empty}</p>
      )}

    </section>
  )
}

export default Portfolio
