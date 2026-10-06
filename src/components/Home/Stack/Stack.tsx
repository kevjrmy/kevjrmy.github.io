import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { inkLogoClass } from '@/data/inkLogos'
import { classicPicks, currentAiStack } from '@/data/stack'
import type { StackItem } from '@/types/stack'
import styles from './Stack.module.css'

// ── Groups ────────────────────────────────────────────────────────────────────
// One still strip, two groups (src/data/stack.ts): what I work with on the AI
// side, and a short pick of the classic stack. Each group leads to its full page.

type Group = {
  label: string
  items: StackItem[]
  link: { to: string; label: string }
}

const groups: Group[] = [
  { label: 'AI stack', items: currentAiStack, link: { to: '/ai', label: 'How I work with AI' } },
  { label: 'Classic stack', items: classicPicks, link: { to: '/about#stack', label: 'The full stack' } },
]

// ── Component ─────────────────────────────────────────────────────────────────

const Stack: React.FC = () => {
  return (
    <section className={styles.section} aria-label="Tech stack">
      <div className={styles.inner}>
        {groups.map((group) => (
          <div key={group.label} className={styles.group}>

            <div className={styles.header}>
              <h2 className={styles.label}>{group.label}</h2>
              <Link to={group.link.to} className={styles.link}>
                {group.link.label}
                <Icon icon="tabler:arrow-up-right" width={14} height={14} aria-hidden="true" />
              </Link>
            </div>

            <ul className={styles.list} role="list">
              {group.items.map((item) => (
                <li key={item.label} className={styles.item}>
                  <Icon icon={item.icon} width={22} height={22} className={inkLogoClass(item.icon)} aria-hidden="true" />
                  {item.label}
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Stack
