import React, {useState} from 'react';


function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {


        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);


    }

    const decrement = () => {
  setCount(prevCount => Math.max(prevCount - 1, 0));
};

   const reset = () => {
        setCount(0);
    }

    return(
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrement}>-</button>
            <button className="counter-button" onClick={reset}>0</button>
            <button className="counter-button" onClick={increment}>+</button>
        </div>
    )
}

export default Counter;