import { colorTypes } from "@/lib/util/model/modelColorTypes";
import { theme } from "@/styles/theme";
import React, { useState } from "react";

const useModel = () => {
  const [currentAction, setCurrentAction] = useState(4);
  const [isLoaded, setLoaded] = useState(false);
  const [canvasColor, setCanvasColor] = useState({
    vision: theme.palette.white,
    watch: theme.palette.white,
  });

  const loadedCallback = () => {
    console.log("callback");

    setLoaded(true);
  };

  const changeColor = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id: type } = e.currentTarget;

    const currentColor: Record<string, string> = {
      vision: canvasColor.vision,
      watch: canvasColor.watch,
    };

    setCanvasColor((prev) => ({
      ...prev,
      [type]: colorTypes[currentColor[type]],
    }));
  };

  const changeAction = (e: React.MouseEvent<HTMLButtonElement>) =>
    setCurrentAction(+e.currentTarget.id);

  return {
    canvasColor,
    currentAction,
    isLoaded,
    loadedCallback,
    changeColor,
    changeAction,
  };
};

export default useModel;
