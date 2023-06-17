import { RegisterDto } from "../../services/api/api-types.gen";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { useAuthToken } from "../../services/authTokenStore/useAuthToken";
import styles from "./loginForm.module.scss";
import { useLoginMutation } from "../../queries/useLoginMutation";
import { useQueryClient } from "react-query";

export const LoginForm = () => {
  const { setToken } = useAuthToken();

  const { mutate, isLoading, isError, error } = useLoginMutation();
  const queryClient = useQueryClient();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loginFormData = new FormData(event.target as HTMLFormElement);
    const emailValue = loginFormData.get("emailValue") as string;
    const passwordValue = loginFormData.get("passwordValue") as string;

    const userData: RegisterDto = {
      email: emailValue,
      password: passwordValue,
    };

    mutate(userData, {
      onSuccess: ({ accessToken }) => {
        setToken(accessToken);
        queryClient.invalidateQueries();
      },
    });
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      {isError && <p>{error.message}</p>}
      <Input
        labelText="Email"
        name="emailValue"
        type="text"
        placeholder="Your email"
      />
      <Input
        labelText="Password"
        name="passwordValue"
        type="password"
        placeholder="Your password"
      />
      <div className={styles.button}>
        <Button text="Login" isLoading={isLoading} />
      </div>
    </form>
  );
};
