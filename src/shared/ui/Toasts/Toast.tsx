import { toast } from 'react-toastify'

import { CloseIcon } from '@/shared'
import clsx from 'clsx'

import s from './Toast.module.scss'
type Props = {
  text: string
  withClose?: boolean
}

export const Toast = ({ text, withClose }: Props) => {
  const onCloseHandler = () => toast.dismiss()

  const classNames = {
    closeBtn: s.closeBtn,
    text: clsx(s.text, !withClose && s.centerText),
  }

  return (
    <>
      <p className={classNames.text}>{text}</p>
      {withClose && (
        <button className={classNames.closeBtn} onClick={onCloseHandler}>
          <CloseIcon />
        </button>
      )}
    </>
  )
}

type GetToastProps = {
  className?: string
  text: string
  variant: 'error' | 'success'
  withClose?: boolean
}

export const getToast = ({ className, text, variant, withClose = true }: GetToastProps) =>
  toast(<Toast text={text} withClose={withClose} />, {
    autoClose: !withClose && 5000,
    bodyClassName: s.body,
    className: clsx(s.container, s[variant], className),
    closeButton: false,
    closeOnClick: false,
    hideProgressBar: true,
  })
