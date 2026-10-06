import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { basePath, localeNames, locales, localizePath } from '@/i18n/locales'
import { useLocale } from '@/i18n/useLocale'
import styles from './LanguageSwitch.module.css'

// The language being read, as its code, on a button that opens the list of the
// three. Each entry is a link to the same page in that language: the language is
// in the URL, and nothing is saved in the browser. Codes, not flags: a flag is a
// country, and each of these languages is spoken in several.
const LanguageSwitch: React.FC = () => {
  const { locale, t } = useLocale()
  const { pathname, hash } = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  const page = basePath(pathname)

  // Close on a press anywhere else
  useEffect(() => {
    if (!isOpen) return
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setIsOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [isOpen])

  // Escape closes the list only, not the menu sheet it may be in
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'Escape' || !isOpen) return
    e.stopPropagation()
    setIsOpen(false)
  }

  return (
    <div ref={rootRef} className={styles.root} onKeyDown={onKeyDown}>
      <button
        className={styles.button}
        onClick={() => setIsOpen(prev => !prev)}
        aria-expanded={isOpen}
        aria-label={`${t.header.language}: ${localeNames[locale]}`}
      >
        {locale}
        <Icon icon="tabler:chevron-down" width={14} height={14} aria-hidden="true" />
      </button>

      {isOpen && (
        <ul className={styles.list} role="list">
          {locales.map(option => (
            <li key={option}>
              <Link
                to={localizePath(page, option) + hash}
                className={styles.option}
                lang={option}
                hrefLang={option}
                aria-current={option === locale ? 'true' : undefined}
                onClick={() => setIsOpen(false)}
              >
                <span className={styles.code} aria-hidden="true">{option}</span>
                {localeNames[option]}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LanguageSwitch
