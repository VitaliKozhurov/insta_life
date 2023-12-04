import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPassword } from './ForgotPassword'

const meta = {
  component: ForgotPassword,
  tags: ['autodocs'],
  title: 'Widgets/ForgotPassword',
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const ForgotPasswordForm: Story = {}
