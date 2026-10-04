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
- [ ] **AI Automation has no price.** It shows "Let's talk" on the services page.
- [ ] **Legal identification on `/info`.** The page does not give a tax ID or postal address. A site offering paid services from Spain is normally expected to (LSSI). Decide whether to add them.
- [ ] **"Jev".** One of the two AI tools Kevin plans to learn next (with Hermes). The spelling is unconfirmed, and neither is on the site yet.

## Later

- [ ] **`public/logo.svg` is 189 KB**, almost all of it invisible Inkscape leftovers. Optimised, the same logo is under 2 KB (the favicon was made that way). It loads in the header and footer of every page.
- [ ] **`@iconify-json/lucide` is installed and unused.** `npm rm @iconify-json/lucide` removes it.
- [ ] **Deep links answer with a 404 status** (see `docs/architecture.md`). Prerendering each route would fix it, and would matter for a blog.
- [ ] **One monospace everywhere.** The terminal and the slash labels use the visitor's system monospace, so they look different on each device. JetBrains Mono is already loaded for the headline and could cover them too.

- [ ] **Codex config import.** A Codex config exists at `~/.codex/config.toml` and has not been imported into Claude Code. To pick it up: `/import` in Claude Code to list what is importable (MCP servers, slash commands, subagents, skills, instructions), then `/import --yes=<digest>` to apply. From a terminal: `claude import`.

## Carried over from the old home page spec

Planned items from the original spec (since removed) that were never built:

- [ ] Blog: `/blog` route. See `docs/blog.md`.
- [ ] Add the Laravel app for the French client to `projects.ts` once it can be shown. See `docs/projects.md`.
