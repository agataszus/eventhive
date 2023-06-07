import styles from "./button.module.scss";
import { DEFAULT_BUTTON_TEXT } from "./constants";
import { useButtonColor } from "./useButtonColor";

type Props = {
  text?: string;
  onClick?: () => void;
};

export const Button = ({ text, onClick }: Props) => {
  const { color, changeColor } = useButtonColor({ initialColor: "red" });

  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.button__text} style={{ color }}>
        {text ?? DEFAULT_BUTTON_TEXT}
      </span>
    </button>
  );
};
