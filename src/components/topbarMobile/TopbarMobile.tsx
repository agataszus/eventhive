import { CartButton } from "../cartButton/CartButton";
import { Logo } from "../logo/Logo";
import MenuLineIcon from "remixicon-react/MenuLineIcon";
import styles from "./topbarMobile.module.scss";

type TopbarMobileProps = {
  onMenuIconClick: () => void;
};

export const TopbarMobile = ({ onMenuIconClick }: TopbarMobileProps) => {
  return (
    <div className={styles.topBar}>
      <div className={styles.menuContainer}>
        <MenuLineIcon onClick={onMenuIconClick} />
        <Logo />
      </div>
      <CartButton />
    </div>
  );
};
