import {
  Button,
  HeadMeta,
  PointerLeftIcon,
  Routes,
  Typography,
  TypographyVariant,
  useTranslation,
} from '@/shared'

import s from './UsageAgreementsPage.module.scss'

type Props = {
  description: string
  title: string
}

export const UsageAgreementsPage = ({ description, title }: Props) => {
  const { router } = useTranslation()
  const onClickBackHandler = () => {
    router.push(Routes.SIGN_UP)
  }

  return (
    <>
      <HeadMeta title={title} />
      <main className={s.main}>
        <div className={s.root}>
          <Button className={s.redirectLink} onClick={onClickBackHandler}>
            <PointerLeftIcon />
            {router.locale === 'en' ? 'Back to Sign Up' : 'Назад к регистрации'}
          </Button>
          <Typography as={'h1'} className={s.title} variant={TypographyVariant.H1}>
            {title}
          </Typography>
          <Typography className={s.text} variant={TypographyVariant.Regular_14}>
            {description}
          </Typography>
        </div>
      </main>
    </>
  )
}
