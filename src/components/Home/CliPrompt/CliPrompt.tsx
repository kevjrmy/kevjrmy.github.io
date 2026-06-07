import { useEffect, useRef, useState } from 'react'
import styles from './CliPrompt.module.css'

const COMMAND = 'whoami'

type OutputLine = {
  key: string
  value: string
  valueClass?: string
}

const output: OutputLine[] = [
  { key: 'name', value: 'Kevin Jeremy' },
  { key: 'role', value: 'Full-stack developer' },
  { key: 'stack', value: 'Laravel · Vue · React · TS · Node' },
  { key: 'city', value: 'Valencia, Spain' },
  { key: 'status', value: '● ready to build', valueClass: 'green' },
]

const CliPrompt: React.FC = () => {
  const [phase, setPhase] = useState<'idle' | 'typing' | 'running' | 'done'>('idle')
  const [typed, setTyped] = useState('')
  const [visibleLines, setVisible] = useState(0)
  const rafRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const INITIAL_PAUSE = 600   // wait before typing starts — feels more natural
    const CHAR_DELAY = 75    // ms between each character
    const SUBMIT_PAUSE = 500   // pause after command is fully typed
    const LINE_DELAY = 140   // ms between each output line appearing

    let i = 0

    const typeChar = () => {
      if (i < COMMAND.length) {
        i++
        setTyped(COMMAND.slice(0, i))
        rafRef.current = setTimeout(typeChar, CHAR_DELAY)
      } else {
        // Finished typing — pause, then "run" the command
        rafRef.current = setTimeout(() => {
          setPhase('running')
          let line = 0
          const revealLine = () => {
            if (line < output.length) {
              line++
              setVisible(line)
              rafRef.current = setTimeout(revealLine, LINE_DELAY)
            } else {
              setPhase('done')
            }
          }
          revealLine()
        }, SUBMIT_PAUSE)
      }
    }

    // Small initial pause so the terminal entrance animation finishes first
    rafRef.current = setTimeout(() => {
      setPhase('typing')
      typeChar()
    }, INITIAL_PAUSE)

    return () => { if (rafRef.current) clearTimeout(rafRef.current) }
  }, [])

  // Cursor is visible while typing and after all lines are shown; hidden while output loads
  const showCursor = phase === 'typing' || phase === 'done'

  return (
    <figure className={styles.terminal} aria-hidden="true">

      {/* Title bar */}
      <div className={styles.titleBar}>
        <div className={styles.dots}>
          <span className={styles.dot} data-color="red" />
          <span className={styles.dot} data-color="yellow" />
          <span className={styles.dot} data-color="green" />
        </div>
        <span className={styles.title}>kevjrmy@bash:</span>
      </div>

      {/* Body — always fully rendered to prevent CLS */}
      <div className={styles.body}>

        {/* Command line */}
        <div className={styles.cmdLine}>
          <span className={styles.ps1}>~$</span>

          {/*
            Grid overlap trick:
            - .cmdPlaceholder reserves the full command width (invisible)
            - .cmdTyped overlays it with the growing typed text + cursor
            Both share grid-area 1/1 so the line height/width never shifts.
          */}
          <span className={styles.cmdGrid}>
            <span className={styles.cmdPlaceholder} aria-hidden="true">{COMMAND}</span>
            <span className={styles.cmdTyped}>
              <span className={styles.cmd}>{typed}</span>
              {showCursor && <span className={`${styles.cursor} ${phase === 'done' ? styles.cursorIdle : ''}`} />}
            </span>
          </span>
        </div>

        {/* Output block — always in DOM, lines revealed via opacity + slide */}
        <div className={styles.outputBlock}>
          {output.map((line, i) => (
            <div
              key={line.key}
              className={`${styles.outputLine} ${i < visibleLines ? styles.outputLineVisible : ''}`}
            >
              <span className={styles.outKey}>{line.key}</span>
              <span className={`${styles.outVal} ${line.valueClass === 'green' ? styles.outValGreen : ''}`}>
                {line.value}
              </span>
            </div>
          ))}
        </div>

      </div>
    </figure>
  )
}

export default CliPrompt