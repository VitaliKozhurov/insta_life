import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { inter } from '@/application'
import { CloseIcon, Typography, TypographyVariant } from '@/shared'
import * as RadixModal from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import s from './Modal.module.scss'

export type ModalProps = {
  onOpenChange: (value: boolean) => void
  open: boolean
  title: string
  trigger?: ReactNode
} & ComponentPropsWithoutRef<typeof RadixModal.Content>

export const Modal = forwardRef<ElementRef<typeof RadixModal.Content>, ModalProps>(
  ({ children, className, onOpenChange, open, title, trigger, ...restProps }, ref) => {
    const classNames = {
      closeIcon: s.closeIcon,
      content: clsx(s.content, inter.className, className),
      header: clsx(s.header, inter.className),
      overlay: s.overlay,
    }

    return (
      <RadixModal.Root onOpenChange={onOpenChange} open={open}>
        <RadixModal.Trigger asChild>{trigger}</RadixModal.Trigger>
        <RadixModal.Portal>
          <RadixModal.Overlay className={classNames.overlay} />
          <RadixModal.Content asChild className={classNames.content} ref={ref} {...restProps}>
            <div>
              <header className={classNames.header}>
                <Typography as={'h1'} variant={TypographyVariant.H1}>
                  {title}
                </Typography>
                <RadixModal.Close asChild className={classNames.closeIcon}>
                  <CloseIcon />
                </RadixModal.Close>
              </header>
              <div>{children}</div>
            </div>
          </RadixModal.Content>
        </RadixModal.Portal>
      </RadixModal.Root>
    )
  }
)
