import type { Meta, StoryObj } from '@storybook/react'

import { TypographyVariant } from '@/shared/types'

import { Typography } from './'

const meta: Meta<typeof Typography> = {
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.values(TypographyVariant),
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
}

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    children: 'Large text',
    variant: TypographyVariant.Large,
  },
}

export const H1: Story = {
  args: {
    as: 'h1',
    children: 'H1 text',
    variant: TypographyVariant.H1,
  },
}

export const H2: Story = {
  args: {
    as: 'h2',
    children: 'H2 text',
    variant: TypographyVariant.H2,
  },
}
export const H3: Story = {
  args: {
    as: 'h3',
    children: 'H3 text',
    variant: TypographyVariant.H3,
  },
}

export const RegularText_16: Story = {
  args: {
    as: 'p',
    children: 'Regular text 16',
    variant: TypographyVariant.Regular_16,
  },
}

export const BoldText_16: Story = {
  args: {
    as: 'p',
    children: 'Bold text 16',
    variant: TypographyVariant.Bold_16,
  },
}

export const RegularText_14: Story = {
  args: {
    as: 'p',
    children: 'Regular text 14',
    variant: TypographyVariant.Regular_14,
  },
}

export const MediumText: Story = {
  args: {
    as: 'p',
    children: 'Medium text',
    variant: TypographyVariant.Medium_14,
  },
}

export const BoldText_14: Story = {
  args: {
    as: 'p',
    children: 'Bold text 14',
    variant: TypographyVariant.Bold_14,
  },
}

export const SmallText: Story = {
  args: {
    as: 'span',
    children: 'Small text',
    variant: TypographyVariant.Small_text,
  },
}

export const SmallTextSemiBold: Story = {
  args: {
    as: 'span',
    children: 'Small text semi bold',
    variant: TypographyVariant.Small_text_semi_bold,
  },
}

export const LinkRegular: Story = {
  args: {
    children: 'Link text regular',
    variant: TypographyVariant.Link_regular,
  },
}

export const LinkSmall: Story = {
  args: {
    children: 'Link text small',
    variant: TypographyVariant.Link_small,
  },
}

export const Error: Story = {
  args: {
    children: 'Error!',
    variant: TypographyVariant.ERROR,
  },
}
