import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState([]);
  return (
    <div className="App">
      <div className='header'>
        <div className='input-container'>
        <input type='text' value={task} onChange={(e)=>setTask(e.target.value)} placeholder='Enter Task' />
        <input type='number' value={deadline} onChange={(e) =>setDeadline(e.target.valueAsNumber)} placeholder='Deadline in days...'/>
        </div>
        <button> Add Task</button>
      </div>
      <div className='todolist'></div>
    </div>
  );
}

export default App;
