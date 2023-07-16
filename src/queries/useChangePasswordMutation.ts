import { useMutation } from "react-query";
import { changePassword } from "../services/api/auth/changePassword";
import { ChangePasswordOption, Message } from "../services/api/auth/types";

export const useChangePasswordMutation = () => {
  return useMutation<Message, Error, ChangePasswordOption, unknown>(
    changePassword
  );
};
