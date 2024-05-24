import React from 'react';

interface Props {
    getNewTask: React.ChangeEventHandler<HTMLInputElement>;
    inputValue: string
    addNewTask: () => void;
}

const AddTaskForm:React.FC<Props> = ({getNewTask, inputValue, addNewTask}) => {

  return (
        <div className="form-row">
          <input type="text" placeholder="Add new Task"  value={inputValue} onChange={getNewTask}/>
          <button type="button" onClick={addNewTask}>Add</button>
        </div>
  );
};

export default AddTaskForm;