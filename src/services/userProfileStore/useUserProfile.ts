import { useContext } from "react";
import { UserProfileContext } from "./userProfileStore";

export const useUserProfile = () => {
  const context = useContext(UserProfileContext);
  if (!context) throw new Error("Context UserProfile does not exist");
  return context;
};
