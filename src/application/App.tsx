import { ReactElement, ReactNode } from 'react'

import { ReduxProvider } from '@/shared'
import { NextPage } from 'next'
import { AppProps } from 'next/app'

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? (page => page)

  return <ReduxProvider>{getLayout(<Component {...pageProps} />)}</ReduxProvider>
}
