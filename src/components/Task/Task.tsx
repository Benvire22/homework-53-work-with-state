import React from 'react';
import './Task.css';

interface Props {
  text: string;
  onRemoveTask: React.MouseEventHandler;
  completed: boolean;
  onChangeComplete: React.ChangeEventHandler<HTMLInputElement>;
}

const Task: React.FC<Props> = ({
     text,
     onRemoveTask,
     completed,
     onChangeComplete
   }) => {

  return (
    <div className={`task ${completed ? 'completed' : ''}`}>
      <p className="task-descr">{text}</p>
      <div className="task-ui">
        <label className="checkbox-label">
          <input className="task-checkbox" type="checkbox" checked={completed} onChange={onChangeComplete}/>
          <span></span>
        </label>
        <button onClick={onRemoveTask}>Delete task</button>
      </div>
    </div>
  );
};

export default Task;