import { ThreeEvent } from "@react-three/fiber";
import { useState } from "react";

export const useToggleHover = () => {
  const [hover, setHover] = useState(false);

  const pointerOver = (e: ThreeEvent<PointerEvent>, callback?: () => void) => {
    e.stopPropagation();
    setHover(true);
    callback && callback();
  };
  const pointerOut = (e: ThreeEvent<PointerEvent>, callback?: () => void) => {
    e.stopPropagation();
    setHover(false);
    callback && callback();
  };

  const clickToMove = (e: ThreeEvent<MouseEvent>, callback?: () => void) => {
    e.stopPropagation();
    callback && callback();
  };

  return {
    hover,
    pointerOver,
    pointerOut,
    clickToMove,
  };
};
