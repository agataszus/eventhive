import { Text } from "../text/text";
import DeleteBin6LineIcon from "remixicon-react/DeleteBin6LineIcon";
import SubtractLineIcon from "remixicon-react/SubtractLineIcon";
import AddLineIcon from "remixicon-react/AddLineIcon";
import styles from "./shoppingItem.module.scss";
import festivalImg from "../../assets/orangeWarsaw.jpeg";

export const ShoppingItem = () => {
  return (
    <div className={styles.item}>
      <div className={styles.imgContainer}>
        <img src={festivalImg} className={styles.img} />
      </div>
      <div className={styles.itemDescription}>
        <div className={styles.ticketInformationRow}>
          <div className={styles.eventContainer}>
            <Text tag="h6" variant="heading-6">
              Fest festival
            </Text>
            <Text tag="p" variant="subtitle-5">
              24 JUN 2024
            </Text>
          </div>
          <DeleteBin6LineIcon className={styles.binIcon} />
        </div>
        <div className={styles.ticketInformationContainer}>
          <div className={styles.ticketInformationRow}>
            <Text tag="p" variant="subtitle-3">
              VIP ticket
            </Text>
            <div className={styles.stepper}>
              <button className={styles.stepperElement}>
                <SubtractLineIcon className={styles.countIcon} />
              </button>
              <input placeholder="2" className={styles.input}></input>
              <button className={styles.stepperElement}>
                <AddLineIcon className={styles.countIcon} />
              </button>
            </div>
          </div>
          <div className={styles.price}>
            <Text tag="p" variant="caption-1">
              $2300,00
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
