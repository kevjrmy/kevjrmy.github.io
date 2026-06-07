# HOME STRUCTURE

## 1. Hero ✅

**Layout:** Single column centered (stacks naturally on all breakpoints)
**Component:** `Hero.tsx` + `Hero.module.css`

### Left column (full width for now)

- H1: "Artisan crafted / AI accelerated"
- Subline (p): bio paragraph with stack mention
- CTA row:
  - /portfolio → primary red button
  - /contact → ghost/outline button

### Right column — terminal visual

- Component: `CliPrompt.tsx` (replaces the earlier `BootSequence.tsx` / `CodeDecoration.tsx` concepts)
- Typewriter effect: types `whoami` then reveals output lines sequentially
- Output fields: name, role, stack, city, status
- Dark terminal UI (Catppuccin Mocha palette), CSS Modules
- `aria-hidden="true"` — purely decorative

### Animations

- Hero text: fade-in only (`opacity: 0 → 1`, 300ms, no slide, no delay) — conservative, doesn't compete with the typewriter
- Typewriter CLI: the primary wow effect on load — draws attention first
- Both are reduced-motion-safe (`animation: none` fallback)

### Background

- Isometric diamond tile grid via `Home.module.css` `::before` pseudo-element — zero extra HTML
- SVG data URI tile, composed CSS mask (radial + linear gradient) fades center out

---

## 2. Stack marquee ✅

**Component:** `Stack.tsx` + `Stack.module.css`

- CSS-only infinite scroll (array duplicated for seamless loop)
- Edge fade via `mask-image` linear gradient
- Hover pauses animation
- Left label strip ("My stack") hidden on mobile, visible ≥640px
- Items: Laravel, Vue, React, TypeScript, Node.js, Vite, Next.js, PHP, Kotlin, Git, WordPress

---

## 3. Services ✅

**Layout:** 1 col mobile → 3 col desktop (≥640px)
**Component:** `Services.tsx` + `Services.module.css`
**Note:** This is the homepage preview (3 cards). The full 8-service page lives at `/services`.

### Current homepage cards (3)

1. Mobile App — `tabler:device-mobile`
2. Web Application — `tabler:server`
3. WordPress — `mdi:wordpress`

### Full service list (for /services page)

1. WordPress — `tabler:brand-wordpress` — "Maintenance, redesigns, new sites — fast and reliable." — From €X / mo
2. Audit — `tabler:zoom-check` — "Performance, SEO, accessibility — know exactly where you stand and what to fix." — From €X
3. Landing Page — `tabler:layout-dashboard` — "High-converting one-pagers for campaigns, products or launches." — From €X
4. Training & Classes — `tabler:school` — "Private JS/TS sessions tailored to your level and your pace." — From €X / h
5. PWA — `tabler:device-mobile-code` — "Installable, offline-ready web apps built with Vue or React." — From €X
6. Web Application — `tabler:server` — "Full-stack apps with Laravel or Node — from MVP to production." — From €X
7. Mobile App — `tabler:device-mobile` — "Native Android or cross-platform apps with React Native." — From €X
8. Consulting — `tabler:map-route` — "Architecture review, tech choices, roadmap — clear advice, no fluff." — From €X / h

### Animations

- Cards start hidden (`opacity: 0; transform: translateY(16px)`)
- IntersectionObserver adds `.visible` class when card enters viewport (fires once, then disconnects)
- Stagger: `--card-delay` CSS custom property set inline per card (0ms → 80ms → 160ms)
- Reduced-motion: cards visible immediately, no transition

---

## 4. Featured Works ✅

**Layout:** Tabbed widget — tab bar + panel (image left, metadata right on ≥768px)
**Component:** `FeaturedWorks.tsx` + `FeaturedWorks.module.css`
**Data:** `src/data/projects.ts` → `featuredProjects` (filtered + sorted by `order`)

### Featured projects (homepage, `featured: true`)

| #   | Project     | Type            | Stack                 |
| --- | ----------- | --------------- | --------------------- |
| 1   | Fraichup    | Web Application | JavaScript, HTML, CSS |
| 2   | Rachel Blot | Web Application | Nuxt, Markdown        |
| 3   | PlanetaX    | PWA             | Vue, Vite, PWA        |

### All projects (`src/data/projects.ts`)

| #   | Project                  | Type            | Featured | Status              |
| --- | ------------------------ | --------------- | -------- | ------------------- |
| 1   | Fraichup                 | Web Application | ✅       | live                |
| 2   | Rachel Blot              | Web Application | ✅       | live                |
| 3   | PlanetaX                 | PWA             | ✅       | live                |
| 4   | Marcas que dejan huellas | WordPress       | —        | live                |
| 5   | Pickleball Valencia      | WordPress       | —        | live                |
| —   | Vue + Firebase PWA       | PWA             | —        | wip (not added yet) |
| —   | Laravel (French client)  | Web Application | —        | wip (not added yet) |

### Panel anatomy

- Left: project screenshot (16:9 on mobile → unconstrained on desktop), fallback placeholder
- Right: client label, title, excerpt, stack badges, year, "Visit site →" link
- Tab switching: `useState` on `activeSlug`, panel re-mounts with `key` for CSS animation

---

## 5. About

**Status:** TODO
**Layout:** Two-column (text left, visual right) → stacks on mobile

### Left — short bio

- H2: "A developer who gives a damn."
- 2–3 short paragraphs: who, where, background, philosophy

### Right — trust signals

- X years building for the web
- X+ projects delivered
- Performance-first mindset
- Replies within 24 h

---

## 6. CTA Band

**Status:** TODO
**Layout:** Full-width band, centered content
**Background:** `var(--clr-light-red)` or very subtle red tint

- H2: "Have a project in mind?"
- p: "Let's figure out if I'm the right fit — no commitment, no pitch, just a conversation."
- [Send a message →] → /contact

---

## Notes

### Header

- Currently: always solid white + border-bottom
- Planned: transparent on top of hero → solid + shadow on scroll (not yet implemented)

### Animations — decision log

- Hero text: **fade-in only** (opacity, 300ms, no slide, no delay) — keeps focus on the CLI typewriter
- Hero CLI typewriter: primary on-load wow effect — types command, reveals output lines sequentially
- Service cards: **IntersectionObserver fade-in + slide-up**, staggered per card
- CTA band: none planned for now

### What to avoid

- Stock photos
- Long paragraphs anywhere above the fold
- More than one primary CTA visible at once
- Listing every technology you know (pick the 5–6 that matter most)
