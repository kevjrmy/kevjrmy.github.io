# Decisions: the two stacks and the AI page

Which tools are shown and where, the `/ai` page, and the dates of its journey. The state today is in `docs/stacks.md` and `docs/ai-journey.md`. Several entries speak of a marquee: the home strip was one until 2026-10-06.

## 2026-10-06

**The About toolkit grew to cover what Kevin really uses, and gained a block that is not a stack.**
He noticed Nuxt was missing. A comparison with the project badges, his notes and the dependencies of his own projects gave a list, and he chose from it: in went Nuxt, Astro, Supabase, Firebase, React Native, Android Studio, Electron and a hosting group; out stayed Leaflet and Filament. Design and video tools (Inkscape, GIMP, DaVinci Resolve, Kdenlive) got their own block, "Graphics & video", because he asked that they not be filed as tech stack. This sits against "pick the 5 or 6 that matter most" (`docs/design.md`, Avoid): that rule is for the home page, where the strip shows six; the About page is the full inventory. The `simple-icons` set was installed for the marks the other sets lack.

**On `/ai`, Cursor is highlighted like Claude Code: both cards take the red ring.**
Until then the ring was Claude Code's alone, on the idea that a page has one featured card. Kevin asked for Cursor to get the same: the agent and the editor are the pair he works in, and Markdown is the format beside them. Cursor's status went from `daily` to `main` and its role reads "Main editor", next to "Main agent". The highlight is on the `/ai` cards only; the home strip and the About toolkit mark no tool.

**The home marquee became a still strip: the three AI tools beside six classic picks.**
Kevin's words: two rows was noise. The rows ran in opposite directions, and the AI one had come to mix his three current tools with five from history. Four options were put to him: a still strip, one marquee with the AI tools pinned in front of it, a full section of two cards, and removing the stack from the home page. He chose the strip. It keeps the two stacks apart and labelled, shows only the current combo on the AI side, cuts the classic side from eleven tools to six, and gives each group a link to its full page. The marquee code is in git history. The About toolkit was trimmed to the same three right after, at his request, which settled the last place where history sat beside the current tools.

**The `/ai` page says that Claude Code is extended with plugins, skills and connectors, and does not say with which.**
The AI stack is defined as "the agents and the tools around them", and the page showed only the first half. Kevin asked for the three kinds to be mentioned. The first version was a panel with a row per kind and every installed plugin, skill and connector named with its logo. He turned it down the same day: the message is that he leverages the AI ecosystem, "not a list". It is now one line under the cards with the three kinds as tags. Rejected with it: a card per plugin, which would have drowned the three-tool combo.

**Google Flow, Nano Banana and the Claude desktop app joined the journey; the Copilot CLI did not.**
All four were found by looking at his notes and at what is installed on his machine, then put to him. He confirmed the first three and said he never used the Copilot CLI, although it is installed. An installed tool is a question to ask, not a fact to publish.

**Linear joined "Learning next", as a fourth outline.**
Kevin's request: he will need to learn it. It is an issue tracker, not an AI tool, and sits in the block all the same: the block is what he has yet to learn, and Linear is where work gets handed to agents. Its one line was written from that and is his to confirm (`to-confirm.md`). The block went from three columns to four (two by two under 1024px) so the fourth is not left alone on a row.

**Grok left the AI stack and is only named in the journey.**
Kevin still uses it, in voice mode, but for personal things and not for coding. The marquee and the About toolkit sit under "What I build with", which was no longer true for it, so it came out of `src/data/stack.ts` altogether. He asked that it stay mentioned somewhere, "maybe the timeline": the 2025 step of the journey on `/ai` keeps it, with its logo, and says he still talks to it outside of work. Do not drop that mention.

**On `/ai`, the AI stack is the current combo only: Claude Code, Cursor and Markdown. Everything else moved to the journey, which gained logos.**
Kevin's words: the combo to show is those three, and the rest (he named GitHub Copilot, DeepSeek and Google AI Studio) "belong to history for the moment so it can't be in the same section as the current ones". The nine cards with a status each ("every day", "sometimes", "used before") became three, and the six other tools are told where the history already was, in the journey, whose tags now carry logos so they are still seen. Grok was not named and went with "the rest"; Kevin then said he still uses it, for personal things and not for coding, so it stays out of the cards (the combo is the one he works with) and the journey says he still uses it outside of work. The `occasional` status went away with it: with history out of the section there was nothing left to tell apart. Markdown joined the AI stack data as the third current tool, so it also shows in the home marquee and the About toolkit. Rejected: a second grid of "used before" cards under the first, which keeps the two in one section, the thing he asked to end. This reverses the earlier line that journey tags have no logos.

**GitHub Copilot joined the journey and the AI stack, and the DALL·E 2 step no longer claims to be the first.**
Kevin remembered it afterwards: Copilot in VS Code, as autocompletion, from the moment it was available. Whether that was before or after DALL·E 2 is not known (`docs/ai-journey.md`), so the page gives both the year 2022 and says of neither that it came first.

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
