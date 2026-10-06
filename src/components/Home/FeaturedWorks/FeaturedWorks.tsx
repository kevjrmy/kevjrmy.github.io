import { useEffect, useRef, useState } from 'react'
import { Icon } from '@iconify/react'
import { featuredProjects } from '@/data/projects'
import { inkLogoClass } from '@/data/inkLogos'
import { techIcons } from '@/data/techIcons'
import type { Project } from '@/types/project'
import Link from '@/i18n/LocaleLink'
import { useLocale } from '@/i18n/useLocale'
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
// `eager`: load the screenshot at once instead of waiting until it is about to be seen
const Panel: React.FC<{ project: Project; eager: boolean }> = ({ project, eager }) => {
  const [imgError, setImgError] = useState(false)
  const { t } = useLocale()
  // The sentences of the project, in the language being read
  const copy = t.projects[project.slug]

  return (
    <div className={styles.panel}>

      {/* Left — screenshot */}
      <div className={styles.panelImage}>
        {imgError ? (
          <Placeholder title={project.title} />
        ) : (
          <img
            src={project.image.src}
            alt={copy.alt}
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
          <p className={styles.metaClient}>{copy.client}</p>
          <h3 className={styles.metaTitle}>{project.title}</h3>
          <p className={styles.metaExcerpt}>{copy.excerpt}</p>
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
                aria-label={t.common.visitLabel(project.title)}
              >
                {t.common.visitSite}
                <Icon icon="tabler:arrow-up-right" width={15} height={15} />
              </a>
            )}
          </div>
        </div>
      </div>

    </div>
  )
}

// ── Tab transition ────────────────────────────────────────────────────────────
// A tab does not scroll the row past every project in between. The project in view
// fades out, the row jumps while nothing shows, and the chosen project fades in
// from the side it sits on. A swipe needs none of this: the finger moves the row.
type Move = {
  from: number
  to: number
  direction: 1 | -1
  phase: 'out' | 'in'
}

// How long the project in view takes to leave. The stylesheet reads the same value
const LEAVE_MS = 140

// ── FeaturedWorks ──────────────────────────────────────────────────────────────
const FeaturedWorks: React.FC = () => {
  // Every project is a slide in one scroll-snap row, so a swipe (or a trackpad)
  // moves between them on its own. The active project is read back from the scroll
  // position; a tab only scrolls the row.
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const { t } = useLocale()

  const [move, setMove] = useState<Move | null>(null)

  // Screenshots load lazily, except the first. A tab can jump to a project far down
  // the row, whose screenshot would then pop in after the fade: so the first sign of
  // interest in the widget (pointer over it, finger on it, focus in it) loads them all.
  const [armed, setArmed] = useState(false)
  const arm = () => setArmed(true)

  const goTo = (index: number) => {
    const track = trackRef.current
    if (!track) return
    const from = Math.round(track.scrollLeft / track.clientWidth)
    setActiveIndex(index)
    setMove(index === from ? null : { from, to: index, direction: index > from ? 1 : -1, phase: 'out' })
  }

  // Once the project in view has left, jump to the chosen one and let it come in
  useEffect(() => {
    if (move?.phase !== 'out') return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timer = window.setTimeout(() => {
      const track = trackRef.current
      if (!track) return
      track.scrollTo({ left: move.to * track.clientWidth, behavior: 'instant' })
      setMove({ ...move, phase: 'in' })
    }, reducedMotion ? 0 : LEAVE_MS)
    return () => window.clearTimeout(timer)
  }, [move])

  const onTrackScroll = () => {
    const track = trackRef.current
    // A tab was just chosen: the jump that follows decides, not a scroll still settling
    if (!track || move?.phase === 'out') return
    const index = Math.round(track.scrollLeft / track.clientWidth)
    setActiveIndex(index)
    setMove(current => (current?.to === index ? current : null))
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
        <h2 id="work-heading" className={styles.heading}>{t.works.heading}</h2>
        <p className={styles.subline}>{t.works.subline}</p>
      </div>

      {/* Tabbed interface */}
      <div className={styles.widget} onPointerEnter={arm} onFocus={arm}>

        {/* Tab bar */}
        <div className={styles.tabBarWrap}>
          <div
            ref={tabBarRef}
            className={`${styles.tabBar} ${hidden.start ? styles.fadeStart : ''} ${hidden.end ? styles.fadeEnd : ''}`}
            role="tablist"
            aria-label={t.works.tablist}
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
            aria-label={t.works.prev}
          >
            <Icon icon="tabler:chevron-left" width={16} height={16} aria-hidden="true" />
          </button>
          <button
            className={`${styles.tabArrow} ${styles.tabArrowNext} ${hidden.end ? styles.tabArrowVisible : ''}`}
            onClick={() => scrollTabs(1)}
            aria-label={t.works.next}
          >
            <Icon icon="tabler:chevron-right" width={16} height={16} aria-hidden="true" />
          </button>
        </div>

        {/* Panels: one slide per project, swiped on a phone */}
        <div className={styles.panelWrap}>
          <div
            ref={trackRef}
            className={styles.track}
            style={{ '--leave': `${LEAVE_MS}ms`, '--direction': move?.direction ?? 1 } as React.CSSProperties}
            onScroll={onTrackScroll}
          >
            {featuredProjects.map((project, i) => (
              <div
                key={project.slug}
                role="tabpanel"
                id={`panel-${project.slug}`}
                aria-labelledby={`tab-${project.slug}`}
                inert={i !== activeIndex}
                className={[
                  styles.slide,
                  move?.phase === 'out' && i === move.from ? styles.slideOut : '',
                  move?.phase === 'in' && i === move.to ? styles.slideIn : '',
                ].join(' ')}
              >
                <Panel project={project} eager={armed || i === 0} />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* CTA */}
      <Link to="/portfolio" className={`button-secondary ${styles.cta}`}>
        {t.works.cta}
        <Icon icon="tabler:arrow-up-right" width={16} height={16} aria-hidden="true" />
      </Link>

    </section>
  )
}

export default FeaturedWorks
