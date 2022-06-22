import React from 'react';
import { Provider } from 'react-redux';
import { PureInboxScreen } from './';
import { store } from '../../lib/redux';

export default {
  component: PureInboxScreen,
  decorators: [(story: any) => <Provider store={store}>{story()}</Provider>],
  title: 'Todos/InboxScreen',
};

const Template = (args: any) => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({}) as any;
Error.args = {
  error: 'Something',
};
