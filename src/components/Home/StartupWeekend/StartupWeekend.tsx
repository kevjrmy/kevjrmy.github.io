import { useRef, useState } from 'react'
import { Icon } from '@iconify/react'
import { useLocale } from '@/i18n/useLocale'
import styles from './StartupWeekend.module.css'

// ── Photos ────────────────────────────────────────────────────────────────────
// Files live in public/images/startup-weekend/ as <name>.webp (1440w) and <name>-720.webp.
// The name is also the key of the photo's alt text and caption in the messages of
// each language; the text column (heading, body, facts) is there too.

const photos = ['team', 'kevin', 'certificate', 'pitch-market', 'pitch-product', 'pitch-room', 'teammates'] as const

// ── Component ─────────────────────────────────────────────────────────────────

const StartupWeekend: React.FC = () => {
  const trackRef = useRef<HTMLUListElement>(null)
  const [index, setIndex] = useState(0)
  const { t } = useLocale()

  // The track is a scroll-snap row, so swipe and trackpad work on their own.
  // The arrows only scroll it; the current slide is read back from the scroll position.
  const goTo = (target: number) => {
    const track = trackRef.current
    if (!track) return
    const next = (target + photos.length) % photos.length
    track.scrollTo({ left: next * track.clientWidth })
  }

  const onScroll = () => {
    const track = trackRef.current
    if (track) setIndex(Math.round(track.scrollLeft / track.clientWidth))
  }

  return (
    <section className={styles.section} aria-labelledby="award-heading">

      {/* ── Text column ───────────────────────────────── */}
      <div className={styles.content}>
        <p className="eyebrow">{t.award.eyebrow}</p>
        <h2 id="award-heading" className={styles.heading}>{t.award.heading}</h2>
        <p className={styles.body}>{t.award.body}</p>

        <ul className={styles.facts} role="list">
          {t.award.facts.map((fact) => (
            <li key={fact} className={styles.fact}>
              <Icon icon="tabler:check" width={20} height={20} aria-hidden="true" />
              <span>{fact}</span>
            </li>
          ))}
        </ul>

        <a
          href="https://cuantocuesta.eu"
          target="_blank"
          rel="noopener noreferrer"
          className={`button-secondary ${styles.cta}`}
          aria-label={t.common.newTabLabel(t.award.visit)}
        >
          {t.award.visit}
          <Icon icon="tabler:arrow-up-right" width={16} height={16} aria-hidden="true" />
        </a>
      </div>

      {/* ── Gallery ───────────────────────────────────── */}
      <div
        className={styles.gallery}
        role="group"
        aria-roledescription="carousel"
        aria-label={t.award.gallery}
      >
        <ul ref={trackRef} className={styles.track} role="list" tabIndex={0} onScroll={onScroll}>
          {photos.map((name, i) => (
            <li
              key={name}
              className={styles.slide}
              role="group"
              aria-roledescription="slide"
              aria-label={t.award.slideOf(i + 1, photos.length)}
            >
              <img
                src={`/images/startup-weekend/${name}.webp`}
                srcSet={`/images/startup-weekend/${name}-720.webp 720w, /images/startup-weekend/${name}.webp 1440w`}
                sizes="(min-width: 900px) 620px, 100vw"
                alt={t.award.photos[name].alt}
                width={1440}
                height={960}
                loading={i === 0 ? undefined : 'lazy'}
                className={styles.photo}
              />
              <p className={styles.caption}>
                <span className={styles.captionTitle}>{t.award.photos[name].caption}</span>
                <span className={styles.captionMeta}>{t.award.meta}</span>
              </p>
            </li>
          ))}
        </ul>

        <button
          className={`${styles.arrow} ${styles.arrowPrev}`}
          onClick={() => goTo(index - 1)}
          aria-label={t.award.prev}
        >
          <Icon icon="tabler:chevron-left" width={32} height={32} aria-hidden="true" />
        </button>
        <button
          className={`${styles.arrow} ${styles.arrowNext}`}
          onClick={() => goTo(index + 1)}
          aria-label={t.award.next}
        >
          <Icon icon="tabler:chevron-right" width={32} height={32} aria-hidden="true" />
        </button>

        <p className={styles.counter} aria-hidden="true">
          {index + 1} / {photos.length}
        </p>
      </div>

    </section>
  )
}

export default StartupWeekend
