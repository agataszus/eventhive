import { RefObject, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollOnRouteChange = (ref: RefObject<HTMLElement>) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    ref.current?.scrollTo(0, 0);
  }, [ref, pathname]);
};
