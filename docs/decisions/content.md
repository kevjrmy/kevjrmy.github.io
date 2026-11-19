# Decisions: content

What the site says: positioning, voice, services, the terms page, what is on the portfolio. The rules in force are in `docs/content.md`.

## 2026-11-19

**Deissy Olarte's two sites are on the portfolio while still in progress, fourth and fifth.**
Kevin asked for turesiliencia.org (her non-profit association, Next.js, Spanish and English) and turesiliencia.com (her personal site, Astro with a blog in Sanity), both built with Claude Code, unfinished and already live, and then for them to go above Pickleball Valencia. They take `status: 'wip'`, which nothing displays, so each excerpt ends "and still in progress" (`docs/projects.md`). Their copy says only what the two sites say publicly: the notes kept about that client are private, outside this repo. Rejected: waiting until they are finished, which would hide two of his most recent Claude Code projects; one card for both, when they are two sites with two stacks and two voices. What it costs: two excerpts to update when the sites are done, and twelve tabs on the homepage.

**Kevin is presented as based on the French Riviera, near Antibes, and `/info` opens with a legal notice under French law.**
He moved back to France from Valencia. The site says "French Riviera, near Antibes" ("Côte d'Azur, près d'Antibes", "Costa Azul, cerca de Antibes"), his choice among three wordings; the Valencia clients and the Startup Weekend stay as they are, being past work, and the privacy page now names France's CNIL instead of Spain's AEPD. French law (LCEN) expects a professional site to give its publisher's identity. Asked twice, he chose a notice with his name, his area (the same wording as the rest of the site), his email and the host, and no street address or registration number for now; those are added if and when he gives them, and nothing about his status is written in the repo. Rejected: keeping Valencia, which would now be untrue, and a wording that keeps Valencia as a past ("after five years in Valencia").

**`to-confirm.md` is gone: questions for Kevin are asked in the session, and what he leaves open waits in `todo.md`.**
It had grown to a dozen items, some from October, because nothing made anyone go through it. He answered all of them in one session on 2026-11-19, and asked for the file to go. Rejected: keeping it as an empty template, which is how it filled up the first time.
## 2026-10-08

**The resume is not on the site, and its folder is not in the repo.**
Kevin's request: the resume is for him to send, not for a visitor to download, so the site has no resume page and no PDF in `public/`. It is in `private/`, which sits beside the site so that a change to one prompts a check of the other, and which git ignores: the repo is public and a resume carries a phone number. The folder began the day as `resume/` at the root with an ignore rule of its own, and was merged with the ignored `.private/` so that everything kept off the repo is in one place; Kevin then renamed that folder `private/`, without the dot, and the ignore rule followed. The site covers his development and consulting work only; the resumes may be broader, so they are not expected to match it line for line. Rejected: a `/resume` page built from the site's data, with the PDFs exported from it, which was proposed and which he turned down; and an English resume, which he does not want. What it costs: the folder does not follow to another device, and nothing but the note in `docs/content.md` keeps the two in step.

## 2026-10-07

**No em dash on the site.**
Kevin's request. There were about thirty, all in the English copy (the project excerpts and their alt texts, the About lead and timeline, the "opens in a new tab" labels) plus two in the layout: the footer line and the title bar of the hero terminal. Each sentence was rewritten with a colon, a comma or a full stop, not swapped for a hyphen; the two layout ones took the middle dot the site already uses between short labels. The French and Spanish had been written without any. Comments in the code keep theirs: they are not on the site.

**The services page lists no prices and has one call to action.**
Kevin's request: the page is not a price publication but an invitation to contact him, so that a client can share a project, an idea, a business, a task or a gig. Every figure went, and so did the "Let's talk" that two services showed in place of one: he did not want a contact prompt on each card either, only one for all the services. That one is the band under the grid, with copy of its own on this page; the "Get in touch" button in the page header went with the prices, since it made two. The terms on `/info` now say that nothing is listed and each job is quoted after a conversation. This ended the three price entries of 2026-10-06 (the friend's figures, the doubling, no "+ VAT"), which are now in `superseded.md`: the last figures are kept there in case prices come back. Rejected: "on request" or "Let's talk" on every card, which is the same prompt eight times.

## 2026-10-04

**The site is positioned AI-first; WordPress moves to the back.**
The work shifted from WordPress to building with AI agents while this site was being made. WordPress stays for history and for clients who still need it, but last in every list and never in a highlighted spot. The wording rules are in `docs/content.md`, Positioning; the tool list is in `docs/stacks.md`.

**The AI service is called "AI Automation", not "AI Integration".**
The reference case (Limpiezas El Imperio) replaced a hand-filled spreadsheet with a custom app built with AI agents; no AI model runs inside the client's software. "Integration" would promise that. See `docs/content.md`, Services.

**The terms and privacy page is short and plain, and does not list a tax ID or postal address.**
Same choice as on a client's site. Spanish law (LSSI) normally expects a site that offers paid services to identify its owner more fully; this is noted in `to-confirm.md` as a question for Kevin. [Answered 2026-11-19: he now works from France, so the question is French law's; see the entry of that day.]

**Marcas que dejan huellas was taken off the portfolio rather than shown without a working link or image.**
Its domain expired. See `todo.md`.

## Earlier

Carried over from the original home page spec. Dates were not recorded.

**The CTA band opens WhatsApp, not `/contact`.** The original spec had it link to the contact page; the built version goes straight to a WhatsApp chat. The reason was not recorded.
