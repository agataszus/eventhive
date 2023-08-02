import { RefObject, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollOnRouteChange = (ref?: RefObject<HTMLElement>) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (ref) {
      ref?.current?.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [ref, pathname]);
};
