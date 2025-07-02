// src/components/MyComponent.jsx
import React, { useRef } from 'react';
import useToggleDisplay from '../hooks/useToggleDisplay';

function MyComponent2() {
  const boxRef = useRef(null);
  const { isVisible, toggle } = useToggleDisplay(boxRef, true); // mặc định hiện

  return (
    <div>
      <button onClick={toggle}>
        {isVisible ? 'Ẩn hộp' : 'Hiện hộp'}
      </button>

      <div ref={boxRef} className="my-box">
        Đây là hộp nội dung
      </div>
    </div>
  );
}

export default MyComponent2;