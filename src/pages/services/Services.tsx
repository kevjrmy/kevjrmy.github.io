import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import Cta from '@/components/Home/CTA/Cta'
import styles from './Services.module.css'

// ── Service data ──────────────────────────────────────────────────────────────

type Service = {
  icon: string
  title: string
  description: string
  price: string
}

const services: Service[] = [
  {
    icon: 'mdi:wordpress',
    title: 'WordPress',
    description: 'Maintenance, redesigns, new sites. Meant to start quickly and economically.',
    price: 'From 200€ / project',
  },
  {
    icon: 'tabler:zoom-check',
    title: 'Audit',
    description: 'Performance, SEO, accessibility: know exactly what to fix and to optimize.',
    price: 'From 15€ / hour',
  },
  {
    icon: 'tabler:school',
    title: 'Training & Classes',
    description: 'Private JS/TS classes/tutoring sessions.',
    price: 'From 15€ / hour',
  },
  {
    icon: 'tabler:device-mobile-code',
    title: 'PWA',
    description: 'Installable, offline-ready web apps built with Vue or React.',
    price: 'From 800€ / project',
  },
  {
    icon: 'tabler:server',
    title: 'Web Application',
    description: 'Full-stack apps with Laravel or Node.js, from MVP to production.',
    price: 'From 1200€ / project',
  },
  {
    icon: 'tabler:map-route',
    title: 'Consulting',
    description: 'Architecture review, tech choices, roadmap. Planning before building.',
    price: 'From 50€ / session',
  },
  {
    icon: 'tabler:device-mobile',
    title: 'Mobile App',
    description: 'Native Android or cross-platform apps with React Native.',
    price: 'Let\'s talk',
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

const Services: React.FC = () => {
  return (
    <>

      {/* ── Page header ───────────────────────────────── */}
      <section className={styles.header} aria-labelledby="services-heading">
        <div className={styles.headerInner}>
          <p className={styles.eyebrow}>Services</p>
          <h1 id="services-heading" className={styles.h1}>What I can do for you</h1>
          <p className={styles.lead}>
            Whether you need a quick fix or a product built from scratch, I've got a service for that.
          </p>
          <Link to="/contact" className={styles.headerCta}>
            Get in touch
            <Icon icon="tabler:arrow-right" width={16} height={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── Services grid ─────────────────────────────── */}
      <section className={styles.gridSection} aria-label="All services">
        <div className={styles.gridInner}>
          <ul className={styles.grid} role="list">
            {services.map((service) => (
              <li key={service.title} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.iconWrap}>
                    <Icon icon={service.icon} width={24} height={24} aria-hidden="true" />
                  </div>
                  <div className={styles.cardBody}>
                    <h2 className={styles.cardTitle}>{service.title}</h2>
                    <p className={styles.cardDescription}>{service.description}</p>
                  </div>
                </div>
                <p className={styles.price}>{service.price}</p>
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

export default Services
