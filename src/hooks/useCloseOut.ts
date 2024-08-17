import { useEffect, useRef } from "react";

export const useCloseOut = (callback: () => void, checkCondition?: boolean) => {
  const outSideRef = useRef<HTMLDivElement>(null);

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
