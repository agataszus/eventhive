import Gravatar from "react-gravatar";
import { useAccountQuery } from "../../queries/useAccountQuery";
import { Loader } from "../loader/Loader";
import styles from "./personalInformation.module.scss";
import { Text } from "../text/text";

export const PersonalInformation = () => {
  const { data, isLoading } = useAccountQuery();

  const { firstName, lastName, email, tickets, likedEventsNumber } =
    data?.profile ?? {};

  return (
    <div className={styles.personalContainer}>
      <div className={styles.imageContainer}>
        {isLoading ? (
          <Loader variant="extraSmall" />
        ) : (
          <Gravatar
            email={email?.toLowerCase()}
            size={150}
            rating="pg"
            default="identicon"
            className={styles.image}
          />
        )}
      </div>
      {isLoading ? (
        <div className={styles.informationContainer}>
          <Loader variant="medium" />
        </div>
      ) : (
        <div className={styles.informationContainer}>
          <div className={styles.nameContainer}>
            <Text tag="h4" variant="heading-3">
              {firstName} {lastName}
            </Text>
            <Text tag="p" variant="subtitle-4">
              {email}
            </Text>
          </div>
          <div className={styles.dataContainer}>
            <Text tag="p" variant="caption-3">
              Liked events: {likedEventsNumber}
            </Text>
            <Text tag="p" variant="caption-3">
              Bought tickets: {tickets?.length ?? 0}
            </Text>
          </div>
        </div>
      )}
    </div>
  );
};
