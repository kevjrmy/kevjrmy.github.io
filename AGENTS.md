# AGENTS.md

Guidance for coding agents working in this repository. `CLAUDE.md` imports this file, so this is the single source: edit here, not there.

This file holds what applies to every task. Depth lives in `docs/` and is read on demand: see [Context files](#context-files).

## What this is

Personal portfolio site of Kevin Jeremy Gautier (kevjrmy), served at https://kevjrmy.github.io, in English, French and Spanish. React 19 + TypeScript + Vite SPA, fully static: no backend, no API calls, no environment variables.

Goals: a clean, fast, professional portfolio that is mobile-first and accessible, and that presents Kevin as a developer who builds with AI agents (Claude Code first).

## Commands

```bash
npm run dev       # Vite dev server with HMR, on http://localhost:5180
npm run build     # tsc -b (type-check) then vite build -> dist/
npm run lint      # eslint .
npm run preview   # serve the built dist/
npm run memory:link   # point Claude Code's memory at .claude/memory/ (npm install already does it)
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
- Plain CSS with CSS Modules, one `*.module.css` beside its component. No Tailwind, no CSS-in-JS. Two pieces every page has are shared classes instead, `eyebrow` and `button-secondary` (`docs/styling.md`): use them, do not copy their rules.
- Use the design tokens (custom properties) from `src/index.css` instead of literal values.
- The site has a light and a dark theme: the visitor's system setting decides, and a switch in the header overrides it. Anything raised above the page (card, secondary button, active pill) takes `--surface-elevated`, not `--surface-primary`, and every visual change is checked in both themes (`docs/design.md`, Dark theme).
- Prefer CSS-only and pseudo-element solutions over extra DOM nodes.
- Icons are `<Icon icon="prefix:name" />` with the name written as a complete string literal. Tabler first (`tabler:*`), then MDI (`mdi:*`). Do not use Lucide.
- Animation is conservative and must respect `prefers-reduced-motion`.
- Decorative visuals get `aria-hidden="true"`; sections are labelled with `aria-labelledby`.
- Sections that sit directly in `<main>` get their separator line from a global rule: no `border-top` / `border-bottom`, no `overflow: hidden`, and leave `::after` free (`docs/styling.md`).
- Everything is served from the site itself: no fonts, scripts, icons, or analytics from a third party. The privacy page promises it.
- This repo is public on GitHub. Nothing private about Kevin or a client goes in it: not in a doc, a comment, a commit message, or a memory file. What has to stay on the device goes in `private/`, which git ignores.
- In copy, say "Claude Code" or "AI agents", and put WordPress last in any list (`docs/content.md`, Positioning).
- No em dash (—) in anything the visitor reads or a screen reader says, in any language (`docs/content.md`, Voice).
- The site is in English, French and Spanish. No sentence is written in a component: copy lives in `src/i18n/messages/`, one file per language, and a change of copy is made in all three. Link to a page with `Link` from `@/i18n/LocaleLink`, not from `react-router-dom` (`docs/i18n.md`).
- The stack is two stacks, AI and classic, and a tool belongs to one of them. Both are in `src/data/stack.ts`; never mix them in one list (`docs/stacks.md`).

## Map

- `src/App.tsx`: every page, registered once per language, all children of `layouts/MainLayout` (Header, `<main>`, Footer).
- `src/pages/`: one component per page.
- `src/components/Home/<Name>/`: the sections stacked by `pages/Home.tsx`.
- `src/data/` and `src/types/`: content as typed data. There is no CMS.
- `src/i18n/`: the languages, and every sentence of the site in `messages/en.ts`, `fr.ts` and `es.ts`.
- `src/index.css`: design tokens and global rules (section frame, page transition).
- `public/`: self-hosted fonts, project screenshots (`images/projects/`), event photos (`images/startup-weekend/`), favicons.
- `vite.config.ts`: two local plugins, one bundling icons and one writing the GitHub Pages deep-link fallback.

## Context files

Read the file that matches the task before starting, and only that one. Each is the single home for its topic.

| File | Read it when |
|------|--------------|
| `docs/architecture.md` | Adding or moving a page, route, or component; touching `vite.config.ts`, icons, or images |
| `docs/styling.md` | Writing CSS: tokens, the two themes, the section frame, breakpoints, fonts |
| `docs/design.md` | Any visual change: layout, color, spacing, typography, animation. Names the two design references: laravel.com (main) and Claude Code (accent) |
| `docs/content.md` | Deciding what the copy says: positioning, voice, services (no prices, one call to action), contact details, the privacy page, the Startup Weekend award |
| `docs/i18n.md` | Changing any copy (it is written three times), adding a link between pages, or touching the language switch. Where each sentence is, and the voice of the French and the Spanish |
| `docs/stacks.md` | Adding, moving or removing a tool; touching the home strip, the About toolkit or the `/ai` page |
| `docs/ai-journey.md` | Editing the journey on `/ai`: what Kevin told, and which dates are certain |
| `docs/projects.md` | Adding or editing a portfolio project or its screenshot |
| `docs/blog.md` | Starting the blog (not built yet) |
| `docs/decisions/` | Before reversing an existing choice, and after making a new one. One file per topic; its `README.md` says which |
| `todo.md` | Looking for open work, or recording something left unfinished |
| `to-confirm.md` | Before treating a wording, a date or a translation as settled; after writing something on Kevin's behalf |
| `.claude/memory/` | Claude Code's memory of this project, committed so that it follows to another device. Claude Code loads it by itself once `npm install` has linked it; another agent starts from its `MEMORY.md`. It is the only copy: if a session's memory path is anywhere else, run `npm run memory:link` and save nothing until it points here |
| `private/README.md` | A fact about Kevin changes on the site (diploma, languages, award, a contact link), the picks of the stack or the list of projects change, the look of the site changes (its greys, its hairlines, the About timeline, its icons), or he asks for a change to his resume. The folder holds his French and Spanish resumes; git ignores it, so it exists only on a device where he put it, and nothing in it is published, linked from the site or copied into `public/` |
| `README.md` | Never needed for a task: it is the short human introduction and repeats this file |

Keeping them useful:

- When a change makes one of these files wrong, fix the file in the same change.
- When the site gains a new area (a blog, legal pages), give it its own file in `docs/` and add a row to the table above.
- One topic per file, short enough to read whole. When a file starts holding two topics, split it; a decision goes in `docs/decisions/`, a question for Kevin in `to-confirm.md`, and neither in a topic file.
- Record what cannot be read from the code: intent, constraints, reasons, gotchas. Do not list components or files; those go stale and the code already says it.
