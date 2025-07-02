import { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null);

  function handleGetValue() {
    const inputValue = inputRef.current.value;
    alert('Giá trị bạn nhập là: ' + inputValue);
  }

  return (
    <>
      <input ref={inputRef} placeholder="Nhập gì đó..." />
      <button onClick={handleGetValue}>Lấy giá trị</button>
    </>
  );
}

export default MyComponent;