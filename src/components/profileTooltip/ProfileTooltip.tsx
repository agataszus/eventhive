import LogoutCircleLineIcon from "remixicon-react/LogoutCircleLineIcon";
import AccountCircleLineIcon from "remixicon-react/AccountCircleLineIcon";
import { Divider } from "../divider/Divider";
import styles from "./profileTooltip.module.scss";
import { TooltipElement } from "../tooltipElement/TooltipElement";
import { useNavigate } from "react-router-dom";
import { getAccountPath } from "../routes/paths";
import { useLogout } from "../../hooks/useLogout";

export const ProfileTooltip = () => {
  const navigate = useNavigate();
  const logout = useLogout();

  return (
    <div>
      <ul className={styles.optionsList}>
        <TooltipElement
          Icon={AccountCircleLineIcon}
          text="My Account"
          onClick={() => navigate(getAccountPath())}
        />
        <Divider />
        <TooltipElement
          Icon={LogoutCircleLineIcon}
          text="Logout"
          onClick={logout}
        />
      </ul>
    </div>
  );
};
