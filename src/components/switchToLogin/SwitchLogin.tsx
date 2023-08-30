import { Text } from "../text/Text";
import styles from "./switchLogin.module.scss";

type SwitchToLoginProps = {
  text: string;
  linkText: string;
};

export const SwitchLogin = ({ text, linkText }: SwitchToLoginProps) => {
  return (
    <Text tag="p" variant="caption-2" className={styles.signUp}>
      {text}{" "}
      <Text tag="span" variant="action-2">
        {linkText}
      </Text>
    </Text>
  );
};
