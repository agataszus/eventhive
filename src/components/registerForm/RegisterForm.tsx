import { useQueryClient } from "react-query";
import { useRegisterMutation } from "../../queries/useRegisterMutation";
import { RegisterDto } from "../../services/api/api-types.gen";
import { useAuthToken } from "../../services/authTokenStore/useAuthToken";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { Text } from "../text/text";
import styles from "./registerForm.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const RegisterForm = () => {
  const { setToken } = useAuthToken();
  const { mutate, isLoading, isError, error } = useRegisterMutation();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const registerFormData = new FormData(event.target as HTMLFormElement);
    const emailValue = registerFormData.get("email") as string;
    const passwordValue = registerFormData.get("password") as string;
    const repeatPasswordValue = registerFormData.get(
      "repeatPassword"
    ) as string;

    if (passwordValue !== repeatPasswordValue) {
      setIsPasswordCorrect(false);
      return;
    }

    const userData: RegisterDto = {
      email: emailValue,
      password: passwordValue,
    };

    mutate(userData, {
      onSuccess: ({ tokens }) => {
        const { accessToken } = tokens;
        setToken(accessToken);
        queryClient.invalidateQueries();
        navigate("/dashboard/home");
      },
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Text tag="h3" variant="heading-4" extraClass={styles.title}>
        create new account
      </Text>
      <div className={styles.inputs}>
        {isError && (
          <Text tag="p" variant="error-1">
            {error.message}
          </Text>
        )}
        <Input name="firstName" type="text" placeholder="First Name" />
        <Input name="lastName" type="text" placeholder="Last Name" />
        <Input name="email" type="text" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />
        <Input
          name="repeatPassword"
          type="password"
          placeholder="Repeat password"
        />
        {isPasswordCorrect ? undefined : (
          <Text tag="p" variant="error-1">
            Password does not match
          </Text>
        )}
      </div>
      <Button text="Register" isLoading={isLoading} />
      <Text tag="p" variant="caption-2" extraClass={styles.signUp}>
        Already have account? Sign up here...
      </Text>
    </form>
  );
};
