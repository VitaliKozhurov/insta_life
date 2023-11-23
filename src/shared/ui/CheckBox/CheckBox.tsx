import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { CheckBoxIcon, TypographyVariant } from '@/shared'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import s from './CheckBox.module.scss'

import { Typography } from '../Typography'

export type CheckboxProps = { label?: string } & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>

export const Checkbox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, CheckboxProps>(
  ({ checked, className, label, ...restProps }, ref) => {
    const classNames = {
      indicator: clsx(s.indicator, restProps.disabled && s.disabledIndicator),
      label: clsx(s.label, restProps.disabled && s.disabledLabel),
      root: clsx(s.root),
      wrapper: clsx(s.checkBoxWrapper, className),
    }

    return (
      <div className={classNames.wrapper}>
        {label && (
          <Typography
            as={'label'}
            className={classNames.label}
            htmlFor={label}
            variant={TypographyVariant.Regular_14}
          >
            {label}
          </Typography>
        )}
        <RadixCheckbox.Root className={classNames.root} id={label} ref={ref} {...restProps}>
          {checked && (
            <RadixCheckbox.Indicator className={classNames.indicator} forceMount>
              <CheckBoxIcon />
            </RadixCheckbox.Indicator>
          )}
        </RadixCheckbox.Root>
      </div>
    )
  }
)
