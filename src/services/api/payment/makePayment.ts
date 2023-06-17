import { CreatePaymentDto, PaymentDto } from "../api-types.gen";
import { apiClient } from "../client";
import { getPaymentRoute } from "../routes";

export const makePayment = async (
  token: string,
  paymentData: CreatePaymentDto
) => {
  const data = await apiClient<CreatePaymentDto, PaymentDto>({
    method: "POST",
    route: getPaymentRoute(),
    token,
    payload: paymentData,
  });

  return data;
};
