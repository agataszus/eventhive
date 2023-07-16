import { useState } from "react";
import { useAccountQuery } from "../../queries/useAccountQuery";
import { ProfileDto } from "../../services/api/api-types.gen";
import { UpdateUserProfileDto } from "../../services/api/profile/types";
import { useAuthToken } from "../../services/authTokenStore/useAuthToken";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { SelectOptionRegion } from "../selectOptionRegion/SelectRegion";
import { Text } from "../text/text";
import styles from "./updateProfileForm.module.scss";
import { useUpdateProfileMutation } from "../../queries/useUpdateProfileMutation";
import { useQueryClient } from "react-query";
import { getAccountKey } from "../../queries/queryKeys";

const FIRST_NAME = "firstName";
const LAST_NAME = "lastName";
const REGION = "region";

export const UpdateProfileForm = () => {
  const { token } = useAuthToken();
  const { data } = useAccountQuery();
  const [isInputError, setIsInputError] = useState(false);
  const { mutate, isLoading, isError, isSuccess } = useUpdateProfileMutation();
  const queryClient = useQueryClient();

  const { firstName, lastName, region } = data?.profile ?? {};

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (document.activeElement instanceof HTMLElement)
      document.activeElement.blur();

    const profileFormData = new FormData(event.target as HTMLFormElement);
    const firstNameValue = profileFormData.get(FIRST_NAME) as string;
    const lastNameValue = profileFormData.get(LAST_NAME) as string;
    const regionValue = profileFormData.get(
      REGION
    ) as unknown as ProfileDto.RegionEnum;
    console.log(regionValue);

    if (!firstNameValue || !lastNameValue || !regionValue) {
      setIsInputError(true);
      return;
    }

    setIsInputError(false);

    const userData: UpdateUserProfileDto = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      region: regionValue,
    };

    mutate(
      { userData, token },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(getAccountKey());

          if (event.target instanceof HTMLFormElement) event.target.reset();
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputs}>
        {isSuccess && (
          <Text tag="p" variant="success-1">
            Account updated successfully!
          </Text>
        )}
        {isInputError && (
          <Text tag="p" variant="error-1">
            All inputs required!
          </Text>
        )}
        {isError && (
          <Text tag="p" variant="error-1">
            {`Couldn't update the account. Try again later`}
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
        <Button variant="thick" text="Save Changes" isLoading={isLoading} />
      </div>
    </form>
  );
};
