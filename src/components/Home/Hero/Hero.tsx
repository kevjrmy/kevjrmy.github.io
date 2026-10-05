import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import styles from './Hero.module.css'

const Hero: React.FC = () => {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.h1}>
        <span>Building crafted projects</span>{' '}<br />
        <span>with <span className={styles.command}>ai-agents</span></span>
      </h1>
      <p className={styles.lead}>Hi, I'm Kevin Jeremy Gautier, a full-stack developer specialized in JavaScript (Node.js, React, TypeScript) and PHP (Laravel), now building with Claude Code.</p>
      <div className={styles.ctaRow}>
        <Link to="/portfolio" className={styles.btnPrimary}>
          View My Work
          <Icon icon="tabler:arrow-right" width={18} height={18} aria-hidden="true" />
        </Link>
        <Link to="/contact" className={styles.btnGhost}>Contact Me</Link>
      </div>
    </div>
  )
}

export default Hero