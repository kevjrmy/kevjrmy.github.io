# Styling

How the CSS is put together: the tokens, the two themes, the section frame, the fonts. This file is the mechanics; what the site should look like is `docs/design.md`.

## The stylesheets

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
- Two pieces are written once in `src/index.css` and used as plain class names, because every page has them: `eyebrow` (the slash-command label above a heading) and `button-secondary` (the link button with the red arrow). A component adds only where its button sits: ``className={`button-secondary ${styles.cta}`}``. They were eight and six identical copies until 2026-10-07; do not paste them into a module again, and do not add a third shared class for something only two components share.
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

Adding a font means downloading the file and its license into `public/fonts/`; do not link to Google Fonts or any CDN. Keep only the files the stylesheet loads: everything in `public/` is deployed, and the folder of static weights that came with Instrument Sans (24 files, 1.7 MB, never requested) was removed for that reason. The two variable files and `OFL.txt` are all it needs.
