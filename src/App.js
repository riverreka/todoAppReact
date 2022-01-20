import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import Form from './components/Form';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleSubmit = task => {
    setTasks([...tasks, task]);
  };

  const removeTask = index => {
    setTasks(tasks.filter((t, i) => i !== index));
  };

  const toggleState = index => {
    const newArray = [...tasks];
    newArray[index].state = tasks[index].state === 'done' ? 'pending' : 'done';
    setTasks(newArray);
  };

  return (
    <div className="App">
      <Form handleSubmit={handleSubmit}/>
      <TodoList tasks={tasks} removeTask={removeTask} toggleState={toggleState}/>
      <footer className="App-footer">
        <img src={logo} className="App-logo" alt="logo" />
      </footer>
    </div>
  );
};

export default App;
