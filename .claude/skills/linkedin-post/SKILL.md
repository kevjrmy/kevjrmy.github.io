---
name: linkedin-post
description: Draft a LinkedIn post, in Kevin's voice, about something that just landed on the site (a new portfolio project, a new page, a milestone), then publish it through LinkedIn's API once Kevin says yes. Writes the text and the images to private/linkedin/. Use when Kevin asks for a LinkedIn post, or for help announcing a change to the site.
argument-hint: "[subject: project slug, commit or free text] [en|fr|es]"
---

# LinkedIn post

Turn a change to the site into a LinkedIn post, and publish it on Kevin's profile with `scripts/linkedin.mjs`. Never commit the draft. Kevin reviews every draft before it goes out: show it, wait for his changes, and publish only after he says yes to the final preview (step 7). A post is public the moment it is published. Why the API and not Claude in Chrome or pasting by hand: `docs/decisions/architecture.md`, 2026-11-21.

What Kevin wants from a post (his words, 2026-11-19): usually short, not too technical, no emojis, professional without sounding corporate, links and tags wherever possible, and a screenshot or some other image to go with it. What he did to the MQDH post (2026-11-21), the first published through the API: he cut it from 700 to about 470 characters, cut the hashtags, the "from the phone" line and the explanation after his personal line. Draft that short from the start. Talk about the public product, what a visitor sees and uses, not how it is built: giving away too much of the tech is a risk.

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
- **Who to tag**: people (the client, a collaborator) and company or association pages. Kevin likes tags, so propose every one the subject allows. Through the API only a page can be tagged, and only with its id: ask Kevin for it (an admin sees it in the page's admin URL), or plan to tag it after. People are always tagged after, by editing the post on LinkedIn.
- **Claude Code**, for a project built with it: named in the text ("hecha con Claude Code"), or left out so the text stays on the product. Kevin decides post by post.

## 4. Write the post

Voice and positioning come from `docs/content.md` (Positioning, Voice) and, for French or Spanish, `docs/i18n.md` (Voice, per language). Read them; do not guess. In short:

- First person, plain words, short sentences. Professional and balanced: confident, never salesy, never corporate.
- No em dash (—), in any language. No emojis.
- About the product, not the tech: who it is for, what it offers, what a visitor finds there. No frameworks, databases, CMS or hosting, even when `stack` lists them, and nothing about how the code is organised. Claude Code is named as Kevin chose in step 3, by that name, never a vague "AI"; that is positioning, not a tech detail. WordPress, if it comes up at all, comes last.
- Say what the project is for: its vision, its mission, what it offers. Not its legal form ("non-profit", "sin ánimo de lucro", "SL"). When the site's excerpt does not say enough, read the project's own public site and quote its mission or tagline as it is written there.
- A project with `status: 'wip'` is described as live and still in progress.
- A project with `status: 'upcoming'` is announced as coming ("Muy pronto"), with no link: never its test deployment, and never its domain as plain text either, since LinkedIn turns a bare domain into a link and an upcoming project's domain may not resolve yet (marcasquedejanhuellas.com did not, 2026-11-21). The link can go in a comment once the site is live.
- Shape: a hook line about the project itself ("Dos proyectos nuevos…", not "on my portfolio"), then 2 or 3 short paragraphs (who it is for, what it offers), Kevin's personal line as one plain sentence with nothing explained after it, then the project's live link(s). No link to Kevin's portfolio.
- No hashtags by default: Kevin cut them from the MQDH post. Add 2 or 3 only when he asks, about the project and its subject (`#ReconstrucciónHumana`), not the tech.
- Short: about 400 to 500 characters, longer only when Kevin asks.
- LinkedIn shows plain text: no Markdown (`**`, `#` headings, `[text](url)`). Line breaks are fine. Write hashtags as plain `#Tag`: the script turns them into real ones, and escapes every other character the API would misread.
- A page with a known id is written `@[Exact Page Name](urn:li:organization:<id>)`, the name exactly as on LinkedIn: the script makes it a tag. Anyone else is written `@Name`: it goes out as plain text, and Kevin turns it into a tag by editing the post, so the checklist reminds him.

## 5. Prepare the images

- Every post gets at least one image. Use the project screenshots, `public/images/projects/<slug>.webp`, in the order of the post. Never crop them (`docs/projects.md`, Screenshots).
- Convert each to PNG in the draft folder, so LinkedIn takes it whatever its WebP support:

  ```bash
  python3 -I -c "import sys; from PIL import Image; Image.open(sys.argv[1]).save(sys.argv[2])" public/images/projects/<slug>.webp private/linkedin/<folder>/1.png
  ```

- Kevin can add his own photos or captures: ask if he has any, and put them in the folder in posting order. The script posts every file named `<number>.png` or `.jpg`, in that order.
- Write `alt.txt` beside `post.md`, one line of alt text per image, in order and in the post's language (`alt.fr.txt` beside `post.fr.md`). For a project screenshot, start from its `alt` in the messages file.

## 6. Save and show

- Folder: `private/linkedin/<YYYY-MM-DD>-<subject>/` (today's date, subject in kebab-case). Create `private/linkedin/` if it does not exist: `private/` is git-ignored, so drafts never reach this public repo.
- `post.md` holds, in this order:
  1. The post text, exactly as it is to be published, with nothing else around it.
  2. A line `---`, then a short checklist for after publishing: people and pages to tag by editing the post; links to open once to check they work. The script publishes only what is above the `---`.
- Print the post text in the terminal too, with the folder's absolute path.
- Ask Kevin to review it, and offer one more pass: shorter, warmer, more formal, or another language (a new language is a new `post.<lang>.md` in the same folder).
- Kevin may edit `post.md` himself in his editor. When he says he did, check that the file changed (its text, or `stat`) before going on: on 2026-11-21 his "I edited it, publish" came before the file was saved, and the preview still showed the old text.

## 7. Publish, on Kevin's yes

- Run the preview: `npm run linkedin:publish -- private/linkedin/<folder> [post.<lang>.md]`. It publishes nothing: it prints the text as it will read, the images with their alt text, and warns about mentions that will not be tags. Show Kevin its output, and ask him plainly whether to publish it, public, now.
- It says "Not signed in" or "expired": the sign-in opens a browser and waits for Kevin, so ask him to run `! npm run linkedin:auth` himself, then preview again.
- Only after his yes to that preview, run the same command with `--yes` added. A yes to an earlier version of the text does not count: after any change, preview again and ask again.
- It prints the post's link: give it to Kevin with the checklist (the tags to add by editing the post).
- If it fails after "Uploaded" lines, or on the post itself, do not run it again until Kevin has checked his profile: a second run can publish the post twice.
- Once it is published, delete the draft folder: Kevin keeps no copy, and the images are already in `public/`.
- Kevin may still trim the post on LinkedIn after it is out. When he shows the final text, compare it with the draft and fold what he changed into this file, as the MQDH post did.
