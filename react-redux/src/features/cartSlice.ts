import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../types/cartTypes';

export interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart(state, action: PayloadAction<CartItem>) {
        const item = action.payload;

        // Kiểm tra xem sản phẩm đã có trong giỏ chưa
        const existingItem = state.items.find(i => i.id === item.id);

        if (!existingItem) {
          state.items.push(item);
          state.totalQuantity += 1;
          state.totalPrice += item.price;
        }
      },

      removeFromCart(state, action: PayloadAction<string>) {
        const id = action.payload;
        const itemIndex = state.items.findIndex(item => item.id === id);

        if (itemIndex >= 0) {
          const item = state.items[itemIndex];

          state.items.splice(itemIndex, 1); // Xóa sản phẩm khỏi mảng
          state.totalQuantity -= 1;
          state.totalPrice -= item.price;
        }
      },

      clearCart(state) {
        return initialState;
      },
    },
  });

  // Export actions và reducer
  export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
  export default cartSlice.reducer;