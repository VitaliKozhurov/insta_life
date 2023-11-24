import type { Preview } from '@storybook/react'
import '../src/application/index.scss'
import { StorybookFontsDecorator } from '../src/shared/'
import { inter } from '../src/application'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'Dark',
      values: [
        {
          name: 'Dark',
          value: '#000',
        },
        {
          name: 'Light',
          value: '#f4f4f4',
        },
      ],
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (
      <StorybookFontsDecorator font={inter.className}>
        <Story />
      </StorybookFontsDecorator>
    ),
  ],
}

export default preview
