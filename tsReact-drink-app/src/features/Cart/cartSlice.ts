import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CartState,CartItem } from "../../types/typesData";
import { findIdItem, recalculateTotals } from "../utils/cartUtils";
// khu vuc add file

//  tao gia tri ban dau

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action:PayloadAction <CartItem>) {
            const newItem = action.payload;
            const existingItem = findIdItem(state, newItem.id);

            if (!existingItem) {
                state.items.push({ ...newItem, quantity: 1 });
            } else {
                existingItem.quantity += 1;
            }

            recalculateTotals(state);
        },

        removeCartItem(state, action: PayloadAction<{ id: string }>) {
            state.items = state.items.filter(item => item.id !== action.payload.id);
            recalculateTotals(state);
        },
        increaseItemQuantity(state, action: PayloadAction<string>) {
            const item = findIdItem(state, action.payload);

            if (item) {
                item.quantity += 1;
                recalculateTotals(state);
            }
        },
        decreaseItemQuantity(state, action: PayloadAction<string>) {
            const item = findIdItem(state, action.payload);

            if (item && item.quantity > 1) {
                item.quantity -= 1;
                recalculateTotals(state);
            }
        },
        clearCart(state) {
            state.items = [];
            recalculateTotals(state);
        },
    },
});

export const { addToCart, removeCartItem,
    increaseItemQuantity, decreaseItemQuantity,
    clearCart } = cartSlice.actions;

export default cartSlice.reducer;


