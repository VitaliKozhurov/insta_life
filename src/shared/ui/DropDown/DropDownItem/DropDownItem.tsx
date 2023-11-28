import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadixDropDown from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import s from './DropDownItem.module.scss'

type DropDownItemProps = ComponentPropsWithoutRef<typeof RadixDropDown.Item>

export const DropDownItem = forwardRef<ElementRef<typeof RadixDropDown.Item>, DropDownItemProps>(
  ({ children, className, onSelect }, ref) => {
    const classNames = {
      dropdownItem: clsx(s.dropdownItem, className),
    }
    const onSelectHandler = (e: Event) => {
      onSelect && onSelect(e)
      console.log('Click on dropdown item')
    }

    return (
      <RadixDropDown.Item className={classNames.dropdownItem} onSelect={onSelectHandler} ref={ref}>
        {children}
      </RadixDropDown.Item>
    )
  }
)
