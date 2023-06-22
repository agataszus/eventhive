import styles from "./seeMoreOverlay.module.scss";
import EyeFillIcon from "remixicon-react/EyeFillIcon";
import classNames from "classnames";

type SeeMoreOverlayProps = {
  overlayClass: string;
  iconClass: string;
};

export const SeeMoreOverlay = ({
  overlayClass,
  iconClass,
}: SeeMoreOverlayProps) => {
  const overlayStyles = classNames(styles.overlay, overlayClass);
  const iconStyles = classNames(styles.iconContainer, iconClass);

  return (
    <>
      <div className={overlayStyles}></div>
      <div className={iconStyles}>
        <EyeFillIcon className={styles.overlayIcon} />
      </div>
    </>
  );
};
