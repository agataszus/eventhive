import { useMutation } from "react-query";
import { RegisteredUserDto } from "../services/api/auth/types";
import { registerUser } from "../services/api/auth/registerUser";
import { RegisterDto } from "../services/api/api-types.gen";

export const useRegisterMutation = () => {
  return useMutation<RegisteredUserDto, Error, RegisterDto, unknown>(
    registerUser
  );
};
