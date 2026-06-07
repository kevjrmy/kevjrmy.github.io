import { Link } from 'react-router-dom'
import styles from './Hero.module.css'

const Hero: React.FC = () => {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.h1}>
        <span>Artisan crafted</span><br />
        <span>AI accelerated</span>
      </h1>
      <p>Hi I'm Kevin Jeremy. I'm a full stack developer who specializes in building web applications. I primarily work with Laravel, React and Vue.</p>
      <div className={styles.ctaRow}>
        <Link to="/portfolio" className={styles.btnPrimary}>View My Work</Link>
        <Link to="/contact" className={styles.btnGhost}>Contact Me</Link>
      </div>
    </div>
  )
}

export default Hero