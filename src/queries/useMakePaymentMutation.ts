import { useMutation } from "react-query";
import { CreatePaymentDto } from "../services/api/api-types.gen";
import { useAuthToken } from "../services/authTokenStore/useAuthToken";
import { makePayment } from "../services/api/payment/makePayment";

export const useMakePaymentMutation = () => {
  const { token } = useAuthToken();

  return useMutation((paymentData: CreatePaymentDto) =>
    makePayment(token, paymentData)
  );
};
