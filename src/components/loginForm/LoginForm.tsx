import { RegisterDto } from "../../services/api/api-types.gen";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { login } from "../../services/api/auth/login";
import { useAuthToken } from "../../services/authTokenStore/useAuthToken";

export const LoginForm = () => {
  const { setToken } = useAuthToken();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loginFormData = new FormData(event.target as HTMLFormElement);
    const emailValue = loginFormData.get("emailValue") as string;
    const passwordValue = loginFormData.get("passwordValue") as string;

    const userData: RegisterDto = {
      email: emailValue,
      password: passwordValue,
    };

    const { accessToken } = await login(userData);
    setToken(accessToken);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input labelText="Email" name="emailValue" />
      <Input labelText="Password" name="passwordValue" />
      <Button text="Log in" />
    </form>
  );
};
