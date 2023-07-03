import { useQueryClient } from "react-query";
import { useRegisterMutation } from "../../queries/useRegisterMutation";
import { RegisterDto } from "../../services/api/api-types.gen";
import { useAuthToken } from "../../services/authTokenStore/useAuthToken";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { Text } from "../text/text";
import styles from "./registerForm.module.scss";
import { useNavigate } from "react-router-dom";
import { RegisteredUserDto } from "../../services/api/auth/types";
import { useState } from "react";

const FIRST_NAME = "firstName";
const LAST_NAME = "lastName";
const EMAIL = "email";
const PASSWORD = "password";
const REPEAT_PASSWORD = "repeatPassword";

export const RegisterForm = () => {
  const { setToken } = useAuthToken();
  const { mutate, isLoading, isError, error } = useRegisterMutation();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const registerFormData = new FormData(event.target as HTMLFormElement);
    const emailValue = registerFormData.get(EMAIL) as string;
    const passwordValue = registerFormData.get(PASSWORD) as string;
    const repeatPasswordValue = registerFormData.get(REPEAT_PASSWORD) as string;

    if (passwordValue !== repeatPasswordValue) {
      setIsPasswordCorrect(false);
      return;
    }

    setIsPasswordCorrect(true);

    const userData: RegisterDto = {
      email: emailValue,
      password: passwordValue,
    };

    const handleSuccess = ({ tokens }: RegisteredUserDto) => {
      const { accessToken } = tokens;
      setToken(accessToken);
      queryClient.invalidateQueries();
      navigate("/dashboard/home");
    };

    mutate(userData, {
      onSuccess: handleSuccess,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Text tag="h3" variant="heading-4" className={styles.title}>
        create new account
      </Text>
      <div className={styles.inputs}>
        {isError && (
          <Text tag="p" variant="error-1">
            {error.message}
          </Text>
        )}
        <Input name={FIRST_NAME} type="text" placeholder="First Name" />
        <Input name={LAST_NAME} type="text" placeholder="Last Name" />
        <Input name={EMAIL} type="text" placeholder="Email" />
        <Input name={PASSWORD} type="password" placeholder="Password" />
        <Input
          name={REPEAT_PASSWORD}
          type="password"
          placeholder="Repeat password"
        />
        {!isPasswordCorrect && (
          <Text tag="p" variant="error-1">
            Password does not match
          </Text>
        )}
      </div>
      <Button text="Register" isLoading={isLoading} />
    </form>
  );
};
