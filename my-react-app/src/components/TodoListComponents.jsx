// MyComponents.js
import React, {useState} from 'react';


export function Header() {
    return <h2>Todo By Huy59</h2>;
}

export function Nav({ handleAddItems }) {
  const [name, setName] = useState("");

  const handleAddButtonClick = () => {
    if (!name.trim()) return; // Không cho phép chuỗi trống
    const newItem = { name, id: Date.now() };
    handleAddItems(newItem);
    setName("huy");
  };

  return (
    <>
      <input
        type="text"
        value={name}
        placeholder="Enter item"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddButtonClick}>Add</button>
    </>
  );
}

export function ListArea({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

// src/components/Footer.jsx

export function Footer({ items }) {
  return (
    <>
      {items.length !== 0 ? (
        <p>You have {items.length} items in your cart</p>
      ) : (
        <p>You can start adding items to your list</p>
      )}
    </>
  );
}