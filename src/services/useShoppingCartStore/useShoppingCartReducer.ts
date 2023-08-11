import { useCallback, useEffect, useReducer } from "react";
import {
  ActionWithCountOptions,
  ShoppingCartActionType,
  ShoppingCartItem,
  ShoppingCartState,
} from "./types";
import { shoppingCartReducer } from "./shoppingCartReducer";

export const LOCAL_STORAGE_SHOPPING_CART_KEY = "shopping-cart";
const LOCAL_STORAGE_SHOPPING_CART_STRING = localStorage.getItem(
  LOCAL_STORAGE_SHOPPING_CART_KEY
);
const LOCAL_STORAGE_SHOPPING_CART = LOCAL_STORAGE_SHOPPING_CART_STRING
  ? JSON.parse(LOCAL_STORAGE_SHOPPING_CART_STRING)
  : [];

export const INITIAL_SHOPPING_CART_STATE: ShoppingCartState = {
  isShoppingCartOpen: false,
  cartContent: LOCAL_STORAGE_SHOPPING_CART,
};

export const useShoppingCartReducer = () => {
  const [state, dispatch] = useReducer(
    shoppingCartReducer,
    INITIAL_SHOPPING_CART_STATE
  );

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_SHOPPING_CART_KEY,
      JSON.stringify(state.cartContent)
    );
  }, [state.cartContent]);

  const openCart = useCallback(() => {
    dispatch({ type: ShoppingCartActionType.OpenCart, payload: undefined });
  }, []);

  const closeCart = useCallback(() => {
    dispatch({ type: ShoppingCartActionType.CloseCart, payload: undefined });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: ShoppingCartActionType.ClearCart, payload: undefined });
  }, []);

  const addItem = useCallback((item: ShoppingCartItem) => {
    dispatch({ type: ShoppingCartActionType.AddItem, payload: item });
  }, []);

  const removeItem = useCallback((item: ShoppingCartItem) => {
    dispatch({ type: ShoppingCartActionType.RemoveItem, payload: item });
  }, []);

  const updateItemCount = useCallback((data: ActionWithCountOptions) => {
    dispatch({
      type: ShoppingCartActionType.UpdateItemCount,
      payload: data,
    });
  }, []);

  return {
    state,
    openCart,
    closeCart,
    clearCart,
    addItem,
    removeItem,
    updateItemCount,
  };
};
