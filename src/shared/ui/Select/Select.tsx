import React, { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { inter } from '@/application'
import { VerticalArrowIcon } from '@/shared'
import * as RadixSelect from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './Select.module.scss'

export type SelectOptions = {
  className?: string
  icon?: ReactNode
  title: string
  value: string
}

export type SelectProps = {
  children?: ReactNode
  className?: string
  fullWidth?: boolean
  label?: string
  options: SelectOptions[]
  placeholder?: string
} & ComponentPropsWithoutRef<typeof RadixSelect.Root>

export const Select = forwardRef<ElementRef<typeof RadixSelect.Root>, SelectProps>(
  ({ children, className, fullWidth, label, options, placeholder, ...restProps }, ref) => {
    const classNames = {
      content: clsx(s.content, inter.className),
      icon: s.icon,
      label: s.label,
      scrollContainer: clsx(s.scrollContainer),
      trigger: clsx(s.trigger, fullWidth && s.fullWidth, className),
    }
    const selectValue = options?.find(el => el.value === restProps.value)

    return (
      <>
        {label && <label className={classNames.label}>{label}</label>}
        <RadixSelect.Root {...restProps}>
          <RadixSelect.Trigger aria-label={'Select'} className={classNames.trigger} ref={ref}>
            <RadixSelect.Value placeholder={placeholder}>
              {selectValue?.icon}
              {selectValue?.title || placeholder}
            </RadixSelect.Value>
            <RadixSelect.Icon className={classNames.icon}>
              <VerticalArrowIcon size={2.4} />
            </RadixSelect.Icon>
          </RadixSelect.Trigger>
          <RadixSelect.Portal>
            <RadixSelect.Content className={classNames.content} position={'popper'}>
              <RadixSelect.Viewport className={'SelectViewport'}>{children}</RadixSelect.Viewport>
            </RadixSelect.Content>
          </RadixSelect.Portal>
        </RadixSelect.Root>
      </>
    )
  }
)
