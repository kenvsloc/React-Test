import type { CartState } from '../../types/cartTypes';

export const findItem = (state: CartState, id: string) =>
    state.cart.find(item => item.id === id);

export const recalculateTotals = (state: CartState) => {
    state.totalQuantity = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    state.totalPrice = state.cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
};
