import type { AiTool, StackGroup, StackItem, UpcomingAiTool } from '@/types/stack'

// The stack comes in two kinds, and every tool belongs to exactly one:
//   AI      — the agents and the tools around them (Claude Code)
//   Classic — languages, frameworks and platforms (Node.js)
// The home marquee, the About toolkit and the /ai page all read from here.

// ── AI stack ──────────────────────────────────────────────────────────────────
// Claude Code first, everywhere (docs/content.md, Positioning)

export const aiStack: AiTool[] = [
  { icon: 'logos:claude-code', label: 'Claude Code', role: 'Main agent', status: 'main' },
  { icon: 'logos:cursor-icon', label: 'Cursor', role: 'Editor', status: 'current' },
  { icon: 'logos:codex', label: 'Codex', role: 'Terminal agent', status: 'before' },
  { icon: 'logos:opencode-icon', label: 'OpenCode', role: 'Terminal agent', status: 'before' },
  { icon: 'logos:antigravity', label: 'Antigravity', role: 'Agentic IDE', status: 'before' },
  { icon: 'logos:google-aistudio', label: 'Google AI Studio', role: 'Agents in the browser', status: 'before' },
  { icon: 'logos:grok-icon', label: 'Grok', role: 'Voice mode', status: 'occasional' },
  { icon: 'logos:deepseek-icon', label: 'DeepSeek', role: 'Open reasoning model', status: 'occasional' },
]

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
    ],
  },
  {
    label: 'Frontend',
    icon: 'tabler:layout',
    items: [
      { icon: 'vscode-icons:file-type-vue', label: 'Vue' },
      { icon: 'vscode-icons:file-type-reactjs', label: 'React' },
      { icon: 'vscode-icons:file-type-typescript-official', label: 'TypeScript' },
      { icon: 'vscode-icons:file-type-vite', label: 'Vite' },
      { icon: 'logos:nextjs-icon', label: 'Next.js' },
    ],
  },
  {
    label: 'Mobile',
    icon: 'tabler:device-mobile',
    items: [
      { icon: 'vscode-icons:file-type-kotlin', label: 'Kotlin' },
      { icon: 'tabler:device-mobile-code', label: 'PWA' },
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

// The classic row of the home marquee: a shorter pick, in its own order
export const classicMarquee: StackItem[] = [
  { icon: 'logos:laravel', label: 'Laravel' },
  { icon: 'vscode-icons:file-type-vue', label: 'Vue' },
  { icon: 'vscode-icons:file-type-reactjs', label: 'React' },
  { icon: 'vscode-icons:file-type-typescript-official', label: 'TypeScript' },
  { icon: 'vscode-icons:file-type-node', label: 'Node.js' },
  { icon: 'vscode-icons:file-type-vite', label: 'Vite' },
  { icon: 'logos:nextjs-icon', label: 'Next.js' },
  { icon: 'vscode-icons:file-type-php', label: 'PHP' },
  { icon: 'vscode-icons:file-type-kotlin', label: 'Kotlin' },
  { icon: 'vscode-icons:file-type-git', label: 'Git' },
  { icon: 'mdi:wordpress', label: 'WordPress' },
]
