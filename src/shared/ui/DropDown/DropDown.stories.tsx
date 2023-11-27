import type { Meta, StoryObj } from '@storybook/react'

import { CSSProperties } from 'react'

import { inter } from '@/application'
import { BellIcon } from '@/shared'

import { DropDown } from './DropDown'

const meta = {
  component: DropDown,
  tags: ['autodocs'],
  title: 'Components/DropDown',
} satisfies Meta<typeof DropDown>

export default meta
type Story = StoryObj<typeof meta>

const titleStyle: CSSProperties = {
  borderBottom: '1px solid var(--color-dark-100)',
  fontSize: '1.6rem',
  fontWeight: 500,
  margin: 0,
  paddingBottom: '1.2rem',
}

const Title = () => {
  return <h3 style={titleStyle}>{'Уведомления'}</h3>
}

export const Default: Story = {
  args: {
    children: (
      <>
        <h1>Example text</h1>
        <h1>Example text</h1>
        <h1>Example text</h1>
        <h1>Example text</h1>
        <h1>Example text</h1>
        <h1>Example text</h1>
        <h1>Example text</h1>
        <h1>Example text</h1>
        <h1>Example text</h1>
        <h1>Example text</h1>
        <h1>Example text</h1>
      </>
    ),
    className: inter.className,
    dropDownTitle: <Title />,
    trigger: <BellIcon size={2} />,
  },
}
