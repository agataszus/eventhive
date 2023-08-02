import { useEffect } from "react";

export const useScrollLock = (isScrollLocked: boolean) => {
  useEffect(() => {
    if (isScrollLocked) {
      document.body.style.overflowY = "hidden";
      return;
    }

    document.body.style.overflowY = "scroll";
  });
};
