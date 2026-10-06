/* ══════════════════════════════════════════════════════
   Stack — type definitions
   ══════════════════════════════════════════════════════ */

import type { Messages } from '@/i18n/messages'

export type StackItem = {
  /** Iconify name, written as a complete string literal */
  icon: string

  label: string
}

/** A titled column of the classic stack (Backend, Frontend...) */
export type StackGroup = {
  /** Key of its title in the messages of each language */
  id: keyof Messages['stack']['groups']
  icon: string
  items: StackItem[]
}

/**
 * main: the main agent and the main editor; the two featured cards
 * daily: used every day, beside them
 * before: history. Not a card on the /ai page; it keeps its logo in the journey
 */
export type AiToolStatus = 'main' | 'daily' | 'before'

/** A current tool also has a role ("Main agent"), in the messages under its label */
export type AiTool = StackItem & {
  status: AiToolStatus
}

/** Something not learned yet. It has no logo on purpose: nothing has been built with it */
export type UpcomingAiTool = {
  /** Key of its name and of its one-line description in the messages of each language */
  id: keyof Messages['ai']['stack']['upcoming']

  /** Its own site, when it has one */
  href?: string
}
