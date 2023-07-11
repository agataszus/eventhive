import { useMutation } from "react-query";
import { updateUserProfile } from "../services/api/profile/updateUserProfile";
import { UpdateUserProfileOptions } from "../services/api/profile/types";
import { RegisteredUserDto } from "../services/api/auth/types";

export const useUpdateProfileMutation = () => {
  return useMutation<
    RegisteredUserDto,
    Error,
    UpdateUserProfileOptions,
    unknown
  >(updateUserProfile);
};
