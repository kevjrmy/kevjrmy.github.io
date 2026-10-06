# Architecture

How the app is put together, and the places where one change has to be made in two files.

## Routing and layout

`src/App.tsx` declares every route as a child of `MainLayout`, which renders `Header`, `<main>`, and `Footer`. `MainLayout` sets `<main id>` from the pathname (`/` becomes `home`, `/about` becomes `about`).

Current routes: `/`, `/portfolio`, `/services`, `/ai`, `/contact`, `/about`, `/info`. There is no catch-all route, so an unknown URL renders the header and footer around an empty `<main>`.

Adding a page touches two places:

1. The route in `App.tsx`.
2. The `navLinks` array in `src/components/Header/Header.tsx`. One array drives both the desktop nav and the mobile menu. Contact is kept apart in `cta`, because it is rendered as the primary button in both.

`/about` is routed but deliberately absent from the nav. It is reached from the homepage About section and from the `/ai` page, which links to its `#stack` anchor (the classic stack). `/info` (terms of use and privacy) is reached only from the footer, which links to its `#terms` and `#privacy` anchors.

`MainLayout` gives `<main>` a `key` equal to the pathname, so React builds a new `<main>` on each route change and the `pageIn` animation in `src/index.css` replays: that is the page transition. A change of `#anchor` on the same page does not replay it.

`MainLayout` also handles scrolling, which React Router does not: on navigation it jumps to the `#anchor` if the URL has one, otherwise to the top. Back and forward are left to the browser, which restores the previous position.

The header is sticky (`z-index: 40`); the mobile menu is a full-screen sheet above it (`z-index: 50`), rendered next to the header, not inside it. `html` has `scroll-padding-top: 5rem` so anchors stop below the header.

The header is `--header-height` tall (70px) on every screen: `min-height` on its container and on the top row of the menu sheet holds it there. The token exists so a page can subtract the header from the screen, as the home hero does to end at the fold (`docs/design.md`, Direction). If the header's content ever grows past it, raise the token too; a header shorter than the token cannot happen.

## Deep links on GitHub Pages

The site uses `BrowserRouter`, and GitHub Pages has no rewrite rules. Deep links work because the `spa-fallback` plugin in `vite.config.ts` copies `dist/index.html` to `dist/404.html` at build time. Pages serves that file for any unknown path and React Router takes over.

The HTTP status of such a response is still 404, so only `/` is a real 200 for crawlers. Fixing that would mean prerendering each route to its own HTML file.

## Pages vs. home sections

`src/pages/` holds route components. `src/components/Home/<Name>/` holds the sections that `src/pages/Home.tsx` stacks in order: Hero + CliPrompt, Stack, Services, FeaturedWorks, StartupWeekend, About, Cta.

Two names exist in both trees and are different components:

- `components/Home/Services` is the 3-card homepage teaser. `pages/services/Services` is the full priced list. Each has its own hard-coded `services` array.
- `components/Home/About` is the homepage section. `pages/about/About` is the full page.

`components/Home/CTA/Cta` is reused outside Home (the services, about, and AI pages render it).

## Content as data

Content lives in source files: typed data in `src/data/`, or arrays declared at the top of the component that renders them. Details per topic are in `docs/projects.md` and `docs/content.md`.

`src/data/stack.ts` is the one list of technologies, split in two: the AI stack and the classic stack (`docs/content.md`, Two stacks). Three places read it: the home strip (one group per stack), the toolkit of the About page, and the `/ai` page. A tool added to the AI stack shows up in the About toolkit; on the home strip and on `/ai` it shows only while it is in current use (status `main` or `daily`, exported as `currentAiStack`), and otherwise lends its logo to the journey. The classic group of the home strip is its own short list, `classicPicks`. Do not declare a stack array in a component again.

The home strip (`components/Home/Stack`) is static. Below 768px its tools are laid out three per line by a grid, not left to wrap, so six picks never break as five and one; the column gap at 1024px is a `clamp()` because the two groups only just fit side by side there.

## Icons

All icons are `<Icon icon="prefix:name" />` from `@iconify/react`, addressed by string. They are bundled at build time, not fetched from the Iconify API.

- The `bundled-icons` plugin in `vite.config.ts` scans `src/` for `'prefix:name'` string literals, pulls just those icons out of the installed `@iconify-json/<prefix>` packages, and registers them through the `virtual:icons` module imported in `src/main.tsx`.
- Icon names must be written as complete string literals. A name built at runtime (template string, concatenation) is not seen by the scan.
- An icon name that does not exist in its set fails the build with `Unknown icon "prefix:name"`.
- To use a new icon set, install its package: `npm i @iconify-json/<prefix>`. A prefix with no installed package is ignored by the scan and would fall back to a runtime API fetch.
- Sets in use: `tabler` and `mdi` for UI icons, `vscode-icons` and `logos` for tech and brand badges.
- One icon is not from a set: the icon of the theme switch is an inline SVG drawn for the site, in `src/components/Header/Header.tsx` (`docs/design.md`, Dark theme). It is the exception, not a second way to add icons.

## Styling

Plain CSS with CSS Modules, one `*.module.css` beside each component.

- `src/index.css` is the design system: color, spacing, radius, shadow, easing, and layout tokens as custom properties on `:root`, plus the reset.
- The dark theme is one `:root[data-theme="dark"]` block right under `:root`, which gives the color, shadow and texture tokens a second value. Component stylesheets hold no dark-mode rules: a color that goes through a token follows the theme by itself, and a literal color does not.
- `data-theme` on `<html>` is always set, to `light` or `dark`, from two places that must agree:
  - An inline script in `index.html` sets it before first paint (the stored choice, else the system setting), so the page never flashes the wrong theme. It has to stay inline and in `<head>`: the app's own script is a deferred module.
  - `src/hooks/useTheme.ts` takes over once React runs: the header switch, the `theme` key in `localStorage`, and a listener that follows the system while no choice is stored. Both read the same key.
- Three things outside the dark block have to be kept in step with it by hand:
  - The `theme-color` meta tags in `index.html` repeat the two `--surface-primary` values (after load, `useTheme.ts` rewrites them from the token itself).
  - The grid tile (`--grid-tile`) is an SVG data URI, which cannot read a custom property, so each theme carries its own copy with the stroke color written in.
  - Brand logos drawn in dark ink are listed in `src/data/inkLogos.ts`; `inkLogoClass()` gives them the global `.ink-logo` class, which inverts them on the dark theme. A new logo that disappears in dark mode goes in that list.
- Global rules there affect every page. `main > section > h2` (and the `p` right after it) are centered. A global `prefers-reduced-motion` rule neutralizes all animation and transition durations.
- The section frame is global too. Every direct `<section>` child of `<main>` except the first gets a hairline across its full width, with a red tick at each end, at its top, drawn by `main > section + section::after`; `main::after` draws the one under the last section. The ticks are `--frame-tick` high and the line is centered on the section's top edge, so half a tick reaches into the section above. Consequences:
  - A top-level section must be full width, with its `max-width` on an inner wrapper: the line is as wide as the section. Sections that constrain themselves (the hero, and the single sections of the portfolio, contact, and info pages) are fine only because they come first and so draw no line.
  - A top-level section must leave its own `::after` free (use `::before` for decoration, as the hero and the CTA band do) and must not set `overflow: hidden`, or the line is clipped.
  - Do not add `border-top` / `border-bottom` to sections; the frame is the separator.
- Breakpoints are mobile-first `min-width` queries at 640px, 768px, and 1024px. Two components also switch at 900px (the hero and the Startup Weekend section).
- Page width comes from `--content-width` (1100px) and `--content-padding`.

## Fonts

Self-hosted in `public/fonts/`, with its license file, and declared with `@font-face` at the top of `src/index.css`:

| Token | Font | Use |
|-------|------|-----|
| `--font-sans` | Instrument Sans (variable TTF) | Everything |
| `--font-mono` | The visitor's system monospace, no file | Terminal, slash labels, badges, small meta text |

Adding a font means downloading the file and its license into `public/fonts/`; do not link to Google Fonts or any CDN.

## Images

- `public/images/projects/<slug>.webp`: one per project (`docs/projects.md`).
- `public/images/startup-weekend/`: the award carousel photos, two sizes each (`docs/content.md`).
- `public/logo.svg` is the header and footer logo, kept optimised (about 2 KB; an Inkscape export of it is close to 200 KB, so run it through SVGO before replacing it). `public/favicon.svg`, `favicon.png`, and `apple-touch-icon.png` are generated from it, squared.

## Unused on purpose

`components/Home/BootSequence` (superseded by `CliPrompt`) and `layouts/AltLayout.tsx` are kept for reference and not rendered.
