import type { Meta, StoryObj } from '@storybook/react'

import { ChangeEvent, useState } from 'react'

import { TextField, TextFieldProps } from './TextField'

const meta: Meta<typeof TextField> = {
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
}

export default meta
type Story = StoryObj<typeof meta>

const TextFieldWithState = (args: TextFieldProps) => {
  const [value, setValue] = useState('')
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value)
  }

  return <TextField {...args} onChange={onChangeHandler} value={value} />
}

export const DefaultTextField: Story = {
  args: {
    label: 'Text-area',
    placeholder: 'Text-area',
  },
  render: args => <TextFieldWithState {...args} />,
}

export const TextFieldWithError: Story = {
  args: {
    error: 'Some error!!!',
    label: 'Text-area',
    placeholder: 'Text-area',
  },
  render: args => <TextFieldWithState {...args} />,
}

export const DisabledTextField: Story = {
  args: {
    disabled: true,
    label: 'Disabled text-area',
    placeholder: 'Text-area',
  },
  render: args => <TextFieldWithState {...args} />,
}
