import {
  Button,
  ButtonVariant,
  Modal,
  Typography,
  TypographyVariant,
  onUploadPhotoErrorHandler,
  useDeleteAvatarMutation,
  useTranslation,
} from '@/shared'

import s from './DeletePhotoModal.module.scss'

type Props = {
  onOpenChange: (value: boolean) => void
  open: boolean
}
export const DeletePhotoModal = ({ onOpenChange, open }: Props) => {
  const { text } = useTranslation()
  const t = text.profilePage.general.photoUploader.deleteModal
  const [deleteAvatar] = useDeleteAvatarMutation()
  const onRemoveAvatarHandler = () => {
    deleteAvatar()
      .unwrap()
      .then(() => onOpenChange(false))
      .catch(error => onUploadPhotoErrorHandler(error, true))
  }
  const onCloseModal = () => {
    onOpenChange(false)
  }

  return (
    <Modal className={s.root} onOpenChange={onOpenChange} open={open} title={t.title}>
      <div className={s.content}>
        <Typography className={s.text} variant={TypographyVariant.Regular_16}>
          {t.text}
        </Typography>
        <div className={s.buttonsGroup}>
          <Button onClick={onRemoveAvatarHandler} variant={ButtonVariant.TERTIARY}>
            {t.submitButton}
          </Button>
          <Button onClick={onCloseModal}>{t.cancelButton}</Button>
        </div>
      </div>
    </Modal>
  )
}
