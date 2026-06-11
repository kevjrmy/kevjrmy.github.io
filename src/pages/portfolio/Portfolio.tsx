import { useState } from 'react'
import { Icon } from '@iconify/react'
import { projects } from '@/data/projects'
import type { Project, ProjectType } from '@/types/project'
import styles from './Portfolio.module.css'

// ── Tech icon map ─────────────────────────────────────────────────────────────

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
  'Markdown': 'vscode-icons:file-type-markdown'
}

// ── Filter categories ─────────────────────────────────────────────────────────

const TYPE_ORDER: ProjectType[] = ['Web Application', 'PWA', 'WordPress', 'Mobile App', 'Landing Page', 'Laravel', 'Consulting']

const usedTypes = new Set(projects.map(p => p.type))
const categories: ProjectType[] = ['All', ...TYPE_ORDER.filter(t => usedTypes.has(t))]

// ── Badge ─────────────────────────────────────────────────────────────────────

const Badge: React.FC<{ label: string }> = ({ label }) => {
  const icon = techIcons[label]
  return (
    <span className={styles.badge}>
      {icon && <Icon icon={icon} width={13} height={13} aria-hidden="true" />}
      {label}
    </span>
  )
}

// ── Project card ──────────────────────────────────────────────────────────────

const Card: React.FC<{ project: Project }> = ({ project }) => {
  const [imgError, setImgError] = useState(false)

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
            alt={project.image.alt}
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
            <span className={styles.cardClient}>{project.client}</span>
          </div>
          <h2 className={styles.cardTitle}>{project.title}</h2>
          <p className={styles.cardExcerpt}>{project.excerpt}</p>
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
              aria-label={`Visit ${project.title} — opens in a new tab`}
            >
              Visit site
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

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.type === active)

  return (
    <section className={styles.section} aria-labelledby="portfolio-heading">

      {/* Header */}
      <div className={styles.header}>
        <p className={styles.eyebrow}>Portfolio</p>
        <h1 id="portfolio-heading" className={styles.h1}>Selected work</h1>
        <p className={styles.lead}>
          A range of projects — from WordPress sites to full-stack apps and mobile.
        </p>
      </div>

      {/* Filters */}
      <div className={styles.filters} role="group" aria-label="Filter projects by category">
        {categories.map(cat => (
          <button
            key={cat}
            className={`${styles.filter} ${active === cat ? styles.filterActive : ''}`}
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
          >
            {cat}
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
        <p className={styles.empty}>No projects in this category yet.</p>
      )}

    </section>
  )
}

export default Portfolio
