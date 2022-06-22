import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { WithPinnedTasks } from './TaskList.stories';
import { TaskListProps } from './';

it('renders pinned tasks at the start of the list', () => {
  const onArchiveTask = jest.fn();
  const onPinTask = jest.fn();
  const props = WithPinnedTasks.args as TaskListProps;
  const component = renderer.create(
    <WithPinnedTasks
      {...props}
      onPinTask={onPinTask}
      onArchiveTask={onArchiveTask}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
