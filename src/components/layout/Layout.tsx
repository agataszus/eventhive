import { useEffect, useRef } from "react";
import { useAuthToken } from "../../services/authTokenStore/useAuthToken";
import { CreateProfileModal } from "../createProfileModal/CreateProfileModal";
import { Sidebar } from "../sidebar/Sidebar";
import styles from "./layout.module.scss";
import { Outlet, useNavigate } from "react-router-dom";
import { useScrollOnRouteChange } from "../../hooks/useScrollOnRouteChange";
import { getLoginPath } from "../routes/paths";

export const Layout = () => {
  const { token } = useAuthToken();
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!token) {
      navigate(getLoginPath(), { replace: true });
    }
  }, [token, navigate]);

  useScrollOnRouteChange(contentRef);

  return (
    <div className={styles.layout}>
      <CreateProfileModal />
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content} ref={contentRef}>
        <Outlet />
      </div>
    </div>
  );
};
