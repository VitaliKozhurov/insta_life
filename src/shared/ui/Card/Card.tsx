import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './Card.module.scss'
type Props = ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<ElementRef<'div'>, Props>(
  ({ children, className, ...restProps }, ref) => {
    const cardClassName = clsx(s.card, className)

    return (
      <div className={cardClassName} {...restProps} ref={ref}>
        {children}
      </div>
    )
  }
)
