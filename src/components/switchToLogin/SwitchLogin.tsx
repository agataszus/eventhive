import { Text } from "../text/text";
import styles from "./switchLogin.module.scss";

type SwitchToLoginProps = {
  text: string;
  linkText: string;
};

export const SwitchLogin = ({ text, linkText }: SwitchToLoginProps) => {
  return (
    <Text tag="p" variant="caption-2" extraClass={styles.signUp}>
      {text}{" "}
      <Text tag="span" variant="action-4">
        {linkText}
      </Text>
    </Text>
  );
};
