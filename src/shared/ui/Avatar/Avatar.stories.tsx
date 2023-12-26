import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './Avatar'

const meta = {
  component: Avatar,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const AvatarWithoutImage: Story = {
  args: {
    size: 'large',
    userName: 'Jon Doe',
  },
}

export const AvatarWithImage: Story = {
  args: {
    size: 'large',
    src: 'https://say-hi.me/wp-content/uploads/2017/04/marco-xu-ToUPBCO62Lw-unsplash-1800x1200.jpg',
    userName: 'Jon Doe',
  },
}
