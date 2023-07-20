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
        <div className={styles.eventContainer}>
          <Text tag="h6" variant="subtitle-2">
            Fest festival
          </Text>
          <Text tag="p" variant="action-4">
            24 JUN 2024
          </Text>
        </div>
        <div>
          <div>
            <Text tag="p" variant="action-3">
              VIP ticket
            </Text>
            <DeleteBin6LineIcon />
          </div>
          <div>
            <div>
              <button>
                <SubtractLineIcon />
              </button>
              <input type="number">2</input>
              <button>
                <AddLineIcon />
              </button>
            </div>
            <Text tag="p" variant="action-3">
              $ 2300,00
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
