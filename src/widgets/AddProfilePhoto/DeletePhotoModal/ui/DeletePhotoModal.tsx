import {
  Button,
  ButtonVariant,
  Modal,
  Typography,
  TypographyVariant,
  onUploadPhotoErrorHandler,
  useDeleteAvatarMutation,
} from '@/shared'

import s from './DeletePhotoModal.module.scss'
type Props = {
  onOpenChange: (value: boolean) => void
  open: boolean
}
export const DeletePhotoModal = ({ onOpenChange, open }: Props) => {
  const [deleteAvatar] = useDeleteAvatarMutation()
  const onRemoveAvatarHandler = () => {
    deleteAvatar()
      .unwrap()
      .catch(error => onUploadPhotoErrorHandler(error, true))
  }
  const onOpenChangeHandler = () => {}
  const onCloseModal = () => {
    onOpenChange(false)
  }

  return (
    <Modal className={s.root} onOpenChange={onOpenChange} open={open} title={'Delete Photo'}>
      <div className={s.content}>
        <Typography className={s.text} variant={TypographyVariant.Regular_16}>
          Are you sure you want to delete the photo?
        </Typography>
        <div className={s.buttonsGroup}>
          <Button variant={ButtonVariant.TERTIARY}>Yes</Button>
          <Button onClick={onCloseModal}>Now</Button>
        </div>
      </div>
    </Modal>
  )
}
