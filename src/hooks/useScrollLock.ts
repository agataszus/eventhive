import { useEffect } from "react";

export const useScrollLock = (isScrollLocked: boolean) => {
  useEffect(() => {
    if (isScrollLocked) {
      document.body.style.overflowY = "hidden";
      document.body.style.touchAction = "none";
      return;
    }

    document.body.style.overflowY = "scroll";
    document.body.style.touchAction = "unset";
  }, [isScrollLocked]);
};
