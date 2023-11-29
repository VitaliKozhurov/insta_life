import { useRouter } from 'next/router'

import { en, ru } from '../../locales'

export const useTranslation = () => {
  const router = useRouter()

  return router.locale === 'en' ? en : ru
}
