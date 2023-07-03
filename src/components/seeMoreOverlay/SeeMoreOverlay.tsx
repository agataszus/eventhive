import styles from "./seeMoreOverlay.module.scss";
import EyeFillIcon from "remixicon-react/EyeFillIcon";
import classNames from "classnames";

type SeeMoreOverlayProps = {
  overlayClassName: string;
  iconClassName: string;
};

export const SeeMoreOverlay = ({
  overlayClassName,
  iconClassName,
}: SeeMoreOverlayProps) => {
  const overlayStyles = classNames(styles.overlay, overlayClassName);
  const iconStyles = classNames(styles.iconContainer, iconClassName);

  return (
    <>
      <div className={overlayStyles}></div>
      <div className={iconStyles}>
        <EyeFillIcon className={styles.overlayIcon} />
      </div>
    </>
  );
};
