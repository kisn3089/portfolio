import { useEffect, useRef } from "react";

export const useCloseOut = <T extends HTMLElement>(
  callback: () => void,
  checkCondition?: boolean
) => {
  const outSideRef = useRef<T>(null);

  useEffect(() => {
    const closeOut = (e: MouseEvent) => {
      if (
        outSideRef.current &&
        checkCondition &&
        !outSideRef.current.contains(e.target as Node)
      ) {
        callback();
      }
    };

    document.addEventListener("click", closeOut);
    return () => document.removeEventListener("click", closeOut);
  }, [checkCondition]);

  return outSideRef;
};
