# Architecture

How the app is put together, and the places where one change has to be made in two files. The CSS has its own file, `docs/styling.md`, and so do the languages, `docs/i18n.md`.

## Routing and layout

`src/App.tsx` declares every page once, in its `pages` array, and registers each one three times as a child of `MainLayout`: at its English path and under `/fr` and `/es` (`docs/i18n.md`). `MainLayout` renders `Header`, `<main>`, and `Footer`, reads the language from the URL, and sets `<main id>` from the page (`/` becomes `home`, `/about` and `/fr/about` become `about`).

Current pages: `/`, `/portfolio`, `/services`, `/ai`, `/contact`, `/about`, `/info`. There is no catch-all route, so an unknown URL renders the header and footer around an empty `<main>`.

Adding a page touches three places:

1. The `pages` array in `App.tsx`.
2. The `navLinks` array in `src/components/Header/Header.tsx`. One array drives both the desktop nav and the mobile menu. Contact is kept apart in `cta`, because it is rendered as the primary button in both.
3. Its words, and its nav label under `header.nav`, in the three files of `src/i18n/messages/`.

`/about` is in the nav, last of the links (since 2026-10-06; before that it was reached only from inside the pages). The homepage About section links to it too, and the home strip and the `/ai` page link to its `#stack` anchor (the classic stack). `/info` (terms of use and privacy) is reached only from the footer, which links to its `#terms` and `#privacy` anchors.

`MainLayout` gives `<main>` a `key` equal to the page (the path without its language), so React builds a new `<main>` on each change of page and the `pageIn` animation in `src/index.css` replays: that is the page transition. A change of `#anchor` on the same page does not replay it, and neither does a change of language.

`MainLayout` also handles scrolling, which React Router does not: on navigation it jumps to the `#anchor` if the URL has one, otherwise to the top. Back and forward are left to the browser, which restores the previous position. A change of language is the same place on the same page, and does not scroll.

The header is sticky (`z-index: 40`); the mobile menu is a full-screen sheet above it (`z-index: 50`), rendered next to the header, not inside it. Both carry the two switches, language then theme. The language switch is its own component (`components/LanguageSwitch`) and takes its size from custom properties the header sets (`--switch-size`, `--switch-color`, `--switch-margin`), so it matches the buttons around it in each of its three places. `html` has `scroll-padding-top: 5rem` so anchors stop below the header.

The header is `--header-height` tall (70px) on every screen: `min-height` on its container and on the top row of the menu sheet holds it there. The token exists so a page can subtract the header from the screen, as the home hero does to end at the fold (`docs/design.md`, Direction). If the header's content ever grows past it, raise the token too; a header shorter than the token cannot happen.

## Deep links on GitHub Pages

The site uses `BrowserRouter`, and GitHub Pages has no rewrite rules. Deep links work because the `spa-fallback` plugin in `vite.config.ts` copies `dist/index.html` to `dist/404.html` at build time. Pages serves that file for any unknown path and React Router takes over.

The HTTP status of such a response is still 404, so only `/` is a real 200 for crawlers. Fixing that would mean prerendering each route to its own HTML file.

## Pages vs. home sections

`src/pages/` holds route components. `src/components/Home/<Name>/` holds the sections that `src/pages/Home.tsx` stacks in order: Hero + CliPrompt, Stack, Services, FeaturedWorks, StartupWeekend, About, Cta.

Two names exist in both trees and are different components:

- `components/Home/Services` is the 3-card homepage teaser. `pages/services/Services` is the full list. Each has its own `services` array (the order and the icons; the words are in the messages).
- `components/Home/About` is the homepage section. `pages/about/About` is the full page.

`components/Home/CTA/Cta` is reused outside Home (the services, about, and AI pages render it). It takes an optional `heading` and `subline`; the services page passes its own, the others use the defaults.

## Content as data

Content lives in source files, in two parts. What is not a sentence (order, icons, links, years, brand names) is typed data in `src/data/`, or an array declared at the top of the component that renders it. Every sentence is in `src/i18n/messages/`, once per language, under the `id` or the slug that the data gives the entry (`docs/i18n.md`). Details per topic are in `docs/projects.md` and `docs/content.md`.

Nothing unused is kept in the tree for reference: a component, a layout or an asset that is no longer rendered is deleted, and git history is the archive.

The list of technologies, `src/data/stack.ts`, has its own file: `docs/stacks.md`.

## Icons

All icons are `<Icon icon="prefix:name" />` from `@iconify/react`, addressed by string. They are bundled at build time, not fetched from the Iconify API.

- The `bundled-icons` plugin in `vite.config.ts` scans `src/` for `'prefix:name'` string literals, pulls just those icons out of the installed `@iconify-json/<prefix>` packages, and registers them through the `virtual:icons` module imported in `src/main.tsx`.
- Icon names must be written as complete string literals. A name built at runtime (template string, concatenation) is not seen by the scan.
- An icon name that does not exist in its set fails the build with `Unknown icon "prefix:name"`.
- To use a new icon set, install its package: `npm i @iconify-json/<prefix>`. A prefix with no installed package is ignored by the scan and would fall back to a runtime API fetch.
- Sets in use: `tabler` and `mdi` for UI icons, `vscode-icons` and `logos` for tech and brand badges, and `simple-icons` for the brand marks those two lack (Android Studio and the graphics tools). `simple-icons` is one color and takes the text color, so it needs no entry in `inkLogos.ts`; check that a mark is readable at 20px before using it (its GitHub Pages mark is a wordmark and is not).
- Two marks are not from a set, and are inline SVGs drawn for the site: the icon of the theme switch, in `src/components/Header/Header.tsx` (`docs/design.md`, Dark theme), and the pixel chevron of the hero terminal's prompt box, in `components/Home/CliPrompt`. They are the exceptions, not a second way to add icons.

## Images

- `public/images/projects/<slug>.webp`: one per project (`docs/projects.md`).
- `public/images/startup-weekend/`: the award carousel photos, two sizes each (`docs/content.md`).
- `public/logo.svg` is the header and footer logo, kept optimised (about 2 KB; an Inkscape export of it is close to 200 KB, so run it through SVGO before replacing it). `public/favicon.svg`, `favicon.png`, and `apple-touch-icon.png` are generated from it, squared.
