import { useEffect } from "react";
import { useAuthToken } from "../../services/authTokenStore/useAuthToken";
import { CreateProfileModal } from "../createProfileModal/CreateProfileModal";
import { Sidebar } from "../sidebar/Sidebar";
import styles from "./layout.module.scss";
import { Outlet, useNavigate } from "react-router-dom";

export const Layout = () => {
  const { token } = useAuthToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [token, navigate]);

  return (
    <div className={styles.layout}>
      <CreateProfileModal />
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};
