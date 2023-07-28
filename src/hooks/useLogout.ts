import { useQueryClient } from "react-query";
import { useAuthToken } from "../services/authTokenStore/useAuthToken";
import { useShoppingCartStore } from "../services/useShoppingCartStore/useShoppingCartStore";
import { useNavigate } from "react-router-dom";
import { getLoginPath } from "../components/routes/paths";

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { setToken } = useAuthToken();
  const { clearCart } = useShoppingCartStore();

  return () => {
    queryClient.clear();
    setToken("");
    clearCart();
    navigate(getLoginPath());
  };
};
