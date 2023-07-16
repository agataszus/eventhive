import { RegisterDto } from "../../services/api/api-types.gen";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { useAuthToken } from "../../services/authTokenStore/useAuthToken";
import styles from "./loginForm.module.scss";
import { useLoginMutation } from "../../queries/useLoginMutation";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import { Text } from "../text/text";
import { getDashboardHomePath } from "../routes/paths";

const EMAIL = "email";
const PASSWORD = "password";

export const LoginForm = () => {
  const { setToken } = useAuthToken();
  const navigate = useNavigate();

  const { mutate, isLoading, isError } = useLoginMutation();
  const queryClient = useQueryClient();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loginFormData = new FormData(event.target as HTMLFormElement);
    const emailValue = loginFormData.get(EMAIL) as string;
    const passwordValue = loginFormData.get(PASSWORD) as string;

    const userData: RegisterDto = {
      email: emailValue,
      password: passwordValue,
    };

    mutate(userData, {
      onSuccess: ({ accessToken }) => {
        setToken(accessToken);
        queryClient.invalidateQueries();
        navigate(getDashboardHomePath());
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
      <Text tag="h3" variant="heading-5" className={styles.title}>
        login into account
      </Text>
      <div className={styles.inputs}>
        {isError && (
          <Text tag="p" variant="error-1">
            Wrong email address or password. Try again!
          </Text>
        )}
        <Input name={EMAIL} type="text" placeholder="Email" />
        <Input name={PASSWORD} type="password" placeholder="Password" />
      </div>
      <Button variant="thick" text="Login" isLoading={isLoading} />
    </form>
  );
};
