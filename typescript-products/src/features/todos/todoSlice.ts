import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
        addTodo(state, action:PayloadAction<TodoType>) {

        }
    }
})