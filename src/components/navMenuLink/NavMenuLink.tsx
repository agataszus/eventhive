import { Link } from "react-router-dom";
import styles from "./navMenuLink.module.scss";
import { Text } from "../text/text";
import Home2LineIcon from "remixicon-react/Home2LineIcon";

type NavMenuLinkProps = {
  linkTo: string;
  Icon: typeof Home2LineIcon;
  text: string;
};

export const NavMenuLink = ({ linkTo, Icon, text }: NavMenuLinkProps) => {
  return (
    <Link to={linkTo}>
      <div className={styles.linkLabel}>
        <Icon className={styles.icon} />
        <Text tag="p" variant="action-1">
          {text}
        </Text>
      </div>
    </Link>
  );
};
