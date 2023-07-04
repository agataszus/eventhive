import { useQueryClient } from "react-query";
import { useCreateUserProfileMutation } from "../../queries/useCreateUserProfileMutation";
import { ProfileDto } from "../../services/api/api-types.gen";
import { CreateUserProfileDto } from "../../services/api/profile/types";
import { useAuthToken } from "../../services/authTokenStore/useAuthToken";
import { useUserProfile } from "../../services/userProfileStore/useUserProfile";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { SelectOptionRegion } from "../selectOptionRegion/SelectRegion";
import { Text } from "../text/text";
import styles from "./profileForm.module.scss";
import { useAccountQuery } from "../../queries/useAccountQuery";
import { useState } from "react";

const FIRST_NAME = "firstName";
const LAST_NAME = "lastName";
const REGION = "region";

export const ProfileForm = () => {
  const { token } = useAuthToken();
  const queryClient = useQueryClient();
  const { isLoading: isAccountLoading } = useAccountQuery();
  const {
    userProfile: { firstName, lastName },
  } = useUserProfile();
  const { mutate, isLoading, isError, error } = useCreateUserProfileMutation();
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const profileFormData = new FormData(event.target as HTMLFormElement);
    const firstNameValue = profileFormData.get(FIRST_NAME) as string;
    const lastNameValue = profileFormData.get(LAST_NAME) as string;
    const regionValue = profileFormData.get(
      REGION
    ) as unknown as ProfileDto.RegionEnum;

    const isValidationError = !firstNameValue || !lastNameValue || !regionValue;
    if (isValidationError) {
      setValidationError("All inputs required!");
      return;
    }

    const userData: CreateUserProfileDto = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      region: regionValue,
    };

    mutate(
      { userData, token },
      {
        onSuccess: () => {
          queryClient.invalidateQueries("account");
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className={styles.profileForm}>
      <Text tag="h3" variant="heading-4" className={styles.title}>
        Create Your Profile
      </Text>
      <div className={styles.inputs}>
        {(isError || validationError) && (
          <Text tag="p" variant="error-1">
            {error?.message || validationError}
          </Text>
        )}
        <Input
          labelText="First Name"
          name={FIRST_NAME}
          type="text"
          defaultValue={firstName}
          placeholder="First Name"
        />
        <Input
          labelText="Last Name"
          name={LAST_NAME}
          type="text"
          defaultValue={lastName}
          placeholder="Last Name"
        />
        <SelectOptionRegion name={REGION} />
      </div>
      <Button text="Save Profile" isLoading={isLoading || isAccountLoading} />
    </form>
  );
};
