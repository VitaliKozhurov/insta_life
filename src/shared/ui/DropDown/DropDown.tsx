import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef, useState } from 'react'

import * as RadixDropDown from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import s from './DropDown.module.scss'
type DropDownProps = {
  children: ReactNode
  dropDownTitle?: string
  secondaryTrigger?: ReactNode
  trigger: ReactNode
} & ComponentPropsWithoutRef<typeof RadixDropDown.Content>

export const DropDown = forwardRef<ElementRef<typeof RadixDropDown.Content>, DropDownProps>(
  ({ children, className, dropDownTitle, secondaryTrigger, trigger, ...restProps }, ref) => {
    const [open, setOpen] = useState(false)
    const classNames = {
      arrow: s.arrow,
      content: clsx(s.content, className),
      dropDownTitle: s.dropDownTitle,
      scrollContainer: clsx(s.scrollContainer, dropDownTitle && s.containerWithTitle),
      trigger: s.trigger,
    }

    return (
      <RadixDropDown.Root onOpenChange={setOpen} open={open}>
        <RadixDropDown.Trigger asChild className={classNames.trigger}>
          <button>
            {!!secondaryTrigger && (open ? secondaryTrigger : trigger)}
            {!secondaryTrigger && trigger}
          </button>
        </RadixDropDown.Trigger>
        <RadixDropDown.Portal>
          <RadixDropDown.Content
            align={'end'}
            className={classNames.content}
            ref={ref}
            {...restProps}
          >
            <RadixDropDown.Arrow asChild className={classNames.arrow}>
              <div></div>
            </RadixDropDown.Arrow>
            {dropDownTitle && <h3 className={classNames.dropDownTitle}>{dropDownTitle}</h3>}
            <div className={classNames.scrollContainer}>{children}</div>
          </RadixDropDown.Content>
        </RadixDropDown.Portal>
      </RadixDropDown.Root>
    )
  }
)
