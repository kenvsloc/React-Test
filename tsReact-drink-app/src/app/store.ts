// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartRedux from '../features/Cart/cartSlice';
// import userReducer from '../features/user/userSlice';



const store = configureStore({
  reducer: {
    // Thêm các slice reducer của bạn tại đây
    cart: cartRedux,
    // user: userReducer,
  },
});

// Kiểu của toàn bộ state trong store
export type RootState = ReturnType<typeof store.getState>;
// Kiểu của hàm dispatch
export type AppDispatch = typeof store.dispatch;

export default store;