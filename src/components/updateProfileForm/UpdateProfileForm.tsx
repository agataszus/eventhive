import { useState } from "react";
import { useAccountQuery } from "../../queries/useAccountQuery";
import { ProfileDto } from "../../services/api/api-types.gen";
import { UpdateUserProfileDto } from "../../services/api/profile/types";
import { updateUserProfile } from "../../services/api/profile/updateUserProfile";
import { useAuthToken } from "../../services/authTokenStore/useAuthToken";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { SelectOptionRegion } from "../selectOptionRegion/SelectRegion";
import { Text } from "../text/text";
import styles from "./updateProfileForm.module.scss";

const FIRST_NAME = "firstName";
const LAST_NAME = "lastName";
const REGION = "region";

export const UpdateProfileForm = () => {
  const { token } = useAuthToken();
  const { data } = useAccountQuery();
  const [isError, setIsError] = useState(false);

  const { firstName, lastName, region } = data?.profile ?? {};

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const profileFormData = new FormData(event.target as HTMLFormElement);
    const firstNameValue = profileFormData.get(FIRST_NAME) as string;
    const lastNameValue = profileFormData.get(LAST_NAME) as string;
    const regionValue = profileFormData.get(
      REGION
    ) as unknown as ProfileDto.RegionEnum;
    console.log(regionValue);

    if (!firstNameValue || !lastNameValue || !regionValue) {
      setIsError(true);
      return;
    }

    const userData: UpdateUserProfileDto = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      region: regionValue,
    };

    const data = await updateUserProfile(userData, token);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputs}>
        {isError && (
          <Text tag="p" variant="error-1">
            All inputs required!
          </Text>
        )}
        <Input
          name={FIRST_NAME}
          type="text"
          placeholder="Your name"
          defaultValue={firstName}
          labelText="Name"
        />
        <Input
          name={LAST_NAME}
          type="text"
          placeholder="Your last name"
          defaultValue={lastName}
          labelText="Last name"
        />
        <SelectOptionRegion
          name={REGION}
          defaultValue={region as unknown as string}
          labelText="Region"
        />
      </div>
      <div className={styles.button}>
        <Button variant="thick" text="Save Changes" />
      </div>
    </form>
  );
};
