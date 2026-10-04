import React from 'react'
import styles from '@/pages/Home.module.css'
import Hero from '@/components/Home/Hero/Hero'
// import BootSequence from '@/components/Home/BootSequence/BootSequence'
import CliPrompt from '@/components/Home/CliPrompt/CliPrompt'
import Stack from '@/components/Home/Stack/Stack'
import Services from '@/components/Home/Services/Services'
import FeaturedWorks from '@/components/Home/FeaturedWorks/FeaturedWorks'
import StartupWeekend from '@/components/Home/StartupWeekend/StartupWeekend'
import About from '@/components/Home/About/About'
import Cta from '@/components/Home/CTA/Cta'

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

      <section>
        <Stack />
      </section>

      <section>
        <Services />
      </section>

      <section>
        <FeaturedWorks />
      </section>

      <section>
        <StartupWeekend />
      </section>

      <section>
        <About />
      </section>

      <section>
        <Cta />
      </section>
    </>
  )
}

export default Home