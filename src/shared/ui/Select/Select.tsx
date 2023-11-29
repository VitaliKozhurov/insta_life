import React, { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { VerticalArrowIcon } from '@/shared/assets'
import * as RadixSelect from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './Select.module.scss'

import { SelectItem } from './SelectItem'

export type SelectOptions = {
  className?: string
  icon?: ReactNode
  title: string
  value: string
}

export type SelectProps = {
  className?: string
  fullWidth?: boolean
  label?: string
  options: SelectOptions[]
  placeholder?: string
} & ComponentPropsWithoutRef<typeof RadixSelect.Root>

export const Select = forwardRef<ElementRef<typeof RadixSelect.Root>, SelectProps>(
  ({ className, fullWidth, label, options, placeholder, ...restProps }, ref) => {
    const classNames = {
      content: s.content,
      icon: s.icon,
      label: s.label,
      trigger: clsx(s.trigger, className),
    }

    return (
      <>
        <label className={classNames.label}>{label}</label>
        <RadixSelect.Root {...restProps}>
          <RadixSelect.Trigger aria-label={'Select'} className={classNames.trigger} ref={ref}>
            <RadixSelect.Value placeholder={placeholder} />
            <RadixSelect.Icon className={classNames.icon}>
              <VerticalArrowIcon size={2.4} />
            </RadixSelect.Icon>
          </RadixSelect.Trigger>

          <RadixSelect.Portal>
            <RadixSelect.Content className={classNames.content} position={'popper'}>
              <RadixSelect.Viewport className={'SelectViewport'}>
                {options.map(item => (
                  <SelectItem key={item.value} {...item}>
                    {item.title}
                  </SelectItem>
                ))}
              </RadixSelect.Viewport>
            </RadixSelect.Content>
          </RadixSelect.Portal>
        </RadixSelect.Root>
      </>
    )
  }
)
