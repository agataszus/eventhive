import classNames from "classnames";
import styles from "./navigationDot.module.scss";

type NavigationDotProps = {
  onClick: () => void;
  isActive: boolean;
};

export const NavigationDot = ({ onClick, isActive }: NavigationDotProps) => {
  const navStyles = classNames(styles.dot, isActive ? styles.active : "");

  return <button className={navStyles} onClick={onClick}></button>;
};
