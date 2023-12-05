import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

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
      children: s.children,
      closeIcon: s.closeIcon,
      content: clsx(s.content, className),
      header: s.header,
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
              <div className={classNames.children}>{children}</div>
            </div>
          </RadixModal.Content>
        </RadixModal.Portal>
      </RadixModal.Root>
    )
  }
)
