import { Text } from "../text/text";
import ArrowLeftFillIcon from "remixicon-react/ArrowLeftFillIcon";
import styles from "./eventTopBar.module.scss";
import { Link } from "react-router-dom";
import { getDashboardHomePath } from "../routes/paths";

export const EventTopBar = () => {
  return (
    <div className={styles.topBar}>
      <Link to={getDashboardHomePath()} className={styles.title}>
        <ArrowLeftFillIcon className={styles.icon} />
        <Text tag="h2" variant="subtitle-2">
          Events
        </Text>
      </Link>
    </div>
  );
};
