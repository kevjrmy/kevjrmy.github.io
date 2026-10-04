import { SITE_DOMAIN } from '@/constants'
import styles from './Info.module.css'

const EMAIL = 'kevin.jgnetworks@gmail.com'

// ── Component ─────────────────────────────────────────────────────────────────

const Info: React.FC = () => {
  return (
    <section className={styles.section} aria-labelledby="info-heading">
      <div className={styles.inner}>

        {/* ── Page header ───────────────────────────────── */}
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Info</p>
          <h1 id="info-heading" className={styles.h1}>Terms & privacy</h1>
          <p className={styles.lead}>
            The short version: this is a portfolio. It doesn't track you and it
            doesn't ask you for anything.
          </p>
          <p className={styles.updated}>Last updated: 4 October 2026</p>
        </div>

        {/* ── Terms of use ──────────────────────────────── */}
        <article id="terms" className={styles.block} aria-labelledby="terms-heading">
          <h2 id="terms-heading" className={styles.h2}>Terms of use</h2>
          <p>
            {SITE_DOMAIN} is the personal portfolio of Kevin Jeremy Gautier, a
            freelance full-stack developer based in Valencia, Spain. It presents
            my work and the services I offer.
          </p>

          <h3 className={styles.h3}>Using the site</h3>
          <p>
            You're free to browse it, link to it and share it. Please don't copy
            its text, design or code and present them as your own.
          </p>

          <h3 className={styles.h3}>Content</h3>
          <p>
            The text, design and code of this site are my own work. The client
            projects in the portfolio, including their names, logos and
            screenshots, belong to their respective owners and appear here as
            examples of work I delivered.
          </p>

          <h3 className={styles.h3}>Prices</h3>
          <p>
            The prices on the Services page are starting points, not a binding
            offer. The actual price depends on the project and is agreed with
            you beforehand.
          </p>

          <h3 className={styles.h3}>External links</h3>
          <p>
            The site links to client websites and to third-party services such
            as WhatsApp, LinkedIn and GitHub. I don't control those sites and
            I'm not responsible for their content.
          </p>

          <h3 className={styles.h3}>Accuracy</h3>
          <p>
            I keep this site accurate and up to date as best I can, but it is
            provided as is, without any guarantee.
          </p>
        </article>

        {/* ── Privacy ───────────────────────────────────── */}
        <article id="privacy" className={styles.block} aria-labelledby="privacy-heading">
          <h2 id="privacy-heading" className={styles.h2}>Privacy</h2>
          <p>This site doesn't collect anything about you.</p>

          <h3 className={styles.h3}>What the site doesn't do</h3>
          <ul className={styles.list}>
            <li>No cookies.</li>
            <li>No analytics or tracking scripts.</li>
            <li>No forms, accounts or newsletter.</li>
            <li>No fonts, icons or scripts loaded from third parties: everything is served from this site.</li>
          </ul>

          <h3 className={styles.h3}>Hosting</h3>
          <p>
            The site is hosted on GitHub Pages. Like any web host, GitHub
            receives technical data when your browser requests a page, such as
            your IP address, and may log it for security purposes. That is
            covered by{' '}
            <a
              href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub's privacy statement
            </a>.
          </p>

          <h3 className={styles.h3}>When you contact me</h3>
          <p>
            If you write to me by email, WhatsApp or LinkedIn, I receive what
            you choose to send: your name, your contact details and your
            message. I use it only to reply and, if we work together, to carry
            out the project. I don't sell it or pass it on. Those services
            handle your data under their own privacy policies.
          </p>

          <h3 className={styles.h3}>Your rights</h3>
          <p>
            You can ask me at any time what information I hold about you, and
            to correct or delete it: write to{' '}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. If you are in the EU you
            can also complain to your data protection authority; in Spain that
            is the{' '}
            <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">AEPD</a>.
          </p>

          <h3 className={styles.h3}>Changes</h3>
          <p>
            If the site changes in a way that affects your privacy, this page
            will be updated.
          </p>
        </article>

      </div>
    </section>
  )
}

export default Info
