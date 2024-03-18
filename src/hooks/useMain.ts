import { useState } from "react";

export const useMain = () => {
  const [isActive, setActive] = useState(false);

  const toggleActive = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActive((prev) => !prev);
  };

  return { isActive, toggleActive };
};
