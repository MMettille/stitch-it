import { Meta, StoryFn } from '@storybook/react';
import Loading from './Loading';

export default {
  title: 'Components/Loading',
  component: Loading,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: StoryFn<{ label: string }> = (args) => <Loading {...args} />;

export const Primary = Template.bind({});