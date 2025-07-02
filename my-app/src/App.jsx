import AuthForm from './AuthForm'
import './App.css'
import ParentComponent from './ParentComponent.jsx'
import Test from './test.jsx'
import TermsOfUse from './test2.jsx'
import MyComponent from './test3.jsx'
import FocusInput from './test4.jsx'
import {useRef,useState,useEffect} from 'react';
import MyComponent2 from './components/MyComponent';




function App() {
  const myBox = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  const toggleBox = () => {
    setIsVisible(prev => !prev);
  };
  useEffect(() => {
    if (myBox.current) {
      if (isVisible) {
        myBox.current.classList.remove('hidden');
      } else {
        myBox.current.classList.add('hidden');
      }
    }
  }, [isVisible]);


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
inputRef.current.style.background = "lightblue";



  }

  return (
    <>
      {/* Truyền ref như một prop bình thường */}
      <MyInput label="id:" ref={inputRef} />
      <button onClick={handleClick}>Focus vào ô nhập</button>
    </>
  );
}


  return (
    <>
    <div>
      <h1 class="text-amber-200">helo</h1>
    </div>
    <div>
     <button onClick={toggleBox}>
        {isVisible ? 'Ẩn hộp' : 'Hiện hộp'}
      </button>

    </div>

    <div ref={myBox}>
    <Form />
    <AuthForm />
    <ParentComponent />
    <Test />
    <TermsOfUse />
    <MyComponent />
    <FocusInput />
    </div>

    </>
  )
}

export default App
