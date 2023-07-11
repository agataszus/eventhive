import LogoutCircleLineIcon from "remixicon-react/LogoutCircleLineIcon";
import AccountCircleLineIcon from "remixicon-react/AccountCircleLineIcon";
import { Divider } from "../divider/Divider";
import styles from "./profileTooltip.module.scss";
import { TooltipElement } from "../tooltipElement/TooltipElement";
import { useAuthToken } from "../../services/authTokenStore/useAuthToken";

export const ProfileTooltip = () => {
  const { setToken } = useAuthToken();
  return (
    <div>
      <ul className={styles.optionsList}>
        <TooltipElement
          Icon={AccountCircleLineIcon}
          text="My Account"
          linkTo="/dashboard/account"
        />
        <Divider />
        <TooltipElement
          Icon={LogoutCircleLineIcon}
          text="Logout"
          linkTo="/login"
          onClick={() => setToken("")}
        />
      </ul>
    </div>
  );
};
