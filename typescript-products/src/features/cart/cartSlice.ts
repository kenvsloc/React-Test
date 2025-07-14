import { createSlice } from '@reduxjs/toolkit';
import type {  PayloadAction } from '@reduxjs/toolkit';
import type {  CartState, CartItem } from '../../types/cartTypes';
// src/features/cart/cartSlice.ts



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
      const existingItem = state.cart.find(item => item.id === newItem.id);

      if (!existingItem) {
        state.cart.push({...newItem, quantity: 1});
        state.totalQuantity += 1;
        state.totalPrice += newItem.price;
      } else {
        existingItem.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += newItem.price;
      }
    },

    // Xóa hoàn toàn sản phẩm khỏi giỏ
    removeItem(state, action: PayloadAction<{ id: string; price: number; quantity: number }>) {
      const { id, price, quantity } = action.payload;
      state.cart = state.cart.filter(item => item.id !== id);
      state.totalQuantity -= quantity;
      state.totalPrice -= price * quantity;
    },

    // tang don vi san pham
    increaseItemQuantity(state, action: PayloadAction<string >) {
      const  id  = action.payload;
      const item = state.cart.find(item => item.id === id);

      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }
    },

    // giam don vi san pham
    decreaseItemQuantity(state, action: PayloadAction<string>) {
      const  id  = action.payload;
      const item = state.cart.find(item => item.id === id);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
      }
    },

    // reset cart
    clearCart(state) {
      state.cart = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem,
  increaseItemQuantity, decreaseItemQuantity,
  clearCart } = cartSlice.actions;

export default cartSlice.reducer;