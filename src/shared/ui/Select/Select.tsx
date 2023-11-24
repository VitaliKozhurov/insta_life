import React, { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as RadixSelect from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './Select.module.scss'
type SelectProps = {
  className?: string
  label?: string
  options: SelectItemProps[]
  placeholder?: string
} & ComponentPropsWithoutRef<typeof RadixSelect.Root>

export const Select = forwardRef<ElementRef<typeof RadixSelect.Root>, SelectProps>(
  ({ className, label, onValueChange, options, placeholder, value, ...restProps }, ref) => {
    const classNames = {
      trigger: s.trigger,
    }

    return (
      <RadixSelect.Root onValueChange={onValueChange} value={value} {...restProps}>
        <RadixSelect.Trigger aria-label={'Food'} className={s.trigger}>
          <RadixSelect.Value placeholder={placeholder} />
          <RadixSelect.Icon className={s.selectItem}>{/*<ChevronDownIcon />*/}</RadixSelect.Icon>
        </RadixSelect.Trigger>

        <RadixSelect.Portal>
          <RadixSelect.Content className={s.content} position={'popper'}>
            <RadixSelect.Viewport className={'SelectViewport'}>
              {options.map(item => (
                <SelectItem key={item.title} {...item} />
              ))}
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    )
  }
)

type SelectItemProps = {
  icon?: ReactNode
  title: string
} & ComponentPropsWithoutRef<typeof RadixSelect.SelectItem>

const SelectItem = forwardRef<ElementRef<typeof RadixSelect.SelectItem>, SelectItemProps>(
  ({ className, icon, title, ...restProps }, forwardedRef) => {
    const classNames = {
      item: clsx(s.selectItem, className),
      text: clsx(s.itemText),
    }

    return (
      <RadixSelect.Item className={classNames.item} {...restProps} ref={forwardedRef}>
        <RadixSelect.ItemText>{title}</RadixSelect.ItemText>
      </RadixSelect.Item>
    )
  }
)
