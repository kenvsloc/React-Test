import type { CartItem, ProductProps } from '../types/typesData';

type CartAction =
  | { type: 'ADD_TO_CART'; payload: ProductProps }
  | { type: 'INCREMENT'; payload: string }
  | { type: 'DECREMENT'; payload: string }
  | { type: 'REMOVE'; payload: string };

export const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART': {
      const product = payload as ProductProps;
      const existingItem = state.find(item => item.id === product.id);

      if (existingItem) {
        return state.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...state, { ...product, quantity: 1 }];
    }

    case 'INCREMENT': {
      const id = payload as string;
      return state.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    case 'DECREMENT': {
      const id = payload as string;
      return state
        .map(item =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0);
    }

    case 'REMOVE': {
      const id = payload as string;
      return state.filter(item => item.id !== id);
    }

    default:
      return state;
  }
};