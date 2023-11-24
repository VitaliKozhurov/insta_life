import React, { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as RadixSelect from '@radix-ui/react-select'
import clsx from 'clsx'

type SelectProps = {
  className?: string
  label?: string
  options: SelectItemProps[]
  placeholder?: string
} & ComponentPropsWithoutRef<RadixSelect.Root>

export const Select = forwardRef<ElementRef<typeof RadixSelect.Root>, SelectProps>(
  ({ className, label, options, placeholder, ...restProps }, ref) => (
    <RadixSelect.Root>
      <RadixSelect.Trigger aria-label={'Food'} className={''}>
        <RadixSelect.Value placeholder={'Select a fruit…'} />
        <RadixSelect.Icon className={'SelectIcon'}>{/*<ChevronDownIcon />*/}</RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content className={'SelectContent'}>
          <RadixSelect.Viewport className={'SelectViewport'}>
            {/*  <RadixSelect value={'apple'}>Apple</RadixSelect>*/}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
)

type SelectItemProps = {
  icon?: ReactNode
  title: string
} & ComponentPropsWithoutRef<typeof RadixSelect.SelectItem>

const SelectItem = forwardRef<ElementRef<typeof RadixSelect.SelectItem>, SelectItemProps>(
  ({ className, icon, title, ...restProps }, forwardedRef) => {
    return (
      <RadixSelect.Item className={className} {...restProps} ref={forwardedRef}>
        <RadixSelect.ItemText>{title}</RadixSelect.ItemText>
      </RadixSelect.Item>
    )
  }
)
