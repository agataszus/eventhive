import { useCallback, useRef, useState } from "react";
import { useAccountQuery } from "../../queries/useAccountQuery";
import { Loader } from "../loader/Loader";
import { ProfileTooltip } from "../profileTooltip/ProfileTooltip";
import { Text } from "../text/Text";
import styles from "./profileAvatar.module.scss";
import Gravatar from "react-gravatar";
import { useOutsideClick } from "../../hooks/useOutsideClick";

export const ProfileAvatar = () => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const callbackFn = useCallback(
    () => setIsTooltipOpen(false),
    [setIsTooltipOpen]
  );

  useOutsideClick(profileRef, callbackFn);

  const { data, isLoading, isError } = useAccountQuery();

  const { firstName, lastName, email } = data?.profile ?? {};

  return (
    <div className={styles.profileAvatarContainer}>
      <div
        ref={profileRef}
        className={styles.profileAvatar}
        onClick={() => {
          setIsTooltipOpen(!isTooltipOpen);
        }}
      >
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
      {isTooltipOpen && (
        <div className={styles.toolTip}>
          <ProfileTooltip />
        </div>
      )}
    </div>
  );
};
