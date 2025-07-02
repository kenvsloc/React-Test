import React, { useRef, useEffect } from 'react';

function FocusInput() {
  // 1. Khởi tạo một ref, giá trị ban đầu là null
  const inputRef = useRef(null);

  useEffect(() => {
    // 3. Sau khi component đã được render, `inputRef.current` sẽ trỏ đến phần tử <input>
    //    và chúng ta có thể gọi phương thức focus() của nó.
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); // Mảng rỗng [] đảm bảo useEffect chỉ chạy một lần sau khi component mount

  return (
    <div>
      <p>Ô nhập liệu này sẽ được tự động focus:</p>
      {/* 2. Gắn ref vào thuộc tính `ref` của phần tử DOM */}
      <input ref={inputRef} type="text" placeholder="Nhập gì đó..." />
    </div>
  );
}

export default FocusInput;