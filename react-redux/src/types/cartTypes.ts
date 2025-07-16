// src/types/cartTypes.ts

export interface CartItem {
    id: string;
    title: string;
    price: number;
    image?: string;
    quantity?: number;
  }

  export interface CartState {
    items: CartItem[];
    totalQuantity: number;
    totalPrice: number;
  }

  export type CartAction =
    | { type: 'ADD_ITEM'; payload: CartItem }
    | { type: 'REMOVE_ITEM'; payload: { id: string; price: number } }
    | { type: 'INCREASE_ITEM_QUANTITY'; payload: { id: string } }
    | { type: 'DECREASE_ITEM_QUANTITY'; payload: { id: string } }
    | { type: 'CLEAR_CART' };