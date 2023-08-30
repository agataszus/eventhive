import { createContext, useContext } from "react";
import {
  INITIAL_SHOPPING_CART_STATE,
  useShoppingCartReducer,
} from "./useShoppingCartReducer";

const INITIAL_SHOPPING_CART_CONTEXT_VALUE: ReturnType<
  typeof useShoppingCartReducer
> = {
  state: INITIAL_SHOPPING_CART_STATE,
  openCart: () => null,
  closeCart: () => null,
  clearCart: () => null,
  addItem: () => null,
  removeItem: () => null,
  updateItemCount: () => null,
};

export const ShoppingCartContext = createContext(
  INITIAL_SHOPPING_CART_CONTEXT_VALUE
);

export const useShoppingCartStore = () => {
  return useContext(ShoppingCartContext);
};
