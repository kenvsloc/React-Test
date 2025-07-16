import type { CounterState, CounterAction } from "../types/counterTypes";


const initialState: CounterState = {
  count: 0,
};

const counterReducer = (state: CounterState = initialState, action: CounterAction): CounterState => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + (action.payload || 1) };
            case 'DECREMENT':
            return { ...state, count: state.count - (action.payload || 1) };
            case 'RESET':
            return { ...state, count: 0 };
        default:
            return state; // Always return the current state for unhandled actions
    }
};

export default counterReducer;