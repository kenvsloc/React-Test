// Không cần import forwardRef nữa
import {useRef} from 'react';

// `ref` giờ đây là một prop thông thường!
function MyInput({ label, ref }) { // Nhận ref trực tiếp từ props
  return (
    <div>
      <label>{label}</label>
      {/* Truyền ref nhận được vào thẻ input */}
      <input ref={ref} />
    </div>
  );
}

// Cách sử dụng trong component cha không có gì thay đổi
function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      {/* Truyền ref như một prop bình thường */}
      <MyInput label="Nhập tên:" ref={inputRef} />
      <button onClick={handleClick}>Focus vào ô nhập</button>
    </>
  );
}