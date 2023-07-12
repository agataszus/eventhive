import { Text } from "../text/text";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";
import ArrowLeftSLineIcon from "remixicon-react/ArrowLeftSLineIcon";
import { PropsWithChildren } from "react";
import styles from "./carousel.module.scss";

type CarouselProps = {
  title: string;
} & PropsWithChildren;

export const Carousel = ({ title, children }: CarouselProps) => {
  return (
    <div className={styles.carousel}>
      <div className={styles.titleLabel}>
        <Text tag="h3" variant="subtitle-2">
          {title}
        </Text>
        <div>
          <ArrowLeftSLineIcon className={styles.icon} />
          <ArrowRightSLineIcon className={styles.icon} />
        </div>
      </div>
      {children}
    </div>
  );
};
