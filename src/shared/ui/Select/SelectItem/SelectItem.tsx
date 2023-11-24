import React, { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as RadixSelect from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './SelectItem.module.scss'

type SelectItemProps = {
  className?: string
  icon?: ReactNode
} & ComponentPropsWithoutRef<typeof RadixSelect.SelectItem>

export const SelectItem = forwardRef<ElementRef<typeof RadixSelect.SelectItem>, SelectItemProps>(
  ({ children, className, icon, ...restProps }, forwardedRef) => {
    const classNames = {
      item: clsx(s.selectItem, className),
      itemText: s.itemText,
    }

    return (
      <RadixSelect.Item className={classNames.item} {...restProps} ref={forwardedRef}>
        <RadixSelect.ItemText className={classNames.itemText}>
          {icon}
          {children}
        </RadixSelect.ItemText>
      </RadixSelect.Item>
    )
  }
)
