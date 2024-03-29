import { useContext } from 'react'

import { AuthContext } from '@/application'
import {
  Button,
  ButtonVariant,
  Routes,
  Select,
  SelectItem,
  Typography,
  TypographyVariant,
  getLanguageOptions,
  useTranslation,
} from '@/shared'
import Link from 'next/link'

import s from './Header.module.scss'

export const Header = () => {
  const { isAuth } = useContext(AuthContext)
  const {
    router,
    text: { header: t },
  } = useTranslation()
  const { asPath, locale, pathname, push, query } = router

  const languagesOptions = getLanguageOptions(locale)
  const changeAppLanguageHandler = (newLocale: string) => {
    push({ pathname, query }, asPath, { locale: newLocale })
  }

  const classNames = {
    authLinks: s.authLinks,
    header: s.header,
    headerContainer: s.headerContainer,
    headerDashboard: s.headerDashboard,
  }
  const localeValue = locale || languagesOptions[0].value

  return (
    <header className={classNames.header}>
      <div className={classNames.headerContainer}>
        <Typography as={Link} href={'/'} variant={TypographyVariant.Large}>
          Inctagram
        </Typography>
        <div className={classNames.headerDashboard}>
          <Select
            onValueChange={changeAppLanguageHandler}
            options={languagesOptions}
            value={localeValue}
          >
            {languagesOptions.map(item => (
              <SelectItem key={item.value} {...item}>
                {item.title}
              </SelectItem>
            ))}
          </Select>
          {!isAuth && (
            <div className={classNames.authLinks}>
              <Button as={Link} href={Routes.SIGN_IN} variant={ButtonVariant.LINK}>
                {t.signInLink}
              </Button>
              <Button as={Link} href={Routes.SIGN_UP} variant={ButtonVariant.PRIMARY}>
                {t.signUpLink}
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
