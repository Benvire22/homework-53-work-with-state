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
    {text: 'Закончить домашку!', id: '14565432345432', completed: true},
    {text: 'Привести в порядок стили!', id: '26543456787654', completed: true},
    {text: 'Покушать...', id: '33456765432345', completed: false},
  ]);

  const addNewTask = (event: React.FormEvent<HTMLFormElement>, newTask: string) => {
    event.preventDefault();
    if (newTask.length > 3) {
      const task: ITask = {text: newTask, id: getId(), completed: false};

      setTasks((prevState) => {
        const copyTasks = [...prevState];
        copyTasks.push(task);
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
      <h1>To Do list</h1>
      <div className="tasks">
        {
          tasks.length !== 0 ? (
            tasks.map(({text, id, completed}) => (
              <Task key={id} text={text} onRemoveTask={() => deleteTask(id)} completed={completed}
                    onChangeComplete={() => toggleCompleted(id)}/>
            ))
          ) : <h2>Пока ничего нету</h2>
        }
      </div>
    </div>
  );
};

export default App;
