import { Cart, CartAction } from "../../reducers/cartReducer";
import { Dispatch, createContext } from "react";

interface CartContextType {
  cart: Cart;
  dispatch: Dispatch<CartAction>;
}

const CartContext = createContext<CartContextType>({} as CartContextType);
export default CartContext;
