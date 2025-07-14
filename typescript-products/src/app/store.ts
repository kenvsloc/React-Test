// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers'; // Nếu có nhiều reducer, bạn sẽ import ở đây

const store = configureStore({
  reducer: {
    // Thêm các slice reducer của bạn tại đây
    // Ví dụ:
    // cart: cartReducer,
    // user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;