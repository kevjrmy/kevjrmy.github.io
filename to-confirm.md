# To confirm with Kevin

What was written or chosen on his behalf and that he has not explicitly approved, and the questions only he can answer. Nothing here is work for an agent: do not act on an item, ask him. When he confirms one, delete it. When he corrects one, change the site and delete it. Work to do is in `todo.md`.

## Translations and wording of 2026-10-07

- [ ] **French and Spanish translations (2026-10-07): to read and confirm with Kevin.** Both were written by Claude from the English, in `src/i18n/messages/fr.ts` and `es.ts`. French is his native language, so that one first. Choices he has not approved:
  - French says "vous", Spanish says "tú".
  - "Valence" for Valencia in French prose, "la stack" (feminine) in French and "el stack" in Spanish, "Portfolio" in Spanish.
  - Headlines that are not word for word: "Un développeur qui s'implique vraiment." and "Un desarrollador al que le importa." for "A developer who gives a damn."; "Jamais de silence radio" and "Nunca desaparezco" for "No ghost clients"; "Une pratique que je prends au sérieux" for "How I keep it serious"; the hero line "Des projets soignés, construits avec /ai-agents" and "Proyectos cuidados, creados con /ai-agents".
  - The mobile menu tagline, translated: "Les mots sont magiques", "Las palabras son magia".
  - In the terminal, the role, the second prompt and "working…" are translated; `whoami` and the four keys are not.
  - Fesma's client label in Spanish is "Pintura y fotografía", and Fesma is written without a gender in both languages, because it is not known here. Rachel Blot is "autrice" / "escritora".
  - The link to GitHub's privacy statement goes to its French or Spanish version.
  - The terms and privacy page is translated as it is; nothing says which language prevails.
- [ ] **English sentences rewritten without an em dash (2026-10-07): to confirm with Kevin.** About thirty, in `src/i18n/messages/en.ts`. The ones where more than the punctuation changed: the About lead now opens "I'm Kevin Jeremy Gautier, a full-stack developer based in Valencia, Spain."; the Limpiezas El Imperio excerpt ends with a sentence of its own ("Static, fast, and free of cookies and tracking."); the footer reads "kevjrmy.github.io © 2026 · All Rights Reserved" and the hero terminal's title "kevjrmy · claude code".
- [ ] **Services page call to action (2026-10-07): wording to confirm with Kevin.** The heading "Tell me what you need", the subline "A project, an idea, a business, a task, a gig: whatever it is, send me a message and we'll work out what it takes. No commitment, no pitch, just a conversation.", and the "Prices" paragraph of the terms on `/info` ("The Services page lists no prices. Each job is quoted once we've talked about it, and the price is agreed with you before any work starts.").
- [ ] **Small changes made with the translations (2026-10-07), not asked for.** The terms page says "Last updated: 7 October 2026" (it was 5 October; the Prices paragraph changed). On the About page, the "Hosting & deploy" column is "Mise en ligne" in French and "Hosting y despliegue" in Spanish, so the title fits on one line.

## Earlier wording

- [ ] **Wording written before 2026-10-07.**
  - The Startup Weekend fact "I have kept building its web side since: landing page, consumer app and business dashboard", and that the five teammates in the photos (two named in a caption) are fine with appearing.
  - The sentences about how he works with AI agents: "The agents write fast; I direct, review and answer for the result" (About timeline) and "I build with AI agents and answer for the result, so you get it sooner with the same care" (Services).
  - "Certified web developer" on the About page, which replaced "Self-taught".
  - The title "El Imperio Contabilidad" and the client label "Wellness startup" for SUNspot.
  - Le Petit Cours (added 2026-10-05): its excerpt, the label "Personal project", and its place in the list (fifth, after the client sites built with Claude Code).

## The AI page and the stacks

- [ ] **AI page (`/ai`, added 2026-10-06): to confirm with Kevin.**
  - The years that were inferred, not given: Midjourney and Hugging Face in 2023, Bard in 2023, Grok voice mode in 2025, Antigravity, the OpenClassrooms course, Google AI Studio, OpenCode and Codex in "2025 → 26", Claude Code from 2026.
  - Claude: the page says "opened my Claude account in June 2024" (account data); he remembers using it around 2023. See `docs/ai-journey.md`.
  - The Hermes sentence of the journey (added 2026-10-09), in the three languages: "I have started on Hermes too, learning it on a real case: an agent built to prepare the classes of Le Petit Cours, my French course for Spanish speakers, and to proofread its lessons. It is my first project with it, and more will follow." And whether Hermes should still read "coming soon" under "Learning next" now that he has started.
  - The one-line descriptions of Hermes and Jev under "Learning next", written from their own sites, and the one of Linear ("The issue tracker where the work is planned, and where tasks can be handed to coding agents."), written without knowing why he needs it.
  - The exact title of the AI course on OpenClassrooms, and whether it gave a certificate worth listing under Education on the About page.
  - Statuses in `src/data/stack.ts`: Kevin named GitHub Copilot, DeepSeek and Google AI Studio as "the rest"; Codex, OpenCode and Antigravity went with them. (Grok is settled: out of the stack, kept in the journey.)
  - The journey sentence "I also began talking to Grok in voice mode, which I still do outside of work."
  - Markdown's card: the role "Context files" and the status "every day".
  - Journey logos that are the maker's mark, not the product's: OpenAI's for DALL·E 2 and Sora, Google's for Veo 3 and Google Flow, Gemini's for Nano Banana. Magnific has none in the installed icon sets and stays a plain tag.
  - The home strip: the six classic picks (Laravel, Vue, React, TypeScript, Node.js, Next.js; PHP, Kotlin, Vite and Git are no longer on the home page) and the two link labels, "How I work with AI" and "The full stack".
  - Wording written on his behalf: the headline "Using AI since 2022. Building with agents every day.", the intro, the four practice cards, and "From then on, AI was something I worked with, not a demo I watched".
  - Magnific is listed with the video generators, as he said it.
  - New sentences in the journey: "I made my own AI videos in Google Flow, with Nano Banana for the images." and "Outside the terminal, I use Claude in its desktop app."
  - The "plugged in" sentence: "Claude Code does not work alone: I extend it with the ecosystem around it."
  - Cursor is one of the three current tools and has no step of its own in the journey: when he started with it is not known.
- [ ] **Classic stack: three left out without an answer.** WooCommerce, SQLite and plain JavaScript are badges on projects but not on the About page (WordPress, SQL and TypeScript stand in for them). Kevin was told and did not ask for them.

## To decide

- [ ] **Legal identification on `/info`.** The page does not give a tax ID or postal address. A site offering paid services from Spain is normally expected to (LSSI). Decide whether to add them.
