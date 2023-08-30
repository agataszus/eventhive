import { Text } from "../text/text";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";
import ArrowLeftSLineIcon from "remixicon-react/ArrowLeftSLineIcon";
import { PropsWithChildren, useLayoutEffect, useRef, useState } from "react";
import styles from "./carousel.module.scss";
import classNames from "classnames";

type CarouselProps = {
  title: string;
  elementWidth: number;
  gap: number;
} & PropsWithChildren;

export const Carousel = ({
  title,
  children,
  elementWidth,
  gap,
}: CarouselProps) => {
  const [isLeftDisable, setIsLeftDisable] = useState(true);
  const [isRightDisable, setIsRightDisable] = useState(false);
  const childrenRef = useRef<HTMLDivElement>(null);

  const getClientWidth = () => childrenRef.current?.clientWidth ?? 0;
  const getScrollLeft = () => childrenRef.current?.scrollLeft ?? 0;
  const getScrollWidth = () => childrenRef.current?.scrollWidth ?? 0;

  const arrowLeftClassName = classNames(styles.icon, {
    [styles.buttonDisable]: isLeftDisable,
  });

  const arrowRightClassName = classNames(styles.icon, {
    [styles.buttonDisable]: isRightDisable,
  });

  useLayoutEffect(() => {
    const checkButtonsDisable = () => {
      const isLeftDisable = getScrollLeft() === 0;
      setIsLeftDisable(isLeftDisable);

      const isRightDisable =
        getScrollLeft() + getClientWidth() === getScrollWidth();
      setIsRightDisable(isRightDisable);
    };

    const childrenRefCurrent = childrenRef.current;

    childrenRefCurrent?.addEventListener("scroll", checkButtonsDisable);

    return () =>
      childrenRefCurrent?.removeEventListener("scroll", checkButtonsDisable);
    /**
     * to do - explain why was childrenRef.current used in dependencies
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [childrenRef.current]);

  const handleArrowClick = (direction: "left" | "right") => {
    const clientWidth = childrenRef.current?.clientWidth;
    const scrollLeft = childrenRef.current?.scrollLeft;
    const elementWithGapWidth = elementWidth + gap;

    if (clientWidth === undefined || scrollLeft === undefined) return;

    const elementsOnView = Math.floor(clientWidth / elementWithGapWidth);
    const scrollToLeftOffset =
      direction === "right"
        ? Math.floor(scrollLeft / elementWithGapWidth + elementsOnView) *
          elementWithGapWidth
        : Math.ceil(scrollLeft / elementWithGapWidth - elementsOnView) *
          elementWithGapWidth;

    childrenRef.current?.scrollTo({
      behavior: "smooth",
      left: scrollToLeftOffset,
    });
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.titleLabel}>
        <Text tag="h3" variant="subtitle-2">
          {title}
        </Text>
        <div>
          <ArrowLeftSLineIcon
            className={arrowLeftClassName}
            onClick={() => handleArrowClick("left")}
          />
          <ArrowRightSLineIcon
            className={arrowRightClassName}
            onClick={() => handleArrowClick("right")}
          />
        </div>
      </div>
      <div className={styles.childrenContainer} ref={childrenRef}>
        {children}
      </div>
    </div>
  );
};
