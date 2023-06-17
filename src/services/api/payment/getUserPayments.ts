import { apiClient } from "../client";
import { getPaymentRoute } from "../routes";
import { UserPaymentsDto } from "./types";

export const getUserPayments = async (token: string) => {
  const data = await apiClient<undefined, UserPaymentsDto>({
    method: "GET",
    route: getPaymentRoute(),
    token,
  });

  return data;
};
