# The two stacks and the AI page

Which tools the site shows, where, and how each place looks. Three views read the same data: the home strip, the About toolkit and the `/ai` page. The facts behind the journey of that page are in `docs/ai-journey.md`.

## Two stacks

Kevin presents his stack as two, and the difference is the point: it shows that working with AI agents is a skill of its own, with its own tools, next to the code.

- **AI stack**: the agents and the tools around them. Claude Code goes here.
- **Classic stack**: languages, frameworks and platforms. Node.js goes here.

Both are data in `src/data/stack.ts`. Every tool belongs to exactly one, and no list on the site mixes the two. "Classic" is Kevin's word for it; keep it.

The classic stack on the About page has to cover what the portfolio shows: a technology that is a badge on a project belongs in it. Nuxt, Astro, Supabase and Firebase were missing until 2026-10-06 and were added for that reason. Each framework sits beside the one built on it (Vue then Nuxt, React then Next.js). The same day Kevin added React Native, Android Studio (his wording, not "Android"), Electron, and a "Hosting & deploy" group (GitHub Pages, Vercel, Laravel Cloud). He said no to Leaflet and Filament, although both are in projects of his: do not add them.

**Graphics and video are not a stack.** Inkscape, GIMP, DaVinci Resolve and Kdenlive are what Kevin draws and edits video with. They have their own block on the About page, "Graphics & video", under the two stacks, and are data of their own (`creativeTools`). They never go in the AI or the classic stack, nor on the home strip.

The AI stack carries a status per tool: `main` (Claude Code and Cursor, the main agent and the main editor: the two cards with the red ring), `daily` (Markdown) and `before` (everything else). The current combo is those three, Claude Code + Cursor + Markdown, and on the `/ai` page only they are cards under "What I work with". A `before` tool is history: it is not shown in the same section as the current ones, and appears in the journey, with its logo. Tools Kevin plans to learn are a separate list (`upcomingAiTools`) and appear only on that page, as "coming soon". The page is expected to grow: Hermes moves into the AI stack once Kevin has built something with it.

The `/ai` page also says that Claude Code is extended with plugins, skills and connectors, in one line under the cards. It names the three kinds and nothing more. That is Kevin's rule: the message is that he uses the ecosystem around the agent, "not a list". Do not name the plugins, skills or connectors one by one (a first version did: Vercel, Stripe, a Laravel Cloud skill, Google Drive).

The home strip follows the same rule as `/ai`: its AI group is the current three only (`currentAiStack`), and its classic group is six picks (`classicPicks`: Laravel, Vue, React, TypeScript, Node.js, Next.js; WordPress is not one of them). The About toolkit does the same since 2026-10-06. So the current three are the AI stack everywhere it is shown, and the history tools appear only in the journey.

## The tools

The tools, and how to present them:

| Tool | Status | On the site |
|------|--------|-------------|
| Claude Code | Main agent, used daily | Named first, everywhere AI is mentioned |
| Cursor | Main IDE, used daily | Named with Claude Code where there is room. On `/ai` its card is highlighted the same way as Claude Code's |
| Markdown | The format of the context files the agents read, written daily. Kevin knew it before any of this | Third and last of the current combo, after Claude Code and Cursor |
| Codex, OpenCode, Antigravity, Google AI Studio, GitHub Copilot | Used before | History: the journey on `/ai`, with their logos, and nowhere else. Not in any AI stack list |
| DeepSeek (since R1 came out, January 2025) | History "for the moment", in Kevin's words (2026-10-06). It was "used sometimes" before that, and may come back | Same as the line above |
| Grok (voice mode) | Still used, but for personal things, not for coding | Not in the AI stack at all (no card, not in the home strip, not in the About toolkit): those list what he builds with. It must stay mentioned somewhere, and that place is the journey on `/ai`, which says he still talks to it outside of work |
| Hermes (Hermes Agent, the open-source agent by Nous Research), Jev (TypeSafe AI's first "System One" model: typed decisions with a confidence score, announced September 2026), local and open-source LLMs (Ollama to start with), Linear (the issue tracker; added 2026-10-06, "I'll need to learn Linear") | Planned, not learned yet. Kevin has never run a model on his own machine | On the `/ai` page only, under "Learning next", labelled "coming soon", with no logo. Hermes, Jev and Linear link to their own sites. Nowhere else until actually used |
| Claude desktop app | Used, outside the terminal (confirmed 2026-10-06) | The last step of the journey on `/ai`. Not a card: the combo is three |
| Zapier, n8n, GitHub Copilot CLI | Never used. The Copilot CLI is installed on his machine, which proves nothing: he never ran it | Not on the site. Kevin left them out on purpose: the site lists only what he has used, or says plainly that it is still to learn |

## The data

`src/data/stack.ts` is the one list of technologies, split in two: the AI stack and the classic stack. Three places read it: the home strip (one group per stack), the toolkit of the About page, and the `/ai` page. A tool added to the AI stack shows in all three only while it is in current use (status `main` or `daily`, exported as `currentAiStack`); a `before` tool is shown in none of them and only lends its logo to the journey on `/ai`. The classic group of the home strip is its own short list, `classicPicks`. The same file holds `creativeTools`, the graphics and video tools of the About page, which are not a stack. Do not declare a stack array in a component again.

What is a sentence is not in that file but in the messages of each language (`docs/i18n.md`): the role of a current tool (`ai.stack.roles`, under its label), the title of a classic group (`stack.groups`), and the name and the one line of each tool still to learn (`ai.stack.upcoming`).

## How each view looks

The stack is shown as two, and the layout has to make that readable at a glance.

- **Home strip.** One still strip under the hero, two groups: the AI stack (the three current tools) and the classic stack (six picks). Each group has its slash-command label, a quiet link to its full page (`/ai`, `/about#stack`), and its tools as logo and name. From 1024px the groups sit side by side on one line, a hairline between them; below that they are stacked, and on a phone the tools go three per line. Nothing moves: it replaced a two-row marquee whose rows ran in opposite directions, which read as noise. Do not bring motion back to it.
- **About toolkit.** Three titled blocks. The AI stack is one row of the three current tools with a secondary button to `/ai`. The classic stack is five groups in four columns: Backend, Frontend and "Mobile & desktop" take a column each, and the two short ones, "Hosting & deploy" then "Tools & other", share the fourth (two columns under 1024px). A group title has to fit its column on one line in every language, which is why the French and Spanish ones are not word for word (`docs/i18n.md`). Last, "Graphics & video", one row like the AI stack: it is set apart because it is not a stack.
- **`/ai` page.** Three levels, and each looks different. What Kevin works with today is a small card with a status in monospace; only the current combo gets one. Claude Code and Cursor, the main agent and the main editor, both take the soft red ring of a featured card and a red status; Markdown is used every day too and says so, without the ring. Right under the cards, attached to them, one full-width panel says the agent is extended: a monospace key ("plugged in"), one sentence, and the three kinds (plugins, skills, connectors) as small tags with a line icon. It is one line of fact, not a fourth card and not an inventory: the combo stays three. What he used before is not a card and not in that section: it is a tag in the journey. What is not learned yet sits apart, under "Learning next", four across on a wide screen and two by two below that: a dashed outline with no fill, no shadow and no logo, labelled "coming soon", with one line saying what it is. Raised means current.
- **Journey tags.** Each tool of a step is a small monospace tag with its logo in front, at text size. A product with no mark of its own takes its maker's (DALL·E 2 and Sora carry OpenAI's, Veo 3 and Google Flow carry Google's, Nano Banana carries Gemini's); one with neither stays a plain tag. The step that has not happened yet ("Next") has a hollow dot and plain tags: no logo before it is learned, as under "Learning next".

The home strip (`components/Home/Stack`) is static. Below 768px its tools are laid out three per line by a grid, not left to wrap, so six picks never break as five and one; the column gap at 1024px is a `clamp()` because the two groups only just fit side by side there.
