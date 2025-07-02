import { useState } from 'react';


function useToggleDisplay(ref, initialState = true) {
  const [isVisible, setIsVisible] = useState(initialState);

  const show = () => {
    setIsVisible(true);
    ref.current?.classList.remove('hidden');
  };

  const hide = () => {
    setIsVisible(false);
    ref.current?.classList.add('hidden');
  };

  const toggle = () => {
    isVisible ? hide() : show();
  };

  return { isVisible, show, hide, toggle };
}

export default useToggleDisplay