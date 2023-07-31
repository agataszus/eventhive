import { useEffect, useRef } from "react";
import { useAuthToken } from "../../services/authTokenStore/useAuthToken";
import { CreateProfileModal } from "../createProfileModal/CreateProfileModal";
import { Sidebar } from "../sidebar/Sidebar";
import styles from "./layout.module.scss";
import { Outlet, useNavigate } from "react-router-dom";
import { useScrollOnRouteChange } from "../../hooks/useScrollOnRouteChange";
import { getLoginPath } from "../routes/paths";
import { ShoppingCart } from "../shoppingCart/ShoppingCart";
import {
  DESKTOP,
  DESKTOP_SMALL,
  MOBILE,
  TABLET,
  useMediaQueries,
} from "../../hooks/useMediaQueries";
import { SidebarMobile } from "../sidebarMobile/SidebarMobile";

export const Layout = () => {
  const { token } = useAuthToken();
  const mediaQuery = useMediaQueries();

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
      <div>
        {(mediaQuery === DESKTOP || mediaQuery === DESKTOP_SMALL) && (
          <Sidebar />
        )}
        {(mediaQuery === TABLET || mediaQuery === MOBILE) && <SidebarMobile />}
      </div>
      <div className={styles.content} ref={contentRef}>
        <Outlet />
      </div>
      <ShoppingCart />
    </div>
  );
};
