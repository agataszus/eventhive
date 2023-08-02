import { useEffect, useState } from "react";
import { Sidebar } from "../sidebar/Sidebar";
import { TopbarMobile } from "../topbarMobile/TopbarMobile";
import styles from "./sidebarMobile.module.scss";
import CloseLineIcon from "remixicon-react/CloseLineIcon";
import classNames from "classnames";
import { useLocation } from "react-router-dom";
import { useScrollLock } from "../../hooks/useScrollLock";

export const SidebarMobile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [wasSidebarOpen, setWasSidebarOpen] = useState(false);
  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname !== pathname) {
      setIsSidebarOpen(false);
      setPathname(location.pathname);
    }
  }, [location.pathname, isSidebarOpen, pathname]);

  useEffect(() => {
    if (isSidebarOpen && !wasSidebarOpen) setWasSidebarOpen(true);
  }, [isSidebarOpen, wasSidebarOpen]);

  const overlayClassName = classNames(styles.overlay, {
    [styles.overlayOpen]: isSidebarOpen,
    [styles.overlayClose]: !isSidebarOpen,
  });

  const sidebarClassName = classNames(styles.sidebar, {
    [styles.sidebarOpen]: isSidebarOpen,
    [styles.sidebarClose]: !isSidebarOpen,
  });

  useScrollLock(isSidebarOpen);

  return (
    <>
      <TopbarMobile setIsSidebarOpen={setIsSidebarOpen} />
      {wasSidebarOpen && (
        <>
          <div
            className={overlayClassName}
            onClick={() => setIsSidebarOpen(false)}
          />
          <div className={sidebarClassName}>
            <CloseLineIcon
              className={styles.closeIcon}
              onClick={() => setIsSidebarOpen(false)}
            />
            <Sidebar />
          </div>
        </>
      )}
    </>
  );
};
