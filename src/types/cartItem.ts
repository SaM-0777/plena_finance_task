import Product from "./products";

interface CartItem extends Product {
  quantity: number;
}

export default CartItem;

