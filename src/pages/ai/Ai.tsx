import { Icon } from '@iconify/react'
import Cta from '@/components/Home/CTA/Cta'
import { inkLogoClass } from '@/data/inkLogos'
import { aiStack, currentAiStack, upcomingAiTools } from '@/data/stack'
import Link from '@/i18n/LocaleLink'
import { useLocale } from '@/i18n/useLocale'
import styles from './Ai.module.css'

// Each list below gives the order, the icons and the tools. The words are in the
// messages of each language (src/i18n/messages), under the keys used here.

// ── AI stack ──────────────────────────────────────────────────────────────────
// The tools themselves are in src/data/stack.ts. Only what is used today gets a card;
// what came before is history, and is told in the journey

// The kinds of things plugged into the agent. The kinds only: the point is that the
// ecosystem is used, not an inventory of what is installed
const extensionKinds = [
  { id: 'plugins', icon: 'tabler:puzzle' },
  { id: 'skills', icon: 'tabler:list-check' },
  { id: 'connectors', icon: 'tabler:plug-connected' },
] as const

// ── Journey ───────────────────────────────────────────────────────────────────
// Logo of each tool named in the journey. The AI stack brings its own; the others
// are here. A product with no mark of its own takes its maker's, and a tool with
// no entry stays a plain tag: that includes what is not learned yet
const journeyIcons: Record<string, string> = {
  ...Object.fromEntries(aiStack.map((tool) => [tool.label, tool.icon])),
  'DALL·E 2': 'logos:openai-icon',
  'VS Code': 'logos:visual-studio-code',
  'ChatGPT': 'logos:openai-icon',
  'Midjourney': 'logos:midjourney',
  'Hugging Face': 'logos:hugging-face-icon',
  'Bard': 'logos:google-bard-icon',
  'Gemini': 'logos:google-gemini-icon',
  'Claude': 'logos:claude-icon',
  'Claude desktop': 'logos:claude-icon',
  'Grok': 'logos:grok-icon',
  'Sora': 'logos:openai-icon',
  'Veo 3': 'logos:google-icon',
  'Google Flow': 'logos:google-icon',
  'Nano Banana': 'logos:google-gemini-icon',
}

// ── Tag (logo + name) ─────────────────────────────────────────────────────────
// Used by the journey and by the line about what is plugged into the agent

const Chip: React.FC<{ label: string; icon?: string }> = ({ label, icon }) => (
  <li className={styles.chip}>
    {icon && <Icon icon={icon} width={14} height={14} className={inkLogoClass(icon)} aria-hidden="true" />}
    {label}
  </li>
)

// Oldest first. `tools` are the tags under the entry: product names, the same in
// every language
const journey = [
  { id: 'images', tools: ['DALL·E 2'] },
  { id: 'copilot', tools: ['GitHub Copilot', 'VS Code'] },
  { id: 'chatgpt', tools: ['ChatGPT'] },
  { id: 'imageModels', tools: ['Midjourney', 'Hugging Face'] },
  { id: 'assistants', tools: ['Bard', 'Gemini', 'Claude'] },
  { id: 'video', tools: ['Magnific', 'Sora', 'Veo 3', 'Google Flow', 'Nano Banana'] },
  { id: 'deepseek', tools: ['DeepSeek', 'Grok'] },
  { id: 'agents', tools: ['Antigravity', 'OpenClassrooms', 'Google AI Studio', 'OpenCode', 'Codex'] },
  { id: 'claudeCode', tools: ['Claude Code', 'Cursor', 'Claude desktop'] },
  { id: 'next', tools: ['Hermes', 'Jev', 'Ollama', 'Linear'] },
] as const

// ── Practice ──────────────────────────────────────────────────────────────────

const practices = [
  { id: 'direct', icon: 'tabler:steering-wheel' },
  { id: 'context', icon: 'tabler:markdown' },
  { id: 'learned', icon: 'tabler:school' },
  { id: 'room', icon: 'tabler:users-group' },
] as const

// ── Component ─────────────────────────────────────────────────────────────────

const Ai: React.FC = () => {
  const { t } = useLocale()
  const copy = t.ai
  // The role of a current tool, under its label
  const roles: Record<string, string> = copy.stack.roles

  // Short facts under the intro, as in the status line of a CLI agent
  const facts = [
    { key: copy.facts.since, value: '2022' },
    { key: copy.facts.mainAgent, value: 'Claude Code' },
    { key: copy.facts.next, value: upcomingAiTools.map((tool) => copy.stack.upcoming[tool.id].label).join(' · ') },
  ]

  return (
    <>

      {/* ── Page header ───────────────────────────────── */}
      <section aria-labelledby="ai-heading">
        <div className={styles.headerInner}>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1 id="ai-heading" className={styles.h1}>
            {copy.h1[0]}<br />{copy.h1[1]}
          </h1>
          <p className={styles.lead}>{copy.lead}</p>
          <dl className={styles.statusLine}>
            {facts.map((fact) => (
              <div key={fact.key} className={styles.fact}>
                <dt className={styles.factKey}>{fact.key}</dt>
                <dd className={styles.factValue}>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── AI stack ──────────────────────────────────── */}
      <section className={styles.stackSection} aria-labelledby="ai-stack-heading">
        <div className={styles.sectionInner}>

          <div className={styles.sectionIntro}>
            <p className="eyebrow">{copy.stack.eyebrow}</p>
            <h2 id="ai-stack-heading" className={styles.h2}>{copy.stack.heading}</h2>
            <p className={styles.sectionSubline}>{copy.stack.subline}</p>
          </div>

          <div className={styles.current}>
            <ul className={styles.tools} role="list">
              {currentAiStack.map((tool) => (
                <li
                  key={tool.label}
                  className={`${styles.tool} ${tool.status === 'main' ? styles.toolMain : ''}`}
                >
                  <div className={styles.toolIcon}>
                    <Icon icon={tool.icon} width={22} height={22} className={inkLogoClass(tool.icon)} aria-hidden="true" />
                  </div>
                  <div className={styles.toolText}>
                    <h3 className={styles.toolName}>{tool.label}</h3>
                    <p className={styles.toolRole}>{roles[tool.label]}</p>
                  </div>
                  <span className={styles.toolStatus}>{copy.stack.everyDay}</span>
                </li>
              ))}
            </ul>

            {/* Around the agent: one line, attached to the cards */}
            <div className={styles.plugged}>
              <p className={styles.pluggedKey}>{copy.stack.pluggedKey}</p>
              <div className={styles.pluggedBody}>
                <p className={styles.toolRole}>{copy.stack.plugged}</p>
                <ul className={styles.chips} role="list">
                  {extensionKinds.map((kind) => (
                    <Chip key={kind.id} label={copy.stack.kinds[kind.id]} icon={kind.icon} />
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Not learned yet: outlines, not cards */}
          <div className={styles.upcoming}>
            <h3 className={styles.upcomingTitle}>{copy.stack.upcomingTitle}</h3>
            <ul className={styles.soonList} role="list">
              {upcomingAiTools.map((tool) => {
                const { label, role } = copy.stack.upcoming[tool.id]
                return (
                  <li key={tool.id} className={styles.soon}>
                    <div className={styles.soonTop}>
                      <div className={styles.soonIcon}>
                        <Icon icon="tabler:hourglass" width={20} height={20} aria-hidden="true" />
                      </div>
                      <span className={styles.toolStatus}>{copy.stack.comingSoon}</span>
                    </div>
                    <h4 className={styles.toolName}>
                      {tool.href ? (
                        <a
                          href={tool.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.soonLink}
                          aria-label={t.common.newTabLabel(label)}
                        >
                          {label}
                          <Icon icon="tabler:arrow-up-right" width={16} height={16} aria-hidden="true" />
                        </a>
                      ) : label}
                    </h4>
                    <p className={styles.toolRole}>{role}</p>
                  </li>
                )
              })}
            </ul>
          </div>

          <Link to="/about#stack" className={`button-secondary ${styles.link}`}>
            {copy.stack.classicLink}
            <Icon icon="tabler:arrow-up-right" width={16} height={16} aria-hidden="true" />
          </Link>

        </div>
      </section>

      {/* ── Journey ───────────────────────────────────── */}
      <section aria-labelledby="journey-heading">
        <div className={styles.sectionInner}>

          <div className={styles.sectionIntro}>
            <p className="eyebrow">{copy.journey.eyebrow}</p>
            <h2 id="journey-heading" className={styles.h2}>{copy.journey.heading}</h2>
          </div>

          <ol className={styles.journey} role="list">
            {journey.map((entry) => (
              <li key={entry.id} className={styles.journeyItem}>
                <span className={styles.journeyWhen}>{copy.journey.entries[entry.id].when}</span>
                <div className={styles.journeyContent}>
                  <h3 className={styles.journeyTitle}>{copy.journey.entries[entry.id].title}</h3>
                  <p className={styles.journeyBody}>{copy.journey.entries[entry.id].body}</p>
                  <ul className={styles.chips} role="list" aria-label={copy.journey.toolsLabel}>
                    {entry.tools.map((tool) => (
                      <Chip key={tool} label={tool} icon={journeyIcons[tool]} />
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

        </div>
      </section>

      {/* ── Practice ──────────────────────────────────── */}
      <section aria-labelledby="practice-heading">
        <div className={styles.sectionInner}>

          <div className={styles.sectionIntro}>
            <p className="eyebrow">{copy.practice.eyebrow}</p>
            <h2 id="practice-heading" className={styles.h2}>{copy.practice.heading}</h2>
          </div>

          <ul className={styles.practices} role="list">
            {practices.map((practice) => (
              <li key={practice.id} className={styles.practice}>
                <div className={styles.practiceIcon}>
                  <Icon icon={practice.icon} width={22} height={22} aria-hidden="true" />
                </div>
                <h3 className={styles.practiceTitle}>{copy.practice.items[practice.id].title}</h3>
                <p className={styles.practiceBody}>{copy.practice.items[practice.id].body}</p>
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <Cta />

    </>
  )
}

export default Ai
