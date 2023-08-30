import { Link, useLocation } from "react-router-dom";
import { NavActive } from "../navActive/NavActive";
import { Text } from "../text/Text";
import styles from "./navMenuCategory.module.scss";
import classNames from "classnames";
import { getCategoryPath } from "../routes/paths";

type NavMenuCategoryProps = {
  label: string;
  category: string;
};

export const NavMenuCategory = ({ label, category }: NavMenuCategoryProps) => {
  const location = useLocation();
  const isActive = getCategoryPath(category) === location.pathname;

  const className = classNames(styles.label, { [styles.active]: isActive });

  return (
    <Link to={getCategoryPath(category)}>
      <Text tag="p" variant="caption-1" className={className}>
        {label}
      </Text>
      {isActive && <NavActive />}
    </Link>
  );
};
