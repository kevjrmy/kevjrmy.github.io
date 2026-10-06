# Blog

Not built. This file holds what is already known so the work does not start from zero. Replace it with real documentation once the blog exists.

## Known so far

- Planned route: `/blog`.
- The nav entry is one line to add to the `navLinks` array of `src/components/Header/Header.tsx`, with its label under `header.nav` in the three message files. With six links, check that the desktop row still fits at 768px in every language (`docs/design.md`, Language switch).
- Adding the page to the `pages` array of `App.tsx` gives it `/blog`, `/fr/blog` and `/es/blog` at once (`docs/i18n.md`).
- Long-form text has no styles yet: the placeholder rule that waited in `src/index.css` (`.content h2`, `.content p`) was unused and went on 2026-10-07. The blog brings its own.

## Constraints from the rest of the site

- The site is fully static on GitHub Pages: no server, no database. Posts have to be files in the repo, turned into pages at build time or loaded as static assets.
- Deep links to a post would be served through the `404.html` fallback and return a 404 status (see `docs/architecture.md`). That matters more for a blog than for the current pages, since posts are what search engines and shared links land on. Prerendering is the fix.

## To decide before building

- Post format and location (Markdown files, and where).
- How posts become pages (build-time plugin, or runtime fetch and parse).
- Whether to prerender routes for SEO.
- Language. The rest of the site is in English, French and Spanish, and the pages around a post (list, labels, dates) can follow that. The posts themselves are the open question: written once in English, translated into all three, or each in the language it was written in. The site's rule that a missing translation fails the build is meant for interface copy, not for long posts.
