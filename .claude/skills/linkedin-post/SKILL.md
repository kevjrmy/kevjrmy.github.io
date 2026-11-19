---
name: linkedin-post
description: Draft a LinkedIn post, in Kevin's voice, about something that just landed on the site (a new portfolio project, a new page, a milestone). Writes the text and the images to private/linkedin/ for Kevin to paste into LinkedIn himself. Use when Kevin asks for a LinkedIn post, or for help announcing a change to the site.
argument-hint: "[subject: project slug, commit or free text] [en|fr|es]"
---

# LinkedIn post

Turn a change to the site into a LinkedIn post that Kevin pastes himself. You only draft: never post, never commit the draft. Kevin reviews every draft before it goes out, so show it and wait for his changes, then he pastes and posts himself. Posting through Claude in Chrome was tried once (2026-11-19) and took longer than doing it by hand; if he asks again, say so (`docs/decisions/architecture.md`).

What Kevin wants from a post (his words, 2026-11-19): usually short, not too technical, no emojis, professional without sounding corporate, links and tags wherever possible, and a screenshot or some other image to go with it. Talk about the public product, what a visitor sees and uses, not how it is built: giving away too much of the tech is a risk.

## 1. Find the subject

- With an argument, it names the subject (a project slug such as `turesiliencia-org`, a commit, or free text such as "the new /ai page") and maybe the language (`en`, `fr`, `es`).
- Without one, read `git log --oneline -10` and propose the most recent change worth announcing, then confirm it with Kevin.

## 2. Gather the facts, public ones only

- The commit(s): `git show --stat <sha>` and the commit message.
- For a project: its entry in `src/data/projects.ts` (`title`, `stack`, `year`, `link`, `status`, `image`) and its `client`, `excerpt` and `alt` in the `projects` section of `src/i18n/messages/<lang>.ts`. Several projects for one client (Deissy Olarte's two sites) make one post.
- For a page or a feature: its copy in the messages file of the chosen language.
- Use only what the site already says publicly. Never use anything from `private/` other than the draft folder, nor client notes, prices, or Kevin's business status (see the memory note on it).

## 3. Ask before writing

One `AskUserQuestion` round, skipping what the argument already settled:

- **Language**: English, French or Spanish. One language per post.
- **The personal line**: what Kevin wants to say in his own words (how the work went, what he is proud of, thanks to the client), or "write it for me".
- **Who to tag**: people (the client, a collaborator) and company or association pages. Kevin likes tags, so propose every one the subject allows.
- **Claude Code**, for a project built with it: named in the text ("hecha con Claude Code"), or left out so the text stays on the product. Kevin decides post by post.

## 4. Write the post

Voice and positioning come from `docs/content.md` (Positioning, Voice) and, for French or Spanish, `docs/i18n.md` (Voice, per language). Read them; do not guess. In short:

- First person, plain words, short sentences. Professional and balanced: confident, never salesy, never corporate.
- No em dash (—), in any language. No emojis.
- About the product, not the tech: who it is for, what it offers, what a visitor finds there. No frameworks, databases, CMS or hosting, even when `stack` lists them, and nothing about how the code is organised. Claude Code is named as Kevin chose in step 3, by that name, never a vague "AI"; that is positioning, not a tech detail. WordPress, if it comes up at all, comes last.
- Say what the project is for: its vision, its mission, what it offers. Not its legal form ("non-profit", "sin ánimo de lucro", "SL"). When the site's excerpt does not say enough, read the project's own public site and quote its mission or tagline as it is written there.
- A project with `status: 'wip'` is described as live and still in progress.
- Shape: a hook line about the project itself ("Dos proyectos nuevos…", not "on my portfolio"), then 2 or 3 short paragraphs (who it is for, what it offers), the project's live link(s), then 3 or 4 hashtags. No link to Kevin's portfolio. The hashtags are about the project and its subject (`#ReconstrucciónHumana`), not the tech.
- Short: about 400 to 800 characters, longer only when Kevin asks.
- LinkedIn shows plain text: no Markdown (`**`, `#` headings, `[text](url)`). Line breaks are fine.
- Write people to tag as `@Name` in the text. A pasted `@Name` is not a tag: Kevin retypes it in LinkedIn and picks the person from the list, so the checklist reminds him.

## 5. Prepare the images

- Every post gets at least one image. Use the project screenshots, `public/images/projects/<slug>.webp`, in the order of the post. Never crop them (`docs/projects.md`, Screenshots).
- Convert each to PNG in the draft folder, so LinkedIn takes it whatever its WebP support:

  ```bash
  python3 -I -c "import sys; from PIL import Image; Image.open(sys.argv[1]).save(sys.argv[2])" public/images/projects/<slug>.webp private/linkedin/<folder>/1.png
  ```

- Kevin can add his own photos or captures: ask if he has any, and put them in the folder in posting order.

## 6. Save and show

- Folder: `private/linkedin/<YYYY-MM-DD>-<subject>/` (today's date, subject in kebab-case). Create `private/linkedin/` if it does not exist: `private/` is git-ignored, so drafts never reach this public repo.
- `post.md` holds, in this order:
  1. The post text, exactly as it is to be pasted, with nothing else around it.
  2. A line `---`, then a short checklist: attach the images first, in order, then paste the text (once LinkedIn shows a link preview card it hides the image button); people and pages to tag; links to open once to check they work.
- Print the post text in the terminal too, with the folder's absolute path.
- Ask Kevin to review it, and offer one more pass: shorter, warmer, more formal, or another language (a new language is a new `post.<lang>.md` in the same folder).
- Once Kevin says it is posted, delete the draft folder: he keeps no copy, and the images are already in `public/`.
