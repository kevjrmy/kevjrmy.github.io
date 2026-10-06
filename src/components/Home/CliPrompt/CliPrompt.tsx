import { useEffect, useRef, useState } from 'react'
import { Icon } from '@iconify/react'
import styles from './CliPrompt.module.css'

// Styled after a Claude Code session: the command is typed in the prompt box at
// the bottom, moves up into the transcript when "sent", and the answer prints below it.
// A second prompt is then typed into the box and left there, unsent.

const COMMAND = 'whoami'
const NEXT_PROMPT = 'ready to build'

const NAME = 'Kevin Jeremy Gautier'

// The prompt sign of the box: a chevron drawn as five pixels, a flat echo of the
// pixel slash of the headline. Inline, as it is not an icon from a set. The sent
// command in the transcript keeps a shell's "$".
const PixelChevron: React.FC = () => (
  <svg className={styles.chevron} viewBox="0 0 3 5" width={6} height={10} shapeRendering="crispEdges">
    <path d="M0 0h1v1H0zM1 1h1v1H1zM2 2h1v1H2zM1 3h1v1H1zM0 4h1v1H0z" fill="currentColor" />
  </svg>
)

type OutputLine = {
  key: string
  value: string
}

const output: OutputLine[] = [
  { key: 'role', value: 'Full-stack developer' },
  { key: 'stack', value: 'Laravel · Vue · React · TS · Node' },
  { key: 'ai', value: 'Claude Code · Cursor' },
  { key: 'langs', value: 'FR · EN · ES' },
]

// The name line counts as the first line of the answer
const LINE_COUNT = output.length + 1

type Phase = 'idle' | 'typing' | 'running' | 'retyping' | 'done'

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

const CliPrompt: React.FC = () => {
  // With reduced motion the finished session is shown straight away
  const [phase, setPhase] = useState<Phase>(() => (prefersReducedMotion() ? 'done' : 'idle'))
  const [typed, setTyped] = useState(() => (prefersReducedMotion() ? NEXT_PROMPT : ''))
  const [visibleLines, setVisible] = useState(() => (prefersReducedMotion() ? LINE_COUNT : 0))
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return

    const INITIAL_PAUSE = 600   // wait before typing starts — feels more natural
    const CHAR_DELAY = 75       // ms between each character
    const SUBMIT_PAUSE = 500    // pause after command is fully typed
    const LINE_DELAY = 140      // ms between each output line appearing

    let i = 0
    let j = 0

    // Last step: type the next prompt into the box and leave the cursor after it
    const typeNextPrompt = () => {
      if (j < NEXT_PROMPT.length) {
        j++
        setTyped(NEXT_PROMPT.slice(0, j))
        timerRef.current = setTimeout(typeNextPrompt, CHAR_DELAY)
      } else {
        setPhase('done')
      }
    }

    const typeChar = () => {
      if (i < COMMAND.length) {
        i++
        setTyped(COMMAND.slice(0, i))
        timerRef.current = setTimeout(typeChar, CHAR_DELAY)
      } else {
        // Finished typing — pause, then "send" the command
        timerRef.current = setTimeout(() => {
          setPhase('running')
          setTyped('')
          let line = 0
          const revealLine = () => {
            if (line < LINE_COUNT) {
              line++
              setVisible(line)
              timerRef.current = setTimeout(revealLine, LINE_DELAY)
            } else {
              setPhase('retyping')
              timerRef.current = setTimeout(typeNextPrompt, SUBMIT_PAUSE)
            }
          }
          timerRef.current = setTimeout(revealLine, LINE_DELAY * 2)
        }, SUBMIT_PAUSE)
      }
    }

    // Small initial pause so the terminal entrance animation finishes first
    timerRef.current = setTimeout(() => {
      setPhase('typing')
      typeChar()
    }, INITIAL_PAUSE)

    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [])

  const sent = phase !== 'idle' && phase !== 'typing'
  const lineClass = (i: number) => `${styles.line} ${i < visibleLines ? styles.lineVisible : ''}`

  return (
    <figure className={styles.terminal} aria-hidden="true">

      {/* Title bar */}
      <div className={styles.titleBar}>
        <div className={styles.dots}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
        <span className={styles.title}>
          <Icon icon="logos:claude-code" width={16} height={10} />
          kevjrmy — claude code
        </span>
      </div>

      {/* Body — every row is always in the DOM, so nothing shifts as it fills in */}
      <div className={styles.body}>

        {/* Transcript: the command, once sent */}
        <p className={`${styles.sent} ${sent ? styles.sentVisible : ''}`}>
          <span className={styles.sign}>$</span>
          {COMMAND}
        </p>

        {/* Transcript: the answer */}
        <div className={styles.answer}>
          <p className={`${styles.name} ${lineClass(0)}`}>{NAME}</p>
          {output.map((line, i) => (
            <p key={line.key} className={`${styles.row} ${lineClass(i + 1)}`}>
              <span className={styles.rowKey}>{line.key}</span>
              <span className={styles.rowValue}>{line.value}</span>
            </p>
          ))}
        </div>

        {/* Prompt box: where both prompts are typed, and where the cursor waits */}
        <div className={styles.promptBox}>
          {phase === 'running' ? (
            <span className={styles.working}>✻ working…</span>
          ) : (
            <>
              <PixelChevron />
              <span className={styles.typed}>{typed}</span>
              <span className={`${styles.cursor} ${phase === 'done' ? styles.cursorIdle : ''}`} />
            </>
          )}
        </div>

      </div>
    </figure>
  )
}

export default CliPrompt
