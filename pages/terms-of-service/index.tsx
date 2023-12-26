import { ReactElement } from 'react'

import { RootLayout, UsageAgreementsPage } from '@/pages'
import { useTranslation } from '@/shared'

const TermsOfServicePage = () => {
  const {
    text: { termsOfServicePage: t },
  } = useTranslation()

  return <UsageAgreementsPage description={t.description} title={t.title} />
}

TermsOfServicePage.getLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>
}

export default TermsOfServicePage
