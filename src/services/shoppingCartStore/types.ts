export enum ShoppingCartActionType {
  OpenCart = "SET_IS_SHOPPING_CART_OPEN",
  CloseCart = "SET_IS_SHOPPING_CART_CLOSE",
  ClearCart = "CLEAR_CART_CONTENT",
  AddItem = "ADD_ITEM_TO_CART",
  RemoveItem = "REMOVE_ITEM_FROM_CART",
  UpdateItemCount = "UPDATE_ITEM_COUNT_IN_CART",
}

export type ShoppingCartItem = {
  ticket: {
    title: string;
    quantity: number;
    price: number;
    id: number;
    description: string;
  };
  event: {
    title: string;
    date: string;
    externalImageUrls: string[];
    id: number;
  };
};

export type ShoppingCartState = {
  isShoppingCartOpen: boolean;
  cartContent: ShoppingCartItem[];
};

export type ActionWithCountOptions = {
  id: number;
  count: number;
};

export type EmptyAction = {
  type:
    | ShoppingCartActionType.OpenCart
    | ShoppingCartActionType.CloseCart
    | ShoppingCartActionType.ClearCart;
  payload: undefined;
};

export type ActionWithItem = {
  type: ShoppingCartActionType.AddItem | ShoppingCartActionType.RemoveItem;
  payload: ShoppingCartItem;
};

export type ActionWithCount = {
  type: ShoppingCartActionType.UpdateItemCount;
  payload: ActionWithCountOptions;
};

export type ShoppingCartActions =
  | EmptyAction
  | ActionWithItem
  | ActionWithCount;
