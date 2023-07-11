import { useState } from "react";
import { ChangePasswordDto } from "../../services/api/api-types.gen";
import { changePassword } from "../../services/api/auth/changePassword";
import { useAuthToken } from "../../services/authTokenStore/useAuthToken";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { Text } from "../text/text";
import styles from "./changePasswordForm.module.scss";
import { useAccountQuery } from "../../queries/useAccountQuery";

const EMAIL = "email";
const CURRENT_PASSWORD = "currentPassword";
const NEW_PASSWORD = "newPassword";
const REPEAT_NEW_PASSWORD = "repeatNewPassword";

export const ChangePasswordForm = () => {
  const { token } = useAuthToken();
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);
  const { data } = useAccountQuery();
  const { email } = data?.profile ?? {};

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loginFormData = new FormData(event.target as HTMLFormElement);
    const emailValue = loginFormData.get(EMAIL) as string;
    const currentPasswordValue = loginFormData.get(CURRENT_PASSWORD) as string;
    const newPasswordValue = loginFormData.get(NEW_PASSWORD) as string;
    const repeatNewPasswordValue = loginFormData.get(
      REPEAT_NEW_PASSWORD
    ) as string;

    if (newPasswordValue !== repeatNewPasswordValue) {
      setIsPasswordCorrect(false);
      return;
    }

    setIsPasswordCorrect(true);

    const userData: ChangePasswordDto = {
      email: emailValue,
      password: currentPasswordValue,
      newPassword: newPasswordValue,
    };

    const { message } = await changePassword(userData, token);
    console.log(message);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputs}>
        <Input
          name={EMAIL}
          type="text"
          placeholder={email ?? "abc@abc.com"}
          labelText="Email"
        />
        <Input
          name={NEW_PASSWORD}
          type="password"
          placeholder="**********"
          labelText="New password"
        />
        <Input
          name={CURRENT_PASSWORD}
          type="password"
          placeholder="**********"
          labelText="Current password"
        />
        <Input
          name={REPEAT_NEW_PASSWORD}
          type="password"
          placeholder="**********"
          labelText="Repeat new password"
        />
        {!isPasswordCorrect && (
          <Text tag="p" variant="error-1">
            Password does not match
          </Text>
        )}
      </div>
      <div className={styles.button}>
        <Button variant="thick" text="Log in" />
      </div>
    </form>
  );
};
