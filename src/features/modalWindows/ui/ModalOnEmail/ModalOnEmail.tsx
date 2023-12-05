import { Button, Modal, Typography, TypographyVariant, useTranslation } from '@/shared'

import s from './ModalOnEmail.module.scss'

type Props = {
  email: string
  onOpenChange: (value: boolean) => void
  open: boolean
}

export const ModalOnEmail = ({ email, onOpenChange, open }: Props) => {
  const {
    text: {
      modals: { modalOnEmail: t },
    },
  } = useTranslation()
  const classNames = {
    closeButton: s.closeButton,
    root: s.root,
    text: s.text,
  }
  const closeModalHandler = () => onOpenChange(false)

  return (
    <Modal onOpenChange={onOpenChange} open={open} title={t.title}>
      <div className={classNames.root}>
        <Typography className={classNames.text} variant={TypographyVariant.Regular_16}>
          {t.instructionText(email)}
        </Typography>
        <Button className={classNames.closeButton} onClick={closeModalHandler}>
          {t.button}
        </Button>
      </div>
    </Modal>
  )
}
