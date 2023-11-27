import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef, useState } from 'react'

import * as RadixDropDown from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import s from './DropDown.module.scss'
type DropDownProps = {
  children: ReactNode
  dropDownTitle?: ReactNode
  trigger: ReactNode
} & ComponentPropsWithoutRef<typeof RadixDropDown.Content>

export const DropDown = forwardRef<ElementRef<typeof RadixDropDown.Content>, DropDownProps>(
  ({ children, className, dropDownTitle, trigger, ...restProps }, ref) => {
    const [open, setOpen] = useState(false)
    const classNames = {
      arrow: s.arrow,
      content: clsx(s.content, className),
      dropDownTitle: s.dropDownTitle,
      scrollContainer: s.scrollContainer,
      trigger: s.trigger,
    }

    return (
      <RadixDropDown.Root onOpenChange={setOpen} open={open}>
        <RadixDropDown.Trigger asChild>
          <button className={classNames.trigger}>{trigger}</button>
        </RadixDropDown.Trigger>
        <RadixDropDown.Portal>
          <RadixDropDown.Content className={classNames.content} ref={ref} {...restProps}>
            <RadixDropDown.Arrow asChild className={classNames.arrow}>
              <div></div>
            </RadixDropDown.Arrow>
            {dropDownTitle && dropDownTitle}
            <div className={classNames.scrollContainer}>{children}</div>
          </RadixDropDown.Content>
        </RadixDropDown.Portal>
      </RadixDropDown.Root>
    )
  }
)
