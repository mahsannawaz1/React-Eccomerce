import { Product } from "../services/usePopularProducts";

interface CartItem {
  item: Product;
  quantity: number;
}
interface Cart {
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
type CartAction = AddCartItem | UpdateCartItem | DeleteCartItem;

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
        cartItems: state.cartItems.filter((cartItem) =>
          cartItem.item.id === action.cartItemId
            ? { ...cartItem, quantity: cartItem.quantity++ }
            : cartItem
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
