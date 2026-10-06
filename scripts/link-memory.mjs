// Points Claude Code's memory at .claude/memory/ in this repo, so what it remembers
// about the project is committed with it and follows to another device.
// Claude Code wants an absolute path, which differs on each device: this writes it
// to .claude/settings.local.json, which git ignores. Run by `npm install` (the
// `prepare` script) and by `npm run memory:link`; it must never fail an install.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

try {
  // Nothing to link on the deploy runner
  if (process.env.CI) process.exit(0)

  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
  const file = path.join(root, '.claude', 'settings.local.json')
  const memory = path.join(root, '.claude', 'memory')

  // Keep whatever else this device has set
  const settings = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : {}
  if (settings.autoMemoryDirectory !== memory) {
    settings.autoMemoryDirectory = memory
    fs.writeFileSync(file, JSON.stringify(settings, null, 2) + '\n')
    console.log(`Claude Code memory -> ${memory} (from the next session)`)
  }
} catch (error) {
  console.warn(`Claude Code memory was not linked: ${error.message}`)
}
