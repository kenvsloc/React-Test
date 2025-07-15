import type { CartState } from "../../types/typesData";

export const findIdItem = (state: CartState, id: string) =>
    state.items.find(item => item.id === id );

export const recalculateTotals = (state: CartState) => {
    state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
    state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0 );
};