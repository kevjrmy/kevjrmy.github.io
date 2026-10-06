# Content

Who the site is about, how the copy sounds, and where each piece of copy lives.

## Facts

- Kevin Jeremy Gautier, full-stack developer, based in Valencia, Spain.
- Web Developer (Node.js) diploma from OpenClassrooms (RNCP-registered), freelance since 2021.
- Languages: French (native), English C1 (Cambridge), Spanish C1 (DELE).
- Core stack as presented: JavaScript (Node.js, React, TypeScript) and PHP (Laravel), plus Vue.
- The site is written in English. Client work is in French, Spanish, and English.

## Positioning

AI-first. Since this site was started, Kevin's work has moved from WordPress and hand-written code to building with AI agents, and the site should say so everywhere it describes how he works.

The tools, and how to present them:

| Tool | Status | On the site |
|------|--------|-------------|
| Claude Code | Main agent, used daily | Named first, everywhere AI is mentioned |
| Cursor | Main IDE, used daily | Named with Claude Code where there is room |
| Codex, OpenCode, Antigravity, Google AI Studio, GitHub Copilot | Used before | Listed as experience |
| Grok | Used sometimes, in voice mode | AI stack lists only |
| DeepSeek | Used since R1 came out (January 2025); still used, but not often | AI stack lists and the journey on `/ai` |
| Hermes (Hermes Agent, the open-source agent by Nous Research), Jev (TypeSafe AI's first "System One" model: typed decisions with a confidence score, announced September 2026), local and open-source LLMs (Ollama to start with) | Planned, not learned yet. Kevin has never run a model on his own machine | On the `/ai` page only, under "Learning next", labelled "coming soon", with no logo. Hermes and Jev link to their own sites. Nowhere else until actually used |

Rules:

- Write "Claude Code" or "AI agents", not a vague "AI" or "AI tools". The `/ai` page is the one place where plain "AI" is right, because it covers the whole field (images, chat, video, voice), not only agents; its nav label is "AI" for the same reason.
- A project built with Claude Code gets the `Claude Code` badge first in its `stack`.
- The framing: the agents write fast; Kevin directs, reviews, and answers for the result.
- **WordPress is last.** It stays on the site for history and for existing clients who still need it, but it goes at the end of every list (projects, services, toolkit, marquee, filters) and never in a highlighted spot such as the homepage service cards.

Where it shows today: hero headline (`/ai-agents`) and intro, `/whoami` terminal, the AI row of the stack marquee, homepage services subline and About paragraph, About page intro, timeline and AI stack block, the whole `/ai` page, services page intro, portfolio intro, project badges.

## Two stacks

Kevin presents his stack as two, and the difference is the point: it shows that working with AI agents is a skill of its own, with its own tools, next to the code.

- **AI stack**: the agents and the tools around them. Claude Code goes here.
- **Classic stack**: languages, frameworks and platforms. Node.js goes here.

Both are data in `src/data/stack.ts`. Every tool belongs to exactly one, and no list on the site mixes the two. "Classic" is Kevin's word for it; keep it.

The AI stack carries a status per tool, shown only on the `/ai` page: `main` (Claude Code, "every day", the one card with the red ring), `daily` (Cursor, "every day"), `occasional` (Grok, DeepSeek, "sometimes") and `before` ("used before"). Tools Kevin plans to learn are a separate list (`upcomingAiTools`) and appear only there, as "coming soon". The page is expected to grow: Hermes moves into the AI stack once Kevin has built something with it.

## AI journey

What Kevin told about his path, for the journey on the `/ai` page (`src/pages/ai/Ai.tsx`). The order is his; he may add steps later.

1. DALL·E 2, his first contact (2022).
2. GitHub Copilot in VS Code, as a hint and autocompletion helper, from 2022 (the year it opened to everyone; Kevin confirmed it was not the 2021 preview). Whether it came before or after DALL·E 2 is not known, so the page says of neither that it was first.
3. ChatGPT: account created a few days after its release, December 2022, when it ran on GPT-3.5.
4. Image generation: Midjourney, and free models on Hugging Face.
5. Bard, before it was renamed Gemini.
6. Claude: account opened on 30 June 2024 (read from his account data; the site says "June 2024"). Kevin's own memory is "around 2023, I guess". The page keeps the account date: claude.ai only opened in Europe on 14 May 2024. If he used Claude earlier some other way, he has to say how before the page says 2023.
7. Video generators: Veo 3, Sora, Magnific. He places them in 2024; Veo 3 came out in May 2025, so the page says "2024 → 25".
8. DeepSeek: started right after DeepSeek-R1 was released (20 January 2025).
9. Antigravity, in the IDE.
10. The AI course on OpenClassrooms (its exact title is not known here).
11. Grok, in voice mode.
12. Agents: Google AI Studio in the browser, then OpenCode and Codex in the terminal.
13. Claude Code, his main agent since (first run on his machine: April 2026).

Around it: he knew Markdown before any of this, he goes to AI meetups such as AI Tinkerers with friends and they share tips, and he has never used Ollama or run a model locally.

The dates that are certain: 2022 (DALL·E 2 and Copilot), December 2022 (ChatGPT), January 2025 (DeepSeek-R1), June 2024 (the Claude account), and that DALL·E 2 came before ChatGPT. The other years on the page were placed from when each product existed and from the order above, and are listed in `todo.md` for Kevin to confirm. Do not add a precise date he has not given.

## Voice

Taken from the copy already on the site. Match it when adding more.

- First person, direct, plain words.
- Short sentences. Headings that say something ("A developer who gives a damn", "No ghost clients") rather than label a section.
- Confident without being salesy. The CTA line is the reference: "no commitment, no pitch, just a conversation".
- AI agents do the typing; the craft and the responsibility stay with Kevin.

## Where copy lives

All copy is hard-coded in components. There are no content files or translations.

| Content | File |
|---------|------|
| Hero headline, intro, buttons | `src/components/Home/Hero/Hero.tsx` |
| Terminal `/whoami` answer and closing prompt | `src/components/Home/CliPrompt/CliPrompt.tsx` |
| Both stacks (home marquee, About toolkit, `/ai` page) | `src/data/stack.ts` |
| AI page: intro, journey, practice cards | `src/pages/ai/Ai.tsx` |
| Startup Weekend award: text, facts, photo captions | `src/components/Home/StartupWeekend/StartupWeekend.tsx` |
| Homepage trust signals | `src/components/Home/About/About.tsx` |
| Timeline, education, languages, values | `src/pages/about/About.tsx` |
| CTA band | `src/components/Home/CTA/Cta.tsx` |
| Navigation labels, mobile menu tagline | `src/components/Header/Header.tsx` |
| Contact methods | `src/pages/contact/Contact.tsx` |
| Terms of use and privacy | `src/pages/info/Info.tsx` |

## Services

Two separate lists, edited independently:

- Homepage teaser, 3 cards, no prices: `src/components/Home/Services/Services.tsx`.
- Full list with prices: `src/pages/services/Services.tsx`.

A service that appears in both must be kept consistent by hand.

**AI Automation** is the lead service, first on the services page and on the homepage. What it sells: taking manual, repetitive work (typically a spreadsheet someone fills in by hand) and replacing it with a custom tool, built with AI agents. The reference case is Limpiezas El Imperio: the owner kept his accounts in an Excel workbook he rewrote every month, and it became a full accounting app (the "El Imperio Contabilidad" project).

- It is called "automation", not "integration": nothing in that case plugs an AI model into the client's software. The AI is in how the tool gets built; the tool itself is ordinary software. Do not write that the client's app "uses AI" unless a project really has a model inside it.
- The price is "Let's talk" until Kevin sets one.

## Contact details

The WhatsApp number, LinkedIn, GitHub, and email are hard-coded in four places. Change them together:

- `src/components/Home/CTA/Cta.tsx` (WhatsApp link)
- `src/pages/contact/Contact.tsx` (all four)
- `src/components/Footer/Footer.tsx` (LinkedIn, GitHub)
- `src/pages/info/Info.tsx` (email)

## Privacy page

`/info` states that the site uses no cookies, analytics, forms, or third-party fonts, icons, or scripts, and that the one thing it saves in the browser is the light or dark choice made with the header switch (`localStorage`, key `theme`). That is true today. Adding any of those (an analytics script, a contact form, a font or icon loaded from a CDN, anything else saved in the browser) makes the page wrong: update `src/pages/info/Info.tsx` in the same change.

## Startup Weekend

Kevin's team, Cuanto Cuesta, won the Grand Prize at Techstars Startup Weekend Valencia in June 2026 (54 hours, team of six). Cuanto Cuesta is price comparison for local services in Spain; its public site is https://cuantocuesta.eu. The homepage has a section for it with a photo carousel.

- Photos are in `public/images/startup-weekend/`, each as `<name>.webp` (1440x960) and `<name>-720.webp`, cropped to 3:2. The originals are not in git.
- Lead with "1st place": the award's official name, "Grand Prize", does not say on its own that it was a competition or that the team came first. The official name stays in the supporting text, since it is what the certificate in the photos reads.
- Only say about Cuanto Cuesta what its public site says. The project's working notes are private.

## Work to showcase

What the portfolio is meant to cover, for writing copy and choosing projects:

- Static sites: Astro (Pickleball Valencia, rebuilt from WordPress in 2026).
- SPA: Vue (PlanetaX PWA), React.
- SSR: Nuxt (Rachel Blot, Fesma), Next.js (Limpiezas El Imperio: the public website and a private accounting app for the same client, both 2026).
- Laravel: 1 past project and 2 current (1 going to production soon, French client).
- Kotlin Android app.
- PWAs: PlanetaX (live), SUNspot (Vue + Firebase, live since 2026), Le Petit Cours (Next.js + Supabase, Kevin's own open-source French course for Spanish speakers, built with Claude Code, 2026).
- Vector and logo design (Inkscape).
- Video editing: DaVinci Resolve, Kdenlive, and AI video (Google Flow / Veo / Nano Banana).
- AI agents: see Positioning above.
- WordPress (kept last): Ethica Anabel Orzáez, a beauty salon site with a WooCommerce shop (2026). Also Marcas que dejan huellas (early work), which is off the site while its domain is down; see `todo.md`.
