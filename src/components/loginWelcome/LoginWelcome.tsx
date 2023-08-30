import { useNavigate } from "react-router-dom";
import {
  DESKTOP,
  DESKTOP_SMALL,
  useMediaQueries,
} from "../../hooks/useMediaQueries";
import { useAuthToken } from "../../services/authTokenStore/useAuthToken";
import { Button } from "../button/Button";
import { Text } from "../text/text";
import styles from "./loginWelcome.module.scss";
import { useLoginMutation } from "../../queries/useLoginMutation";
import { useQueryClient } from "react-query";
import { getDashboardHomePath } from "../routes/paths";
import classNames from "classnames";

type LoginWelcomeProps = {
  handleClick: () => void;
};

export const LoginWelcome = ({ handleClick }: LoginWelcomeProps) => {
  const mediaQuery = useMediaQueries();
  const isDemoButton = [DESKTOP, DESKTOP_SMALL].includes(mediaQuery);
  const { setToken } = useAuthToken();
  const navigate = useNavigate();

  const { mutate, isLoading, isError } = useLoginMutation();
  const queryClient = useQueryClient();

  const buttonClassName = classNames(styles.button, {
    [styles.buttonDemo]: isDemoButton,
  });

  const handleDemoButtonClick = () => {
    const demoData = {
      email: "demoacc@demo.pl",
      password: "DemoAcc123#",
    };

    mutate(demoData, {
      onSuccess: ({ accessToken }) => {
        setToken(accessToken);
        queryClient.invalidateQueries();
        navigate(getDashboardHomePath());
      },
    });
  };

  return (
    <div className={styles.container}>
      <Text tag="h2" variant="subtitle-2">
        Best events in one place
      </Text>
      <Text tag="h1" variant="heading-2" className={styles.title}>
        Welcome to Event
        <Text tag="span" variant="heading-1" className={styles.titleText}>
          Hive
        </Text>
      </Text>
      <Text tag="p" variant="caption-1" className={styles.description}>
        Browse and buy tickets for the best concerts, festivals and all kind of
        musical performances!
      </Text>
      <div className={buttonClassName}>
        {isError && (
          <Text tag="p" variant="error-1">
            Something went wrong. Try again later
          </Text>
        )}
        {isDemoButton && (
          <Button
            variant="thick"
            text="Sign In to Demo Account"
            isLoading={isLoading}
            onClick={handleDemoButtonClick}
          />
        )}

        {!isDemoButton && (
          <>
            <Button variant="thick" text="Sign In" onClick={handleClick} />
            {isError && (
              <Text tag="p" variant="error-1" className={styles.errorText}>
                Something went wrong. Try again later
              </Text>
            )}
            <button onClick={handleDemoButtonClick}>
              <Text tag="p" variant="action-2">
                Or Sign In to Demo Account
              </Text>
            </button>
          </>
        )}
      </div>
    </div>
  );
};
