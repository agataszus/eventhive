import { useQuery } from "./useQuery";
import { getAccount } from "../services/api/profile/getAccount";
import { useAuthToken } from "../services/authTokenStore/useAuthToken";
import { getAccountKey } from "./queryKeys";

export const useAccountQuery = () => {
  const { token } = useAuthToken();

  const query = useQuery(getAccountKey(), () => getAccount(token), {
    enabled: Boolean(token),
  });

  return query;
};
