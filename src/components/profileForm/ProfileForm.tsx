import { ProfileDto } from "../../services/api/api-types.gen";
import {
  CreateUserProfileDto,
  createUserProfile,
} from "../../services/api/profile/createUserProfile";
import { useAuthToken } from "../../services/authTokenStore/useAuthToken";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { SelectOptionRegion } from "../selectOptionRegion/SelectOptionRegion";

export const ProfileForm = () => {
  const { token } = useAuthToken();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const profileFormData = new FormData(event.target as HTMLFormElement);
    const firstNameValue = profileFormData.get("firstNameValue") as string;
    const lastNameValue = profileFormData.get("lastNameValue") as string;
    const regionValue = profileFormData.get(
      "regionValue"
    ) as unknown as ProfileDto.RegionEnum;

    const userData: CreateUserProfileDto = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      region: regionValue,
    };

    const data = await createUserProfile(userData, token);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input labelText="First Name" name="firstNameValue" />
      <Input labelText="Last Name" name="lastNameValue" />
      <SelectOptionRegion name="regionValue" />
      <Button text="Save Profile" />
    </form>
  );
};
