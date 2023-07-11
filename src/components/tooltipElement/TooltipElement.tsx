import AccountCircleLineIcon from "remixicon-react/AccountCircleLineIcon";
import { Text } from "../text/text";
import styles from "./tooltipElement.module.scss";
import { Link } from "react-router-dom";

type TooltipLabelProps = {
  Icon: typeof AccountCircleLineIcon;
  text: string;
  linkTo: string;
  onClick?: () => void;
};

export const TooltipElement = ({
  Icon,
  text,
  linkTo,
  onClick,
}: TooltipLabelProps) => {
  return (
    <Link to={linkTo}>
      <li className={styles.option} onClick={onClick}>
        <Icon className={styles.icon} />
        <Text tag="p" variant="action-5">
          {text}
        </Text>
      </li>
    </Link>
  );
};
