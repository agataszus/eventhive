import { useMutation } from "react-query";
import { Tokens } from "../services/api/auth/types";
import { RegisterDto } from "../services/api/api-types.gen";
import { login } from "../services/api/auth/login";

export const useLoginMutation = () => {
  return useMutation<Tokens, Error, RegisterDto, unknown>(login);
};
