# Decisions: architecture and styling

How the site is built: routing, the build, icons, the CSS system and its two themes, and the context files themselves. The state today is in `docs/architecture.md` and `docs/styling.md`.

## 2026-11-21

**A published LinkedIn post can have its text replaced by `npm run linkedin:edit`, never its images.**
MQDH moved on hours after its post went out, and Kevin wanted that post rewritten rather than a second one. The script now sends a partial update of the post's text, with the same preview and `--yes` as publishing. LinkedIn changes no image of a published post, through the API or on its own site, so the old screenshot stays; Kevin kept it rather than delete and repost, which loses the likes and comments. What it costs: the new text replaces the whole old one, tags and hashtags included, so people are tagged again by hand.

**LinkedIn posts are published through LinkedIn's API, by `scripts/linkedin.mjs` run on Kevin's device, after he says yes to the preview.**
Kevin wants posts to go out straight from this repo, which reopens the 2026-11-19 entry (now in `superseded.md`). He made a LinkedIn page (`kevjrmy`), only because a LinkedIn developer app must belong to one, and an app with "Share on LinkedIn", which posts to his own profile. The script has no dependencies: it signs in once in the browser (`npm run linkedin:auth`), and publishes a draft folder of the skill (`npm run linkedin:publish`), as a preview first and for real only with `--yes`. The app's keys are in `.env` and the token in `private/linkedin/token.json`, both git-ignored; the site itself still has no environment variables (Vite only exposes `VITE_` ones). Rejected: running it from GitHub Actions (the secret would leave the device, and nothing else needs it there); posting as the company page (the Community Management API needs LinkedIn's review). What it costs: a sign-in in the browser every 2 months, and people still cannot be tagged through the API (basic access gives no one else's id), so they are tagged after, by editing the post on LinkedIn; a company page can be, written `@[Exact Name](urn:li:organization:<id>)`. (First used the same day, for the MQDH post: preview, publish and the post's link all worked; Bladimir was tagged by hand after.)

## 2026-11-19

**The mobile menu is a native modal `<dialog>`.**
It was an `<aside role="dialog" aria-modal="true">` with a hand-written Escape listener and a scroll lock on `<body>`, and its comment promised a focus trap that did not exist: Tab walked out of it into the page behind, and closing it did not return focus to the menu button. `showModal()` gives all of that for free and puts the sheet in the top layer. The page under it can no longer scroll through `overscroll-behavior` on the dialog and its backdrop, the guide's recommendation over locking `<body>` (which shifts the layout and can jump the scroll position); Safari does not honour it on content that does not overflow, which is harmless since the sheet hides the whole page. Rejected: keeping the `<aside>` and writing the focus trap.

**After a navigation, focus moves to the new page, and each page has its own title.**
Before, every page in every language was titled "Kevjrmy", and focus stayed on the link just used: a screen reader said nothing when the page changed. `MainLayout` now sets `document.title` and focuses the `#anchor` target or the `<h1>` (not on the first load, and not on a change of language, which is the same place). A skip link to the same `<h1>` is the first Tab stop. The focused heading gets no ring: it is not a control. Rejected: an `aria-live` announcer, which tells the change without moving the reader to it.

**Reduced motion is handled rule by rule, not by one global switch.**
The global `@media (prefers-reduced-motion: reduce)` rule cut every animation and transition to 0.01ms, which the guide warns against: it stops the color fades too, which are not motion. The few animations it alone was covering are now written inside `@media (prefers-reduced-motion: no-preference)` (page-in, smooth scrolling, the press effect) or stopped in their component's own block (three hover nudges). What it costs: a new animation is not caught by a safety net any more (`docs/styling.md`).

**The font is WOFF2, and the upright face is preloaded.**
The TrueType files were 193 KB and 201 KB and were only requested once the CSS had loaded, after the script. WOFF2 halves them, and the preload starts the download with the HTML. Rejected: `font-size-adjust: from-font`, which the guide suggests against the shift when the font swaps in. It takes the measure of the font already shown, so it changes nothing during the swap; a fixed value would also resize the system monospace of the slash labels and the terminal. With the preload the font is normally there before React first paints.

**The scrollbar is the browser's own width, with a thumb that stands out.**
`scrollbar-width: thin` and the 8px `::-webkit-scrollbar` made a small target, and the thumb was 1.4:1 against its track. Only `scrollbar-color` is left, with `--text-muted` on `--surface-secondary`.


**The dev server uses Vite's default port, 5173.**
Kevin asked to drop the custom port. This replaces the 2026-10-04 choice of port 5180, which existed so a leftover `vite-plugin-pwa` service worker on `localhost:5173` could not serve another project's page. The cost of that port was a number nobody expects, written into the commands and the docs. If that blank page comes back, unregister the service worker for `localhost:5173` in the browser.

## 2026-10-09

**A mark no icon set has goes in a small set of the site's own, `local:`.**
Kevin asked for the Hermes logo on its journey tag. No installed set has it: their `hermes` is a JavaScript engine in one and a brand in the other. The mark is the favicon that ships with Hermes Agent, redrawn from a 116 KB path to 3 KB of polygons, and it sits in `src/icons/local.json`, which the `bundled-icons` plugin reads as one more set. So the tag names its icon as every other does, the build still fails on a name that does not exist, and the day Hermes gets a card its data needs nothing new. Its white tile is kept: the art is black on white, and inverting a face for the dark theme, as the ink logos are, gives a negative. Rejected: the file as shipped (a quarter of the bundle's icons for a 14px mark), an image in `public/` beside the tag (a second way to show a logo), an inline SVG in the page as for the theme switch (that one is drawn in the text color and used once; a brand mark is data), and the `hermes` of the installed sets. What it costs: a redrawn mark has to be redone by hand if the project changes its logo, and the theme switch's note that one icon did not justify this plumbing no longer holds for brand marks.

## 2026-10-07

**Unused code is deleted, not kept for reference, and what every page repeats is written once.**
A cleanup Kevin asked for. Out went the two things kept "for reference" (the `BootSequence` terminal and `AltLayout`), the commented-out lines that pointed at them, the commented blog link of the header, an icon sprite left by the Vite template, the unused `.content` rule and `--font-serif` token, and the 24 static font files beside the two variable ones (1.7 MB that every deploy published and no page requested). Two styles copied from module to module became shared classes in `src/index.css`: the eyebrow (eight copies) and the secondary link button (six), and the tech icon map of the two project views (two copies) became `src/data/techIcons.ts`. The pages were captured before and after, in both themes and at two widths, and are pixel for pixel the same. Not touched, on purpose: the project fields nothing shows yet (`status`, `lang`, `tags`), which are content waiting for a filter, the project types no project uses yet, and the primary buttons, which differ in size from place to place. Rejected: a shared class for every repeated rule, which would trade the one-stylesheet-per-component habit for a second system.

**Claude Code's memory is in the repo, in `.claude/memory/`.**
Kevin's request: a change of device must not lose it. By default it sits under `~/.claude/projects/`, on one machine and under a name made from the path of the checkout. The `autoMemoryDirectory` setting moves it; it wants an absolute path and is not read from the committed settings file, so `scripts/link-memory.mjs` writes it to `.claude/settings.local.json`, which git ignores, and `npm install` runs that script (`prepare`), which makes a fresh clone link itself. Rejected: a symlink from the default location, which depends on that generated name; copying the files into the repo now and then, which is a step to forget. The cost is that memory is now published with the repo, which is public. The one memory there was held a fact Kevin wants kept private, so it was rewritten to state the rule without the fact, and the original went to `.private/`, which is not in git and does not travel; Kevin had it deleted from there the same day, so the status is written nowhere and is asked for when needed. So that the two cannot drift apart, the default location on the first device was emptied and holds one line that points here.

**The context files were reorganised by topic, so that a task reads less.**
Kevin asked for them to be optimised. Three files had grown into catch-alls: the decision log (one chronological file of 5,000 words, read in full to check one topic), `docs/content.md` (who Kevin is, the copy rules, and the whole of the stacks and the AI journey), and `todo.md` (work to do mixed with questions for Kevin). The log became `docs/decisions/`, one file per topic, plus `superseded.md` for what is no longer in force. The stacks and the `/ai` page got `docs/stacks.md` and `docs/ai-journey.md`, which also took their layout notes from `docs/design.md` and their data notes from `docs/architecture.md`. The CSS mechanics left `docs/architecture.md` for `docs/styling.md`, the table of where copy lives moved to `docs/i18n.md`, the list of what the portfolio should cover moved to `docs/projects.md`, and the questions for Kevin moved to `to-confirm.md`. Text was moved as written, apart from references that pointed "above", "below" or to a file that changed. Rejected: folding each decision into its topic file, which would make every task read the history; an index line per decision, which is a second list to keep in step; path-scoped rule files, which only one of the agents used on this repo reads.

## 2026-10-05

**The theme is a `data-theme` attribute on `<html>`, always set, not a media query plus an override.**
Keeping the media query would have meant writing the dark tokens twice, once for the system case and once for the override. The site cannot render without JavaScript anyway, so letting a script resolve the theme costs nothing.

**Dark is the same tokens with second values, not a set of per-component overrides.**
One block in `src/index.css` redefines the color, shadow and texture tokens. To make that enough, raised surfaces were moved from `--surface-primary` to `--surface-elevated` (the two are the same white on the light theme), and the last literal colors were turned into tokens (`--ring-accent`, `--grid-tile`). Rejected: `light-dark()` in every declaration (noisier, newer browser support, and no help for shadows or the grid tile).

**Dark-ink brand logos are inverted with a CSS filter rather than swapped for light variants.**
Swapping needs either two icons in the DOM or JavaScript watching the theme. A filter (`invert` plus a hue rotation that restores colored parts) is one rule; the cost is a hand-kept list of which logos need it, in `src/data/inkLogos.ts`.

## 2026-10-04

**`AGENTS.md` is the single source of agent guidance; `CLAUDE.md` only imports it.**
Several coding agents are used on this repo and most read `AGENTS.md`. One file avoids two copies drifting apart.

**Agent context is split: essentials in `AGENTS.md`, depth in `docs/`.**
`AGENTS.md` is loaded on every task, so it stays short. Topic files are read only when the task needs them.

**Deep links: `BrowserRouter` plus a `404.html` copy of `index.html`.**
Rejected `HashRouter`, which would put `#/` in every URL. The cost is that deep links return a 404 status. Prerendering would remove that cost and has not been done.

**Icons are bundled at build time, keeping the string API.**
Previously every icon was fetched from the Iconify API at runtime. A small Vite plugin now extracts the icons used from the `@iconify-json/*` packages. Rejected importing whole icon sets (thousands of icons in the bundle) and rejected switching to per-icon component imports (would have meant rewriting every data array that stores an icon name).

**Page transitions are a CSS enter animation on a re-keyed `<main>`, not the View Transitions API.**
React has no built-in equivalent of Vue's `<Transition>`. React Router can drive the browser's View Transitions API (old page fades out as the new one fades in), but only with its data router (`createBrowserRouter`) and a `viewTransition` prop on every link; this app uses `BrowserRouter`. The other route is an animation library such as Motion. A keyed `<main>` with a CSS animation costs four lines and no dependency, at the price of having no exit animation. [Looked at again on 2026-11-19, with the View Transitions API now in every major browser: still true, since it would mean moving to the data router for a crossfade.]

**The section frame is one global rule, not a per-component border.**
Every page gets it without each stylesheet repeating it, and a new section cannot forget it. The cost is the constraint on top-level sections described in `docs/styling.md`.

## Earlier

Carried over from the original home page spec. Dates were not recorded.

**CSS Modules, no Tailwind.** A stated preference for vanilla CSS with design tokens.

**Lucide dropped from the icon sets in use.** Tabler first, MDI second.
