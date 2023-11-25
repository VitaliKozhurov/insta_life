import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { CheckBoxIcon } from '@/shared'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import s from './Checkbox.module.scss'

export type CheckboxProps = { label?: string } & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>

export const Checkbox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, CheckboxProps>(
  ({ className, label, ...restProps }, ref) => {
    const classNames = {
      indicator: s.indicator,
      label: clsx(s.label, restProps.disabled && s.disabledLabel),
      root: clsx(s.root, className),
      wrapper: s.wrapper,
    }

    return (
      <div className={classNames.wrapper}>
        {label && (
          <label className={classNames.label} htmlFor={label}>
            {label}
          </label>
        )}
        <RadixCheckbox.Root className={classNames.root} id={label} ref={ref} {...restProps}>
          <RadixCheckbox.Indicator className={classNames.indicator}>
            <CheckBoxIcon size={1.8} />
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
      </div>
    )
  }
)
