import { useRef, useState } from 'react'
import { Icon } from '@iconify/react'
import styles from './StartupWeekend.module.css'

// ── Photos ────────────────────────────────────────────────────────────────────
// Files live in public/images/startup-weekend/ as <name>.webp (1440w) and <name>-720.webp

type Photo = {
  name: string
  alt: string
  caption: string
}

const photos: Photo[] = [
  {
    name: 'team',
    alt: 'The six members of the Cuanto Cuesta team on stage, holding the Grand Prize certificate',
    caption: 'The Cuanto Cuesta team',
  },
  {
    name: 'kevin',
    alt: 'Kevin Jeremy Gautier holding the Grand Prize certificate in front of the Techstars Startup Weekend Valencia banner',
    caption: 'Grand Prize, in hand',
  },
  {
    name: 'certificate',
    alt: 'Framed "Grand Prize Winner — Cuanto Cuesta" certificate on a table covered in sticky notes',
    caption: 'Grand Prize Winner',
  },
  {
    name: 'pitch-market',
    alt: 'A teammate presenting the market-size slide during the final pitch',
    caption: 'The final pitch',
  },
  {
    name: 'pitch-product',
    alt: 'A teammate on stage presenting the Cuanto Cuesta product on a large screen',
    caption: 'Presenting the product',
  },
  {
    name: 'pitch-room',
    alt: 'The final pitch seen from the back of the audience',
    caption: 'A full room',
  },
  {
    name: 'teammates',
    alt: 'Kevin and two teammates smiling with the Grand Prize certificate',
    caption: 'With Luis and Adriano',
  },
]

const facts = [
  'From idea to final pitch in 54 hours',
  'A team of six',
  'I have kept building its web side since: landing page, consumer app and business dashboard',
]

// ── Component ─────────────────────────────────────────────────────────────────

const StartupWeekend: React.FC = () => {
  const trackRef = useRef<HTMLUListElement>(null)
  const [index, setIndex] = useState(0)

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
        <p className={styles.eyebrow}>Award</p>
        <h2 id="award-heading" className={styles.heading}>
          Grand Prize at Techstars Startup Weekend Valencia
        </h2>
        <p className={styles.body}>
          In June 2026 our team, Cuanto Cuesta, won with a simple idea: real,
          verified prices for local services in Spain.
        </p>

        <ul className={styles.facts} role="list">
          {facts.map((fact) => (
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
          className={styles.cta}
          aria-label="Visit Cuanto Cuesta — opens in a new tab"
        >
          Visit Cuanto Cuesta
          <Icon icon="tabler:arrow-up-right" width={16} height={16} aria-hidden="true" />
        </a>
      </div>

      {/* ── Gallery ───────────────────────────────────── */}
      <div
        className={styles.gallery}
        role="group"
        aria-roledescription="carousel"
        aria-label="Photos from Techstars Startup Weekend Valencia"
      >
        <ul ref={trackRef} className={styles.track} role="list" tabIndex={0} onScroll={onScroll}>
          {photos.map((photo, i) => (
            <li
              key={photo.name}
              className={styles.slide}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${photos.length}`}
            >
              <img
                src={`/images/startup-weekend/${photo.name}.webp`}
                srcSet={`/images/startup-weekend/${photo.name}-720.webp 720w, /images/startup-weekend/${photo.name}.webp 1440w`}
                sizes="(min-width: 900px) 620px, 100vw"
                alt={photo.alt}
                width={1440}
                height={960}
                loading={i === 0 ? undefined : 'lazy'}
                className={styles.photo}
              />
              <p className={styles.caption}>
                <span className={styles.captionTitle}>{photo.caption}</span>
                <span className={styles.captionMeta}>Valencia · June 2026</span>
              </p>
            </li>
          ))}
        </ul>

        <button
          className={`${styles.arrow} ${styles.arrowPrev}`}
          onClick={() => goTo(index - 1)}
          aria-label="Previous photo"
        >
          <Icon icon="tabler:chevron-left" width={32} height={32} aria-hidden="true" />
        </button>
        <button
          className={`${styles.arrow} ${styles.arrowNext}`}
          onClick={() => goTo(index + 1)}
          aria-label="Next photo"
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
