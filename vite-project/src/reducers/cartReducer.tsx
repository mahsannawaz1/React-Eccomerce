import { Product } from "../services/usePopularProducts";

interface CartItem {
  item: Product;
  quantity: number;
}
export interface Cart {
  cartItems: CartItem[];
}
interface AddCartItem {
  type: "ADD";
  data: CartItem;
}
interface UpdateCartItem {
  type: "UPDATE";
  cartItemId: number;
}
interface DeleteCartItem {
  type: "DELETE";
  cartItemId: number;
}
export type CartAction = AddCartItem | UpdateCartItem | DeleteCartItem;

const cartReducer = (state: Cart, action: CartAction): Cart => {
  switch (action.type) {
    case "ADD":
      return { cartItems: [action.data, ...state.cartItems] };
    case "DELETE":
      return {
        cartItems: state.cartItems.filter(
          ({ item }) => item.id !== action.cartItemId
        ),
      };
    case "UPDATE":
      return {
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.item.id === action.cartItemId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
