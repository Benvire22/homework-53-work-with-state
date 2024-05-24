import React, {useState} from 'react';
import './AddTaskForm.css';

interface Props {
  addNewTask: (event: React.FormEvent<HTMLFormElement>, newPost: string) => void;
}

const AddTaskForm: React.FC<Props> = ({addNewTask}) => {
  const [newTask, setNewTask] = useState<string>('');

  const onFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const sendTaskForm = (event: React.FormEvent<HTMLFormElement>) => {
    addNewTask(event, newTask);
    setNewTask('');
  };

  return (
    <form onSubmit={(event) => sendTaskForm(event)}>
      <div className="form-row">
        <input className="field" type="text" placeholder="Add new Task" value={newTask} onChange={onFieldChange}/>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default AddTaskForm;