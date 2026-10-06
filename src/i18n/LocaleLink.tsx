import { Link, type LinkProps } from 'react-router-dom'
import { localizePath } from '@/i18n/locales'
import { useLocale } from '@/i18n/useLocale'

// A link to a page of the site, in the language being read: `to` is written
// without a language ('/services') and leads to '/fr/services' on the French pages.
type LocaleLinkProps = Omit<LinkProps, 'to'> & { to: string }

const LocaleLink: React.FC<LocaleLinkProps> = ({ to, ...props }) => {
  const { locale } = useLocale()
  return <Link to={localizePath(to, locale)} {...props} />
}

export default LocaleLink
