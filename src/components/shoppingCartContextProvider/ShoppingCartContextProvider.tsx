import { PropsWithChildren } from "react";
import { ShoppingCartContext } from "../../services/shoppingCartStore/useShoppingCartStore";
import { useShoppingCartReducer } from "../../services/shoppingCartStore/useShoppingCartReducer";

export const ShoppingCartContextProvider = ({
  children,
}: PropsWithChildren) => {
  const value = useShoppingCartReducer();

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
