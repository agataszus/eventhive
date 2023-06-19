import { Line } from "../line/Line";
import { Logo } from "../logo/Logo";
import { NavMenu } from "../navMenu/NavMenu";
import { ProfileAvatar } from "../profileAvatar/ProfileAvatar";
import styles from "./sidebar.module.scss";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.line}>
        <Line />
      </div>
      <div>
        <NavMenu />
      </div>
      <div className={styles.line}>
        <Line />
      </div>
      <div className={styles.profile}>
        <ProfileAvatar />
      </div>
    </div>
  );
};
