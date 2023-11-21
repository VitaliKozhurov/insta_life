import Link from 'next/link'

import s from './Header.module.scss'
export const Header = () => {
  return (
    <header className={s.header}>
      <Link href={'/'}>Inctagram</Link>
      <h2>Select for Language</h2>
    </header>
  )
}
