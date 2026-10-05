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
| Cursor | Main IDE | Named with Claude Code where there is room |
| Codex, OpenCode, Antigravity | Used before | Listed as experience |
| Grok | Used sometimes | Toolkit list only |
| Hermes, "Jev" | Planned, not learned yet ("Jev" is as Kevin wrote it; spelling to confirm) | Not shown until actually used |

Rules:

- Write "Claude Code" or "AI agents", not a vague "AI" or "AI tools".
- A project built with Claude Code gets the `Claude Code` badge first in its `stack`.
- The framing: the agents write fast; Kevin directs, reviews, and answers for the result.
- **WordPress is last.** It stays on the site for history and for existing clients who still need it, but it goes at the end of every list (projects, services, toolkit, marquee, filters) and never in a highlighted spot such as the homepage service cards.

Where it shows today: hero headline (`/ai-agents`) and intro, `/whoami` terminal, stack marquee, homepage services subline and About paragraph, About page intro, timeline and AI toolkit group, services page intro, portfolio intro, project badges.

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
| Stack marquee items | `src/components/Home/Stack/Stack.tsx` |
| Startup Weekend award: text, facts, photo captions | `src/components/Home/StartupWeekend/StartupWeekend.tsx` |
| Homepage trust signals | `src/components/Home/About/About.tsx` |
| Timeline, education, languages, stack groups, values | `src/pages/about/About.tsx` |
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
