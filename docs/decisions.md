# Decisions

Choices that are not obvious from the code, with the reason. Read before reversing one. Add an entry when making a new one: what was chosen, what was rejected, why.

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

**The About toolkit grew to cover what Kevin really uses, and gained a block that is not a stack.**
He noticed Nuxt was missing. A comparison with the project badges, his notes and the dependencies of his own projects gave a list, and he chose from it: in went Nuxt, Astro, Supabase, Firebase, React Native, Android Studio, Electron and a hosting group; out stayed Leaflet and Filament. Design and video tools (Inkscape, GIMP, DaVinci Resolve, Kdenlive) got their own block, "Graphics & video", because he asked that they not be filed as tech stack. This sits against "pick the 5 or 6 that matter most" (`docs/design.md`, Avoid): that rule is for the home page, where the strip shows six; the About page is the full inventory. The `simple-icons` set was installed for the marks the other sets lack.

**About is in the navigation, as the last link.**
It had been left out on purpose and reached only from the homepage About section. Kevin asked for the link. The order is Home, Portfolio, Services, AI, About, then the theme switch and Contact: About comes after the pages that sell, and Contact stays the last and only loud thing in the row. Five links still fit the desktop row from 768px, and the mobile sheet scrolls on a short phone, as it already could.

**On `/ai`, Cursor is highlighted like Claude Code: both cards take the red ring.**
Until then the ring was Claude Code's alone, on the idea that a page has one featured card. Kevin asked for Cursor to get the same: the agent and the editor are the pair he works in, and Markdown is the format beside them. Cursor's status went from `daily` to `main` and its role reads "Main editor", next to "Main agent". The highlight is on the `/ai` cards only; the home strip and the About toolkit mark no tool.

**The home marquee became a still strip: the three AI tools beside six classic picks.**
Kevin's words: two rows was noise. The rows ran in opposite directions, and the AI one had come to mix his three current tools with five from history. Four options were put to him: a still strip, one marquee with the AI tools pinned in front of it, a full section of two cards, and removing the stack from the home page. He chose the strip. It keeps the two stacks apart and labelled, shows only the current combo on the AI side, cuts the classic side from eleven tools to six, and gives each group a link to its full page. The marquee code is in git history. The About toolkit was trimmed to the same three right after, at his request, which settled the last place where history sat beside the current tools.

**The `/ai` page says that Claude Code is extended with plugins, skills and connectors, and does not say with which.**
The AI stack is defined as "the agents and the tools around them", and the page showed only the first half. Kevin asked for the three kinds to be mentioned. The first version was a panel with a row per kind and every installed plugin, skill and connector named with its logo. He turned it down the same day: the message is that he leverages the AI ecosystem, "not a list". It is now one line under the cards with the three kinds as tags. Rejected with it: a card per plugin, which would have drowned the three-tool combo.

**Google Flow, Nano Banana and the Claude desktop app joined the journey; the Copilot CLI did not.**
All four were found by looking at his notes and at what is installed on his machine, then put to him. He confirmed the first three and said he never used the Copilot CLI, although it is installed. An installed tool is a question to ask, not a fact to publish.

**Linear joined "Learning next", as a fourth outline.**
Kevin's request: he will need to learn it. It is an issue tracker, not an AI tool, and sits in the block all the same: the block is what he has yet to learn, and Linear is where work gets handed to agents. Its one line was written from that and is his to confirm (`todo.md`). The block went from three columns to four (two by two under 1024px) so the fourth is not left alone on a row.

**Grok left the AI stack and is only named in the journey.**
Kevin still uses it, in voice mode, but for personal things and not for coding. The marquee and the About toolkit sit under "What I build with", which was no longer true for it, so it came out of `src/data/stack.ts` altogether. He asked that it stay mentioned somewhere, "maybe the timeline": the 2025 step of the journey on `/ai` keeps it, with its logo, and says he still talks to it outside of work. Do not drop that mention.

**On `/ai`, the AI stack is the current combo only: Claude Code, Cursor and Markdown. Everything else moved to the journey, which gained logos.**
Kevin's words: the combo to show is those three, and the rest (he named GitHub Copilot, DeepSeek and Google AI Studio) "belong to history for the moment so it can't be in the same section as the current ones". The nine cards with a status each ("every day", "sometimes", "used before") became three, and the six other tools are told where the history already was, in the journey, whose tags now carry logos so they are still seen. Grok was not named and went with "the rest"; Kevin then said he still uses it, for personal things and not for coding, so it stays out of the cards (the combo is the one he works with) and the journey says he still uses it outside of work. The `occasional` status went away with it: with history out of the section there was nothing left to tell apart. Markdown joined the AI stack data as the third current tool, so it also shows in the home marquee and the About toolkit. Rejected: a second grid of "used before" cards under the first, which keeps the two in one section, the thing he asked to end. This reverses the earlier line that journey tags have no logos.

**The prices are shown as they are, with no "+ VAT" beside them.**
A friend suggested adding it, since most clients are professionals. Kevin declined: the listed figure is the amount a client pays. Do not add a VAT mention to the prices or the terms unless he says that has changed.

**GitHub Copilot joined the journey and the AI stack, and the DALL·E 2 step no longer claims to be the first.**
Kevin remembered it afterwards: Copilot in VS Code, as autocompletion, from the moment it was available. Whether that was before or after DALL·E 2 is not known (`docs/content.md`, AI journey), so the page gives both the year 2022 and says of neither that it came first.

**The prices follow a friend's figures, which replaced the plain doubling below.**
The same friend then gave numbers: 45€ an hour where it was 15€ (audit and classes, the two hourly services), PWA 1500€, web application 2500€, consulting 150€ a session, WordPress 500€. Against the doubled prices that is higher for the hourly work, consulting and WordPress, 100€ lower for a PWA and 100€ higher for a web application. Still "from" prices; the two "Let's talk" services did not change.

**Every listed price was doubled.**
On a friend's advice ("double your prices"), and Kevin's decision. Audit and classes went from 15€ to 30€ an hour, PWA from 800€ to 1600€, web application from 1200€ to 2400€, consulting from 50€ to 100€ a session, WordPress from 200€ to 400€. The two "Let's talk" services have no figure and did not change. These are still "from" prices, as the terms page says.

**The stack is split in two, AI and classic, everywhere it is shown.**
Kevin wants the site to show that he takes AI seriously and professionally, and one list with Claude Code beside Node.js said the opposite: an agent filed as one more technology. The two stacks are now separate data (`src/data/stack.ts`) and separate on screen: two marquee rows on the home page, two blocks on the About page. "Classic" is his word. Rejected: keeping "AI" as one group among Backend, Frontend and Mobile, which is what the About page did.

**AI has its own page, `/ai`, in the main navigation.**
It holds the AI stack with a status per tool, the journey since 2022, and how Kevin works with agents. It is in the nav, unlike `/about`, because it is the positioning of the site and it is going to grow. Its label is "AI", the one place where the plain word is right (`docs/content.md`, Positioning). Rejected: a section on the About page, which has no nav link and would have buried it.

**Hermes and Jev are shown before Kevin has used them, as "coming soon".**
This reverses the earlier rule ("not shown until actually used"), at his request. What keeps it honest: they appear on `/ai` only, with no logo, in a dashed outline instead of a card, and never in the marquee or the About page, which list what he works with.

**What Kevin has yet to learn is its own block, "Learning next": Hermes, Jev, and local LLMs.**
First built as two dashed cards at the end of the AI stack grid, with a name and nothing else, because what Hermes and Jev were was not known. Kevin then gave their sources and added a third subject, local and open-source models (he has never used Ollama). Each now has one line saying what it is, and the two products link out. They left the grid so that the stack is only what he has worked with.

**The Claude step keeps the account date, June 2024, against Kevin's memory of "around 2023".**
His account was created on 30 June 2024, and claude.ai was not offered in Europe before 14 May 2024. He said "I guess", so the date that can be shown stays until he says otherwise.

**Video generators are dated "2024 → 25".**
Kevin remembers 2024. Of the three he named, Veo 3 dates from May 2025, so a single year would be wrong either way.

**The journey gives a year only where one can be defended.**
Kevin gave an order and two dates (ChatGPT in December 2022; the Claude account date was read from his account). The other steps are placed in the years the products existed, grouped into wide periods ("2025 → 26") rather than given a month. ChatGPT is given as running on GPT-3.5 at the time, which Kevin confirmed (he first remembered "3.1").

**The marquee repeats its lists instead of adding tools to fill the width.**
Split in two, each row is shorter than a wide screen, and a marquee copy narrower than the screen shows a gap. Padding the AI row with every tool from the journey would have turned "my stack" into "everything I tried".

## 2026-10-05

**The theme switch has one icon in both themes: a custom two-tone disc, not a sun and a moon.**
It started as Tabler's moon and sun. Kevin wanted none of Tabler's suns (`sun`, `sun-high`, `sun-filled`, `brightness-up`, `sun-low`), nor a first custom one (a ring with eight pixel rays), and asked for a duotone circle. A disc beside a literal moon was the weak pairing, one picture and one symbol, so the moon went too. Sun and moon is the more intuitive pair, and Kevin chose the disc knowing it: quieter and his own, at the price of being a symbol visitors read as "theme" rather than "light" or "dark". The label for screen readers still says which theme a click leads to. The disc is one half in the text color and the other at 40% of it, split on a diagonal that echoes the hero slash; both tones come from `currentColor`, so the solid half is light on the dark theme and dark on the light one with no rule of its own. Rejected: an upright split, a ring with one solid half, a bright core in a soft halo (a radio button at 20px), red for one of the tones (the switch must stay quieter than Contact), and turning the disc when the theme changes (it would undo the inversion the colors already give). It is an inline SVG in the header rather than a local icon set wired into the `bundled-icons` plugin: one icon does not justify the plumbing.

**The home hero is at least one screen tall, and the header has a fixed height for it.**
On any screen taller than about 910px the top of the stack marquee showed at the bottom of the first screen, cut off. The hero now takes `100svh` minus `--header-height`, plus half a frame tick so the hairline of the next section is under the fold too. `svh` rather than `dvh`: it is the height on arrival, with the mobile browser bars shown, and it does not change while scrolling. The header used to be as tall as its content (69px on mobile, 69.5px on desktop); it is now held to the token. The room this adds on a tall screen is split above and below the headline and the terminal, which stay together as one group. Rejected: a maximum height for very tall screens (the cut-off marquee would come back there), and fitting the whole marquee above the fold instead (the hero content leaves no room for it on a laptop).

**The slash of that headline is drawn as pixels, flat rather than isometric.**
It ties the headline to the logo, which is built from cubes. A solid red staircase was kept over versions shaded with the logo's lighter reds, which turned muddy at phone sizes. It comes from a `::before` with background gradients, so the `/` is no longer in the text of the heading.

**"ai-agents" in the headline went back to the headline's own face, and JetBrains Mono was removed.**
Once the slash was drawn as pixels it carried the slash-command idea by itself, and a second typeface on two words was one signal too many. Nothing else used JetBrains Mono, so its file, `@font-face` and `--font-code` token went with it (about 40 KB less to load).

**The site has a dark theme; the system setting chooses it and a header switch overrides it.**
The site was light only. The first version followed the system through a media query and had no switch; Kevin asked for one the same day. That brought the three costs the first version avoided: a control in the header, a stored preference (now stated on the privacy page), and an inline script before first paint against a flash of the wrong theme.

**The switch sits just before Contact on desktop, and beside the menu button on mobile.**
Rejected: after Contact (Contact is meant to be the last thing in the row and the only loud one), inside the mobile menu only (two taps for something that should take one), and the footer (Kevin asked for the header).

**The switch has two states, and only a choice against the system is stored.**
Rejected a three-way control (system / light / dark): it needs a menu or a cycling icon to explain a state most visitors never think about. Clearing the stored choice when it matches the system gives the same result, since "follow the system" comes back by itself.

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
