# AGENTS.md

Guidance for coding agents working in this repository. `CLAUDE.md` imports this file, so this is the single source: edit here, not there.

This file holds what applies to every task. Depth lives in `docs/` and is read on demand: see [Context files](#context-files).

## What this is

Personal portfolio site for kevjrmy, served at https://kevjrmy.github.io. React 19 + TypeScript + Vite SPA, fully static: no backend, no API calls, no environment variables.

Goals: a clean, fast, professional portfolio that is mobile-first and accessible.

## Commands

```bash
npm run dev       # Vite dev server with HMR
npm run build     # tsc -b (type-check) then vite build -> dist/
npm run lint      # eslint .
npm run preview   # serve the built dist/
```

There is no test runner. `npm run build` and `npm run lint` are the only checks, and both pass clean, so keep them that way.

The type-check is strict enough to fail the build on things that are easy to miss:

- `noUnusedLocals` / `noUnusedParameters`: an unused import breaks the build.
- `verbatimModuleSyntax`: type-only imports must use `import type`.
- `erasableSyntaxOnly`: no `enum`, no parameter properties, no namespaces.

## Deployment

Every push to `main` deploys to GitHub Pages via `.github/workflows/deploy.yml`. There is no staging step, so a broken build on `main` is a failed deploy.

## Rules that always apply

- No semicolons in TS/TSX. ESLint does not enforce this, so it has to be done by hand.
- Import from `src/` via the `@/` alias.
- Plain CSS with CSS Modules, one `*.module.css` beside its component. No Tailwind, no CSS-in-JS.
- Use the design tokens (custom properties) from `src/index.css` instead of literal values.
- Prefer CSS-only and pseudo-element solutions over extra DOM nodes.
- Icons are `<Icon icon="prefix:name" />` with the name written as a complete string literal. Tabler first (`tabler:*`), then MDI (`mdi:*`). Do not use Lucide.
- Animation is conservative and must respect `prefers-reduced-motion`.
- Decorative visuals get `aria-hidden="true"`; sections are labelled with `aria-labelledby`.

## Map

- `src/App.tsx`: every route, all children of `layouts/MainLayout` (Header, `<main>`, Footer).
- `src/pages/`: one component per route.
- `src/components/Home/<Name>/`: the sections stacked by `pages/Home.tsx`.
- `src/data/` and `src/types/`: content as typed data. There is no CMS.
- `src/index.css`: design tokens and global rules.
- `vite.config.ts`: two local plugins, one bundling icons and one writing the GitHub Pages deep-link fallback.

## Context files

Read the file that matches the task before starting. Each one is the single home for its topic.

| File | Read it when |
|------|--------------|
| `docs/architecture.md` | Adding or moving a page, route, or component; touching `vite.config.ts`, icons, or global CSS |
| `docs/design.md` | Any visual change: layout, color, spacing, typography, animation |
| `docs/content.md` | Writing or editing copy, services, pricing, or contact details |
| `docs/projects.md` | Adding or editing a portfolio project or its screenshot |
| `docs/blog.md` | Starting the blog (not built yet) |
| `docs/decisions.md` | Before reversing an existing choice; after making a new one |
| `todo.md` | Looking for open work, or recording something left unfinished |

Keeping them useful:

- When a change makes one of these files wrong, fix the file in the same change.
- When the site gains a new area (a blog, legal pages, translations), give it its own file in `docs/` and add a row to the table above.
- Record what cannot be read from the code: intent, constraints, reasons, gotchas. Do not list components or files; those go stale and the code already says it.
