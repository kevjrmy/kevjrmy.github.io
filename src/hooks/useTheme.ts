import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

// Same key as the inline script in index.html, which sets data-theme before first paint
const STORAGE_KEY = 'theme'

const systemQuery = () => window.matchMedia('(prefers-color-scheme: dark)')
const systemTheme = (): Theme => (systemQuery().matches ? 'dark' : 'light')

const currentTheme = (): Theme => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')

// Storage can be unavailable (private mode, blocked site data): the switch then works for the visit only
const readChoice = () => {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

const writeChoice = (theme: Theme | null) => {
  try {
    if (theme) localStorage.setItem(STORAGE_KEY, theme)
    else localStorage.removeItem(STORAGE_KEY)
  } catch {
    // nothing to do
  }
}

const apply = (theme: Theme) => {
  document.documentElement.dataset.theme = theme
  // Browser chrome on phones follows the page color
  const surface = getComputedStyle(document.documentElement).getPropertyValue('--surface-primary').trim()
  document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => meta.setAttribute('content', surface))
}

// The theme is the system setting until the visitor picks the other one with the switch.
// Only a choice that differs from the system is stored: switching back to what the
// system says clears it, and the site follows the system again.
export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(currentTheme)

  useEffect(() => {
    apply(theme)
  }, [theme])

  useEffect(() => {
    const query = systemQuery()
    const onSystemChange = () => {
      if (!readChoice()) setTheme(systemTheme())
    }

    query.addEventListener('change', onSystemChange)
    return () => query.removeEventListener('change', onSystemChange)
  }, [])

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    writeChoice(next === systemTheme() ? null : next)
    setTheme(next)
  }

  return { theme, toggleTheme }
}
