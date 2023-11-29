import { ReactElement } from 'react'

import { SignUpForm } from '@/features'
import { RootLayout } from '@/pages'
import { HeadMeta } from '@/shared/config'
import { useTranslation } from '@/shared/lib'

export const HomePage = () => {
  const t = useTranslation()

  return (
    <>
      <HeadMeta title={'Main page'} />
      <h1>Home page</h1>
      <h2>{t.homePage.test}</h2>
      <SignUpForm />
    </>
  )
}

HomePage.getLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>
}
