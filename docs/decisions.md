# Decisions

Choices that are not obvious from the code, with the reason. Read before reversing one. Add an entry when making a new one: what was chosen, what was rejected, why.

## 2026-10-05

**The slash of that headline is drawn as pixels, flat rather than isometric.**
It ties the headline to the logo, which is built from cubes. A solid red staircase was kept over versions shaded with the logo's lighter reds, which turned muddy at phone sizes. It comes from a `::before` with background gradients, so the `/` is no longer in the text of the heading.

**"ai-agents" in the headline went back to the headline's own face, and JetBrains Mono was removed.**
Once the slash was drawn as pixels it carried the slash-command idea by itself, and a second typeface on two words was one signal too many. Nothing else used JetBrains Mono, so its file, `@font-face` and `--font-code` token went with it (about 40 KB less to load).

**The site has a dark theme, and the system setting chooses it; there is no toggle.**
The site was light only. Visitors whose system is in dark mode now get a dark version. A toggle was left out: it needs a control in the header, a stored preference (the privacy page says the site stores nothing), and a script that runs before first paint to avoid a flash of the wrong theme. Following the system needs none of that and is pure CSS.

**Dark is the same tokens with second values, not a set of per-component overrides.**
One media query in `src/index.css` redefines the color, shadow and texture tokens. To make that enough, raised surfaces were moved from `--surface-primary` to `--surface-elevated` (the two are the same white on the light theme), and the last literal colors were turned into tokens (`--ring-accent`, `--grid-tile`). Rejected: `light-dark()` in every declaration (noisier, and newer browser support) and a `.dark` class on `<html>` (only useful with a toggle).

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

**The laravel.com home page is the design reference, and the site was restyled to it.**
Applied across all pages: the section frame with red ticks, monospace eyebrows (bracketed at first, slash commands since), lighter and tighter headings, left-aligned section intros, two button kinds only, pill tab bars, and the grid texture behind the CTA band. The grey band behind the homepage services section was dropped in favor of the frame. Details in `docs/design.md`.

**Claude Code is the second design inspiration; Laravel stays the main one.**
Kevin wants the site to show that he works the AI way. Claude Code's terminal look supplies accents (slash-command eyebrows, the hero terminal, monospace meta text) while Laravel keeps deciding layout, color, and components. The limits are in `docs/design.md`.

**The site is positioned AI-first; WordPress moves to the back.**
The work shifted from WordPress to building with AI agents while this site was being made. WordPress stays for history and for clients who still need it, but last in every list and never in a highlighted spot. The tool list and the wording rules are in `docs/content.md`, Positioning.

**Page transitions are a CSS enter animation on a re-keyed `<main>`, not the View Transitions API.**
React has no built-in equivalent of Vue's `<Transition>`. React Router can drive the browser's View Transitions API (old page fades out as the new one fades in), but only with its data router (`createBrowserRouter`) and a `viewTransition` prop on every link; this app uses `BrowserRouter`. The other route is an animation library such as Motion. A keyed `<main>` with a CSS animation costs four lines and no dependency, at the price of having no exit animation.

**The homepage project tabs stay on one row and scroll; they do not wrap.**
Nine tabs do not fit the content width. Wrapping onto a second row was tried and rejected. The row scrolls sideways instead, with a fade and a small chevron on the side that hides tabs, and a clicked tab is brought to the center.

**Contact is a button in the navigation, not a link.**
On desktop it is the red button at the end of the row; on mobile it is the full-width button at the bottom of the menu. It gives every page one constant call to action.

**The AI service is called "AI Automation", not "AI Integration".**
The reference case (Limpiezas El Imperio) replaced a hand-filled spreadsheet with a custom app built with AI agents; no AI model runs inside the client's software. "Integration" would promise that. See `docs/content.md`, Services.

**The hero headline ends in `/ai-agents`, in JetBrains Mono with a red slash.** (The typeface was dropped on 2026-10-05; the slash command stays.)
Four pixel fonts (Pixelify Sans, Doto, Silkscreen) and two monospaces (Geist Mono, JetBrains Mono) were tried on the words "AI agents". The slash-command version won because it ties the headline to the slash labels and to the `/whoami` terminal under it. The fonts not kept were removed.

**The terms and privacy page is short and plain, and does not list a tax ID or postal address.**
Same choice as on a client's site. Spanish law (LSSI) normally expects a site that offers paid services to identify its owner more fully; this is noted in `todo.md` as a risk to revisit.

**Marcas que dejan huellas was taken off the portfolio rather than shown without a working link or image.**
Its domain expired. See `todo.md`.

**The section frame is one global rule, not a per-component border.**
Every page gets it without each stylesheet repeating it, and a new section cannot forget it. The cost is the constraint on top-level sections described in `docs/architecture.md`.

## Earlier

Carried over from the original home page spec. Dates were not recorded.

**CSS Modules, no Tailwind.** A stated preference for vanilla CSS with design tokens.

**Lucide dropped from the icon sets in use.** Tabler first, MDI second.

**`CliPrompt` replaced `BootSequence` in the hero.** The boot-log terminal is kept in the tree for reference.

**Hero text fades in only (opacity, 300ms, no slide, no delay).** It must not compete with the terminal typewriter, which is the one on-load attention effect.

**The CTA band opens WhatsApp, not `/contact`.** The original spec had it link to the contact page; the built version goes straight to a WhatsApp chat. The reason was not recorded.
