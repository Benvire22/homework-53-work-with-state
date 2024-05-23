import React from 'react';

interface Props {
  text: string;
  deleteTask: () => void;
}

const Task:React.FC<Props> = ({text, deleteTask}) => {
  return (
    <div className="task">
        <p className="task-descr">{text}</p>
        <button onClick={deleteTask}>Delete task</button>
    </div>
  );
};

export default Task;