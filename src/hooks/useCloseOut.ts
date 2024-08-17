import { useEffect } from "react";

export const useCloseOut = (
  outSideRef: React.RefObject<HTMLElement>,
  callback: () => void
) => {
  useEffect(() => {
    const closeOut = (e: MouseEvent) => {
      if (
        outSideRef.current &&
        !outSideRef.current.contains(e.target as Node)
      ) {
        callback();
      }
    };
    document.addEventListener("click", closeOut);
    return () => document.removeEventListener("click", closeOut);
  }, []);
};
