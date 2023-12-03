import type { Meta, StoryObj } from '@storybook/react'

import { ButtonVariant } from '@/shared/types'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        ButtonVariant.PRIMARY,
        ButtonVariant.SECONDARY,
        ButtonVariant.TERTIARY,
        ButtonVariant.LINK,
      ],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: ' Components/Button',
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: ButtonVariant.SECONDARY,
  },
}

export const Tertiary: Story = {
  args: {
    children: 'Tertiary Button',
    disabled: false,
    variant: ButtonVariant.TERTIARY,
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Fullwidth Button',
    disabled: false,
    fullWidth: true,
  },
}

export const Link: Story = {
  args: {
    as: 'a',
    children: 'Link',
    disabled: false,
    variant: ButtonVariant.LINK,
  },
}
