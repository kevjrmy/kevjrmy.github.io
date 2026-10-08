# Decisions

Choices that are not obvious from the code, with the reason: what was chosen, what was rejected, why. One file per topic, newest first, so that only the topic at hand has to be read.

| File | Decisions about |
|------|-----------------|
| `design.md` | How the site looks and moves: the references, the hero and its terminal, the header and navigation, the theme switch, the selected works, screenshots, and what the resume takes from the site |
| `content.md` | What the site says: positioning, voice, services, the terms page, what is on the portfolio |
| `stacks.md` | The two stacks, the `/ai` page and the dates of its journey |
| `i18n.md` | The three languages and the language switch |
| `architecture.md` | How it is built: routing, the build, icons, the CSS system and its themes, the context files themselves |
| `superseded.md` | What is no longer in force, kept for its figures and reasons |

Using them:

- Before reversing a choice, read the file of its topic. A choice that touches two topics is filed where someone about to undo it would look first: the look of a thing in `design.md`, the way it is coded in `architecture.md`.
- After making one, add an entry at the top of the right file, under the day's date: one bold sentence that states the choice, then the reason, what was rejected, and what it costs.
- When a new decision ends an older one, move the old entry to `superseded.md` and say in the new one what it replaced. An entry that is only partly out of date stays where it is, with a note in brackets.
- An entry describes the site on its date. A name in it (a marquee, a font) may no longer exist; the state today is in the topic file each of these names at its top.
