import type  { CartState, CartAction } from "../types/cartTypes";

const initialState: CartState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,

};
const cartReducer = (state: CartState=initialState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalQuantity: state.totalQuantity + 1,
        totalPrice: state.totalPrice + action.payload.price,
      };
      
      default:
        return state;
    }
 }

export default cartReducer;

