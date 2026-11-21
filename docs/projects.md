# Projects

How portfolio projects are stored and shown, and what to do when adding one.

## Where they live

`src/data/projects.ts` is the single source for what is the same in every language, typed by `Project` in `src/types/project.ts`. A project's three sentences (the client label, the excerpt, the screenshot's alt text) are in the `projects` section of `src/i18n/messages/`, once per language, under the project's slug. Two views read both:

- Homepage tabs (`components/Home/FeaturedWorks`): `featuredProjects`, which is every project with `featured: true`, sorted by `order`. Each one is also a slide of the swipeable row under the tabs, and all the slides are as tall as the tallest: a much longer `excerpt` on one project makes every card taller on a phone. That holds per language, and the French and Spanish excerpts run a little longer than the English.
- Portfolio page (`pages/portfolio/Portfolio`): the full list, in array order, with filter buttons by `type`. Projects with `status: 'upcoming'` are left out of that list and its filters, and shown below it in a "Coming soon" group of their own (anchor `#upcoming`, the same in every language), where the card shows "Coming soon" in place of the year.

Rendered today: `title`, `stack`, `year`, `link`, `image`, and from the messages `client`, `excerpt`, `alt`. `status` is read only to set the upcoming projects apart; `lang` and `tags` are stored but not displayed or used for filtering yet.

## Adding a project

1. Add its `client`, `excerpt` and `alt` under a new slug in the `projects` section of `en.ts`, then of `fr.ts` and `es.ts`: the build fails until all three have it. Then add an entry with that `slug` to the `projects` array. The slug is unique and kebab-case; it is also the React key and the screenshot filename.
2. Set `featured` and `order`. Every tab on the homepage is one featured project, so each `featured: true` adds a tab. Keep `order` in step with the position in the array, since the portfolio page uses array order and the homepage uses `order`. WordPress projects go last. Where a project goes is Kevin's call: Deissy Olarte's two sites sit fourth and fifth, the association's first, ahead of Pickleball Valencia, at his word (2026-11-19).
3. Check `type`. The portfolio filter buttons are derived: a category appears only if some project uses it, in the order given by `TYPE_ORDER` in `Portfolio.tsx`. A new type must be added to both the `ProjectType` union and `TYPE_ORDER`.
4. If the project was built with Claude Code, put `'Claude Code'` first in `stack` (see Positioning in `docs/content.md`). Then check each `stack` label against the `techIcons` map in `src/data/techIcons.ts`, which both project views read: a label missing from it renders as a badge with no icon.
5. A project of Kevin's own, with no client, takes the client label "Personal project" ("Projet personnel", "Proyecto personal"; Le Petit Cours is the first). Client work is listed ahead of it.
6. A project that is live but not finished takes `status: 'wip'`, and its excerpt says so ("and still in progress"), since the status is not shown: Deissy Olarte's two sites, added 2026-11-19. Once finished, set `status: 'live'` and drop the phrase in the three languages. Their copy says only what the two sites say publicly: the notes about that client are private and stay out of this repo.
7. A project that is not online yet takes `status: 'upcoming'`, `featured: false` and `link: null`: it goes in the "Coming soon" group of the portfolio page, never on the homepage tabs, and it is never linked to a test or staging URL (`mqdh.vercel.app` is only for testing). Its screenshot is the coming-soon or landing page, or a capture of the work in progress, recaptured when that work moves on. Marcas Que Dejan Huellas is the first, added 2026-11-21; recaptured the same day, when its test deployment went from a coming-soon page to a home page opening in stages (the interviews first). Once it is live at its own domain: set `status: 'live'`, set `link`, recapture the screenshot, decide `featured` and `order`, and reread the excerpt, which says the platform "opens in stages".
8. Set `link` to `null` for a private or offline project, or one handed over to a client who has since changed it (SUNspot). The "Visit site" link is hidden when it is null.
9. Add the screenshot (below).

## Screenshots

- Path: `public/images/projects/<slug>.webp`, referenced in data as `/images/projects/<slug>.webp`.
- **A screenshot is never cropped.** Kevin's rule (2026-10-06): the picture is shown whole, on every screen. The portfolio cards and the homepage card below 1024px hold it in a box that is 16:9 by construction. From 1024px the homepage card puts the screenshot beside the text; there it is fitted inside its box (`object-fit: contain`), which is 16:9 on a wide screen and leaves two thin bands where the text is the taller of the two. Do not let the box grow with the card under `cover`: that crops the sides.
- A website is shown by its desktop capture on every device, phones included. That is Kevin's choice for Fraichup, Rachel Blot, Ethica and Pickleball Valencia, and the other websites follow it. Do not swap in a mobile capture for small screens. Anything below the 16:9 frame is cropped. On desktop the homepage panel drops the fixed ratio and fills the panel height, still anchored to the top.
- A missing file is handled: an `onError` handler swaps in a placeholder.
- A site that is offline cannot be captured, and Wayback Machine copies often load without their styles. Take the project off the list and note it in `todo.md` rather than ship a broken image.
- Every image is a 16:9 WebP. The conventions by kind of project:
  - Websites and web apps: a desktop capture of the home page, 1440x810.
  - PWAs: one or two mobile captures (390x844 viewport), each in a phone frame, centered on a 1600x900 canvas in `--surface-tertiary` (`#f5f5f5`). A raw portrait capture would be cropped to a thin strip by the 16:9 box.
  - Private apps that cannot be shown: the client's logo centered on a 1600x900 canvas in the logo's own background color. `el-imperio-contabilidad` uses this.

## What the portfolio is meant to cover

What the portfolio is meant to cover, for writing copy and choosing projects:

- Static sites: Astro (Pickleball Valencia, rebuilt from WordPress in 2026; Deissy Olarte's personal site, turesiliencia.com, with its blog written in Sanity, 2026, in progress).
- SPA: Vue (PlanetaX PWA), React.
- SSR: Nuxt (Rachel Blot, Fesma), Next.js (Limpiezas El Imperio: the public website and a private accounting app for the same client, both 2026; TuResiliencia, turesiliencia.org, the bilingual site of Deissy Olarte's non-profit association, 2026, in progress).
- Laravel: 1 past project and 2 current (1 going to production soon, French client).
- Kotlin Android app.
- PWAs: PlanetaX (live), SUNspot (Vue + Firebase: the MVP Kevin built for two founders and handed over in 2026; labelled "Startup MVP", with no link, since the live site is no longer his work), Le Petit Cours (Next.js + Supabase, Kevin's own French course for Spanish speakers (free to use; its code is private and all rights reserved, so never "open source"), built with Claude Code, 2026).
- Vector and logo design (Inkscape), image editing (GIMP).
- Video editing: DaVinci Resolve, Kdenlive, and AI video (Google Flow / Veo / Nano Banana).
- AI agents: see Positioning in `docs/content.md`.
- WordPress (kept last): Ethica Anabel Orzáez, a beauty salon site with a WooCommerce shop (2026). Marcas Que Dejan Huellas was also a WordPress site of Kevin's (2024); it is now being rebuilt in Next.js with Claude Code, as a platform for entrepreneurs in Valencia, and is on the portfolio as upcoming (2026-11-21).

## Not yet in the data

In progress and to be added once it can be shown: a Laravel app for a French client.
