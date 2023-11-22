import { ReactNode } from 'react'

export const StorybookFontsDecorator = ({
  children,
  font,
}: {
  children: ReactNode
  font: string
}) => {
  return <div className={font}>{children}</div>
}
