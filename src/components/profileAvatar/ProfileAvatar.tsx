import { useCallback, useRef, useState } from "react";
import { useAccountQuery } from "../../queries/useAccountQuery";
import { Loader } from "../loader/Loader";
import { ProfileTooltip } from "../profileShowUp/ProfileTooltip";
import { Text } from "../text/text";
import styles from "./profileAvatar.module.scss";
import Gravatar from "react-gravatar";
import { useOutsideClick } from "../../hooks/useOutsideClick";

export const ProfileAvatar = () => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const callbackFn = useCallback(
    (event: MouseEvent) => {
      if (!profileRef.current?.contains(event.target as HTMLElement))
        setIsTooltipOpen(false);
    },
    [setIsTooltipOpen]
  );

  useOutsideClick(tooltipRef, callbackFn);

  const { data, isLoading, isError } = useAccountQuery();

  const { firstName, lastName, email } = data?.profile ?? {};

  return (
    <div className={styles.profileAvatarContainer}>
      <div
        ref={profileRef}
        className={styles.profileAvatar}
        onClick={() => {
          setIsTooltipOpen(!isTooltipOpen);
          console.log("open");
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
        <div ref={tooltipRef} className={styles.toolTip}>
          <ProfileTooltip />
        </div>
      )}
    </div>
  );
};
