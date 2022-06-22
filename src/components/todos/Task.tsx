import React from 'react';
import PropTypes from 'prop-types';

export interface TaskProps {
  id: string;
  title: string;
  state: string;
  updatedAt: Date;
}

export interface TaskEvents {
  onArchiveTask: Function;
  onPinTask: Function;
}

export type TaskCompProps = {
  task: TaskProps;
} & TaskEvents;

export function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}: TaskCompProps) {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>

      <div className="actions" onClick={event => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
}

// Marvin TODO: 是否需要和TS一起使用？
Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
};
