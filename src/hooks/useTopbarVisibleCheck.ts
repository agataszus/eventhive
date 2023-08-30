import { DESKTOP, DESKTOP_SMALL, useMediaQueries } from "./useMediaQueries";

export const useTopbarVisibleCheck = () => {
  const mediaQuery = useMediaQueries();

  if (mediaQuery === DESKTOP || mediaQuery === DESKTOP_SMALL) return true;

  return false;
};
