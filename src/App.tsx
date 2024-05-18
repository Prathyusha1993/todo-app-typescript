import React, { ChangeEvent, useState } from "react";
import "./App.css";
import { ITask } from "./Interface";
import TodoTask from "./components/TodoTask";

const App = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);


  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };
  const handleAddTask = (): void => {
    const newTask = {taskName: task, deadline: deadline};
    setTodo([...todo, newTask])
    console.log(todo);
    setTask('');
    setDeadline(0);
  };
  const completeTask = (taskNameToDelete: string): void => {
    setTodo(todo.filter((task) => {
      return task.taskName !== taskNameToDelete
    }))
  }
  return (
    <div className="App">
      <div className="header">
        <div className="input-container">
          <input
            type="text"
            value={task}
            name="task"
            onChange={handleChange}
            placeholder="Enter Task"
          />
          <input
            type="number"
            value={deadline}
            name="deadline"
            onChange={handleChange}
            placeholder="Deadline in days..."
          />
        </div>
        <button onClick={handleAddTask}> Add Task</button>
      </div>
      <div className="todolist">
        {todo.map((task:ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask}/>
        })}
      </div>
    </div>
  );
};

export default App;
