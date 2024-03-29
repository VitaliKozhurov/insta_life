import { ReactElement, ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'

import { AuthProvider, ReduxProvider } from '@/application'
import { useRouterLoader } from '@/shared'
import { NextPage } from 'next'
import { AppProps } from 'next/app'

import 'react-toastify/dist/ReactToastify.css'

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  useRouterLoader()
  const getLayout = Component.getLayout ?? (page => page)

  return (
    <>
      <ToastContainer position={'bottom-left'} />

      <ReduxProvider>
        <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
      </ReduxProvider>
    </>
  )
}
