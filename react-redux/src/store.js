// store.js
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/todoSlice' // ✅ Import reducer đúng cách

const store = configureStore({
  reducer: {
    todos: todoReducer, // ✅ Dùng đúng tên biến đã import
  },
});

export default store