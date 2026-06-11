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
            Let's figure out if I'm the right fit, no commitment, no pitch,
            just a conversation.
          </p>
        </div>
        <a
          href="https://wa.me/34632936909"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btn}
          aria-label="Chat on WhatsApp — opens in a new tab"
        >
          Let's talk
          <Icon icon="tabler:brand-whatsapp" width={18} height={18} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

export default Cta