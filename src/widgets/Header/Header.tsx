import { Flag, Select, SelectOptions } from '@/shared/ui'
import Link from 'next/link'
import { useRouter } from 'next/router'

import s from './Header.module.scss'

import en from '/public/flags/en.png'
import ru from '/public/flags/ru.png'
const languageOptions: SelectOptions[] = [
  { icon: <Flag size={2} src={ru} />, title: 'Russian', value: 'ru' },
  { icon: <Flag size={2} src={en} />, title: 'English', value: 'en' },
]

export const Header = () => {
  const { asPath, locale, pathname, push, query } = useRouter()

  const changeAppLanguageHandler = (newLocale: string) => {
    push({ pathname, query }, asPath, { locale: newLocale })
  }

  return (
    <header className={s.header}>
      <Link href={'/'}>Inctagram</Link>
      <Select onValueChange={changeAppLanguageHandler} options={languageOptions} value={locale} />
    </header>
  )
}
