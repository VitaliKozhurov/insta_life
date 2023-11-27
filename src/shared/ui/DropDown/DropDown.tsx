import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as RadixDropDown from '@radix-ui/react-dropdown-menu'

type DropDownProps = {
  children: ReactNode
  trigger: ReactNode
} & ComponentPropsWithoutRef<typeof RadixDropDown.Content>

export const DropDown = forwardRef<ElementRef<typeof RadixDropDown.Content>, DropDownProps>(
  ({ children, className, trigger, ...restProps }, ref) => {
    return (
      <RadixDropDown.Root>
        <RadixDropDown.Trigger asChild>
          <button>{trigger}</button>
        </RadixDropDown.Trigger>

        <RadixDropDown.Portal>
          <RadixDropDown.Content className={'DropdownMenuContent'} ref={ref} {...restProps}>
            {children}
          </RadixDropDown.Content>
        </RadixDropDown.Portal>
      </RadixDropDown.Root>
    )
  }
)
