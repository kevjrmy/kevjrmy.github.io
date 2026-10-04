# Blog

Not built. This file holds what is already known so the work does not start from zero. Replace it with real documentation once the blog exists.

## Known so far

- Planned route: `/blog`.
- The nav entry already exists, commented out, in the `navLinks` array of `src/components/Header/Header.tsx`.
- `src/index.css` has a "Content / Markdown styling" block (`.content h2`, `.content p`) intended for long-form text. Nothing uses the `.content` class yet.

## Constraints from the rest of the site

- The site is fully static on GitHub Pages: no server, no database. Posts have to be files in the repo, turned into pages at build time or loaded as static assets.
- Deep links to a post would be served through the `404.html` fallback and return a 404 status (see `docs/architecture.md`). That matters more for a blog than for the current pages, since posts are what search engines and shared links land on. Prerendering is the fix.

## To decide before building

- Post format and location (Markdown files, and where).
- How posts become pages (build-time plugin, or runtime fetch and parse).
- Whether to prerender routes for SEO.
- Language: English only, or per-post.
