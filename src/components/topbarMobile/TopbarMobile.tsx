import { CartButton } from "../cartButton/CartButton";
import { Logo } from "../logo/Logo";
import MenuLineIcon from "remixicon-react/MenuLineIcon";
import styles from "./topbarMobile.module.scss";

type TopbarMobileProps = {
  setIsSidebarOpen: (newState: boolean) => void;
};

export const TopbarMobile = ({ setIsSidebarOpen }: TopbarMobileProps) => {
  return (
    <div className={styles.topBar}>
      <div className={styles.menuContainer}>
        <MenuLineIcon onClick={() => setIsSidebarOpen(true)} />
        <Logo />
      </div>
      <CartButton />
    </div>
  );
};
