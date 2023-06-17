import { apiClient } from "../client";
import { getPaymentDetailsRoute } from "../routes";
import { PaymentDetailsDto } from "./types";

export const getPaymentDetails = async (token: string, id: number) => {
  const data = await apiClient<undefined, PaymentDetailsDto>({
    method: "GET",
    route: getPaymentDetailsRoute(id),
    token,
  });

  return data;
};
