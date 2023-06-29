import { Loader } from "../loader/Loader";
import { Text } from "../text/text";
import styles from "./button.module.scss";

type Props = {
  text: string;
  onClick?: () => void;
  isLoading?: boolean;
};

export const Button = ({ text, onClick, isLoading }: Props) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {isLoading ? (
        <Loader variant="extraSmall" />
      ) : (
        <Text tag="span" variant="subtitle-3">
          {text}
        </Text>
      )}
    </button>
  );
};
