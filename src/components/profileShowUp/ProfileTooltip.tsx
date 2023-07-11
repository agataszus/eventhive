import { Text } from "../text/text";
import LogoutCircleLineIcon from "remixicon-react/LogoutCircleLineIcon";
import AccountCircleLineIcon from "remixicon-react/AccountCircleLineIcon";
import { Divider } from "../divider/Divider";
import styles from "./profileTooltip.module.scss";

export const ProfileTooltip = () => {
  return (
    <div>
      <ul className={styles.optionsList}>
        <li className={styles.option}>
          <AccountCircleLineIcon className={styles.icon} />
          <Text tag="p" variant="action-5">
            My Account
          </Text>
        </li>
        <Divider />
        <li className={styles.option}>
          <LogoutCircleLineIcon className={styles.icon} />
          <Text tag="p" variant="action-5">
            Logout
          </Text>
        </li>
      </ul>
    </div>
  );
};
