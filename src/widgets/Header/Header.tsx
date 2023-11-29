import { ButtonVariant, TypographyVariant } from '@/shared/types'
import { Button, Flag, Select, SelectOptions, Typography } from '@/shared/ui'
import Link from 'next/link'
import { useRouter } from 'next/router'

import s from './Header.module.scss'

import en from '/public/flags/en.png'
import ru from '/public/flags/ru.png'

const languageOptions: SelectOptions[] = [
  { icon: <Flag size={2} src={ru} />, title: 'Russian', value: 'ru' },
  { icon: <Flag size={2} src={en} />, title: 'English', value: 'en' },
]

type Props = {
  isLoggedIn: boolean
  options?: SelectOptions[]
}

export const Header = ({ isLoggedIn, options }: Props) => {
  const { asPath, locale, pathname, push, query } = useRouter()

  const changeAppLanguageHandler = (newLocale: string) => {
    push({ pathname, query }, asPath, { locale: newLocale })
  }

  const classNames = {
    authLinks: s.authLinks,
    header: s.header,
    headerContainer: s.headerContainer,
    headerDashboard: s.headerDashboard,
  }
  const localeValue = locale || (options && options[0].value) || languageOptions[0].value

  return (
    <header className={classNames.header}>
      <div className={classNames.headerContainer}>
        <Typography as={Link} href={'/'} variant={TypographyVariant.Large}>
          Inctagram
        </Typography>
        <div className={classNames.headerDashboard}>
          <Select
            onValueChange={changeAppLanguageHandler}
            options={options || languageOptions}
            value={localeValue}
          />
          {!isLoggedIn && (
            <div className={classNames.authLinks}>
              <Button as={Link} href={'/sign-in'} variant={ButtonVariant.LINK}>
                Log in
              </Button>
              <Button as={Link} href={'/sign-up'} variant={ButtonVariant.PRIMARY}>
                Sign up
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
