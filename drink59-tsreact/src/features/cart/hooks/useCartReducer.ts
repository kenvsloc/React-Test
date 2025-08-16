import { useReducer } from "react";
import type {  CartState, CartAction } from "@/types/cartTypes";

const initialState: CartState = {
    cart: [],
    totalPrice: 0,
    totalQuantity:0,
}

function reducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        /* ---------------- ADD_ITEM ---------------- */
        case 'ADD_ITEM': {
            const {payload} = action;
            const existingItem = state.cart.find(item => item.id === payload.id);
            const cart = existingItem
        ? state.cart.map((i) =>
            i.id === payload.id
              ? { ...i, quantity: i.quantity + payload.quantity } // tăng qty
              : i
          )
        : [...state.cart, payload];

            return computeTotals(cart);
        }
 /* ---------------- REMOVE_ITEM ---------------- */
        case 'REMOVE_ITEM': {
            const cart = state.cart.filter(item => item.id !== action.payload.id);

            return computeTotals(cart);
        }
 /* ---------------- INCREASE_QUANTITY ---------------- */
        case 'INCREASE_ITEM_QUANTITY': {
            const cart = state.cart.map(item =>
                item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
            return computeTotals(cart);
        }
 /* ---------------- DECREASE_QUANTITY ---------------- */
        case 'DECREASE_ITEM_QUANTITY': {
            const cart = state.cart
      .map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0);
            return computeTotals(cart);
        }
/* ---------------- CLEAR_CART ---------------- */
        case "CLEAR_CART":
            return initialState;

        default:
            return state;
    }
}

function computeTotals(cart: CartItem[]): CartState {
    const totalQuantity = cart.reduce((sum, item) =>
        sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) =>
        sum + item.price * item.quantity, 0)

    return {
        cart, totalQuantity, totalPrice
    }
}

export const useCartReducer = (init?: CartState) =>
    useReducer(reducer, init || initialState);
