import LogoutCircleLineIcon from "remixicon-react/LogoutCircleLineIcon";
import AccountCircleLineIcon from "remixicon-react/AccountCircleLineIcon";
import { Divider } from "../divider/Divider";
import styles from "./profileTooltip.module.scss";
import { TooltipElement } from "../tooltipElement/TooltipElement";
import { useAuthToken } from "../../services/authTokenStore/useAuthToken";
import { useNavigate } from "react-router-dom";

export const ProfileTooltip = () => {
  const { setToken } = useAuthToken();
  const navigate = useNavigate();

  return (
    <div>
      <ul className={styles.optionsList}>
        <TooltipElement
          Icon={AccountCircleLineIcon}
          text="My Account"
          onClick={() => navigate("/dashboard/account")}
        />
        <Divider />
        <TooltipElement
          Icon={LogoutCircleLineIcon}
          text="Logout"
          onClick={() => {
            setToken("");
            navigate("/login");
          }}
        />
      </ul>
    </div>
  );
};
