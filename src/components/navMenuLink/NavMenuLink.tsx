import { Link, useLocation } from "react-router-dom";
import styles from "./navMenuLink.module.scss";
import { Text } from "../text/text";
import Home2LineIcon from "remixicon-react/Home2LineIcon";
import { NavActive } from "../navActive/NavActive";
import classNames from "classnames";

type NavMenuLinkProps = {
  linkTo: string;
  Icon: typeof Home2LineIcon;
  text: string;
};

export const NavMenuLink = ({ linkTo, Icon, text }: NavMenuLinkProps) => {
  const location = useLocation();
  const isActive = linkTo === location.pathname;

  const className = classNames(styles.label, { [styles.active]: isActive });
  const iconClass = classNames(styles.icon, { [styles.active]: isActive });

  return (
    <Link to={linkTo}>
      {isActive && <NavActive />}
      <div className={styles.linkLabel}>
        <Icon className={iconClass} />
        <Text tag="p" variant="caption-1" className={className}>
          {text}
        </Text>
      </div>
    </Link>
  );
};
