import { PropsWithChildren, useState } from "react";
import {
  UserProfileData,
  UserProfileContext,
} from "../../services/userProfileStore/userProfileStore";

export const UserProfileContextProvider = ({ children }: PropsWithChildren) => {
  const [userProfile, setUserProfile] = useState<UserProfileData>({
    firstName: "",
    lastName: "",
  });

  const setUserProfileData = (userData: UserProfileData) =>
    setUserProfile(userData);

  const value: UserProfileContext = {
    userProfile,
    setUserProfile: setUserProfileData,
  };

  return (
    <UserProfileContext.Provider value={value}>
      {children}
    </UserProfileContext.Provider>
  );
};
