import { ChangePasswordDto } from "../../services/api/api-types.gen";
import { changePassword } from "../../services/api/auth/changePassword";
import { useAuthToken } from "../../services/authTokenStore/useAuthToken";
import { Button } from "../button/Button";
import { Input } from "../input/Input";

export const ChangePasswordForm = () => {
  const { token } = useAuthToken();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loginFormData = new FormData(event.target as HTMLFormElement);
    const emailValue = loginFormData.get("emailValue") as string;
    const passwordValue = loginFormData.get("passwordValue") as string;
    const newPasswordValue = loginFormData.get("newPasswordValue") as string;

    const userData: ChangePasswordDto = {
      email: emailValue,
      password: passwordValue,
      newPassword: newPasswordValue,
    };

    const { message } = await changePassword(userData, token);
    console.log(message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input labelText="Email" name="emailValue" />
      <Input labelText="Password" name="passwordValue" />
      <Input labelText="New password" name="newPasswordValue" />
      <Button text="Log in" />
    </form>
  );
};
