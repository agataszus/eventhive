import { Link } from "react-router-dom";
import styles from "./navMenu.module.scss";
import { Text } from "../text/text";
import { Line } from "../line/Line";
import Home2LineIcon from "remixicon-react/Home2LineIcon";
import HeartLineIcon from "remixicon-react/HeartLineIcon";
import Coupon2LineIcon from "remixicon-react/Coupon2LineIcon";
import RoadMapLineIcon from "remixicon-react/RoadMapLineIcon";

export const NavMenu = () => {
  return (
    <div>
      <ul className={styles.menu}>
        <li className={styles.link}>
          <Link to="/dashboard/home">
            <div className={styles.linkLabel}>
              <Home2LineIcon className={styles.icon} />
              <Text tag="p" variant="action-3">
                Home
              </Text>
            </div>
          </Link>
        </li>
        <li className={styles.link}>
          <div className={styles.linkLabel}>
            <HeartLineIcon className={styles.icon} />
            <Text tag="p" variant="action-3">
              Liked events
            </Text>
          </div>
        </li>
        <li className={styles.link}>
          <div className={styles.linkLabel}>
            <Coupon2LineIcon className={styles.icon} />
            <Text tag="p" variant="action-3">
              My tickets
            </Text>
          </div>
        </li>
        <li className={styles.link}>
          <div className={styles.linkLabel}>
            <RoadMapLineIcon className={styles.icon} />
            <Text tag="p" variant="action-3">
              Map
            </Text>
          </div>
        </li>
      </ul>
      <div className={styles.line}>
        <Line />
      </div>
      <div className={styles.menu}>
        <div className={styles.link}>
          <Text tag="h4" variant="subtitle-3">
            Categories
          </Text>
        </div>
        <ul className={styles.categoriesMenu}>
          <li className={styles.link}>
            <Text tag="p" variant="action-3">
              Music
            </Text>
          </li>
          <li className={styles.link}>
            <Text tag="p" variant="action-3">
              Pop
            </Text>
          </li>
          <li className={styles.link}>
            <Text tag="p" variant="action-3">
              Electronic
            </Text>
          </li>
          <li className={styles.link}>
            <Text tag="p" variant="action-3">
              Rock
            </Text>
          </li>
          <li className={styles.link}>
            <Text tag="p" variant="action-3">
              Classical
            </Text>
          </li>
          <li className={styles.link}>
            <Text tag="p" variant="action-3">
              Country
            </Text>
          </li>
          <li className={styles.link}>
            <Text tag="p" variant="action-3">
              Alternative
            </Text>
          </li>
          <li className={styles.link}>
            <Text tag="p" variant="action-3">
              Film Music
            </Text>
          </li>
        </ul>
      </div>
    </div>
  );
};
