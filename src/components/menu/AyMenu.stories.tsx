import React from 'react';
import { Meta, Story } from '@storybook/react';
import { HorizontalMenu } from './';

const meta: Meta = {
  title: 'Ay/Menu',
  component: HorizontalMenu,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

const Template: Story<any> = args => (
  <div
    className="ay"
    style={{
      height: 80,
      display: 'flex',
      alignItems: 'center',
      background:
        'linear-gradient(180deg, #4389f1 0%, rgba(67, 137, 241, 0.7) 100%)',
    }}
  >
    <HorizontalMenu {...args} selectedKeys={['mail']} />
  </div>
);

export const DefaultMenu = Template.bind({});

DefaultMenu.args = {
  items: [
    {
      label: '订单管理',
      key: 'mail',
      path: '',
    },
    {
      label: '禁用菜单',
      key: 'app',
      disabled: true,
      path: '',
    },
    {
      label: '批量打印',
      key: 'SubMenu',
      redIcon: true,
      popupOffset: [-30],
      popupClassName: 'ay-sub-menu',
      children: [
        {
          label: '批量打印',
          key: 'setting:1',
          path: '',
        },
        {
          label: '打印底单',
          key: 'setting:2',
          path: '',
        },
      ],
    },
  ],
};
