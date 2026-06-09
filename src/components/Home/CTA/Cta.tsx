import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import styles from './Cta.module.css'

const Cta: React.FC = () => {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className={styles.divider} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.text}>
          <h2 id="cta-heading" className={styles.heading}>
            Have a project in mind?
          </h2>
          <p className={styles.subline}>
            Let's figure out if I'm the right fit — no commitment, no pitch,
            just a conversation.
          </p>
        </div>
        <Link to="/contact" className={styles.btn}>
          Let's talk
          <Icon icon="tabler:arrow-right" width={18} height={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}

export default Cta