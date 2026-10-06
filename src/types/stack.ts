/* ══════════════════════════════════════════════════════
   Stack — type definitions
   ══════════════════════════════════════════════════════ */

export type StackItem = {
  /** Iconify name, written as a complete string literal */
  icon: string

  label: string
}

/** A titled column of the classic stack (Backend, Frontend...) */
export type StackGroup = {
  label: string
  icon: string
  items: StackItem[]
}

/**
 * main: the agent used every day; the one featured card
 * daily: used every day, beside the main agent
 * before: history. Not a card on the /ai page; it keeps its logo in the journey
 */
export type AiToolStatus = 'main' | 'daily' | 'before'

export type AiTool = StackItem & {
  /** What the tool is, in a few words */
  role: string

  status: AiToolStatus
}

/** Something not learned yet. It has no logo on purpose: nothing has been built with it */
export type UpcomingAiTool = {
  label: string

  /** What it is, in one line */
  role: string

  /** Its own site, when it has one */
  href?: string
}
