import { ReactElement } from 'react'

import { RootLayout } from '@/pages'
import { Button, HeadMeta, Routes, Typography, TypographyVariant, useTranslation } from '@/shared'
import Image from 'next/image'
import Link from 'next/link'
import notFound from 'public/404.svg'

import s from './NotFoundPage.module.scss'

export const NotFoundPage = () => {
  const {
    text: { notFoundPage: t },
  } = useTranslation()

  return (
    <>
      <HeadMeta title={'Not found'} />
      <main className={s.main}>
        <Image alt={'Not found page'} height={450} src={notFound} width={600} />
        <Typography variant={TypographyVariant.H1}>{t.text}</Typography>
        <Button as={Link} href={Routes.HOME}>
          {t.link}
        </Button>
      </main>
    </>
  )
}

NotFoundPage.getLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>
}
