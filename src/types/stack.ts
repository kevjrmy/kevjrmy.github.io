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
 * main: the agent used every day
 * current: in use
 * occasional: still used, but not often
 * before: used on real work, then replaced
 */
export type AiToolStatus = 'main' | 'current' | 'occasional' | 'before'

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
