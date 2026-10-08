# Decisions: design

How the site looks and moves: the two references, the hero and its terminal, the header and its navigation, the theme switch, the selected works and their screenshots, and what the resume takes from all this. What the design is today is in `docs/design.md`.

## 2026-10-09

**The resume takes its look from the site, and the site's red stays on the site.**
Kevin's request: the resume should get its design from the website, with its own fonts kept. Its navy and lavender gave way to the site's greys, its sections got the hairline, its experience became the timeline of the About page, its colored icons became Tabler line icons and its flags became language codes. The site's red signatures were tried on it and he had each one removed: the ticks at the ends of the hairlines ("only for the website"), the slash-command eyebrow above his name, the soft red ring, the red dots of the timeline. A line saying the page was laid out with Claude Code went too: it could be taken for a watermark. What is left of the brand on the resume is the logo, its only color. Rejected: the site's typeface for the body text, tested on one paragraph, which made a fourth font on the page. What it costs: nothing checks the two against each other; the rule is in `docs/design.md`, The resume, and the resume itself is in `private/`, outside git.

## 2026-10-06

**In the hero terminal the command is a plain `whoami`, and the prompt box has a pixel chevron.**
Two requests from Kevin after the green `$`. The slash went: `$ whoami` is what a shell shows, and the slash commands stay in the eyebrows and the headline. The `$` left the prompt box, which is the agent's input and not a shell, for a chevron drawn as five pixels in an inline SVG, 6 by 10 so each pixel is two screen pixels and stays sharp. It kept the green of the `$`: the two are the prompt signs. It is the second pixel mark on the home page, after the slash of the headline.

**A project screenshot is never cropped, and a website keeps its desktop capture on a phone.**
It began as a regression from making the works swipeable: the cards took one height, the image box could grow, and it filled the spare height by cropping the sides of the screenshot. Kevin saw it on Fraichup; eight of the ten projects had it. He then set the rule: Fraichup, Rachel Blot, Ethica and Pickleball Valencia show their desktop screenshot on every device, and the picture must not be cut. On a phone the box is 16:9 again and the spare height goes to the text. The older crop went too: between 768px and about 1150px the side-by-side card had always cut the sides (down to a square at 768px). The card now stays stacked up to 1024px, and beside the text the screenshot is fitted, not cropped. Rejected: a mobile capture for small screens, which he ruled out, and keeping `cover` with a taller card.

**The prompt sign of the hero terminal is a green `$`, not a red `>`.**
Kevin's request, to look more like a real terminal. Both signs changed, the one in the transcript and the one in the prompt box, so the two stay the same glyph. It is the one green on the site and it is local to the terminal's stylesheet; the cursor and "working…" stay red. The space after the sign went from one character to one and a half, since a `$` fills its cell where a `>` did not. In the same change the name moved closer to the command it answers (8px instead of 16px) and got a little more room under it (8px instead of 4px).

**A tab of the selected works crossfades with a direction; it does not scroll the row.**
The first swipeable version jumped on a tab: the old project vanished and the new one rose in. Kevin asked for a better, very smooth transition on phone and desktop. Rejected: a smooth scroll to the chosen project, which is right between neighbours but drags four or five screenshots across the card on a longer jump, and whose speed and easing the browser decides. The crossfade lasts the same whatever the distance. So that the screenshot of a far project is already there when it fades in, all screenshots load at the first sign of interest in the widget (pointer over it, touch, focus) instead of lazily.

**The selected works on the home page can be swiped.**
Kevin asked for it on mobile. The panel used to render the one active project; it now renders every featured project as a slide in a scroll-snap row, and the active one is read back from the scroll position, as the Startup Weekend carousel does. That makes it work with a trackpad on desktop too, at no extra cost. Rejected: listening for touch events and switching on a threshold, which does not follow the finger. The cost: all slides are in the page, so the screenshots after the first load lazily, the slides not in view are `inert`, and every card is as tall as the tallest one.

**About is in the navigation, as the last link.**
It had been left out on purpose and reached only from the homepage About section. Kevin asked for the link. The order is Home, Portfolio, Services, AI, About, then the theme switch and Contact: About comes after the pages that sell, and Contact stays the last and only loud thing in the row. Five links still fit the desktop row from 768px, and the mobile sheet scrolls on a short phone, as it already could.

## 2026-10-05

**The theme switch has one icon in both themes: a custom two-tone disc, not a sun and a moon.**
It started as Tabler's moon and sun. Kevin wanted none of Tabler's suns (`sun`, `sun-high`, `sun-filled`, `brightness-up`, `sun-low`), nor a first custom one (a ring with eight pixel rays), and asked for a duotone circle. A disc beside a literal moon was the weak pairing, one picture and one symbol, so the moon went too. Sun and moon is the more intuitive pair, and Kevin chose the disc knowing it: quieter and his own, at the price of being a symbol visitors read as "theme" rather than "light" or "dark". The label for screen readers still says which theme a click leads to. The disc is one half in the text color and the other at 40% of it, split on a diagonal that echoes the hero slash; both tones come from `currentColor`, so the solid half is light on the dark theme and dark on the light one with no rule of its own. Rejected: an upright split, a ring with one solid half, a bright core in a soft halo (a radio button at 20px), red for one of the tones (the switch must stay quieter than Contact), and turning the disc when the theme changes (it would undo the inversion the colors already give). It is an inline SVG in the header rather than a local icon set wired into the `bundled-icons` plugin: one icon does not justify the plumbing.

**The home hero is at least one screen tall, and the header has a fixed height for it.**
On any screen taller than about 910px the top of the stack marquee showed at the bottom of the first screen, cut off. The hero now takes `100svh` minus `--header-height`, plus half a frame tick so the hairline of the next section is under the fold too. `svh` rather than `dvh`: it is the height on arrival, with the mobile browser bars shown, and it does not change while scrolling. The header used to be as tall as its content (69px on mobile, 69.5px on desktop); it is now held to the token. The room this adds on a tall screen is split above and below the headline and the terminal, which stay together as one group. Rejected: a maximum height for very tall screens (the cut-off marquee would come back there), and fitting the whole marquee above the fold instead (the hero content leaves no room for it on a laptop).

**The slash of the hero headline is drawn as pixels, flat rather than isometric.**
It ties the headline to the logo, which is built from cubes. A solid red staircase was kept over versions shaded with the logo's lighter reds, which turned muddy at phone sizes. It comes from a `::before` with background gradients, so the `/` is no longer in the text of the heading.

**"ai-agents" in the headline went back to the headline's own face, and JetBrains Mono was removed.**
Once the slash was drawn as pixels it carried the slash-command idea by itself, and a second typeface on two words was one signal too many. Nothing else used JetBrains Mono, so its file, `@font-face` and `--font-code` token went with it (about 40 KB less to load).

**The site has a dark theme; the system setting chooses it and a header switch overrides it.**
The site was light only. The first version followed the system through a media query and had no switch; Kevin asked for one the same day. That brought the three costs the first version avoided: a control in the header, a stored preference (now stated on the privacy page), and an inline script before first paint against a flash of the wrong theme.

**The theme switch sits just before Contact on desktop, and beside the menu button on mobile.**
Rejected: after Contact (Contact is meant to be the last thing in the row and the only loud one), inside the mobile menu only (two taps for something that should take one), and the footer (Kevin asked for the header).

**The theme switch has two states, and only a choice against the system is stored.**
Rejected a three-way control (system / light / dark): it needs a menu or a cycling icon to explain a state most visitors never think about. Clearing the stored choice when it matches the system gives the same result, since "follow the system" comes back by itself.

## 2026-10-04

**The laravel.com home page is the design reference, and the site was restyled to it.**
Applied across all pages: the section frame with red ticks, monospace eyebrows (bracketed at first, slash commands since), lighter and tighter headings, left-aligned section intros, two button kinds only, pill tab bars, and the grid texture behind the CTA band. The grey band behind the homepage services section was dropped in favor of the frame. Details in `docs/design.md`.

**Claude Code is the second design inspiration; Laravel stays the main one.**
Kevin wants the site to show that he works the AI way. Claude Code's terminal look supplies accents (slash-command eyebrows, the hero terminal, monospace meta text) while Laravel keeps deciding layout, color, and components. The limits are in `docs/design.md`.

**The homepage project tabs stay on one row and scroll; they do not wrap.**
Nine tabs do not fit the content width. Wrapping onto a second row was tried and rejected. The row scrolls sideways instead, with a fade and a small chevron on the side that hides tabs, and a clicked tab is brought to the center.

**Contact is a button in the navigation, not a link.**
On desktop it is the red button at the end of the row; on mobile it is the full-width button at the bottom of the menu. It gives every page one constant call to action.

**The hero headline ends in `/ai-agents`, in JetBrains Mono with a red slash.** (The typeface was dropped on 2026-10-05; the slash command stays.)
Four pixel fonts (Pixelify Sans, Doto, Silkscreen) and two monospaces (Geist Mono, JetBrains Mono) were tried on the words "AI agents". The slash-command version won because it ties the headline to the slash labels and to the `/whoami` terminal under it. The fonts not kept were removed.

## Earlier

Carried over from the original home page spec. Dates were not recorded.

**`CliPrompt` replaced `BootSequence` in the hero.** The boot-log terminal was kept in the tree for reference until 2026-10-07, when unused code was removed; it is in git history.

**Hero text fades in only (opacity, 300ms, no slide, no delay).** It must not compete with the terminal typewriter, which is the one on-load attention effect.
