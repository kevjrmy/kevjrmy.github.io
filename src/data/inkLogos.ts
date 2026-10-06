// Brand marks drawn in dark ink. They would vanish on the dark theme, so the global
// .ink-logo class (src/index.css) inverts them there. Add a logo here when it
// disappears in dark mode.
const inkLogos = new Set([
  'logos:cursor-icon',
  'logos:codex',
  'logos:opencode-icon',
  'logos:grok-icon',
  'logos:google-aistudio',
  'logos:github-copilot',
  'logos:express',
  'logos:astro-icon',
  'vscode-icons:file-type-markdown',
])

export const inkLogoClass = (icon: string) => (inkLogos.has(icon) ? 'ink-logo' : undefined)
