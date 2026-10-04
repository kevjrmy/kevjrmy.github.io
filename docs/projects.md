# Projects

How portfolio projects are stored and shown, and what to do when adding one.

## Where they live

`src/data/projects.ts` is the single source, typed by `Project` in `src/types/project.ts`. Two views read it:

- Homepage tabs (`components/Home/FeaturedWorks`): `featuredProjects`, which is every project with `featured: true`, sorted by `order`.
- Portfolio page (`pages/portfolio/Portfolio`): the full list, in array order, with filter buttons by `type`.

Fields rendered today: `title`, `client`, `excerpt`, `stack`, `year`, `link`, `image`. The fields `status`, `lang`, and `tags` are stored but not displayed or used for filtering yet.

## Adding a project

1. Add an entry to the `projects` array. `slug` is unique and kebab-case; it is the React key and the screenshot filename.
2. Set `featured` and `order`. Every tab on the homepage is one featured project, so each `featured: true` adds a tab. Keep `order` in step with the position in the array, since the portfolio page uses array order and the homepage uses `order`. WordPress projects go last.
3. Check `type`. The portfolio filter buttons are derived: a category appears only if some project uses it, in the order given by `TYPE_ORDER` in `Portfolio.tsx`. A new type must be added to both the `ProjectType` union and `TYPE_ORDER`.
4. If the project was built with Claude Code, put `'Claude Code'` first in `stack` (see Positioning in `docs/content.md`). Then check each `stack` label against the `techIcons` map. The map is duplicated in `FeaturedWorks.tsx` and `Portfolio.tsx`; a label missing from it renders as a badge with no icon. Add new labels to both copies.
5. Set `link` to `null` for a private or offline project. The "Visit site" link is hidden when it is null.
6. Add the screenshot (below).

## Screenshots

- Path: `public/images/projects/<slug>.webp`, referenced in data as `/images/projects/<slug>.webp`.
- Both views show the image in a 16:9 box with `object-fit: cover` anchored to the top, so capture the top of the page in landscape. Anything below the 16:9 frame is cropped. On desktop the homepage panel drops the fixed ratio and fills the panel height, still anchored to the top.
- A missing file is handled: an `onError` handler swaps in a placeholder.
- A site that is offline cannot be captured, and Wayback Machine copies often load without their styles. Take the project off the list and note it in `todo.md` rather than ship a broken image.
- Every image is a 16:9 WebP. The conventions by kind of project:
  - Websites and web apps: a desktop capture of the home page, 1440x810.
  - PWAs: one or two mobile captures (390x844 viewport), each in a phone frame, centered on a 1600x900 canvas in `--surface-tertiary` (`#f5f5f5`). A raw portrait capture would be cropped to a thin strip by the 16:9 box.
  - Private apps that cannot be shown: the client's logo centered on a 1600x900 canvas in the logo's own background color. `el-imperio-contabilidad` uses this.
- Keep the subject clear of the bottom 100px of the canvas: the desktop homepage panel can be wider than 16:9 and crops from the bottom.

## Not yet in the data

In progress and to be added once it can be shown: a Laravel app for a French client.

Removed for now: Marcas que dejan huellas, whose domain has expired (see `todo.md`).
