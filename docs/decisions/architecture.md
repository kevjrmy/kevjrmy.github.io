# Decisions: architecture and styling

How the site is built: routing, the build, icons, the CSS system and its two themes, and the context files themselves. The state today is in `docs/architecture.md` and `docs/styling.md`.

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

**The dev server runs on port 5180, not Vite's default 5173.**
Other local projects that use `vite-plugin-pwa` leave a dev service worker registered on `localhost:5173`. It stays active after that project stops and serves its own `index.html` for `/`, so this site showed a blank page with "@vitejs/plugin-react can't detect preamble". A port of its own gives this project an origin no other project's service worker can claim. `strictPort` is on so it never silently falls back to a shared port.

**Page transitions are a CSS enter animation on a re-keyed `<main>`, not the View Transitions API.**
React has no built-in equivalent of Vue's `<Transition>`. React Router can drive the browser's View Transitions API (old page fades out as the new one fades in), but only with its data router (`createBrowserRouter`) and a `viewTransition` prop on every link; this app uses `BrowserRouter`. The other route is an animation library such as Motion. A keyed `<main>` with a CSS animation costs four lines and no dependency, at the price of having no exit animation.

**The section frame is one global rule, not a per-component border.**
Every page gets it without each stylesheet repeating it, and a new section cannot forget it. The cost is the constraint on top-level sections described in `docs/styling.md`.

## Earlier

Carried over from the original home page spec. Dates were not recorded.

**CSS Modules, no Tailwind.** A stated preference for vanilla CSS with design tokens.

**Lucide dropped from the icon sets in use.** Tabler first, MDI second.
