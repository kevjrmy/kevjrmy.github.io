# TODO

Open work on the site, and what waits for Kevin.

## Waiting for Kevin

Wording, dates and choices only he can settle. An agent asks him during the session; what he does not answer then goes here, and is deleted once he has. Nothing here is work to start without his answer.

Nothing is waiting for him at the moment.

## Waiting

- [ ] **Final project screenshots.** The images in `public/images/projects/` are first-pass captures taken automatically from the live sites on 2026-10-04 (home page, above the fold). Replace any that are not good enough; keep the same filenames. See `docs/projects.md` for the format.
- [ ] **`fesma.webp` comes from a local run, not the live site.** fesma.art no longer resolves (2026-10-04), so the capture was taken from the Nuxt code in `Clients/Fesma`, last committed locally in September 2023. The GitHub repo has later pushes, so the real last version may look different.

## Open

- [ ] **Marcas Que Dejan Huellas is on the portfolio as upcoming.** Added 2026-11-21 in the "Coming soon" group, with no link and a screenshot of the coming-soon page, taken from a local build of `../mqdh` (repo `kevjrmy/mqdh`). When marcasquedejanhuellas.com serves the new site: set `status: 'live'` and `link`, recapture the screenshot, decide whether it joins the homepage tabs, and update the excerpt in the three languages, which says "for now a coming-soon page" (`docs/projects.md`, step 7). The 2024 WordPress entry is in git history.
- [ ] **No catch-all route.** Any unknown URL renders the header and footer around an empty page, in English, or in French or Spanish if it starts with `/fr/` or `/es/`. Now that GitHub Pages serves the app for every path (`404.html` fallback), a mistyped URL lands there too. A `path="*"` not-found page would fix it.
- [ ] **Le Petit Cours is filed as a PWA before it works offline.** Its repo says the service worker is not installed yet, so the portfolio excerpt does not mention offline use. Once it is, the excerpt can say so.
- [ ] **AI page: things that would make it stronger.** Links from the journey to real work (the projects built with Claude Code), and something to show for the meetups (a photo, a talk).

## Later

- [ ] **Deep links answer with a 404 status** (see `docs/architecture.md`). Prerendering each route would fix it, and would matter for a blog. It now covers every French and Spanish page too, home included (`/fr`, `/es`), and prerendering is also what would let each language have its own `<html lang>` and `hreflang` links in the served HTML (`docs/i18n.md`, Limits).
- [ ] **One monospace everywhere.** The terminal and the slash labels use the visitor's system monospace, so they look different on each device. A self-hosted monospace would fix it; JetBrains Mono was used for the headline until 2026-10-05 and is in git history.
- [ ] **Codex config import.** A Codex config exists at `~/.codex/config.toml` and has not been imported into Claude Code. To pick it up: `/import` in Claude Code to list what is importable (MCP servers, slash commands, subagents, skills, instructions), then `/import --yes=<digest>` to apply. From a terminal: `claude import`.

## Carried over from the old home page spec

Planned items from the original spec (since removed) that were never built:

- [ ] Blog: `/blog` route. See `docs/blog.md`.
- [ ] Add the Laravel app for the French client to `projects.ts` once it can be shown. See `docs/projects.md`.
