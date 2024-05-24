import React, { useState } from 'react';

interface Props {
    addNewTask: (event: React.FormEvent<HTMLFormElement>, newPost: string) => void;
}

const AddTaskForm:React.FC<Props> = ({ addNewTask}) => {
  const [newPost, setNewPost] = useState<string>('');

  const onFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPost(event.target.value);
  };

  const sendTaskForm = (event: React.FormEvent<HTMLFormElement>) => {
    addNewTask(event, newPost);
    setNewPost('');
  };

  return (
    <form onSubmit={(event) => sendTaskForm(event)}>
      <div className="form-row">
        <input type="text" placeholder="Add new Task" value={newPost} onChange={onFieldChange}/>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default AddTaskForm;