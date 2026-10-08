# Content

Who the site is about, what it says and how it sounds. Where each sentence is written, and how the three languages work, is `docs/i18n.md`; the tools and the AI page are `docs/stacks.md`.

## Facts

- Kevin Jeremy Gautier, full-stack developer, based in Valencia, Spain.
- Web Developer (Node.js) diploma from OpenClassrooms (RNCP-registered), freelance since 2021.
- Languages: French (native), English C1 (Cambridge), Spanish C1 (DELE).
- Core stack as presented: JavaScript (Node.js, React, TypeScript) and PHP (Laravel), plus Vue.
- The site is in English, French and Spanish, and English is the main one (`docs/i18n.md`). Client work is in French, Spanish, and English.

The site is about Kevin's development and consulting work, and nothing else. His resumes are broader: they may cover work that has no place here, so a line on a resume is not a reason to add it to the site. They are in `private/`, which git ignores: the resume is his to send, and the site neither shows it nor offers it for download. Where the two tell the same fact (those above, the stack, the award, the projects), a change on one side means a check of the other; `private/README.md` says which line matches which part.

## Positioning

AI-first. Since this site was started, Kevin's work has moved from WordPress and hand-written code to building with AI agents, and the site should say so everywhere it describes how he works.

Which tool is shown where, and with what status, is in `docs/stacks.md`.

Rules:

- Write "Claude Code" or "AI agents", not a vague "AI" or "AI tools". The `/ai` page is the one place where plain "AI" is right, because it covers the whole field (images, chat, video, voice), not only agents; its nav label is "AI" for the same reason.
- A project built with Claude Code gets the `Claude Code` badge first in its `stack`.
- The framing: the agents write fast; Kevin directs, reviews, and answers for the result.
- **WordPress is last.** It stays on the site for history and for existing clients who still need it, but it goes at the end of every list (projects, services, toolkit, filters) and never in a highlighted spot such as the homepage service cards.

Where it shows today: hero headline (`/ai-agents`) and intro, `whoami` terminal, the AI group of the home stack strip, homepage services subline and About paragraph, About page intro, timeline and AI stack block, the whole `/ai` page, services page intro, portfolio intro, project badges.

## Voice

Taken from the copy already on the site. Match it when adding more. This is the English voice; what the French and the Spanish add to it is in `docs/i18n.md`.

- First person, direct, plain words.
- Short sentences. Headings that say something ("A developer who gives a damn", "No ghost clients") rather than label a section.
- Confident without being salesy. The CTA line is the reference: "no commitment, no pitch, just a conversation".
- AI agents do the typing; the craft and the responsibility stay with Kevin.
- **No em dash (—), anywhere on the site.** Kevin's rule (2026-10-07), for the three languages, and for alt texts and `aria-label`s as much as for visible text. Write the sentence so it does not need one: a colon before a list or an explanation, a comma for an aside, a full stop for a new idea, brackets for "(opens in a new tab)". Between two short labels (the footer line, the title of the hero terminal, a caption's place and date) the separator is the middle dot `·`.

## Services

Two separate lists, edited independently:

- Homepage teaser, 3 cards: `src/components/Home/Services/Services.tsx`, words under `homeServices`.
- Full list: `src/pages/services/Services.tsx`, words under `services`.

A service that appears in both must be kept consistent by hand, in each language.

**No prices, and one call to action.** The services page is not a price list. It is an invitation: the visitor reads what Kevin does, then is asked once, under the cards, to tell him about their project, idea, business, task or gig. So:

- No figure on a card, and no "from", "Let's talk" or "on request" in its place either.
- No button or link on a card, and none in the page header. The one call to action is the band under the grid (`Cta`, with a heading and subline of its own on this page), and it speaks for every service.
- The terms on `/info` say the same thing: nothing is listed, each job is quoted after a conversation.

**AI Automation** is the lead service, first on the services page and on the homepage. What it sells: taking manual, repetitive work (typically a spreadsheet someone fills in by hand) and replacing it with a custom tool, built with AI agents. The reference case is Limpiezas El Imperio: the owner kept his accounts in an Excel workbook he rewrote every month, and it became a full accounting app (the "El Imperio Contabilidad" project).

- It is called "automation", not "integration": nothing in that case plugs an AI model into the client's software. The AI is in how the tool gets built; the tool itself is ordinary software. Do not write that the client's app "uses AI" unless a project really has a model inside it.

## Contact details

The WhatsApp number, LinkedIn, GitHub, and email are the same in every language, so they are not in the messages: they are hard-coded in four components. Change them together:

- `src/components/Home/CTA/Cta.tsx` (WhatsApp link)
- `src/pages/contact/Contact.tsx` (all four)
- `src/components/Footer/Footer.tsx` (LinkedIn, GitHub)
- `src/pages/info/Info.tsx` (email)

## Privacy page

`/info` states that the site uses no cookies, analytics, forms, or third-party fonts, icons, or scripts, and that the one thing it saves in the browser is the light or dark choice made with the header switch (`localStorage`, key `theme`). That is true today. Adding any of those (an analytics script, a contact form, a font or icon loaded from a CDN, anything else saved in the browser) makes the page wrong: update the `info` section of the three message files in the same change, and its "Last updated" line. The language is not saved in the browser: it is in the URL (`docs/i18n.md`), and it has to stay that way for the page to stay true.

## Startup Weekend

Kevin's team, Cuanto Cuesta, won the Grand Prize at Techstars Startup Weekend Valencia in June 2026 (54 hours, team of six). Cuanto Cuesta is price comparison for local services in Spain; its public site is https://cuantocuesta.eu. The homepage has a section for it with a photo carousel.

- Photos are in `public/images/startup-weekend/`, each as `<name>.webp` (1440x960) and `<name>-720.webp`, cropped to 3:2. The originals are not kept with the project: a new crop starts from Kevin's own copies.
- Lead with "1st place": the award's official name, "Grand Prize", does not say on its own that it was a competition or that the team came first. The official name stays in the supporting text, since it is what the certificate in the photos reads.
- Only say about Cuanto Cuesta what its public site says. The project's working notes are private.
