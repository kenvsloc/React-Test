import { createSlice } from '@reduxjs/toolkit';
import type {  PayloadAction } from '@reduxjs/toolkit';
import type {  CartState, CartItem } from '../../types/cartTypes';
import { findItem, recalculateTotals } from './cartUtils';

// src/features/cart/cartSlice.ts


// Hàm tính lại tổng số lượng và tổng giá



const initialState: CartState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //them san pham vao gio
    addItem(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;
      const existingItem = findItem(state, newItem.id);

      if (!existingItem) {
        state.cart.push({...newItem, quantity: 1});
      } else {
        existingItem.quantity += 1;
      }

      recalculateTotals(state);
    },

    // Xóa hoàn toàn sản phẩm khỏi giỏ
    removeItem(state, action: PayloadAction<{ id: string }>) {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
      recalculateTotals(state);
    },

    // tang don vi san pham
    increaseItemQuantity(state, action: PayloadAction<string >) {
      const item = findItem(state, action.payload);

      if (item) item.quantity += 1;
      recalculateTotals(state);
    },

    // giam don vi san pham

    decreaseItemQuantity(state, action: PayloadAction<string>) {
      const item = findItem(state, action.payload);

      if (item && item.quantity > 1) item.quantity -= 1;
      recalculateTotals(state);
    },


    // reset cart

    clearCart(state) {
      state.cart = [];
      recalculateTotals(state);
    },

  },
});

export const { addItem, removeItem,
  increaseItemQuantity, decreaseItemQuantity,
  clearCart } = cartSlice.actions;

export default cartSlice.reducer;