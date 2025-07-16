import type {  PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { TodoType } from '../../types/todosTypes';

interface TodoState {
    items: TodoType[];
}

const initialState: TodoState = {
    items: [],
};

const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<TodoType>) {
            state.items.push(action.payload);

        },
        removeTodo(state, action: PayloadAction<number>) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        toggleCompelete(state, action: PayloadAction<number>) {
            const todo = state.items.find(item => item.id === action.payload);
            if (todo) {
                todo.compeleted = !todo.compeleted;
            }
        },

    }
});

export const { addTodo,removeTodo,toggleCompelete } = todoSlice.actions;
export default todoSlice.reducer;