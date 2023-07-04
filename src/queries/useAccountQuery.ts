import { useQuery } from "react-query";
import { getAccount } from "../services/api/profile/getAccount";
import { useAuthToken } from "../services/authTokenStore/useAuthToken";

export const useAccountQuery = () => {
  const { token } = useAuthToken();

  const query = useQuery("account", () => getAccount(token), {
    enabled: Boolean(token),
  });

  return query;
};
