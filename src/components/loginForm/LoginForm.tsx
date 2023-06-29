import { RegisterDto } from "../../services/api/api-types.gen";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { useAuthToken } from "../../services/authTokenStore/useAuthToken";
import styles from "./loginForm.module.scss";
import { useLoginMutation } from "../../queries/useLoginMutation";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Text } from "../text/text";

export const LoginForm = () => {
  const { token, setToken } = useAuthToken();
  const navigate = useNavigate();

  const { mutate, isLoading, isError, error } = useLoginMutation();
  const queryClient = useQueryClient();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loginFormData = new FormData(event.target as HTMLFormElement);
    const emailValue = loginFormData.get("email") as string;
    const passwordValue = loginFormData.get("password") as string;

    const userData: RegisterDto = {
      email: emailValue,
      password: passwordValue,
    };

    mutate(userData, {
      onSuccess: ({ accessToken }) => {
        setToken(accessToken);
        queryClient.invalidateQueries();
        navigate("/dashboard/home");
      },
    });
  };

  // useEffect(() => {
  //   if (token) {
  //     navigate("/dashboard/home");
  //   }
  // }, [token, navigate]);

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      {isError && (
        <Text tag="p" variant="error-1">
          {error.message}
        </Text>
      )}
      <Text tag="h3" variant="heading-4" extraClass={styles.title}>
        login into account
      </Text>
      <div className={styles.inputs}>
        <Input name="email" type="text" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />
      </div>
      <Button text="Login" isLoading={isLoading} />
      <Text tag="p" variant="caption-2" extraClass={styles.register}>
        Do not have account? Register here...
      </Text>
    </form>
  );
};
