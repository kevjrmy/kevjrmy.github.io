# Architecture

How the app is put together, and the places where one change has to be made in two files.

## Routing and layout

`src/App.tsx` declares every route as a child of `MainLayout`, which renders `Header`, `<main>`, and `Footer`. `MainLayout` sets `<main id>` from the pathname (`/` becomes `home`, `/about` becomes `about`).

Current routes: `/`, `/portfolio`, `/services`, `/contact`, `/about`. There is no catch-all route, so an unknown URL renders the header and footer around an empty `<main>`.

Adding a page touches two places:

1. The route in `App.tsx`.
2. The `navLinks` array in `src/components/Header/Header.tsx`. One array drives both the desktop nav and the mobile drawer.

`/about` is routed but deliberately absent from the nav.

## Deep links on GitHub Pages

The site uses `BrowserRouter`, and GitHub Pages has no rewrite rules. Deep links work because the `spa-fallback` plugin in `vite.config.ts` copies `dist/index.html` to `dist/404.html` at build time. Pages serves that file for any unknown path and React Router takes over.

The HTTP status of such a response is still 404, so only `/` is a real 200 for crawlers. Fixing that would mean prerendering each route to its own HTML file.

## Pages vs. home sections

`src/pages/` holds route components. `src/components/Home/<Name>/` holds the sections that `src/pages/Home.tsx` stacks in order: Hero + CliPrompt, Stack, Services, FeaturedWorks, About, Cta.

Two names exist in both trees and are different components:

- `components/Home/Services` is the 3-card homepage teaser. `pages/services/Services` is the full priced list. Each has its own hard-coded `services` array.
- `components/Home/About` is the homepage section. `pages/about/About` is the full page.

`components/Home/CTA/Cta` is reused outside Home (the services and about pages render it).

## Content as data

Content lives in source files: typed data in `src/data/`, or arrays declared at the top of the component that renders them. Details per topic are in `docs/projects.md` and `docs/content.md`.

## Icons

All icons are `<Icon icon="prefix:name" />` from `@iconify/react`, addressed by string. They are bundled at build time, not fetched from the Iconify API.

- The `bundled-icons` plugin in `vite.config.ts` scans `src/` for `'prefix:name'` string literals, pulls just those icons out of the installed `@iconify-json/<prefix>` packages, and registers them through the `virtual:icons` module imported in `src/main.tsx`.
- Icon names must be written as complete string literals. A name built at runtime (template string, concatenation) is not seen by the scan.
- An icon name that does not exist in its set fails the build with `Unknown icon "prefix:name"`.
- To use a new icon set, install its package: `npm i @iconify-json/<prefix>`. A prefix with no installed package is ignored by the scan and would fall back to a runtime API fetch.
- Sets in use: `tabler` and `mdi` for UI icons, `vscode-icons` and `logos` for tech and brand badges.

## Styling

Plain CSS with CSS Modules, one `*.module.css` beside each component.

- `src/index.css` is the design system: color, spacing, radius, shadow, easing, and layout tokens as custom properties on `:root`, plus the reset.
- Global rules there affect every page. `main > section > h2` (and the `p` right after it) are centered. A global `prefers-reduced-motion` rule neutralizes all animation and transition durations.
- Breakpoints are mobile-first `min-width` queries at 640px, 768px, and 1024px.
- Page width comes from `--content-width` (1100px) and `--content-padding`.

## Unused on purpose

`components/Home/BootSequence` (superseded by `CliPrompt`) and `layouts/AltLayout.tsx` are kept for reference and not rendered.
