import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ title, tasks, onUpdate, onDelete }) {
  return (
    <div style={{ flex: 1, border: "1px solid #ccc", padding: "10px" }}>
      <h2>{title}</h2>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
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