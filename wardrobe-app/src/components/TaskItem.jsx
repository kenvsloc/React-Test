import React, { useState } from "react";

function TaskItem({ task, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(task.name);
  const [date, setDate] = useState(task.date);
  const [priority, setPriority] = useState(task.priority);
  const [showMenu, setShowMenu] = useState(false);

  // Lưu task sau khi chỉnh sửa
  const handleSave = () => {
    onUpdate({
      ...task,
      name,
      date,
      priority,
    });
    setIsEditing(false);
  };

  // Đánh dấu hoàn thành -> chuyển sang Done
  const handleCheck = () => {
    onUpdate({
      ...task,
      status: "Done",
    });
  };

  // Thay đổi trạng thái (ToDo/Doing/Done)
  const handleChangeStatus = (newStatus) => {
    onUpdate({
      ...task,
      status: newStatus,
    });
    setShowMenu(false);
  };

  return (
    <li style={{ borderBottom: "1px solid #eee", padding: "10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {/* Checkbox để đánh dấu hoàn thành */}
          {task.status !== "Done" ? (
            <input
              type="checkbox"
              checked={false}
              onChange={handleCheck}
            />
          ) : (
            "✓"
          )}

          {isEditing ? (
            <>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tên công việc"
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

                  // Tự động chuyển sang Doing nếu chọn Normal
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

        {/* Hamburger menu */}
        <div>
          <button onClick={() => setShowMenu(!showMenu)}>☰</button>
          {showMenu && (
            <div
              style={{
                position: "absolute",
                background: "#fff",
                border: "1px solid #ccc",
                padding: "5px",
                zIndex: 10,
              }}
            >
              <button onClick={() => setIsEditing(true)}>Sửa</button>
              <button onClick={() => onDelete(task.id)}>Xóa</button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default TaskItem;