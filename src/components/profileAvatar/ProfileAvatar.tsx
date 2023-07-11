import { useAccountQuery } from "../../queries/useAccountQuery";
import { Loader } from "../loader/Loader";
import { Text } from "../text/text";
import styles from "./profileAvatar.module.scss";
import Gravatar from "react-gravatar";

export const ProfileAvatar = () => {
  const { data, isLoading, isError } = useAccountQuery();

  const { firstName, lastName, email } = data?.profile ?? {};

  return (
    <div className={styles.profileAvatar}>
      <div className={styles.imageContainer}>
        {isLoading ? (
          <Loader variant="extraSmall" />
        ) : (
          <Gravatar
            email={email?.toLowerCase()}
            size={100}
            rating="pg"
            default="identicon"
            className={styles.image}
          />
        )}
      </div>
      <div className={styles.nameContainer}>
        <Text tag="p" variant="caption-1">
          {isError ? "------" : firstName}
        </Text>
        <Text tag="p" variant="caption-2">
          {isError ? "------" : lastName}
        </Text>
      </div>
    </div>
  );
};
