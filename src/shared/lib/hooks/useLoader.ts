import { useEffect } from 'react'

import NProgress from 'nprogress'

export const useLoader = (isLoading: boolean) => {
  const startLoading = () => NProgress.start()
  const endLoading = () => NProgress.done()

  useEffect(() => {
    if (isLoading) {
      startLoading()
    }

    return () => {
      endLoading()
    }
  }, [isLoading])
}
