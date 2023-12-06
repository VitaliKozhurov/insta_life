import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as RadixTabs from '@radix-ui/react-tabs'
import clsx from 'clsx'

import s from './Tabs.module.scss'
export type TabsProps = { children: ReactNode } & ComponentPropsWithoutRef<typeof RadixTabs.Root>

export const Tabs = forwardRef<ElementRef<typeof RadixTabs.Root>, TabsProps>(
  ({ children, className, ...restProps }, ref) => {
    return (
      <RadixTabs.Root className={clsx(s.root, className)} {...restProps} ref={ref}>
        <RadixTabs.List className={s.list}>{children}</RadixTabs.List>
      </RadixTabs.Root>
    )
  }
)
