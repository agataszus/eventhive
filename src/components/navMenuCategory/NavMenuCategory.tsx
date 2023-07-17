import { Link } from "react-router-dom";
import { NavActive } from "../navActive/NavActive";
import { Text } from "../text/text";
import styles from "./navMenuCategory.module.scss";
import classNames from "classnames";
import { getCategoryPath } from "../routes/paths";

type NavMenuCategoryProps = {
  label: string;
  isActive: boolean;
  category: string;
};

export const NavMenuCategory = ({
  label,
  isActive,
  category,
}: NavMenuCategoryProps) => {
  const className = classNames(styles.label, { [styles.active]: isActive });

  return (
    <Link to={getCategoryPath(category)}>
      <Text tag="p" variant="action-1" className={className}>
        {label}
      </Text>
      {isActive && <NavActive />}
    </Link>
  );
};
