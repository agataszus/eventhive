import classNames from "classnames";
import { Loader } from "../loader/Loader";
import { Text } from "../text/Text";
import styles from "./button.module.scss";

type Props = {
  text: string;
  onClick?: () => void;
  isLoading?: boolean;
  variant: "narrow" | "thick";
};

export const Button = ({ text, onClick, isLoading, variant }: Props) => {
  const extraClass = classNames(styles.button, styles[variant]);

  return (
    <button className={extraClass} onClick={onClick}>
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
