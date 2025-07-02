// src/App.jsx
import React, { useState } from 'react';
import Button from './components/Button';

function UserButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      alert('Song rui nha!');
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Button Component Demo</h1>

      <Button variant="primary" onClick={handleClick} isLoading={loading}>
        Gửi dữ liệu
      </Button>

      <Button variant="secondary" onClick={() => alert('Secondary clicked')}>
        Secondary
      </Button>

      <Button variant="danger" disabled>
        Disabled Button
      </Button>
    </div>
  );
}

export default UserButton;