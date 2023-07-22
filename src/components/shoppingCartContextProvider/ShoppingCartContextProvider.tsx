import { PropsWithChildren } from "react";
import { ShoppingCartContext } from "../../services/useShoppingCartStore/useShoppingCartStore";
import { useShoppingCartReducer } from "../../services/useShoppingCartStore/useShoppingCartReducer";

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
