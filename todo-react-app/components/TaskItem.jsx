// src/components/TaskItem.jsx
import React, { useState } from "react";

function TaskItem({ task, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(task.name);
  const [date, setDate] = useState(task.date);
  const [priority, setPriority] = useState(task.priority);
  const [showMenu, setShowMenu] = useState(false);

  const handleSave = () => {
    onUpdate({
      ...task,
      name,
      date,
      priority,
    });
    setIsEditing(false);
  };

  const handleCheck = () => {
    onUpdate({
      ...task,
      status: "Done",
    });
  };

  const handleChangeStatus = (newStatus) => {
    onUpdate({
      ...task,
      status: newStatus,
    });
    setShowMenu(false);
  };

  return (
    <li className="task-item">
      <div className="task-content">
        {task.status !== "Done" ? (
          <input
            type="checkbox"
            onChange={handleCheck}
          />
        ) : (
          <span>✓</span>
        )}

        {isEditing ? (
          <>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <select
              value={priority}
              onChange={(e) => {
                const newPriority = e.target.value;
                setPriority(newPriority);
                if (newPriority === "normal") {
                  handleChangeStatus("Doing");
                }
              }}
            >
              <option value="low">Low</option>
              <option value="normal">Normal</option>
              <option value="high">High</option>
            </select>
            <button onClick={handleSave}>Lưu</button>
          </>
        ) : (
          <>
            <strong>{task.name}</strong> | {task.date} | {task.priority}
          </>
        )}
      </div>

      {!isEditing && (
        <div className="task-actions">
          <button onClick={() => setShowMenu(!showMenu)}>☰</button>
          {showMenu && (
            <div className="menu-dropdown">
              <button onClick={() => setIsEditing(true)}>Sửa</button>
              <button onClick={() => onDelete(task.id)}>Xóa</button>
              {task.status !== "Doing" && (
                <button onClick={() => handleChangeStatus("Doing")}>
                  Chuyển sang Doing
                </button>
              )}
              {task.status !== "ToDo" && task.status !== "Done" && (
                <button onClick={() => handleChangeStatus("ToDo")}>
                  Quay lại ToDo
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </li>
  );
}

export default TaskItem;