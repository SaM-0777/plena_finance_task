import { Product } from "../types";

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: Product;
}

interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: number;
}

interface UpdateQuantityAction {
  type: typeof UPDATE_QUANTITY;
  payload: {
    productId: number;
    quantity: number;
  };
}

export type CartActionTypes = AddToCartAction | RemoveFromCartAction | UpdateQuantityAction;

export const addToCart = (product: Product): AddToCartAction => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId: number): RemoveFromCartAction => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const updateQuantity = (productId: number, quantity: number): UpdateQuantityAction => ({
  type: UPDATE_QUANTITY,
  payload: { productId, quantity },
});

