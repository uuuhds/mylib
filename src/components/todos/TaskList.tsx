import React from 'react';
import { TaskEvents, TaskProps, Task } from './';
import PropTypes from 'prop-types';
import { achiveTask, pinTask, selectTasks } from '../../lib/reducers/todoSlice';
import { useSelector, useDispatch } from 'react-redux';

export type TaskListProps = {
  loading: boolean;
  tasks: TaskProps[];
} & TaskEvents;

export function TaskList() {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <PureTaskList
      tasks={tasks}
      onArchiveTask={(id: string) => dispatch(achiveTask(id))}
      onPinTask={(id: string) => dispatch(pinTask(id))}
    />
  );
}

export function PureTaskList({
  loading,
  tasks,
  onPinTask,
  onArchiveTask,
}: TaskListProps) {
  /* 以前的 TaskList 实现 */
  const events = {
    onPinTask,
    onArchiveTask,
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }
  const tasksInOrder = [
    ...tasks.filter(t => t.state === 'TASK_PINNED'),
    ...tasks.filter(t => t.state !== 'TASK_PINNED'),
  ];
  return (
    <div className="list-items">
      {tasksInOrder.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}

PureTaskList.propTypes = {
  /** Checks if it's in loading state */
  loading: PropTypes.bool,
  /** The list of tasks */
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  /** Event to change the task to pinned */
  onPinTask: PropTypes.func.isRequired,
  /** Event to change the task to archived */
  onArchiveTask: PropTypes.func.isRequired,
};

PureTaskList.defaultProps = {
  loading: false,
};
