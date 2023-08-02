import { RefObject, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollOnRouteChange = (
  ref?: RefObject<HTMLElement>,
  delay?: number
) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const scrollTop = () => {
      if (ref) {
        ref?.current?.scrollTo(0, 0);
      } else {
        window.scrollTo(0, 0);
      }
    };

    if (delay) {
      const timeoutId = setTimeout(scrollTop, delay);

      return () => clearTimeout(timeoutId);
    }

    scrollTop();
  }, [ref, pathname, delay]);
};
