import { RefObject, useCallback, useEffect } from "react";

export const useOutsideClick = (
  ref: RefObject<HTMLDivElement>,
  callbackFn: (event: MouseEvent) => void
) => {
  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as HTMLElement)) {
        callbackFn(event);
      }
    },
    [ref, callbackFn]
  );

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick]);
};
