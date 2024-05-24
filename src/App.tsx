import './App.css';
import React, {useState} from 'react';
import Task from './components/Task/Task';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';

interface ITask {
  id: string;
  text: string;
  completed: boolean;
}

const getId = () => Date.now().toString();

const App = () => {
  const [tasks, setTasks] = useState<ITask[]>([
    {text: 'Hello World 1!', id: '1', completed: false},
    {text: 'Hello World 2!', id: '2', completed: false},
    {text: 'Hello World 3!', id: '3', completed: false},
  ]);

  const addNewTask = (event: React.FormEvent<HTMLFormElement>, newPost: string) => {
    event.preventDefault();
    if (newPost.length > 3) {
      const post: ITask = {text: newPost, id: getId(), completed: false};

      setTasks((prevState) => {
        const copyTasks =  [...prevState];
        copyTasks.push(post);
        return copyTasks;
      });
    }

  };

  const deleteTask = (id: string) => {
      setTasks((prevTasks) => {
        return prevTasks.filter((task) => task.id !== id);
      });
  };

  const toggleCompleted = (id: string) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return {...task, completed: !task.completed};
        }

        return task;
      });
    });
  };

  return (
    <div className="App">
      <AddTaskForm addNewTask={addNewTask}/>
      <div className="tasks">
        {
          tasks ? (
            tasks.map(({text, id, completed}) => (
              <Task key={id} text={text} onRemoveTask={() => deleteTask(id)} completed={completed} onChangeComplete={() => toggleCompleted(id)}/>
            ))
          ) : <p>Пока ничего нету</p>
        }
      </div>
    </div>
  );
};

export default App;
