import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Checkbox } from './CheckBox'

const meta = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/CheckBox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const CheckedCheckBox: Story = {
  args: {
    checked: true,
    label: 'Checked checkbox',
  },
}

export const UnCheckedCheckBox: Story = {
  args: {
    checked: false,
    label: 'Unchecked checkbox',
  },
}

export const DisabledCheckedCheckBox: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Disabled checked checkbox',
  },
}

export const DisabledUnCheckedCheckBox: Story = {
  args: {
    checked: false,
    disabled: true,
    label: 'Disabled unchecked checkbox',
  },
}

const CheckBoxWithHooks = () => {
  const [checked, setChecked] = useState(false)

  const changeCheckedState = (checked: boolean) => {
    setChecked(checked)
  }

  return <Checkbox checked={checked} label={'Example'} onCheckedChange={changeCheckedState} />
}

export const Controlled = {
  render: () => <CheckBoxWithHooks />,
}
