# Projects

How portfolio projects are stored and shown, and what to do when adding one.

## Where they live

`src/data/projects.ts` is the single source, typed by `Project` in `src/types/project.ts`. Two views read it:

- Homepage tabs (`components/Home/FeaturedWorks`): `featuredProjects`, which is every project with `featured: true`, sorted by `order`. Each one is also a slide of the swipeable row under the tabs, and all the slides are as tall as the tallest: a much longer `excerpt` on one project makes every card taller on a phone.
- Portfolio page (`pages/portfolio/Portfolio`): the full list, in array order, with filter buttons by `type`.

Fields rendered today: `title`, `client`, `excerpt`, `stack`, `year`, `link`, `image`. The fields `status`, `lang`, and `tags` are stored but not displayed or used for filtering yet.

## Adding a project

1. Add an entry to the `projects` array. `slug` is unique and kebab-case; it is the React key and the screenshot filename.
2. Set `featured` and `order`. Every tab on the homepage is one featured project, so each `featured: true` adds a tab. Keep `order` in step with the position in the array, since the portfolio page uses array order and the homepage uses `order`. WordPress projects go last.
3. Check `type`. The portfolio filter buttons are derived: a category appears only if some project uses it, in the order given by `TYPE_ORDER` in `Portfolio.tsx`. A new type must be added to both the `ProjectType` union and `TYPE_ORDER`.
4. If the project was built with Claude Code, put `'Claude Code'` first in `stack` (see Positioning in `docs/content.md`). Then check each `stack` label against the `techIcons` map. The map is duplicated in `FeaturedWorks.tsx` and `Portfolio.tsx`; a label missing from it renders as a badge with no icon. Add new labels to both copies.
5. A project of Kevin's own, with no client, takes `client: 'Personal project'` (Le Petit Cours is the first). Client work is listed ahead of it.
6. Set `link` to `null` for a private or offline project. The "Visit site" link is hidden when it is null.
7. Add the screenshot (below).

## Screenshots

- Path: `public/images/projects/<slug>.webp`, referenced in data as `/images/projects/<slug>.webp`.
- **A screenshot is never cropped.** Kevin's rule (2026-10-06): the picture is shown whole, on every screen. The portfolio cards and the homepage card below 1024px hold it in a box that is 16:9 by construction. From 1024px the homepage card puts the screenshot beside the text; there it is fitted inside its box (`object-fit: contain`), which is 16:9 on a wide screen and leaves two thin bands where the text is the taller of the two. Do not let the box grow with the card under `cover`: that crops the sides.
- A website is shown by its desktop capture on every device, phones included. That is Kevin's choice for Fraichup, Rachel Blot, Ethica and Pickleball Valencia, and the two other websites follow it. Do not swap in a mobile capture for small screens. Anything below the 16:9 frame is cropped. On desktop the homepage panel drops the fixed ratio and fills the panel height, still anchored to the top.
- A missing file is handled: an `onError` handler swaps in a placeholder.
- A site that is offline cannot be captured, and Wayback Machine copies often load without their styles. Take the project off the list and note it in `todo.md` rather than ship a broken image.
- Every image is a 16:9 WebP. The conventions by kind of project:
  - Websites and web apps: a desktop capture of the home page, 1440x810.
  - PWAs: one or two mobile captures (390x844 viewport), each in a phone frame, centered on a 1600x900 canvas in `--surface-tertiary` (`#f5f5f5`). A raw portrait capture would be cropped to a thin strip by the 16:9 box.
  - Private apps that cannot be shown: the client's logo centered on a 1600x900 canvas in the logo's own background color. `el-imperio-contabilidad` uses this.

## Not yet in the data

In progress and to be added once it can be shown: a Laravel app for a French client.

Removed for now: Marcas que dejan huellas, whose domain has expired (see `todo.md`).
