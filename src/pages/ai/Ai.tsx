import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import Cta from '@/components/Home/CTA/Cta'
import { inkLogoClass } from '@/data/inkLogos'
import { aiStack, currentAiStack, upcomingAiTools } from '@/data/stack'
import styles from './Ai.module.css'

// ── Status line ───────────────────────────────────────────────────────────────
// Short facts under the intro, as in the status line of a CLI agent

const facts = [
  { key: 'since', value: '2022' },
  { key: 'main agent', value: 'Claude Code' },
  { key: 'next', value: upcomingAiTools.map((tool) => tool.label).join(' · ') },
]

// ── AI stack ──────────────────────────────────────────────────────────────────
// The tools themselves are in src/data/stack.ts. Only what is used today gets a card;
// what came before is history, and is told in the journey

// The kinds of things plugged into the agent. The kinds only: the point is that the
// ecosystem is used, not an inventory of what is installed
const extensionKinds = [
  { icon: 'tabler:puzzle', label: 'plugins' },
  { icon: 'tabler:list-check', label: 'skills' },
  { icon: 'tabler:plug-connected', label: 'connectors' },
]

// ── Journey ───────────────────────────────────────────────────────────────────
// Oldest first. `when` is a year only where the year is known (docs/content.md, AI journey)

type JourneyEntry = {
  when: string
  title: string
  body: string
  tools: string[]
}

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

const journey: JourneyEntry[] = [
  {
    when: '2022',
    title: 'It started with images',
    body: 'DALL·E 2: a sentence in, a picture out. That was the moment I started following the field.',
    tools: ['DALL·E 2'],
  },
  {
    when: '2022',
    title: 'Copilot in the editor',
    body: 'GitHub Copilot came to VS Code and I turned it on as soon as it was there. It was a helper then: hints and autocompletion as I typed, years before agents.',
    tools: ['GitHub Copilot', 'VS Code'],
  },
  {
    when: 'Dec 2022',
    title: 'ChatGPT, from the first days',
    body: 'I created my account a few days after it was released, when it ran on GPT-3.5. From then on, AI was something I worked with, not a demo I watched.',
    tools: ['ChatGPT'],
  },
  {
    when: '2023',
    title: 'Every image model I could try',
    body: 'Midjourney first, then whatever I could run for free on Hugging Face, to see what open models were capable of.',
    tools: ['Midjourney', 'Hugging Face'],
  },
  {
    when: '2023 → 24',
    title: 'More than one assistant',
    body: 'I tried Bard before Google renamed it Gemini, and opened my Claude account in June 2024.',
    tools: ['Bard', 'Gemini', 'Claude'],
  },
  {
    when: '2024 → 25',
    title: 'Video',
    body: 'I went through the video generators as they came out, Magnific, Sora and Veo 3 among them. I made my own AI videos in Google Flow, with Nano Banana for the images.',
    tools: ['Magnific', 'Sora', 'Veo 3', 'Google Flow', 'Nano Banana'],
  },
  {
    when: '2025',
    title: 'DeepSeek-R1, and voice',
    body: 'I started with DeepSeek right after R1, its open reasoning model, was released in January 2025. I also began talking to Grok in voice mode, which I still do outside of work.',
    tools: ['DeepSeek', 'Grok'],
  },
  {
    when: '2025 → 26',
    title: 'From assistants to agents',
    body: 'Antigravity put an agent inside the editor. The AI course on OpenClassrooms gave structure to what I had learned by doing. Then agents started building whole apps for me: in the browser with Google AI Studio, and in the terminal with OpenCode and Codex.',
    tools: ['Antigravity', 'OpenClassrooms', 'Google AI Studio', 'OpenCode', 'Codex'],
  },
  {
    when: '2026 → now',
    title: 'Claude Code',
    body: 'I switched to Claude Code and stayed. It is my main agent today, and the recent projects in my portfolio are built with it. Outside the terminal, I use Claude in its desktop app.',
    tools: ['Claude Code', 'Cursor', 'Claude desktop'],
  },
  {
    when: 'Next',
    title: 'Still on the list',
    body: 'Hermes, Jev and Linear come next, and open-source models in general: I have not run one on my own machine yet, and I will.',
    tools: ['Hermes', 'Jev', 'Ollama', 'Linear'],
  },
]

// ── Practice ──────────────────────────────────────────────────────────────────

type Practice = {
  icon: string
  title: string
  body: string
}

const practices: Practice[] = [
  {
    icon: 'tabler:steering-wheel',
    title: 'I direct, the agents type',
    body: 'The agents write fast. I decide what gets built, read what comes back, and answer for the result.',
  },
  {
    icon: 'tabler:markdown',
    title: 'Context is the craft',
    body: 'An agent is only as good as what it is told. I keep that context in plain Markdown files, a format I was writing long before agents read it.',
  },
  {
    icon: 'tabler:school',
    title: 'Learned, not improvised',
    body: 'I took the AI course on OpenClassrooms, the school of my developer diploma, on top of years of daily practice.',
  },
  {
    icon: 'tabler:users-group',
    title: 'In the room',
    body: 'I go to AI meetups such as AI Tinkerers with developer friends, and we trade what works and what does not.',
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

const Ai: React.FC = () => {
  return (
    <>

      {/* ── Page header ───────────────────────────────── */}
      <section aria-labelledby="ai-heading">
        <div className={styles.headerInner}>
          <p className={styles.eyebrow}>AI</p>
          <h1 id="ai-heading" className={styles.h1}>
            Using AI since 2022.<br />Building with agents every day.
          </h1>
          <p className={styles.lead}>
            I did not discover AI last month. I have followed it since the first image
            generators, through chat, video and voice, to the coding agents I now work
            with all day. I treat it like the rest of the job: learned properly,
            reviewed carefully, and answered for.
          </p>
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
            <p className={styles.eyebrow}>AI stack</p>
            <h2 id="ai-stack-heading" className={styles.h2}>What I work with</h2>
            <p className={styles.sectionSubline}>
              Claude Code as the agent, Cursor as the editor, Markdown for the context
              they both read. The languages and frameworks they write in are my classic
              stack.
            </p>
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
                    <p className={styles.toolRole}>{tool.role}</p>
                  </div>
                  <span className={styles.toolStatus}>every day</span>
                </li>
              ))}
            </ul>

            {/* Around the agent: one line, attached to the cards */}
            <div className={styles.plugged}>
              <p className={styles.pluggedKey}>plugged in</p>
              <div className={styles.pluggedBody}>
                <p className={styles.toolRole}>
                  Claude Code does not work alone: I extend it with the ecosystem around it.
                </p>
                <ul className={styles.chips} role="list">
                  {extensionKinds.map((kind) => (
                    <Chip key={kind.label} label={kind.label} icon={kind.icon} />
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Not learned yet: outlines, not cards */}
          <div className={styles.upcoming}>
            <h3 className={styles.upcomingTitle}>Learning next</h3>
            <ul className={styles.soonList} role="list">
              {upcomingAiTools.map((tool) => (
                <li key={tool.label} className={styles.soon}>
                  <div className={styles.soonTop}>
                    <div className={styles.soonIcon}>
                      <Icon icon="tabler:hourglass" width={20} height={20} aria-hidden="true" />
                    </div>
                    <span className={styles.toolStatus}>coming soon</span>
                  </div>
                  <h4 className={styles.toolName}>
                    {tool.href ? (
                      <a
                        href={tool.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.soonLink}
                        aria-label={`${tool.label} — opens in a new tab`}
                      >
                        {tool.label}
                        <Icon icon="tabler:arrow-up-right" width={16} height={16} aria-hidden="true" />
                      </a>
                    ) : tool.label}
                  </h4>
                  <p className={styles.toolRole}>{tool.role}</p>
                </li>
              ))}
            </ul>
          </div>

          <Link to="/about#stack" className={styles.link}>
            See the classic stack
            <Icon icon="tabler:arrow-up-right" width={16} height={16} aria-hidden="true" />
          </Link>

        </div>
      </section>

      {/* ── Journey ───────────────────────────────────── */}
      <section aria-labelledby="journey-heading">
        <div className={styles.sectionInner}>

          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Journey</p>
            <h2 id="journey-heading" className={styles.h2}>From image prompts to coding agents</h2>
          </div>

          <ol className={styles.journey} role="list">
            {journey.map((entry) => (
              <li key={entry.title} className={styles.journeyItem}>
                <span className={styles.journeyWhen}>{entry.when}</span>
                <div className={styles.journeyContent}>
                  <h3 className={styles.journeyTitle}>{entry.title}</h3>
                  <p className={styles.journeyBody}>{entry.body}</p>
                  <ul className={styles.chips} role="list" aria-label="Tools">
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
            <p className={styles.eyebrow}>Practice</p>
            <h2 id="practice-heading" className={styles.h2}>How I keep it serious</h2>
          </div>

          <ul className={styles.practices} role="list">
            {practices.map((practice) => (
              <li key={practice.title} className={styles.practice}>
                <div className={styles.practiceIcon}>
                  <Icon icon={practice.icon} width={22} height={22} aria-hidden="true" />
                </div>
                <h3 className={styles.practiceTitle}>{practice.title}</h3>
                <p className={styles.practiceBody}>{practice.body}</p>
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
