// src/components/TaskList.jsx
import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ title, tasks, onUpdate, onDelete }) {
  return (
    <div className="task-column">
      <h3>{title}</h3>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;