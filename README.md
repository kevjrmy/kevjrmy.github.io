# kevjrmy.github.io

Personal portfolio of Kevin Jeremy Gautier, full-stack developer in Valencia, Spain. Live at https://kevjrmy.github.io, in English, French (`/fr`) and Spanish (`/es`).

A static single-page app: React 19, TypeScript, Vite, React Router, plain CSS Modules. No backend, no tracking, nothing loaded from third parties.

## Develop

```bash
npm install
npm run dev       # http://localhost:5180
npm run build     # type-check, then build to dist/
npm run lint
npm run preview   # serve the built site
```

There are no tests; `npm run build` and `npm run lint` are the checks.

## Deploy

Every push to `main` builds and publishes to GitHub Pages through `.github/workflows/deploy.yml`.

## Where things are

| Path | What |
|------|------|
| `src/pages/` | One component per route |
| `src/components/Home/` | The sections of the homepage |
| `src/data/projects.ts` | The portfolio projects |
| `src/data/stack.ts` | The two stacks: AI and classic |
| `src/i18n/messages/` | Every sentence of the site, one file per language |
| `src/index.css` | Design tokens and global rules |
| `public/` | Fonts, images, favicons |

## Working on it with an AI agent

`AGENTS.md` is the guide for coding agents (`CLAUDE.md` imports it). What Claude Code remembers about the project between sessions is in `.claude/memory/`, in the repo, so it is not lost with a device: `npm install` points Claude Code at it (`scripts/link-memory.mjs`), from the next session on. The repo is public, so nothing private is written there.

Beyond that, `AGENTS.md` links to the topic files in `docs/` (architecture, styling, design, content, languages, stacks, projects) and to the decisions behind them in `docs/decisions/`. Open work is in `todo.md`; what waits for Kevin's answer is in `to-confirm.md`.
