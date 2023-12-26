import { ReactElement } from 'react'

import { RootLayout, UsageAgreementsPage } from '@/pages'
import { useTranslation } from '@/shared'

const PrivacyPolicyPage = () => {
  const {
    text: { privacyPolicyPage: t },
  } = useTranslation()

  return <UsageAgreementsPage description={t.description} title={t.title} />
}

PrivacyPolicyPage.getLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>
}

export default PrivacyPolicyPage
