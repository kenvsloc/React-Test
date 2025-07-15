// src/hooks/useCounter.ts
import { useReducer } from 'react';
import counterReducer from '../reducers/counterReducer';

const useCounter = () => {
  const [state, dispatch] = useReducer(counterReducer, {
    count: 1
  });

  const increment = (amount?: number) =>
    dispatch({ type: 'INCREMENT', payload: amount });

  const decrement = (amount?: number) =>
    dispatch({ type: 'DECREMENT', payload: amount });

  const reset = () => dispatch({ type: 'RESET' });

  return {
    count: state.count,
    increment,
    decrement,
    reset,
  };
};

export default useCounter;