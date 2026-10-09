import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

const SRC_DIR = path.resolve(__dirname, './src')
const ICON_SETS_DIR = path.resolve(__dirname, './node_modules/@iconify-json')
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

// GitHub Pages serves 404.html for any path that isn't a file. Shipping the app shell
// under that name lets React Router handle deep links (/portfolio, /contact, ...).
function spaFallback(): Plugin {
  return {
    name: 'spa-fallback',
    apply: 'build',
    writeBundle({ dir }) {
      if (dir) fs.copyFileSync(path.join(dir, 'index.html'), path.join(dir, '404.html'))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), bundledIcons(), spaFallback()],
  // Own port: on Vite's default 5173, a dev service worker left by another project
  // (vite-plugin-pwa) keeps serving that project's index.html to the browser.
  server: {
    port: 5180,
    strictPort: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
