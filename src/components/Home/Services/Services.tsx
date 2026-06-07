import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import styles from './Services.module.css'

type Service = {
  icon: string
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: 'tabler:device-mobile',
    title: 'Mobile App',
    description: 'Native Android or cross-platform apps.',
  },
  {
    icon: 'tabler:server',
    title: 'Web Application',
    description: 'Full-stack products, from MVP to production.',
  },
  {
    icon: 'mdi:wordpress',
    title: 'WordPress',
    description: 'The most common CMS used worldwide.',
  },
]

const Services: React.FC = () => {
  const gridRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll<HTMLLIElement>(`.${styles.card}`)
    if (!cards) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
            observer.unobserve(entry.target) // fire once
          }
        })
      },
      { threshold: 0.12 }
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} aria-labelledby="services-heading">

      <div className={styles.intro}>
        <h2 id="services-heading" className={styles.heading}>My Services</h2>
        <p className={styles.subline}>Featured previews of my services.</p>
      </div>

      <ul ref={gridRef} className={styles.grid} role="list">
        {services.map((service, i) => (
          <li
            key={service.title}
            className={styles.card}
            style={{ '--card-delay': `${i * 80}ms` } as React.CSSProperties}
          >
            <div className={styles.iconWrap}>
              <Icon icon={service.icon} width={28} height={28} />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <Link to="/services" className={styles.cta} aria-label="See all services">
        See all services
        <Icon icon="tabler:arrow-right" width={16} height={16} />
      </Link>

    </section>
  )
}

export default Services