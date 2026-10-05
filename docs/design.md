# Design

The look and feel the site is aiming for. The tokens themselves are in `src/index.css`; this file is the intent behind them.

## Reference

The visual reference is the laravel.com home page. A full-page mobile capture is kept locally as `.private/laravel.png` (not in git). When a design question comes up, the answer is "what does the reference do". Its vocabulary, as applied here:

- **Section frame.** Sections are separated by a full-width hairline with a small red tick at each end, against the edges of the page. No alternating colored bands needed to tell sections apart. Implemented once, in `src/index.css` (see `docs/architecture.md`).
- **Display headings.** Hero and CTA headings are large, weight 400, very tight tracking (-0.045em), centered. Section and page headings are weight 500, tracking around -0.03em, left-aligned.
- **Eyebrows.** Styled as a slash command typed into a CLI agent: monospace, lowercase, grey, with a red `/` in front, as in `/about me`. The slash comes from `::before`, not from the text. This one comes from Claude Code, not from Laravel, whose labels are bracketed and uppercase.
- **Buttons.** Two kinds only. Primary: solid red, white text, medium radius, with an arrow. Secondary: white, hairline border, faint shadow; when it leads somewhere it carries a red up-right arrow. No pill buttons, no tinted buttons.
- **Pill tab bar.** Tabs and filters sit in a rounded track; the active one is a raised white pill. No underlines. Always a single row. When the tabs do not fit, the track scrolls sideways, the side with hidden tabs fades out, and a clicked tab is brought to the center, which reveals its neighbours. A small round chevron also appears on that side, except on touch phones, where the row is swiped.
- **Cards.** White, hairline border, large radius, soft shadow. A featured card can take a soft red ring (the featured-works panel).
- **Grid texture.** The faint isometric tile appears behind the two centered moments: the hero and the CTA band.
- **Navigation.** Desktop: links are quiet pills that grey on hover, the current page is a raised white pill (the secondary-button look), and Contact is the one primary red button at the end. Mobile: the menu is a full-screen sheet whose top row matches the header exactly, with large display-type rows separated by hairlines, a red tick on the current page (the section-frame tick), and Contact as a full-width primary button at the bottom. The sheet fades in and its rows rise in a short stagger.
- **Sticky header.** Solid white at the top of the page. Once the page scrolls it turns translucent with a backdrop blur, over a slow fade (`--duration-slow`). No shadow, no height change.
- **Photo carousel.** One slide per view in a rounded card, thin white chevrons on the sides, a caption over a bottom fade with a monospace place-and-date line. Taken from the events block above the reference's footer; used for the Startup Weekend section.
- **Checklist.** Short facts with a red check mark, as in the reference's feature sections.
- **One dark element** (on the light theme). The hero terminal, as the reference has its dark testimonial cards.

Not taken from the reference: testimonials, newsletter form, multi-column footer, logo wall of clients. The site has no content for them.

## Second inspiration: Claude Code

Claude Code's terminal interface is the second source, after Laravel. Laravel decides layout, spacing, color, type, and components. Claude Code supplies the terminal accent that says "this developer works with an AI agent", in small doses.

Taken from it so far:

- Eyebrows written as slash commands: `/about me`, `/services`.
- The hero terminal, laid out as a Claude Code session: the command is typed in a bordered prompt box at the bottom, moves up into the transcript when sent, the answer prints line by line, and a second prompt ("ready to build") is then typed into the box and left there with the cursor after it. Its title bar carries the Claude Code mascot.
- Monospace for small meta text: captions' place and date, counters, years, prices.
- Claude Code named on the page, with its mascot icon, in the stack marquee, the toolkit, and project badges (see Positioning in `docs/content.md`).

What else it offers, when a new element needs a voice: prompt lines, terse lowercase labels, status-line rows of short facts, plain monospace panels.

Limits, so it stays an accent:

- Red remains the only accent color. Claude's orange appears only inside its own logo.
- One blinking cursor on the site, in the hero terminal.
- The hero terminal stays the one dark element. Do not turn other sections into terminal windows.
- When the two sources disagree, Laravel wins.

## Direction

- Inspiration: laravel.com first (see Reference), Claude Code second (see above), and nextjs.org. Clean, modern, professional.
- Minimalist and elegant, with a warm and welcoming tone.
- Soft colors, generous whitespace, friendly and readable typography.
- Two themes, light and dark: the visitor's system setting decides, and a switch in the header overrides it (see Dark theme). Light is the one the design was drawn in.
- Red is the single accent (`--clr-dark-red`, `--clr-medium-red`, `--clr-light-red`), on neutral greys.
- Typeface: Instrument Sans, self-hosted from `public/fonts/`.
- The hero headline ends in `/ai-agents`, a slash command set in the same face as the rest of the headline. What marks it is the red slash, which is not a glyph: it is drawn in CSS as four pixels climbing a staircase, a flat echo of the cubes of the logo. It is the only pixelated mark on the page; the eyebrow slashes stay typed.
- Monospace is `--font-mono`, the visitor's system monospace. No code font is loaded.
- The hero terminal (`CliPrompt`) is the one deliberately dark element. Its palette is neutral near-black with the site red for the prompt and cursor, and no other color; the colors are defined locally in its stylesheet, not in the global tokens. It gets the same soft red ring as the featured cards.
- Body copy under headings is grey (`--text-light`), not black.
- The home hero ends at the fold. On a screen taller than its content it grows to fill the first screen, with the headline and the terminal centered in it as one group, so the stack marquee starts under the fold and never shows as a cut-off strip (nor does its frame line). On a screen shorter than its content (most phones) it keeps its natural height and the terminal runs past the fold.

## Dark theme

Some visitors have their system in dark mode, and the site follows it. A switch in the header lets anyone pick the other theme.

- **The switch.** A quiet icon button with one icon for both themes: a disc in two tones, not a sun and a moon. On desktop it sits at the end of the nav links, just before Contact, so Contact stays the last and only loud thing in the row. On mobile it sits beside the menu button, and again in the menu sheet, whose top row has to match the header. It is not a nav link and not a second primary button: no border, no label. The disc is drawn for the site: a circle in two tones of the text color, split on a diagonal that climbs like the hero slash. Its solid half is the tone a click leads to, light on the dark theme and dark on the light one, which happens by itself since both tones come from the text color. Keep it that quiet: tones of one color, no red.
- **What it remembers.** Only a choice that goes against the system setting is saved. Switching back to what the system says forgets it, and the site follows the system again, including when the system changes on its own at night.

- It is the same design with the tokens swapped, not a second design. Layout, type, spacing and components do not change.
- Neutral near-black page (`#0a0a0a`), light grey text, the same red. No blue or tinted greys.
- Depth is reversed. On the light theme a card is the page color lifted by a shadow; on a dark page a shadow shows nothing, so raised surfaces are a step lighter than the page instead (`--surface-elevated`). Bands and tracks (`--surface-secondary`) sit between the two.
- `--clr-dark-red` and `--clr-medium-red` are the same in both themes. `--clr-light-red` is the faintest tint, so on the dark theme it becomes a deep red: it is the hairline around icon tiles and the text selection color, not a "light" color there.
- `--text-inverse` stays white in both themes: it is text on a red button or over a photo, not the opposite of the page.
- The hero terminal keeps its own palette and is no longer the only dark thing; there it reads as one more raised panel, marked by its red ring.
- Screenshots and photos are shown as they are, not dimmed.
- Brand logos keep their colors. The few drawn in dark ink (Cursor, Codex, Grok, Express and so on) are inverted so they stay visible; the list is in `src/data/inkLogos.ts`.

Checking a change: use the header switch.

## Animation

Conservative by default: subtle signals, not theatrical entrances.

- The hero typewriter is the one on-load attention effect. Hero text only fades in (opacity, 300ms, no slide, no delay) so it does not compete.
- Scroll reveals use a one-shot `IntersectionObserver` that adds a class. Stagger comes from a `--card-delay` custom property set inline per card.
- Page transition: on every navigation the new page fades in and rises 8px over 250ms. Enter only; the old page does not animate out.
- Prefer CSS animations over JS-driven ones.
- Everything must respect `prefers-reduced-motion`. The global rule in `index.css` covers durations; elements that start hidden need their own visible fallback.

## Implementation habits

- Prefer CSS-only and pseudo-element solutions over extra DOM nodes. The hero grid background is a single `::before` with an SVG data URI and a composed mask.
- Mobile-first: write the small-screen layout, then widen at 640px, 768px, and 1024px.

## Avoid

- Stock photos.
- Long paragraphs above the fold.
- More than one primary button in the same section. The red Contact button in the header is the one that is always there; each section adds at most one of its own.
- Listing every technology known: pick the 5 or 6 that matter most.
