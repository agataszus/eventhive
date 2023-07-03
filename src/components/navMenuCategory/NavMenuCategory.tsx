import { NavActive } from "../navActive/NavActive";
import { Text } from "../text/text";
import styles from "./navMenuCategory.module.scss";
import classNames from "classnames";

type NavMenuCategoryProps = {
  label: string;
  isActive: boolean;
};

export const NavMenuCategory = ({ label, isActive }: NavMenuCategoryProps) => {
  const className = classNames(styles.label, { [styles.active]: isActive });

  return (
    <>
      <Text tag="p" variant="action-1" className={className}>
        {label}
      </Text>
      {isActive && <NavActive />}
    </>
  );
};
