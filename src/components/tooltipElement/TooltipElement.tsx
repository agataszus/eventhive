import AccountCircleLineIcon from "remixicon-react/AccountCircleLineIcon";
import { Text } from "../text/text";
import styles from "./tooltipElement.module.scss";

type TooltipLabelProps = {
  Icon: typeof AccountCircleLineIcon;
  text: string;
  onClick: () => void;
};

export const TooltipElement = ({ Icon, text, onClick }: TooltipLabelProps) => {
  return (
    <button>
      <li className={styles.option} onClick={onClick}>
        <Icon className={styles.icon} />
        <Text tag="p" variant="action-5">
          {text}
        </Text>
      </li>
    </button>
  );
};
