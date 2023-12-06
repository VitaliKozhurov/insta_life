import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadixTabs from '@radix-ui/react-tabs'
import clsx from 'clsx'

import s from './TabItem.module.scss'
type Props = ComponentPropsWithoutRef<typeof RadixTabs.Trigger>
export const TabItem = forwardRef<ElementRef<typeof RadixTabs.Trigger>, Props>(
  ({ children, className, ...restProps }, ref) => {
    return (
      <RadixTabs.Trigger className={clsx(s.trigger, className)} {...restProps} ref={ref}>
        {children}
      </RadixTabs.Trigger>
    )
  }
)
