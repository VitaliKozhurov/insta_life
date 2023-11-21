import { ReactElement } from 'react'

import { RootLayout } from '@/pages'
import { HeadMeta } from '@/shared'

export const HomePage = () => {
  return (
    <>
      <HeadMeta title={'Main page'} />
      <span>Home page</span>
    </>
  )
}

HomePage.getLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>
}
