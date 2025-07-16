// src/hooks/useToggleDisplay.js
import { useState, useEffect } from 'react';

function useToggleDisplay(ref, initialState = false) {
  const [isVisible, setIsVisible] = useState(initialState);

  // Đồng bộ trạng thái với DOM ngay từ đầu
  useEffect(() => {
    if (ref.current) {
      if (!initialState) {
        ref.current.classList.add('hidden');
      } else {
        ref.current.classList.remove('hidden');
      }
    }
  }, [ref, initialState]);

  const toggle = () => {
    const newVisibility = !isVisible;
    setIsVisible(newVisibility);
    if (ref.current) {
      if (newVisibility) {
        ref.current.classList.remove('hidden');
      } else {
        ref.current.classList.add('hidden');
      }
    };
  };

  return { isVisible, toggle };
}

export default useToggleDisplay;