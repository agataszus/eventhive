import { ProfileDto } from "../../services/api/api-types.gen";
import {
  UpdateUserProfileDto,
  updateUserProfile,
} from "../../services/api/profile/updateUserProfile";
import { useAuthToken } from "../../services/authTokenStore/useAuthToken";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { SelectOptionRegion } from "../selectOptionRegion/SelectOptionRegion";

export const UpdateProfileForm = () => {
  const { token } = useAuthToken();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const profileFormData = new FormData(event.target as HTMLFormElement);
    const firstNameValue = profileFormData.get("firstNameValue") as string;
    const lastNameValue = profileFormData.get("lastNameValue") as string;
    const regionValue = profileFormData.get(
      "regionValue"
    ) as unknown as ProfileDto.RegionEnum;

    let userData: UpdateUserProfileDto = {};

    if (!firstNameValue && !lastNameValue && !regionValue) return;

    if (firstNameValue) {
      userData = {
        firstName: firstNameValue,
      };
    }

    if (lastNameValue) {
      userData = {
        ...userData,
        lastName: lastNameValue,
      };
    }

    if (regionValue) {
      userData = {
        ...userData,
        region: regionValue,
      };
    }

    const data = await updateUserProfile(userData, token);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input labelText="First Name" name="firstNameValue" />
      <Input labelText="Last Name" name="lastNameValue" />
      <SelectOptionRegion name="regionValue" />
      <Button text="Save Changes" />
    </form>
  );
};
