# Content

Who the site is about, how the copy sounds, and where each piece of copy lives.

## Facts

- Kevin Jeremy, full-stack developer, based in Valencia, Spain.
- Self-taught, freelance since 2021.
- Core stack as presented: Laravel, Vue, React, TypeScript, Node.
- The site is written in English. Client work is in French, Spanish, and English.

## Voice

Taken from the copy already on the site. Match it when adding more.

- First person, direct, plain words.
- Short sentences. Headings that say something ("A developer who gives a damn", "No ghost clients") rather than label a section.
- Confident without being salesy. The CTA line is the reference: "no commitment, no pitch, just a conversation".
- Craft first, AI as an accelerator, not a replacement.

## Where copy lives

All copy is hard-coded in components. There are no content files or translations.

| Content | File |
|---------|------|
| Hero headline, intro, buttons | `src/components/Home/Hero/Hero.tsx` |
| Terminal `whoami` output | `src/components/Home/CliPrompt/CliPrompt.tsx` |
| Stack marquee items | `src/components/Home/Stack/Stack.tsx` |
| Homepage trust signals | `src/components/Home/About/About.tsx` |
| Timeline, stack groups, values | `src/pages/about/About.tsx` |
| CTA band | `src/components/Home/CTA/Cta.tsx` |
| Contact methods | `src/pages/contact/Contact.tsx` |

## Services

Two separate lists, edited independently:

- Homepage teaser, 3 cards, no prices: `src/components/Home/Services/Services.tsx`.
- Full list with prices: `src/pages/services/Services.tsx`.

A service that appears in both must be kept consistent by hand.

## Contact details

The WhatsApp number, LinkedIn, GitHub, and email are hard-coded in three places. Change all three together:

- `src/components/Home/CTA/Cta.tsx` (WhatsApp link)
- `src/pages/contact/Contact.tsx` (all four)
- `src/components/Footer/Footer.tsx` (LinkedIn, GitHub)

## Work to showcase

What the portfolio is meant to cover, for writing copy and choosing projects:

- WordPress (early work): Marcas que dejan huellas, Pickleball Valencia.
- SPA: Vue (PlanetaX PWA), React.
- SSR: Nuxt (Rachel Blot), Next.js (upcoming).
- Laravel: 1 past project and 2 current (1 going to production soon, French client).
- Kotlin Android app.
- PWAs: PlanetaX (live), Vue + Firebase (in progress).
- Vector and logo design (Inkscape).
- Video editing: DaVinci Resolve, Kdenlive, and AI video (Google Flow / Veo / Nano Banana).
- AI tools: Codex, Antigravity, OpenCode (upcoming: OpenClaw).
