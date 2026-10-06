import type { AiTool, StackGroup, StackItem, UpcomingAiTool } from '@/types/stack'

// The stack comes in two kinds, and every tool belongs to exactly one:
//   AI      — the agents and the tools around them (Claude Code)
//   Classic — languages, frameworks and platforms (Node.js)
// The home strip, the About toolkit and the /ai page all read from here.

// ── AI stack ──────────────────────────────────────────────────────────────────
// Claude Code first, everywhere (docs/content.md, Positioning).
// What Kevin works with today comes first: Claude Code, Cursor and Markdown.
// The rest is history ('before'): it is shown nowhere as a stack, and only lends its
// logo to the journey of the /ai page. Grok is not here: he uses it, but not for
// work, so it is only named in that journey.

export const aiStack: AiTool[] = [
  { icon: 'logos:claude-code', label: 'Claude Code', role: 'Main agent', status: 'main' },
  { icon: 'logos:cursor-icon', label: 'Cursor', role: 'Main editor', status: 'main' },
  { icon: 'vscode-icons:file-type-markdown', label: 'Markdown', role: 'Context files', status: 'daily' },
  { icon: 'logos:codex', label: 'Codex', role: 'Terminal agent', status: 'before' },
  { icon: 'logos:opencode-icon', label: 'OpenCode', role: 'Terminal agent', status: 'before' },
  { icon: 'logos:antigravity', label: 'Antigravity', role: 'Agentic IDE', status: 'before' },
  { icon: 'logos:google-aistudio', label: 'Google AI Studio', role: 'Agents in the browser', status: 'before' },
  { icon: 'logos:github-copilot', label: 'GitHub Copilot', role: 'Editor autocomplete', status: 'before' },
  { icon: 'logos:deepseek-icon', label: 'DeepSeek', role: 'Open reasoning model', status: 'before' },
]

// The working combo, and the only AI stack shown: the cards of the /ai page, the AI
// group of the home strip and the About toolkit
export const currentAiStack = aiStack.filter((tool) => tool.status !== 'before')

// Planned, not learned yet: shown on the /ai page only, labelled "coming soon"
export const upcomingAiTools: UpcomingAiTool[] = [
  {
    label: 'Hermes',
    role: 'The open-source agent by Nous Research, with a memory that lasts between sessions.',
    href: 'https://hermes-agent.nousresearch.com/',
  },
  {
    label: 'Jev',
    role: 'A model by TypeSafe AI that returns typed decisions with a confidence score, instead of text.',
    href: 'https://typesafe.ai/blog/introducing-system-one-models-and-jev',
  },
  {
    label: 'Local LLMs',
    role: 'Open-source models running on my own machine, starting with Ollama.',
  },
  {
    label: 'Linear',
    role: 'The issue tracker where the work is planned, and where tasks can be handed to coding agents.',
    href: 'https://linear.app/',
  },
]

// ── Classic stack ─────────────────────────────────────────────────────────────
// WordPress last (docs/content.md, Positioning)

export const classicStack: StackGroup[] = [
  {
    label: 'Backend',
    icon: 'tabler:server',
    items: [
      { icon: 'logos:laravel', label: 'Laravel' },
      { icon: 'vscode-icons:file-type-php', label: 'PHP' },
      { icon: 'vscode-icons:file-type-node', label: 'Node.js' },
      { icon: 'logos:express', label: 'Express' },
      { icon: 'vscode-icons:file-type-sql', label: 'SQL' },
      { icon: 'logos:supabase-icon', label: 'Supabase' },
      { icon: 'logos:firebase-icon', label: 'Firebase' },
    ],
  },
  {
    label: 'Frontend',
    icon: 'tabler:layout',
    items: [
      { icon: 'vscode-icons:file-type-vue', label: 'Vue' },
      { icon: 'vscode-icons:file-type-nuxt', label: 'Nuxt' },
      { icon: 'vscode-icons:file-type-reactjs', label: 'React' },
      { icon: 'logos:nextjs-icon', label: 'Next.js' },
      { icon: 'logos:astro-icon', label: 'Astro' },
      { icon: 'vscode-icons:file-type-typescript-official', label: 'TypeScript' },
      { icon: 'vscode-icons:file-type-vite', label: 'Vite' },
    ],
  },
  {
    label: 'Mobile & desktop',
    icon: 'tabler:devices',
    items: [
      { icon: 'vscode-icons:file-type-kotlin', label: 'Kotlin' },
      { icon: 'simple-icons:androidstudio', label: 'Android Studio' },
      { icon: 'tabler:brand-react-native', label: 'React Native' },
      { icon: 'tabler:device-mobile-code', label: 'PWA' },
      { icon: 'logos:electron', label: 'Electron' },
    ],
  },
  {
    label: 'Hosting & deploy',
    icon: 'tabler:cloud-upload',
    items: [
      { icon: 'logos:github-icon', label: 'GitHub Pages' },
      { icon: 'logos:vercel-icon', label: 'Vercel' },
      { icon: 'logos:laravel', label: 'Laravel Cloud' },
    ],
  },
  {
    label: 'Tools & other',
    icon: 'tabler:tools',
    items: [
      { icon: 'vscode-icons:file-type-git', label: 'Git' },
      { icon: 'logos:linux-tux', label: 'Linux' },
      { icon: 'logos:css-3', label: 'CSS' },
      { icon: 'mdi:wordpress', label: 'WordPress' },
    ],
  },
]

// ── Graphics and video ────────────────────────────────────────────────────────
// Not a stack: what Kevin draws and edits video with. Its own block on the About
// page, under the two stacks, and nowhere else

export const creativeTools: StackItem[] = [
  { icon: 'simple-icons:inkscape', label: 'Inkscape' },
  { icon: 'simple-icons:gimp', label: 'GIMP' },
  { icon: 'simple-icons:davinciresolve', label: 'DaVinci Resolve' },
  { icon: 'simple-icons:kdenlive', label: 'Kdenlive' },
]

// The classic group of the home strip: the six that matter most, in their own order
export const classicPicks: StackItem[] = [
  { icon: 'logos:laravel', label: 'Laravel' },
  { icon: 'vscode-icons:file-type-vue', label: 'Vue' },
  { icon: 'vscode-icons:file-type-reactjs', label: 'React' },
  { icon: 'vscode-icons:file-type-typescript-official', label: 'TypeScript' },
  { icon: 'vscode-icons:file-type-node', label: 'Node.js' },
  { icon: 'logos:nextjs-icon', label: 'Next.js' },
]
