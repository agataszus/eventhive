import { Button } from "../button/Button";
import { Text } from "../text/text";
import styles from "./loginWelcome.module.scss";

type LoginWelcomeProps = {
  handleClick: () => void;
};

export const LoginWelcome = ({ handleClick }: LoginWelcomeProps) => {
  return (
    <div className={styles.container}>
      <Text tag="h2" variant="subtitle-2">
        Best events website
      </Text>
      <Text tag="h1" variant="heading-2" extraClass={styles.title}>
        <Text tag="span" variant="heading-1">
          Welcome{" "}
        </Text>
        to EventHive
      </Text>
      <Text tag="p" variant="subtitle-1">
        All events in one application!
      </Text>
      <div className={styles.button}>
        <Button text="Sign In" onClick={handleClick} />
      </div>
    </div>
  );
};
