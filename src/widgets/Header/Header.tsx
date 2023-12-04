import { getLanguageOptions, useTranslation } from '@/shared/lib'
import { ButtonVariant, Routes, TypographyVariant } from '@/shared/types'
import { Button, Select, SelectOptions, Typography } from '@/shared/ui'
import Link from 'next/link'

import s from './Header.module.scss'

type Props = {
  isLoggedIn: boolean
  options?: SelectOptions[]
}

export const Header = ({ isLoggedIn, options }: Props) => {
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
  const localeValue = locale || (options && options[0].value) || languagesOptions[0].value

  return (
    <header className={classNames.header}>
      <div className={classNames.headerContainer}>
        <Typography as={Link} href={'/'} variant={TypographyVariant.Large}>
          Inctagram
        </Typography>
        <div className={classNames.headerDashboard}>
          <Select
            onValueChange={changeAppLanguageHandler}
            options={options || languagesOptions}
            value={localeValue}
          />
          {!isLoggedIn && (
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
