import { Icon } from '@iconify/react'
import { inkLogoClass } from '@/data/inkLogos'
import { aiStack, classicMarquee } from '@/data/stack'
import type { StackItem } from '@/types/stack'
import styles from './Stack.module.css'

// ── Rows ──────────────────────────────────────────────────────────────────────
// One marquee per kind of stack (src/data/stack.ts). They run in opposite
// directions, so the two rows read as two things and not as one long list.

type Row = {
  label: string
  items: StackItem[]
  reverse?: boolean
}

const rows: Row[] = [
  { label: 'AI', items: aiStack },
  { label: 'Classic', items: classicMarquee, reverse: true },
]

// A short list is repeated until one copy is wider than a large screen;
// otherwise the loop would show a gap after its last item.
const MIN_ITEMS = 16

const fill = (items: StackItem[]) =>
  Array.from({ length: Math.ceil(MIN_ITEMS / items.length) }, () => items).flat()

// Seconds per item: both rows move at about the same speed whatever their length
const SECONDS_PER_ITEM = 3

// ── Component ─────────────────────────────────────────────────────────────────

const Stack: React.FC = () => {
  return (
    <section className={styles.section} aria-label="Tech stack">
      {rows.map((row) => {
        const items = fill(row.items)

        return (
          <div key={row.label} className={styles.row}>

            {/* ── Label strip ─────────────────────────── */}
            <div className={styles.label}>
              <span>
                {row.label}
                <span className={styles.labelWord}> stack</span>
              </span>
            </div>

            {/* ── Marquee track ───────────────────────── */}
            <div className={styles.marqueeWrapper} aria-hidden="true">
              <div
                className={`${styles.track} ${row.reverse ? styles.reverse : ''}`}
                style={{ '--marquee-duration': `${items.length * SECONDS_PER_ITEM}s` } as React.CSSProperties}
              >

                {/* Two identical lists for seamless loop */}
                {[0, 1].map((pass) => (
                  <ul key={pass} className={styles.list}>
                    {items.map((item, i) => (
                      <li key={i} className={styles.item}>
                        <div className={styles.iconWrap}>
                          <Icon icon={item.icon} width={28} height={28} className={inkLogoClass(item.icon)} />
                        </div>
                        <span className={styles.itemLabel}>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                ))}

              </div>
            </div>

          </div>
        )
      })}
    </section>
  )
}

export default Stack
