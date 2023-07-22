import {
  ShoppingCartActionType,
  ShoppingCartActions,
  ShoppingCartState,
} from "./types";
import { INITIAL_SHOPPING_CART_STATE } from "./useShoppingCartReducer";

export const shoppingCartReducer = (
  state: ShoppingCartState,
  action: ShoppingCartActions
): ShoppingCartState => {
  switch (action.type) {
    case ShoppingCartActionType.OpenCart: {
      return {
        ...state,
        isShoppingCartOpen: true,
      };
    }
    case ShoppingCartActionType.CloseCart: {
      return {
        ...state,
        isShoppingCartOpen: false,
      };
    }
    case ShoppingCartActionType.ClearCart: {
      return {
        ...INITIAL_SHOPPING_CART_STATE,
      };
    }
    case ShoppingCartActionType.AddItem: {
      const isTicketTypeInCart = state.cartContent.some(
        (item) => item.ticket.id === action.payload.ticket.id
      );

      if (isTicketTypeInCart) {
        return {
          ...state,
          cartContent: state.cartContent.map((item) => {
            if (item.ticket.id === action.payload.ticket.id) {
              return {
                ...item,
                ticket: {
                  ...item.ticket,
                  quantity:
                    item.ticket.quantity + action.payload.ticket.quantity,
                },
              };
            }

            return item;
          }),
        };
      }

      return {
        ...state,
        cartContent: [...state.cartContent, action.payload],
      };
    }
    case ShoppingCartActionType.RemoveItem: {
      return {
        ...state,
        cartContent: [...state.cartContent].filter(
          (item) => item.ticket.id !== action.payload.ticket.id
        ),
      };
    }
    case ShoppingCartActionType.UpdateItemCount: {
      return {
        ...state,
        cartContent: state.cartContent.map((item) => {
          if (item.ticket.id === action.payload.id) {
            return {
              ...item,
              ticket: { ...item.ticket, quantity: action.payload.count },
            };
          }

          return { ...item };
        }),
      };
    }
  }
};
