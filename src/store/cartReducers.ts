import { Product } from "../types";
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY, CartActionTypes } from "./cartActions";


interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const cartReducer = (state = initialState, action: CartActionTypes) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingProduct = state.cart.find((item) => item.id === action.payload.id);

      if (existingProduct) {
        // If the product already exists, increase the quantity by 1
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        // If the product doesn't exist, add it to the cart with quantity 1
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item: CartItem) => item.id !== action.payload),
      };
    case UPDATE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item: CartItem) =>
          item.id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;

