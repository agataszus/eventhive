import { createContext } from "react";

export type UserProfileData = {
  firstName: string;
  lastName: string;
};

export type UserProfileContext = {
  userProfile: UserProfileData;
  setUserProfile: (newUserData: UserProfileData) => void;
};

const initialUserProfileContext: UserProfileContext = {
  userProfile: { firstName: "", lastName: "" },
  setUserProfile: () => null,
};

export const UserProfileContext = createContext(initialUserProfileContext);
