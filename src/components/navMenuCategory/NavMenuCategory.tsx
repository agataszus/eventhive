import { NavActive } from "../navActive/NavActive";
import { Text } from "../text/text";
import styles from "./navMenuCategory.module.scss";
import classNames from "classnames";

type NavMenuCategoryProps = {
  label: string;
  isActive: boolean;
};

export const NavMenuCategory = ({ label, isActive }: NavMenuCategoryProps) => {
  let activeTextClass = "";
  if (isActive) {
    activeTextClass = styles.active;
  }
  const extraClass = classNames(styles.label, activeTextClass);

  return (
    <>
      <Text tag="p" variant="action-1" extraClass={extraClass}>
        {label}
      </Text>
      {isActive && <NavActive />}
    </>
  );
};
