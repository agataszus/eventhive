import { useMutation } from "react-query";
import { getPotentialPaymentDetails } from "../services/api/payment/getPotentialPaymentDetails";
import { GetPotentialPaymentDto } from "../services/api/api-types.gen";
import { useAuthToken } from "../services/authTokenStore/useAuthToken";

export const usePotentialPaymentDetailsMutation = () => {
  const { token } = useAuthToken();

  return useMutation((paymentData: GetPotentialPaymentDto) =>
    getPotentialPaymentDetails(token, paymentData)
  );
};
