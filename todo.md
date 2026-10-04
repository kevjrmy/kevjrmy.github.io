# TODO

## Waiting

- [ ] **Project screenshots.** `src/data/projects.ts` points at `/images/projects/<slug>.webp`, but `public/images/projects/` does not exist, so every project shows the placeholder on the homepage and the portfolio page. Waiting on the screenshots. Files needed:
  - `fraichup.webp`
  - `rachel-blot.webp`
  - `planetax.webp`
  - `marcasquedejanhuellas.webp`
  - `pickleball-valencia.webp`

## Open

- [ ] **Footer legal links are a dead end.** "Terms of use" and "Privacy" in `src/components/Footer/Footer.tsx` both link to `/info`, which has no route in `src/App.tsx`. The result is the header and footer around an empty page. Either build the page(s) or remove the links.
- [ ] **No catch-all route.** Any unknown URL renders the same empty page as `/info`. Now that GitHub Pages serves the app for every path (`404.html` fallback), a mistyped URL lands there too. A `path="*"` not-found page would cover both.

## Later

- [ ] **Codex config import.** A Codex config exists at `~/.codex/config.toml` and has not been imported into Claude Code. To pick it up: `/import` in Claude Code to list what is importable (MCP servers, slash commands, subagents, skills, instructions), then `/import --yes=<digest>` to apply. From a terminal: `claude import`.

## Carried over from the old home page spec

Planned items from the original spec (since removed) that were never built:

- [ ] Header: transparent over the hero, then solid with a shadow on scroll. Currently always solid white with a bottom border.
- [ ] Blog: `/blog` route. See `docs/blog.md`.
- [ ] Add the in-progress projects to `projects.ts` once they can be shown: the Vue + Firebase PWA and the Laravel app for the French client. See `docs/projects.md`.
