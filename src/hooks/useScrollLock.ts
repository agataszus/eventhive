import { useEffect } from "react";
import { MOBILE, TABLET, useMediaQueries } from "./useMediaQueries";

export const useScrollLock = (isScrollLocked: boolean) => {
  const mediaQuery = useMediaQueries();

  useEffect(() => {
    const unlockScroll = () => {
      document.body.style.overflowY = "scroll";
      document.body.style.touchAction = "unset";
    };

    const lockScroll = () => {
      document.body.style.overflowY = "hidden";
      document.body.style.touchAction = "none";
    };

    if ([MOBILE, TABLET].includes(mediaQuery)) {
      if (isScrollLocked) {
        lockScroll();
        return;
      }

      unlockScroll();

      return unlockScroll;
    }
  }, [isScrollLocked, mediaQuery]);
};
