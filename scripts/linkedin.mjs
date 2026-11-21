// Publishes a post drafted by the linkedin-post skill (.claude/skills/linkedin-post/SKILL.md)
// to Kevin's own LinkedIn profile, through LinkedIn's API ("Share on LinkedIn").
//
//   npm run linkedin:auth                                      sign in; lasts 2 months
//   npm run linkedin:publish -- <draft folder> [post file]     preview, publishes nothing
//   npm run linkedin:publish -- <draft folder> [post file] --yes   publishes, public
//   npm run linkedin:edit -- <draft folder> <post> [post file] [--yes]   replaces a published post's text
//
// The app's keys are in .env and the token in private/linkedin/token.json: both are
// git-ignored, since this repo is public. Runs on this device only, never on the deploy runner.
import crypto from 'node:crypto'
import fs from 'node:fs'
import http from 'node:http'
import path from 'node:path'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const tokenFile = path.join(root, 'private', 'linkedin', 'token.json')
// LinkedIn dates each version of its API and retires it after about a year: bump it when it says so
const API_VERSION = '202606'
const SCOPES = 'openid profile w_member_social'
const MAX_LENGTH = 3000
const MAX_IMAGES = 20

class Stop extends Error {}

function loadEnv() {
  try {
    process.loadEnvFile(path.join(root, '.env'))
  } catch {
    throw new Stop('No .env at the root of the repo: it holds LINKEDIN_CLIENT_ID, LINKEDIN_CLIENT_SECRET and LINKEDIN_REDIRECT_URI.')
  }
  const clientId = process.env.LINKEDIN_CLIENT_ID
  const clientSecret = process.env.LINKEDIN_CLIENT_SECRET
  const redirectUri = process.env.LINKEDIN_REDIRECT_URI
  if (!clientId || !clientSecret || !redirectUri) {
    throw new Stop('.env is missing one of LINKEDIN_CLIENT_ID, LINKEDIN_CLIENT_SECRET, LINKEDIN_REDIRECT_URI.')
  }
  return { clientId, clientSecret, redirectUri }
}

async function readJson(response, step) {
  if (!response.ok) throw new Stop(`${step} failed (${response.status}): ${await response.text()}`)
  return response.json()
}

function openBrowser(url) {
  const command = process.platform === 'darwin' ? 'open' : 'xdg-open'
  spawn(command, [url], { stdio: 'ignore', detached: true }).on('error', () => {}).unref()
}

// ── Sign in ──────────────────────────────────────────────────────────────────

async function auth() {
  const { clientId, clientSecret, redirectUri } = loadEnv()
  const callback = new URL(redirectUri)
  const state = crypto.randomBytes(16).toString('hex')
  const authorize = new URL('https://www.linkedin.com/oauth/v2/authorization')
  authorize.search = new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    redirect_uri: redirectUri,
    state,
    scope: SCOPES,
  }).toString().replaceAll('+', '%20') // LinkedIn reads "+" as part of the scope, not as a space

  // LinkedIn sends the browser back to the redirect URI with a one-time code
  const code = await new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const url = new URL(req.url, callback.origin)
      if (url.pathname !== callback.pathname) {
        res.writeHead(404).end()
        return
      }
      const error = url.searchParams.get('error_description') ?? url.searchParams.get('error')
      const received = url.searchParams.get('code')
      const ok = !error && received && url.searchParams.get('state') === state
      res.writeHead(ok ? 200 : 400, { 'Content-Type': 'text/plain; charset=utf-8' })
      res.end(ok ? 'Signed in to LinkedIn. You can close this tab.' : 'Sign-in failed: see the terminal.', () => {
        server.close()
        server.closeAllConnections()
      })
      if (ok) resolve(received)
      else reject(new Stop(`Sign-in failed: ${error ?? 'the answer did not match this sign-in (state).'}`))
    })
    server.on('error', (error) => reject(error.code === 'EADDRINUSE'
      ? new Stop(`Port ${callback.port} is already used by another program (a dev server?). Stop it, or move LINKEDIN_REDIRECT_URI in .env and in the LinkedIn app's Auth tab to a free port.`)
      : error))
    server.listen(Number(callback.port) || 80, callback.hostname, () => {
      console.log(`Opening LinkedIn to sign in. If no browser opens, visit:\n\n${authorize}\n`)
      openBrowser(authorize.toString())
    })
  })

  const token = await readJson(await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
      client_id: clientId,
      client_secret: clientSecret,
    }),
  }), 'Getting the token')

  const me = await readJson(await fetch('https://api.linkedin.com/v2/userinfo', {
    headers: { Authorization: `Bearer ${token.access_token}` },
  }), 'Reading the profile')

  const saved = {
    accessToken: token.access_token,
    expiresAt: Date.now() + token.expires_in * 1000,
    author: `urn:li:person:${me.sub}`,
    name: me.name,
  }
  fs.mkdirSync(path.dirname(tokenFile), { recursive: true })
  fs.writeFileSync(tokenFile, JSON.stringify(saved, null, 2) + '\n', { mode: 0o600 })
  console.log(`Signed in as ${me.name}, until ${new Date(saved.expiresAt).toDateString()}.`)
}

function readToken() {
  if (!fs.existsSync(tokenFile)) throw new Stop('Not signed in: run `npm run linkedin:auth` first.')
  const token = JSON.parse(fs.readFileSync(tokenFile, 'utf8'))
  if (token.expiresAt < Date.now() + 60_000) throw new Stop('The LinkedIn sign-in has expired: run `npm run linkedin:auth` again.')
  return token
}

// ── The text ─────────────────────────────────────────────────────────────────

// The API reads the text as LinkedIn's "little text" format, where these characters
// mean something: unescaped, they cut the post short
const escapeLittle = (text) => text.replace(/[\\|{}@[\]()<>#*_~]/g, '\\$&')

// Plain text in, little text out: #Tag becomes a real hashtag, and a mention written
// @[Exact Name](urn:li:organization:123) becomes a tag. Everything else is escaped.
function toLittleText(text) {
  const pattern = /@\[([^\]]+)\]\((urn:li:(?:person|organization):[^)\s]+)\)|(?<!\S)#([\p{L}\p{N}_]+)/gu
  let out = ''
  let last = 0
  for (const match of text.matchAll(pattern)) {
    out += escapeLittle(text.slice(last, match.index))
    out += match[3] ? `{hashtag|\\#|${escapeLittle(match[3])}}` : `@[${escapeLittle(match[1])}](${match[2]})`
    last = match.index + match[0].length
  }
  return out + escapeLittle(text.slice(last))
}

// What a reader sees: the mention syntax reduced to the name
const asShown = (text) => text.replace(/@\[([^\]]+)\]\(urn:li:[^)]+\)/g, '@$1')

function readDraft(folderArg, fileArg) {
  const folder = path.resolve(folderArg)
  const postFile = path.join(folder, fileArg)
  if (!fs.existsSync(postFile)) throw new Stop(`No ${fileArg} in ${folder}.`)

  // post.md is the text, then a line "---", then Kevin's checklist, which is not posted
  const text = fs.readFileSync(postFile, 'utf8').split(/^---\s*$/m)[0].trim()

  const images = fs.readdirSync(folder)
    .filter((name) => /^\d+\.(png|jpe?g)$/i.test(name))
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10))

  // Alt text, one line per image in order: alt.txt beside post.md, alt.fr.txt beside post.fr.md
  const altFile = path.join(folder, fileArg.replace(/^post/, 'alt').replace(/\.md$/, '.txt'))
  const alts = fs.existsSync(altFile)
    ? fs.readFileSync(altFile, 'utf8').split('\n').map((line) => line.trim()).filter(Boolean)
    : []

  return { folder, text, images, alts }
}

// ── Publish ──────────────────────────────────────────────────────────────────

// Prints the text as it will read, and stops on what LinkedIn would refuse
function showText(text) {
  console.log(`${'─'.repeat(60)}\n${asShown(text)}\n${'─'.repeat(60)}`)
  console.log(`${text.length} characters, public.`)
  if (!text) throw new Stop('The post has no text.')
  if (text.length > MAX_LENGTH) throw new Stop(`LinkedIn takes ${MAX_LENGTH} characters at most.`)
}

function warnUntagged(text) {
  const untagged = text.match(/(?<!\S)@(?!\[)[\p{L}][\p{L}\p{N}.'-]*/gu)
  if (untagged) console.log(`\nNot tags, shown as plain text: ${untagged.join(', ')}. Add them by editing the post on LinkedIn.`)
}

function whoIsSignedIn() {
  try {
    return `on the profile of ${readToken().name}`
  } catch (error) {
    if (!(error instanceof Stop)) throw error
    return error.message.replace(/\.$/, '')
  }
}

const apiHeaders = (token) => ({
  Authorization: `Bearer ${token.accessToken}`,
  'LinkedIn-Version': API_VERSION,
  'X-Restli-Protocol-Version': '2.0.0',
  'Content-Type': 'application/json',
})

async function publish(args) {
  const confirmed = args.includes('--yes')
  const [folderArg, fileArg = 'post.md'] = args.filter((arg) => arg !== '--yes')
  if (!folderArg) throw new Stop('Usage: npm run linkedin:publish -- <draft folder> [post file] [--yes]')

  const { folder, text, images, alts } = readDraft(folderArg, fileArg)

  showText(text)
  images.forEach((name, i) => console.log(`Image ${i + 1}: ${name}${alts[i] ? `, alt: ${alts[i]}` : ', no alt text'}`))
  if (images.length > MAX_IMAGES) throw new Stop(`LinkedIn takes ${MAX_IMAGES} images at most.`)

  warnUntagged(text)
  if (!images.length) console.log('\nNo image: the skill gives every post at least one.')
  if (images.length && alts.length < images.length) console.log('\nSome images have no alt text.')

  if (!confirmed) {
    console.log(`\nPreview only: nothing was published. Run again with --yes to publish it (it goes ${whoIsSignedIn()}).`)
    return
  }

  const token = readToken()
  const headers = apiHeaders(token)

  const media = []
  for (const [i, name] of images.entries()) {
    const { value } = await readJson(await fetch('https://api.linkedin.com/rest/images?action=initializeUpload', {
      method: 'POST',
      headers,
      body: JSON.stringify({ initializeUploadRequest: { owner: token.author } }),
    }), `Preparing ${name}`)
    const upload = await fetch(value.uploadUrl, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token.accessToken}` },
      body: fs.readFileSync(path.join(folder, name)),
    })
    if (!upload.ok) throw new Stop(`Uploading ${name} failed (${upload.status}): ${await upload.text()}`)
    media.push({ id: value.image, ...(alts[i] ? { altText: alts[i] } : {}) })
    console.log(`Uploaded ${name}`)
  }

  // LinkedIn processes an image after the upload: give it a few seconds before posting
  for (const { id } of media) {
    for (let attempt = 0; attempt < 15; attempt++) {
      const response = await fetch(`https://api.linkedin.com/rest/images/${encodeURIComponent(id)}`, { headers })
      if (response.ok && (await response.json()).status === 'AVAILABLE') break
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
  }

  const post = {
    author: token.author,
    commentary: toLittleText(text),
    visibility: 'PUBLIC',
    distribution: { feedDistribution: 'MAIN_FEED', targetEntities: [], thirdPartyDistributionChannels: [] },
    lifecycleState: 'PUBLISHED',
    isReshareDisabledByAuthor: false,
  }
  if (media.length === 1) post.content = { media: media[0] }
  if (media.length > 1) post.content = { multiImage: { images: media } }

  const response = await fetch('https://api.linkedin.com/rest/posts', {
    method: 'POST',
    headers,
    body: JSON.stringify(post),
  })
  if (!response.ok) {
    throw new Stop(`Publishing failed (${response.status}): ${await response.text()}\nCheck the profile before running it again, so the post is not published twice.`)
  }
  const urn = response.headers.get('x-restli-id')
  console.log(`\nPublished: https://www.linkedin.com/feed/update/${urn}/`)
}

// ── Edit ─────────────────────────────────────────────────────────────────────

// The post as its URN, or as the link LinkedIn gives once a short lnkd.in link is opened
// (…-share-<id>-… or …-ugcPost-<id>-…). An "activity" id is not one the API takes.
function postUrn(arg) {
  const match = decodeURIComponent(arg).match(/urn:li:(share|ugcPost):(\d+)|[-_](share|ugcPost)-(\d+)/)
  if (!match) {
    throw new Stop(`Not a post LinkedIn's API can edit: ${arg}\nGive urn:li:share:<id>, or the full linkedin.com/posts/… link (open a lnkd.in link first to get it).`)
  }
  return match[1] ? `urn:li:${match[1]}:${match[2]}` : `urn:li:${match[3]}:${match[4]}`
}

// Replaces the whole text of a published post. Its images cannot be changed, and every
// tag or hashtag in the old text is gone unless the new text has it again.
async function edit(args) {
  const confirmed = args.includes('--yes')
  const [folderArg, postArg, fileArg = 'post.md'] = args.filter((arg) => arg !== '--yes')
  if (!folderArg || !postArg) throw new Stop('Usage: npm run linkedin:edit -- <draft folder> <post link or urn> [post file] [--yes]')

  const urn = postUrn(postArg)
  const { text } = readDraft(folderArg, fileArg)

  console.log(`New text for ${urn}:`)
  showText(text)
  console.log('The images stay as they are: the API cannot change them. Tags and hashtags of the old text are replaced too.')
  warnUntagged(text)

  if (!confirmed) {
    console.log(`\nPreview only: nothing was changed. Run again with --yes to replace the text (${whoIsSignedIn()}).`)
    return
  }

  const token = readToken()
  const response = await fetch(`https://api.linkedin.com/rest/posts/${encodeURIComponent(urn)}`, {
    method: 'POST',
    headers: { ...apiHeaders(token), 'X-RestLi-Method': 'PARTIAL_UPDATE' },
    body: JSON.stringify({ patch: { $set: { commentary: toLittleText(text) } } }),
  })
  if (!response.ok) throw new Stop(`Editing failed (${response.status}): ${await response.text()}`)
  console.log(`\nEdited: https://www.linkedin.com/feed/update/${urn}/`)
}

// ── Main ─────────────────────────────────────────────────────────────────────

const [command, ...args] = process.argv.slice(2)
try {
  if (command === 'auth') await auth()
  else if (command === 'publish') await publish(args)
  else if (command === 'edit') await edit(args)
  else throw new Stop('Usage: node scripts/linkedin.mjs auth | publish <draft folder> [post file] [--yes] | edit <draft folder> <post> [post file] [--yes]')
} catch (error) {
  console.error(error instanceof Stop ? error.message : error)
  process.exit(1)
}
