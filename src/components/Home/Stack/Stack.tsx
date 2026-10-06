import { Icon } from '@iconify/react'
import { inkLogoClass } from '@/data/inkLogos'
import { classicPicks, currentAiStack } from '@/data/stack'
import type { StackItem } from '@/types/stack'
import Link from '@/i18n/LocaleLink'
import { useLocale } from '@/i18n/useLocale'
import styles from './Stack.module.css'

// ── Groups ────────────────────────────────────────────────────────────────────
// One still strip, two groups (src/data/stack.ts): what I work with on the AI
// side, and a short pick of the classic stack. Each group leads to its full page.

type Group = {
  label: string
  items: StackItem[]
  link: { to: string; label: string }
}

// ── Component ─────────────────────────────────────────────────────────────────

const Stack: React.FC = () => {
  const { t } = useLocale()

  const groups: Group[] = [
    { label: t.homeStack.ai, items: currentAiStack, link: { to: '/ai', label: t.homeStack.aiLink } },
    { label: t.homeStack.classic, items: classicPicks, link: { to: '/about#stack', label: t.homeStack.classicLink } },
  ]

  return (
    <section className={styles.section} aria-label={t.homeStack.label}>
      <div className={styles.inner}>
        {groups.map((group) => (
          <div key={group.link.to} className={styles.group}>

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
