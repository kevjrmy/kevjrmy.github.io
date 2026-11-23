import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'
import { locales, localizePath } from './src/i18n/locales'
import { messages, type Messages } from './src/i18n/messages'

// Where the site is served: the canonical and hreflang links are absolute
const SITE = 'https://kevjrmy.github.io'

const SRC_DIR = path.resolve(import.meta.dirname, './src')
const ICON_SETS_DIR = path.resolve(import.meta.dirname, './node_modules/@iconify-json')
// The marks no installed set has, as one more set: 'local:name'
const LOCAL_PREFIX = 'local'
const LOCAL_ICONS = path.resolve(SRC_DIR, './icons/local.json')

type IconSet = {
  prefix: string
  width?: number
  height?: number
  icons: Record<string, unknown>
  aliases?: Record<string, { parent: string }>
}

// Every 'prefix:name' string literal in src/ whose prefix is an installed @iconify-json set,
// or the local one
function findUsedIcons(): Record<string, string[]> {
  const prefixes = new Set([...fs.readdirSync(ICON_SETS_DIR), LOCAL_PREFIX])
  const used: Record<string, Set<string>> = {}

  const files = fs.readdirSync(SRC_DIR, { recursive: true, encoding: 'utf8' })
  for (const file of files) {
    if (!/\.tsx?$/.test(file)) continue
    const code = fs.readFileSync(path.join(SRC_DIR, file), 'utf8')
    for (const [, prefix, name] of code.matchAll(/['"`]([a-z0-9-]+):([a-z0-9-]+)['"`]/g)) {
      if (prefixes.has(prefix)) (used[prefix] ??= new Set()).add(name)
    }
  }

  return Object.fromEntries(
    Object.keys(used).sort().map(prefix => [prefix, [...used[prefix]].sort()])
  )
}

// Bundles only the icons the app uses, so @iconify/react never fetches them from the
// Iconify API at runtime. An icon name that doesn't exist in its set fails the build.
function bundledIcons(): Plugin {
  const VIRTUAL_ID = 'virtual:icons'
  const RESOLVED_ID = '\0' + VIRTUAL_ID
  let lastUsed = ''

  return {
    name: 'bundled-icons',

    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID
    },

    load(id) {
      if (id !== RESOLVED_ID) return

      const used = findUsedIcons()
      lastUsed = JSON.stringify(used)
      this.addWatchFile(LOCAL_ICONS)

      const collections = Object.entries(used).map(([prefix, names]) => {
        const file = prefix === LOCAL_PREFIX ? LOCAL_ICONS : path.join(ICON_SETS_DIR, prefix, 'icons.json')
        const set: IconSet = JSON.parse(fs.readFileSync(file, 'utf8'))
        const icons: IconSet['icons'] = {}
        const aliases: NonNullable<IconSet['aliases']> = {}

        for (let name of names) {
          // An alias points to a parent icon (or another alias): keep the whole chain
          while (set.aliases?.[name]) {
            aliases[name] = set.aliases[name]
            name = aliases[name].parent
          }
          if (!set.icons[name]) this.error(`Unknown icon "${prefix}:${name}"`)
          icons[name] = set.icons[name]
        }

        return { prefix, width: set.width, height: set.height, icons, aliases }
      })

      return [
        `import { addCollection } from '@iconify/react'`,
        ...collections.map(c => `addCollection(${JSON.stringify(c)})`),
      ].join('\n')
    },

    // Dev: rebuild the bundle when an edit adds or removes an icon
    handleHotUpdate({ file, server }) {
      if (!file.startsWith(SRC_DIR) || JSON.stringify(findUsedIcons()) === lastUsed) return
      const mod = server.moduleGraph.getModuleById(RESOLVED_ID)
      if (mod) server.moduleGraph.invalidateModule(mod)
      server.ws.send({ type: 'full-reload' })
      return []
    },
  }
}

const escapeHtml = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// GitHub Pages serves /portfolio from portfolio.html, with a 200, and 404.html (with a
// 404) for any path that is not a file. So every page gets a copy of the app shell in
// each language, carrying its own <html lang>, tab title, canonical and hreflang links,
// and 404.html is the shell for every other URL: React Router renders the not-found page.
// The pages are the keys of `titles` in the messages, as MainLayout reads them.
function staticPages(): Plugin {
  return {
    name: 'static-pages',
    apply: 'build',
    writeBundle({ dir }) {
      if (!dir) return
      const shell = fs.readFileSync(path.join(dir, 'index.html'), 'utf8')
      if (!shell.includes('<html lang="en">') || !/<title>.*<\/title>/.test(shell)) {
        this.error('index.html has lost <html lang="en"> or its <title>')
      }
      fs.writeFileSync(path.join(dir, '404.html'), shell)

      const write = (file: string, html: string) => {
        fs.mkdirSync(path.dirname(path.join(dir, file)), { recursive: true })
        fs.writeFileSync(path.join(dir, file), html)
      }

      const keys = Object.keys(messages.en.titles) as (keyof Messages['titles'])[]
      for (const key of keys.filter((key) => key !== 'notFound')) {
        const page = key === 'home' ? '/' : `/${key}`
        const alternates = [
          ...locales.map((locale) => [locale, localizePath(page, locale)]),
          ['x-default', page],
        ].map(([lang, url]) => `<link rel="alternate" hreflang="${lang}" href="${SITE}${url}" />`)

        for (const locale of locales) {
          const url = localizePath(page, locale)
          const head = [
            `<title>${escapeHtml(messages[locale].titles[key])}</title>`,
            `<link rel="canonical" href="${SITE}${url}" />`,
            ...alternates,
          ].join('\n  ')
          const html = shell
            .replace('<html lang="en">', `<html lang="${locale}">`)
            .replace(/<title>.*<\/title>/, head)

          if (url === '/') write('index.html', html)
          else write(`${url.slice(1)}.html`, html)
          // /fr is both a file and a folder (fr/about.html): if Pages sends /fr to /fr/,
          // the folder's index.html is the same page
          if (url === `/${locale}`) write(`${locale}/index.html`, html)
        }
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), bundledIcons(), staticPages()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src')
    }
  }
})
