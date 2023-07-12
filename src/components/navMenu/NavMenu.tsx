import styles from "./navMenu.module.scss";
import { Text } from "../text/text";
import { Divider } from "../divider/Divider";
import Home2LineIcon from "remixicon-react/Home2LineIcon";
import HeartLineIcon from "remixicon-react/HeartLineIcon";
import Coupon2LineIcon from "remixicon-react/Coupon2LineIcon";
import RoadMapLineIcon from "remixicon-react/RoadMapLineIcon";
import { NavMenuLink } from "../navMenuLink/NavMenuLink";
import { eventsCategories } from "../../services/api/event/eventsCategories";
import { NavMenuCategory } from "../navMenuCategory/NavMenuCategory";

export const NavMenu = () => {
  return (
    <div>
      <ul className={styles.menu}>
        <li className={styles.link}>
          <NavMenuLink
            linkTo="/dashboard/home"
            Icon={Home2LineIcon}
            text="Home"
          />
        </li>
        <li className={styles.link}>
          <NavMenuLink
            linkTo="/dashboard/liked-events"
            Icon={HeartLineIcon}
            text="Liked events"
          />
        </li>
        <li className={styles.link}>
          <NavMenuLink
            linkTo="/dashboard/my-tickets"
            Icon={Coupon2LineIcon}
            text="My tickets"
          />
        </li>
        <li className={styles.link}>
          <NavMenuLink linkTo="/" Icon={RoadMapLineIcon} text="Map" />
        </li>
      </ul>
      <div className={styles.divider}>
        <Divider />
      </div>
      <div className={styles.menu}>
        <div className={styles.link}>
          <Text tag="h4" variant="subtitle-3">
            Categories
          </Text>
        </div>
        <ul className={styles.categoriesMenu}>
          {Object.values(eventsCategories).map((category) => {
            return (
              <li className={styles.link} key={category}>
                <NavMenuCategory label={category} isActive={false} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
