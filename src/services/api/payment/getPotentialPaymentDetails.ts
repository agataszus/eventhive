import { GetPotentialPaymentDto } from "../api-types.gen";
import { apiClient } from "../client";
import { getPotentialPaymentDetailsRoute } from "../routes";
import { PotentialPaymentDetailsDto } from "./types";

export const getPotentialPaymentDetails = async (
  token: string,
  paymentData: GetPotentialPaymentDto
) => {
  const data = await apiClient<
    GetPotentialPaymentDto,
    PotentialPaymentDetailsDto
  >({
    method: "POST",
    route: getPotentialPaymentDetailsRoute(),
    token,
    payload: paymentData,
  });

  return data;
};
