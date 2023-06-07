import { ChangePasswordDto } from "../api-types.gen";
import { apiClient } from "../client";
import { getChangePasswordRoute } from "../routes";
import { Message } from "./types";

export const changePassword = async (
  userData: ChangePasswordDto,
  token: string
) => {
  const data = await apiClient<ChangePasswordDto, Message>({
    method: "PATCH",
    route: getChangePasswordRoute(),
    payload: userData,
    token,
  });

  return data;
};
