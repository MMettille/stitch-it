// src/components/Button.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: StoryFn<{ label: string }> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Click me',
};
