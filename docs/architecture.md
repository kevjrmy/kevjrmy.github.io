# Architecture

How the app is put together, and the places where one change has to be made in two files. The CSS has its own file, `docs/styling.md`, and so do the languages, `docs/i18n.md`.

## Routing and layout

`src/App.tsx` declares every page once, in its `pages` array, and registers each one three times as a child of `MainLayout`: at its English path and under `/fr` and `/es` (`docs/i18n.md`). `MainLayout` renders `Header`, `<main>`, and `Footer`, reads the language from the URL, and sets `<main id>` from the page (`/` becomes `home`, `/about` and `/fr/about` become `about`).

Current pages: `/`, `/portfolio`, `/services`, `/ai`, `/contact`, `/about`, `/info`. Any other URL renders the not-found page (`pages/notFound`), from one `path="*"` route after the others: it covers the three languages at once, since `MainLayout` reads the language from the prefix, so `/fr/portfolo` is the French not-found page. `MainLayout` knows a page by its tab title: a path with no entry in `titles` (`/portfolo`, `/about/old`) is named `notFound`, which gives the tab title and `<main id>`. So a page added without its title shows the not-found title in the tab. The page is not linked from anywhere and has no nav entry.

Adding a page touches three places:

1. The `pages` array in `App.tsx`.
2. The `navLinks` array in `src/components/Header/Header.tsx`. One array drives both the desktop nav and the mobile menu. Contact is kept apart in `cta`, because it is rendered as the primary button in both.
3. Its words, its nav label under `header.nav` and its tab title under `titles`, in the three files of `src/i18n/messages/`.

The page itself needs one `<h1>`: it is where focus lands after a navigation and from the skip link.

`/about` is in the nav, last of the links (since 2026-10-06; before that it was reached only from inside the pages). The homepage About section links to it too, and the home strip and the `/ai` page link to its `#stack` anchor (the classic stack). `/info` (terms of use and privacy) is reached only from the footer, which links to its `#terms` and `#privacy` anchors.

`MainLayout` gives `<main>` a `key` equal to the page (the path without its language), so React builds a new `<main>` on each change of page and the `pageIn` animation in `src/index.css` replays: that is the page transition. A change of `#anchor` on the same page does not replay it, and neither does a change of language.

`MainLayout` also handles scrolling, which React Router does not: on navigation it jumps to the `#anchor` if the URL has one, otherwise to the top. Back and forward are left to the browser, which restores the previous position. A change of language is the same place on the same page, and does not scroll.

Focus moves with the page, since a router does not move it as a page load would. After every navigation but the first load, `MainLayout` focuses the `#anchor` target if there is one, else the page's `<h1>` (`src/utils/focus.ts`), so keyboard and screen reader users start on the new page instead of on the link they used. Each page therefore needs an `<h1>`. The skip link, the first Tab stop of every page (rendered by the header), lands on the same `<h1>`. `MainLayout` also sets `document.title` from the `titles` section of the messages, one per page and language.

The header is sticky (`z-index: 40`); the mobile menu is a full-screen sheet rendered next to it as a modal `<dialog>` (`showModal()`), so it sits in the browser's top layer and the browser does the rest: focus stays inside it, the page behind is hidden from screen readers, Escape closes it, and focus returns to the menu button. The language list inside it prevents its own Escape, so that Escape closes the list and not the sheet. Both carry the two switches, language then theme. The language switch is its own component (`components/LanguageSwitch`) and takes its size from custom properties the header sets (`--switch-size`, `--switch-color`, `--switch-margin`), so it matches the buttons around it in each of its three places. `html` has `scroll-padding-top: 5rem` so anchors stop below the header.

The header is `--header-height` tall (70px) on every screen: `min-height` on its container and on the top row of the menu sheet holds it there. The token exists so a page can subtract the header from the screen, as the home hero does to end at the fold (`docs/design.md`, Direction). If the header's content ever grows past it, raise the token too; a header shorter than the token cannot happen.

## Deep links on GitHub Pages

The site uses `BrowserRouter`, and GitHub Pages has no rewrite rules, but it serves `/portfolio` from a file `portfolio.html`, with a 200. So the `static-pages` plugin in `vite.config.ts` writes, after the build, one copy of `dist/index.html` per page and language: `portfolio.html`, `fr/portfolio.html`, `es.html` (with `es/index.html` beside it, the same page, in case Pages sends `/es` to `/es/`). Each copy has its own `<html lang>`, its tab title, a canonical link, and `hreflang` links to the same page in the three languages (`x-default` is English). The list of pages is the keys of `titles` in `en.ts`, as `MainLayout` reads it, so a new page gets its file by having its title. `404.html` is the plain shell: Pages serves it for every other URL, with a 404 status, and React Router renders the not-found page.

The files hold the shell only, not the page: the content is still drawn by the script, as before. Search engines that run JavaScript (Google does) see it; one that does not sees an empty page with the right title. Real prerendering (each page's HTML rendered at build time) would fix that, and is the next step if it ever matters, for a blog for instance.

`SITE` at the top of `vite.config.ts` is the address the canonical and `hreflang` links point to: change it with the domain.

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
- A mark that no installed set has goes in `src/icons/local.json`, a set of the site's own in the same format, and is used like the others: `local:hermes`. The plugin reads that file for the `local` prefix. It holds two marks. Orca's is its `resources/logo.svg` (a white mark, one path) set on a black tile, as on its app icon, rounded to one decimal (1 KB). Hermes Agent's: the sets do have a `hermes`, but it is another product's (a JavaScript engine in `logos`, a brand in `simple-icons`). It is the project's own favicon, a single path of 116 KB, redrawn as polygons on a 256 grid (3 KB) with its white tile kept, so it reads on both themes and needs no entry in `inkLogos.ts`. Keep a mark added there that small: it goes into the JavaScript bundle. It is for brand marks only; a UI icon comes from Tabler.
- Two marks are not from a set, and are inline SVGs drawn for the site: the icon of the theme switch, in `src/components/Header/Header.tsx` (`docs/design.md`, Dark theme), and the pixel chevron of the hero terminal's prompt box, in `components/Home/CliPrompt`. They are the exceptions, not a second way to add icons.

## Images

- `public/images/projects/<slug>.webp`: one per project (`docs/projects.md`).
- `public/images/startup-weekend/`: the award carousel photos, two sizes each (`docs/content.md`).
- `public/logo.svg` is the header and footer logo, kept optimised (about 2 KB; an Inkscape export of it is close to 200 KB, so run it through SVGO before replacing it). `public/favicon.svg`, `favicon.png`, and `apple-touch-icon.png` are generated from it, squared.
