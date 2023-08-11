import { useEffect } from "react";
import { MOBILE, TABLET, useMediaQueries } from "./useMediaQueries";

export const useScrollLock = (isScrollLocked: boolean) => {
  const mediaQuery = useMediaQueries();

  useEffect(() => {
    if ([MOBILE, TABLET].includes(mediaQuery)) {
      if (isScrollLocked) {
        document.body.style.overflowY = "hidden";
        document.body.style.touchAction = "none";
        return;
      }

      document.body.style.overflowY = "scroll";
      document.body.style.touchAction = "unset";
    }
  }, [isScrollLocked, mediaQuery]);
};
