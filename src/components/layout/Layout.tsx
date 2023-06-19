import { Sidebar } from "../sidebar/Sidebar";
import styles from "./layout.module.scss";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};