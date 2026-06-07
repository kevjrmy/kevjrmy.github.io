import React from 'react'
import styles from '@/pages/Home.module.css'
import Hero from '@/components/Home/Hero/Hero'
// import BootSequence from '@/components/Home/BootSequence/BootSequence'
import CliPrompt from '@/components/Home/CliPrompt/CliPrompt'
import Stack from '@/components/Home/Stack/Stack'
import Services from '@/components/Home/Services/Services'
import FeaturedWorks from '@/components/Home/FeaturedWorks/FeaturedWorks'

const Home: React.FC = () => { // React.FC is a generic type for React functional components
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className={styles.hero} aria-labelledby="hero-heading">
        <Hero />
        <div className={styles.heroVisual} aria-hidden="true">
          {/* <BootSequence /> */}
          <CliPrompt />
        </div>
      </section>

      <section className={styles.stack}>
        <Stack />
      </section>

      <section className={styles.services}>
        <Services />
      </section>

      <section>
        <FeaturedWorks />
      </section>

      {/* ── About ────────────────────────────────────── */}
      {/* TODO */}

      {/* ── CTA band ─────────────────────────────────── */}
      {/* TODO */}
    </>
  )
}

export default Home