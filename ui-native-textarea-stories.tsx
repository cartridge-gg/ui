import React from 'react';
import { View } from 'react-native';
import { Meta, StoryObj } from '@storybook/react-native';
import { Textarea } from './textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Primitives/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    value: '',
    variant: 'default',
    size: 'default',
    placeholder: 'Label',
    onClear: () => console.log('Clear pressed'),
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 20, minWidth: 300 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const Value: Story = {
  args: {
    value: 'Value',
  },
};

export const Error: Story = {
  args: {
    value: 'Value*',
    error: { name: 'error', message: 'Error' },
  },
};

export const AutoFocus: Story = {
  args: {
    value: 'Value',
    autoFocus: true,
  },
};

export const LongValue: Story = {
  args: {
    value:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
};

export const BigDefault: Story = {
  args: {
    size: 'lg',
  },
};

export const BigValue: Story = {
  args: {
    size: 'lg',
    value: 'Value',
  },
};

export const BigError: Story = {
  args: {
    size: 'lg',
    value: 'Value*',
    error: { name: 'error', message: 'Error' },
  },
};

export const UsernameDefault: Story = {
  args: {
    variant: 'username',
    size: 'lg',
  },
};

export const UsernameValue: Story = {
  args: {
    variant: 'username',
    size: 'lg',
    value: 'Value',
  },
};

export const UsernameError: Story = {
  args: {
    variant: 'username',
    size: 'lg',
    value: 'Value*',
    error: { name: 'error', message: '' },
  },
};

// Additional React Native specific stories
export const WithClearButton: Story = {
  args: {
    value: 'Text with clear button',
    onClear: () => console.log('Clear pressed'),
  },
};

export const LoadingClear: Story = {
  args: {
    value: 'Loading clear state',
    isLoading: true,
    onClear: () => console.log('Clear pressed'),
  },
};

export const MultilineAutoResize: Story = {
  args: {
    value: 'This is a multiline textarea that will automatically resize as you type more content.',
    placeholder: 'Type multiple lines...',
  },
};