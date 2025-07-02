import React, { useState, useEffect } from "react";
import Select from 'react-select';
import './App.css'; // Assuming you have some styles in App.css


const statusOptions = [
  { value: "todo", label: "To Do" },
  { value: "doing", label: "Doing" },
  { value: "done", label: "Done" }
];


const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: (() => {
      if (state.selectProps.value?.value === "todo") return "#d3d3d3"; // lightgray
      if (state.selectProps.value?.value === "doing") return "#add8e6"; // lightblue
      if (state.selectProps.value?.value === "done") return "#90ee90"; // lightgreen
      return "white";
    })(),
    borderColor: "#ccc",
    borderRadius: "4px",
    fontSize: "14px"
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: (() => {
      if (state.value === "todo") return "#d3d3d3";
      if (state.value === "doing") return "#add8e6";
      if (state.value === "done") return "#90ee90";
      return "white";
    })(),
    color: "black",
    "&:hover": {
      backgroundColor: "#f0f0f0"
    }
  })
};


const TaskList = ({ task, ToDoEvent, onChangeStatus }) => {
  const handleChange = (id) => (selectedOption) => {
    onChangeStatus(id, selectedOption.value);
  };

  return (
    <ul className="task-list">
      {task.map((taskItem) => {
        const currentStatus = statusOptions.find(
          (option) => option.value === taskItem.status
        );

        return (
          <li key={taskItem.id} className="task-item">
            <button
              onClick={() => ToDoEvent(taskItem.id)}
              className="btn-done"
            >
              ✔
            </button>
            <span>{taskItem.name}</span>

            {/* Dùng react-select thay vì select thông thường */}
            <Select
              value={currentStatus}
              onChange={handleChange(taskItem.id)}
              options={statusOptions}
              styles={customStyles}
              className="react-select-container"
              classNamePrefix="react-select"
            />
          </li>
        );
      })}
    </ul>
  );
};
const App = ()=> {
  const [task, setTask] = useState(() => {
    // Lấy dữ liệu từ localStorage nếu có
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [newTaskName, setNewTaskName] = useState("");

  // Lưu task vào localStorage mỗi khi task thay đổi
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  const handleAddTask = () => {
    if(!newTaskName.trim()) return;
    const newTask = {
      id: task.length + 1,
      name: newTaskName,
      status: "todo"
    };
    setTask([...task, newTask])
    setNewTaskName('') // Prevent adding empty tasks
  };

  const handleToDoTask = (id) => {
    const updatedTasks = task.map(task =>
      task.id === id ? { ... task, status: "todo"}: task
    );
    setTask(updatedTasks);
  }

  const handleDoingTask = (id) => {
    const updatedTasks = task.map(task =>
      task.id === id ? { ...task, status: "doing" } : task
    );
    setTask(updatedTasks);
  }
  const handleDoneTask = (id) => {
    const updatedTasks = task.map(task =>
      task.id === id ? { ...task, status: "done" } : task
    );
    setTask(updatedTasks);
  }

  const handleChangeStatus = (id, status) => {
    const updatedTasks = task.map(task =>
      task.id === id ? { ...task, status } : task
    );
    setTask(updatedTasks);
  };

return (
  <div className="app-Todo">

    <div className="todo-container">
        <h1>Todo By Huy</h1>
        <div className="add-task">
          <button onClick={handleAddTask} className="btn add-btn">AddTask</button>
          <input
            type="text"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            placeholder="Enter new task"
            className="input-task"
            onKeyDown={(e) => {if (e.key === 'Enter') handleAddTask();}}
          />

        </div>

        <div className="task-section">
          <h2>ToDo</h2>
          <TaskList
            task={task.filter(task => task.status === "todo")}
            ToDoEvent={handleDoingTask}
            onChangeStatus={handleChangeStatus}
          />
        </div>

        <div className="task-section">
          <h2>Doing </h2>
          <TaskList
            task={task.filter(task => task.status === "doing")}
            ToDoEvent={handleDoneTask}
            onChangeStatus={handleChangeStatus}
          />
        </div>

        <div className="task-section">
          <h2>Done</h2>
          <TaskList
            task={task.filter(task => task.status === "done")}
            ToDoEvent={handleToDoTask}
            onChangeStatus={handleChangeStatus}
          />
        </div>

    </div>



  </div>
)



}

export default App
