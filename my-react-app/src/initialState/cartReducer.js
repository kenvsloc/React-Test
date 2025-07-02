export const initialState = {
    cart: [],
    totalQuantity: 0,
    TotalPrice: 0,
};

export function reducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                cart: [...state.cart, action.payload],
                totalQuantity: state.totalQuantity + 1,
                TotalPrice: state.TotalPrice + action.payload.price,
            };

        case "REMOVE_ITEM": {
            const itemToRemove = state.cart[action.payload.index];
            const newCart = state.cart.filter((_, index) => index !== action.payload.index);

            return {
                ...state,
                cart: newCart,
                totalQuantity: state.totalQuantity - 1,
                TotalPrice: state.TotalPrice - itemToRemove.price,
            };
        }

        default:
            throw new Error("Unknown action type");
    }
}