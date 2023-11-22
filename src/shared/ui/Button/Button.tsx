import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
  ReactElement,
  forwardRef,
} from 'react'

import { ButtonVariant } from '@/shared'
import { clsx } from 'clsx'

import s from './Button.module.scss'

type AsProp<T extends ElementType> = {
  as?: T
}
type CustomProps = {
  className?: string
  fullWidth?: boolean
  variant?: ButtonVariant
}
type PropsToOmit<T extends ElementType, P> = keyof (AsProp<T> & P)
type PolymorphicType<T extends ElementType, Props = {}> = PropsWithChildren<Props & AsProp<T>> &
  Omit<ComponentPropsWithoutRef<T>, PropsToOmit<T, Props>>
type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>['ref']
type PolymorphicTypeWithRef<T extends ElementType, Props = {}> = PolymorphicType<T, Props> & {
  ref?: PolymorphicRef<T>
}
type Props<T extends ElementType> = PolymorphicTypeWithRef<T, CustomProps>
type ComponentType = <T extends ElementType = 'button'>(props: Props<T>) => ReactElement | null

export const Button: ComponentType = forwardRef(
  <T extends ElementType = 'button'>(
    { as, children, className, fullWidth, variant = ButtonVariant.PRIMARY, ...restProps }: Props<T>,
    ref?: PolymorphicRef<T>
  ) => {
    const Component = as || 'button'
    const componentClassName = clsx(s[variant], fullWidth && s.fullWidth, className)

    return (
      <Component className={componentClassName} ref={ref} {...restProps}>
        {children}
      </Component>
    )
  }
)
