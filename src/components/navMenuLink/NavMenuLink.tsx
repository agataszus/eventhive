import { Link, useLocation } from "react-router-dom";
import styles from "./navMenuLink.module.scss";
import { Text } from "../text/text";
import Home2LineIcon from "remixicon-react/Home2LineIcon";
import { NavActive } from "../navActive/NavActive";
import classNames from "classnames";
import { useEffect, useState } from "react";

type NavMenuLinkProps = {
  linkTo: string;
  Icon: typeof Home2LineIcon;
  text: string;
};

export const NavMenuLink = ({ linkTo, Icon, text }: NavMenuLinkProps) => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const isNowActive = linkTo === location.pathname;
    setIsActive(isNowActive);
  }, [location, linkTo]);

  let activeTextClass = "";
  if (isActive) {
    activeTextClass = styles.active;
  }
  const extraClass = classNames(styles.label, activeTextClass);
  const iconClass = classNames(styles.icon, activeTextClass);

  return (
    <Link to={linkTo}>
      {isActive && <NavActive />}
      <div className={styles.linkLabel}>
        <Icon className={iconClass} />
        <Text tag="p" variant="action-1" extraClass={extraClass}>
          {text}
        </Text>
      </div>
    </Link>
  );
};
