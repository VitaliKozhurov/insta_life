import { ComponentPropsWithoutRef, ElementType } from 'react'

import { TypographyVariant } from '@/shared/types'
import { clsx } from 'clsx'

import s from './Typography.module.scss'
type CustomProps<T> = {
  as?: T
  className?: string
  variant?: TypographyVariant
}

type TypographyProps<T extends ElementType = 'p'> = CustomProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof CustomProps<T>>

export const Typography = <T extends ElementType = 'p'>({
  as,
  className,
  variant = TypographyVariant.Regular_16,
  ...restProps
}: TypographyProps<T>) => {
  const Component = as || 'p'
  const typographyClassName = clsx(s[variant], className)

  return <Component className={typographyClassName} {...restProps} />
}
