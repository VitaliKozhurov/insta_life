import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Select } from './Select'

const meta = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { title: 'Russian', value: 'russian' },
  { title: 'English', value: 'english' },
  { title: 'Spanish', value: 'spanish' },
]

export const Default: Story = {
  args: { open: true, options: options, value: options[0].value },
}
