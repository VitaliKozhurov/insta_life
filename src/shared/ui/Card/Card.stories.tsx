import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <h1>Default card Example</h1>,
  },
}
