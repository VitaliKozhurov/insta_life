import type { Meta, StoryObj } from '@storybook/react'

import { Recaptcha } from './Recaptcha'

const meta: Meta<typeof Recaptcha> = {
  component: Recaptcha,
  tags: ['autodocs'],
  title: 'Components/Recaptcha',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
