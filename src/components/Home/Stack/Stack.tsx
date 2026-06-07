import { Icon } from '@iconify/react'
import styles from './Stack.module.css'

// ── Tech stack items ──────────────────────────────────────────────────────────
// icon: tabler: preferred, mdi: fallback
// label: displayed below the icon

type StackItem = {
  icon: string
  label: string
}

const items: StackItem[] = [
  { icon: 'logos:laravel', label: 'Laravel' },
  { icon: 'vscode-icons:file-type-vue', label: 'Vue' },
  { icon: 'vscode-icons:file-type-reactjs', label: 'React' },
  { icon: 'vscode-icons:file-type-typescript-official', label: 'TypeScript' },
  { icon: 'vscode-icons:file-type-node', label: 'Node.js' },
  { icon: 'vscode-icons:file-type-vite', label: 'Vite' },
  { icon: 'logos:nextjs-icon', label: 'Next.js' },
  { icon: 'vscode-icons:file-type-php', label: 'PHP' },
  { icon: 'vscode-icons:file-type-kotlin', label: 'Kotlin' },
  { icon: 'vscode-icons:file-type-git', label: 'Git' },
  { icon: 'mdi:wordpress', label: 'WordPress' },
]

// ── Component ─────────────────────────────────────────────────────────────────

const Stack: React.FC = () => {
  return (
    <section className={styles.section} aria-label="Tech stack">

      {/* ── Label strip ─────────────────────────────── */}
      <div className={styles.label}>
        <span>My stack</span>
      </div>

      {/* ── Marquee track ───────────────────────────── */}
      <div className={styles.marqueeWrapper} aria-hidden="true">
        <div className={styles.track}>

          {/* Two identical lists for seamless loop */}
          {[0, 1].map((pass) => (
            <ul key={pass} className={styles.list} aria-hidden={pass === 1}>
              {items.map((item) => (
                <li key={item.label} className={styles.item}>
                  <div className={styles.iconWrap}>
                    <Icon icon={item.icon} width={28} height={28} />
                  </div>
                  <span className={styles.itemLabel}>{item.label}</span>
                </li>
              ))}
            </ul>
          ))}

        </div>
      </div>

    </section>
  )
}

export default Stack
