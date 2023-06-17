import styles from "./button.module.scss";
// import { DEFAULT_BUTTON_TEXT } from "./constants";
// import { useButtonColor } from "./useButtonColor";

type Props = {
  text: string;
  onClick?: () => void;
  isLoading?: boolean;
};

export const Button = ({ text, onClick, isLoading }: Props) => {
  // const { color, changeColor } = useButtonColor({ initialColor: "red" });

  return (
    <button className={styles.button} onClick={onClick}>
      <span>{isLoading ? "Loading..." : text}</span>
    </button>
  );
};
