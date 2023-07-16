import { ChangePasswordDto } from "../api-types.gen";
import { apiClient } from "../client";
import { getChangePasswordRoute } from "../routes";
import { ChangePasswordOption, Message } from "./types";

export const changePassword = async ({
  userData,
  token,
}: ChangePasswordOption) => {
  const data = await apiClient<ChangePasswordDto, Message>({
    method: "PATCH",
    route: getChangePasswordRoute(),
    payload: userData,
    token,
  });

  return data;
};
