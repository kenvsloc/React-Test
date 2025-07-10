import useCounter from "../hooks/useCounter";

const CounterComponent: React.FC = () => {
  const {  count, increment, decrement,  } = useCounter();

  return (
    <div>
      <button onClick={() => decrement(0)}>-</button>
      <button >{count}</button>
      <button onClick={() => increment(0)}>+</button>
    </div>
  );
};

export default CounterComponent;