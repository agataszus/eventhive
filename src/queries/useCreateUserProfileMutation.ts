import { useMutation } from "react-query";
import { createUserProfile } from "../services/api/profile/createUserProfile";
import {
  ActionsReturnUserProfileDto,
  CreateUserProfileOptions,
} from "../services/api/profile/types";

export const useCreateUserProfileMutation = () => {
  return useMutation<
    ActionsReturnUserProfileDto,
    Error,
    CreateUserProfileOptions,
    unknown
  >(createUserProfile);
};
