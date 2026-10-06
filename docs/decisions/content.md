# Decisions: content

What the site says: positioning, voice, services, the terms page, what is on the portfolio. The rules in force are in `docs/content.md`.

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
Same choice as on a client's site. Spanish law (LSSI) normally expects a site that offers paid services to identify its owner more fully; this is noted in `to-confirm.md` as a question for Kevin.

**Marcas que dejan huellas was taken off the portfolio rather than shown without a working link or image.**
Its domain expired. See `todo.md`.

## Earlier

Carried over from the original home page spec. Dates were not recorded.

**The CTA band opens WhatsApp, not `/contact`.** The original spec had it link to the contact page; the built version goes straight to a WhatsApp chat. The reason was not recorded.
