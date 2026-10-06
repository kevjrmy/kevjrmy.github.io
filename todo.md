# TODO

## Waiting

- [ ] **Final project screenshots.** The images in `public/images/projects/` are first-pass captures taken automatically from the live sites on 2026-10-04 (home page, above the fold). Replace any that are not good enough; keep the same filenames. See `docs/projects.md` for the format.
- [ ] **`fesma.webp` comes from a local run, not the live site.** fesma.art no longer resolves (2026-10-04), so the capture was taken from the Nuxt code in `Clients/Fesma`, last committed locally in September 2023. The GitHub repo has later pushes, so the real last version may look different.

## Open

- [ ] **Marcas que dejan huellas is off the portfolio for now.** Removed from `projects.ts` on 2026-10-04: marcasquedejanhuellas.com has expired (Hostinger "Your domain is expired" page), so there was no live site to link to or capture, and the archived copies on the Wayback Machine render without their styles. Put it back once the site is online again (the Laravel rebuild is in `Clients/MQDHpress`); the old entry is in git history.
- [ ] **No catch-all route.** Any unknown URL renders the header and footer around an empty page. Now that GitHub Pages serves the app for every path (`404.html` fallback), a mistyped URL lands there too. A `path="*"` not-found page would fix it.

- [ ] **To confirm with Kevin.** Wording written on his behalf that he has not explicitly approved:
  - The Startup Weekend fact "I have kept building its web side since: landing page, consumer app and business dashboard", and that the five teammates in the photos (two named in a caption) are fine with appearing.
  - The sentences about how he works with AI agents: "The agents write fast; I direct, review and answer for the result" (About timeline) and "I build with AI agents and answer for the result, so you get it sooner with the same care" (Services).
  - "Certified web developer" on the About page, which replaced "Self-taught".
  - The title "El Imperio Contabilidad" and the client label "Wellness startup" for SUNspot.
  - Le Petit Cours (added 2026-10-05): its excerpt, the label "Personal project", and its place in the list (fifth, after the client sites built with Claude Code).
- [ ] **Le Petit Cours is filed as a PWA before it works offline.** Its repo says the service worker is not installed yet, so the portfolio excerpt does not mention offline use. Once it is, the excerpt can say so.
- [ ] **AI Automation has no price.** It shows "Let's talk" on the services page.
- [ ] **Legal identification on `/info`.** The page does not give a tax ID or postal address. A site offering paid services from Spain is normally expected to (LSSI). Decide whether to add them.
- [ ] **AI page (`/ai`, added 2026-10-06): to confirm with Kevin.**
  - The years that were inferred, not given: Midjourney and Hugging Face in 2023, Bard in 2023, Grok voice mode in 2025, Antigravity, the OpenClassrooms course, Google AI Studio, OpenCode and Codex in "2025 → 26", Claude Code from 2026.
  - GitHub Copilot: placed in 2022. If he was in the 2021 technical preview, change its year and the "since 2022" of the headline and status line.
  - Claude: the page says "opened my Claude account in June 2024" (account data); he remembers using it around 2023. See `docs/content.md`, AI journey.
  - The one-line descriptions of Hermes and Jev under "Learning next", written from their own sites.
  - The exact title of the AI course on OpenClassrooms, and whether it gave a certificate worth listing under Education on the About page.
  - Statuses in `src/data/stack.ts`: Grok as "sometimes" and Google AI Studio as "used before" (Cursor "every day" and DeepSeek "sometimes" are confirmed).
  - Wording written on his behalf: the headline "Using AI since 2022. Building with agents every day.", the intro, the four practice cards, and "From then on, AI was something I worked with, not a demo I watched".
  - Magnific is listed with the video generators, as he said it.
- [ ] **AI page: things that would make it stronger.** Links from the journey to real work (the projects built with Claude Code), and something to show for the meetups (a photo, a talk).

## Later

- [ ] **Deep links answer with a 404 status** (see `docs/architecture.md`). Prerendering each route would fix it, and would matter for a blog.
- [ ] **One monospace everywhere.** The terminal and the slash labels use the visitor's system monospace, so they look different on each device. A self-hosted monospace would fix it; JetBrains Mono was used for the headline until 2026-10-05 and is in git history.

- [ ] **Codex config import.** A Codex config exists at `~/.codex/config.toml` and has not been imported into Claude Code. To pick it up: `/import` in Claude Code to list what is importable (MCP servers, slash commands, subagents, skills, instructions), then `/import --yes=<digest>` to apply. From a terminal: `claude import`.

## Carried over from the old home page spec

Planned items from the original spec (since removed) that were never built:

- [ ] Blog: `/blog` route. See `docs/blog.md`.
- [ ] Add the Laravel app for the French client to `projects.ts` once it can be shown. See `docs/projects.md`.
