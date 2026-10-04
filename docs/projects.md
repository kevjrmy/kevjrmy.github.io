# Projects

How portfolio projects are stored and shown, and what to do when adding one.

## Where they live

`src/data/projects.ts` is the single source, typed by `Project` in `src/types/project.ts`. Two views read it:

- Homepage tabs (`components/Home/FeaturedWorks`): `featuredProjects`, which is every project with `featured: true`, sorted by `order`.
- Portfolio page (`pages/portfolio/Portfolio`): the full list, in array order, with filter buttons by `type`.

Fields rendered today: `title`, `client`, `excerpt`, `stack`, `year`, `link`, `image`. The fields `status`, `lang`, and `tags` are stored but not displayed or used for filtering yet.

## Adding a project

1. Add an entry to the `projects` array. `slug` is unique and kebab-case; it is the React key and the screenshot filename.
2. Set `featured` and `order`. Every tab on the homepage is one featured project, so each `featured: true` adds a tab.
3. Check `type`. The portfolio filter buttons are derived: a category appears only if some project uses it, in the order given by `TYPE_ORDER` in `Portfolio.tsx`. A new type must be added to both the `ProjectType` union and `TYPE_ORDER`.
4. Check each `stack` label against the `techIcons` map. The map is duplicated in `FeaturedWorks.tsx` and `Portfolio.tsx`; a label missing from it renders as a badge with no icon. Add new labels to both copies.
5. Set `link` to `null` for a private or offline project. The "Visit site" link is hidden when it is null.
6. Add the screenshot (below).

## Screenshots

- Path: `public/images/projects/<slug>.webp`, referenced in data as `/images/projects/<slug>.webp`.
- Both views show the image in a 16:9 box with `object-fit: cover` anchored to the top, so capture the top of the page in landscape. Anything below the 16:9 frame is cropped. On desktop the homepage panel drops the fixed ratio and fills the panel height, still anchored to the top.
- A missing file is handled: an `onError` handler swaps in a placeholder. No screenshots exist yet (tracked in `todo.md`).

## Not yet in the data

In progress and to be added once they can be shown: a Vue + Firebase PWA, and a Laravel app for a French client.
