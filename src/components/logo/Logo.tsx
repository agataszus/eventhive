import styles from "./logo.module.scss";
import logo from "../../assets/eventhive-logo.svg";

export const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={logo} alt="Logo" className={styles.logo} />
    </div>
  );
};
