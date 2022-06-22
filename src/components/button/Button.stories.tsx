import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '.';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<any> = args => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: '哈哈哈哈',
};
