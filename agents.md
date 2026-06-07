# Agents

Personal portfolio website: [kevjrmy.github.io](https://kevjrmy.github.io)

**Stack:** React + TypeScript (Vite)

## Goals
- Clean, fast, professional portfolio
- Mobile-first & accessible

## Design Direction
- Design inspiration: Laravel.com + Next.js.org (clean, modern, professional)
- Minimalist & elegant
- Warm and welcoming tone
- Soft colors, generous whitespace, subtle animations
- Friendly typography with good readability

## Project Structure
- Follow React + TS best practices
- Component-driven architecture
- Vanilla CSS / CSS Modules (no TailwindCSS)
- React Router (already set up with `MainLayout` + `<Outlet>`)
- Path alias `@/` → `src/`

## Preferences
- No semicolons in TS/TSX
- Icon priority: 1. Tabler (`tabler:*`) 2. MDI (`mdi:*`) — Lucide removed from priority list
- Use CSS custom properties from `src/index.css` wherever possible
- Prefer CSS-only / pseudo-element solutions over adding DOM nodes
- Single-file component mindset (Vue SFC style): logic → render → styles, all close together

## Routing
| Path | Component |
|------|-----------|
| `/` | `Home.tsx` |
| `/portfolio` | (TODO) |
| `/services` | (TODO) |
| `/blog` | (TODO) |
| `/contact` | `Contact.tsx` (stub) |

## Home page sections (in order)
1. **Hero** ✅ — `Hero.tsx` + `CliPrompt.tsx` (typewriter terminal)
2. **Stack marquee** ✅ — `Stack.tsx`
3. **Services** ✅ — `Services.tsx` (3-card homepage preview)
4. **Featured Works** ✅ — `FeaturedWorks.tsx` (tabbed, data from `projects.ts`)
5. **About** — TODO
6. **CTA band** — TODO

## Components built
| Component | File(s) | Notes |
|-----------|---------|-------|
| Header | `Header.tsx` / `Header.module.css` | Mobile drawer + desktop nav, ESC/scroll-lock |
| Hero | `Hero.tsx` / `Hero.module.css` | Fade-in only (300ms opacity), no slide |
| CliPrompt | `CliPrompt.tsx` / `CliPrompt.module.css` | Typewriter `whoami` → sequential output reveal |
| Stack | `Stack.tsx` / `Stack.module.css` | CSS infinite marquee, hover-pause, edge masks |
| Services | `Services.tsx` / `Services.module.css` | 3 cards, IntersectionObserver stagger fade-in |
| FeaturedWorks | `FeaturedWorks.tsx` / `FeaturedWorks.module.css` | Tabbed widget, screenshot + metadata panel |
| BootSequence | `BootSequence.tsx` / `BootSequence.module.css` | Boot-log terminal (replaced by CliPrompt, kept for reference) |

## Data / types
- `src/data/projects.ts` — all projects + `featuredProjects` export
- `src/types/project.ts` — `Project`, `ProjectType`, `ProjectStatus` types
- `src/constants.ts` — `SITE_DOMAIN`

## Projects (current)
| Slug | Title | Type | Featured |
|------|-------|------|----------|
| fraichup | Fraichup | Web Application | ✅ |
| rachel-blot | Rachel Blot | Web Application | ✅ |
| planetax | PlanetaX | PWA | ✅ |
| marcasquedejanhuellas | Marcas que dejan huellas | WordPress | — |
| pickleball-valencia | Pickleball Valencia | WordPress | — |

WIP (not in `projects.ts` yet): Vue + Firebase PWA, Laravel (French client).

## Animation principles
- **Conservative by default** — subtle signals, not theatrical entrances
- Hero text: opacity fade only, 300ms — does not compete with CLI typewriter
- Service cards: IntersectionObserver + CSS stagger (`--card-delay` custom prop)
- All animations respect `prefers-reduced-motion`
- Prefer CSS animations over JS-driven ones wherever possible

## Featured Works
- WordPress projects (early work) — Marcas que dejan huellas, Pickleball Valencia
- SPA: Vue (PlanetaX PWA), React
- SSR: Nuxt (Rachel Blot), Next.js (upcoming)
- Laravel: 1 past + 2 current (1 in production soon, French client)
- Kotlin Android app
- 2 PWA: PlanetaX (live), Vue + Firebase (WIP)
- Vector/logo designs (Inkscape)
- Video editing: DaVinci Resolve, Kdenlive + AI video (Google Flow / Veo / Nano Banana)
- AI tools: CodeX, Antigravity, OpenCode (upcoming: OpenClaw)