import type { Meta, StoryObj } from '@storybook/react'

import { AddProfilePhoto } from './AddProfilePhoto'

const meta = {
  component: AddProfilePhoto,
  tags: ['autodocs'],
  title: 'Widgets/AddProfilePhoto',
} satisfies Meta<typeof AddProfilePhoto>

export default meta
type Story = StoryObj<typeof meta>

export const AddProfilePhotoDefault: Story = {}
