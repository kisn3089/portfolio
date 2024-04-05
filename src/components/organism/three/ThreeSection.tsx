import React, { useState } from "react";
import {
  ColLayout,
  SphereLayout,
  ThreeLayout,
  AppleLayout,
  AppleColorWrapper,
} from "./ThreeLayoutStyles";
import CanvasCore from "@/components/molecule/canvasCore/CanvasCore";
import ModelCore from "./modelCore/ModelCore";
import ActionButton from "./actionButton/ActionButton";
import { theme } from "@/styles/theme";
import { SPHERE, VISION, WATCH } from "@/lib/util/constanse";

const sphereProps = {
  maxDistance: 10,
  minDistance: 4,
  maxPolarAngle: Math.PI / 2.1,
  minPolarAngle: Math.PI / 5,
  enableDamping: true,
  dampingFactor: 0.03,
};
const appleProps = {
  maxDistance: 10,
  minDistance: 4.6,
  maxPolarAngle: Math.PI / 1.5,
  minPolarAngle: Math.PI / 5,
  enableDamping: true,
  dampingFactor: 0.03,
};

const actionTypes = [
  "Roll",
  "Run_Cycle",
  "Open",
  "Attack",
  "WalkCycle",
  "Run_Attack",
  "Jump",
];

export const colorTypes: Record<string, string> = {
  [theme.palette.black]: theme.palette.white,
  [theme.palette.white]: theme.palette.black,
};

const ThreeSection = () => {
  const [currentAction, setCurrentAction] = useState(4);
  const [isLoaded, setLoaded] = useState(false);
  const [canvasColor, setCanvasColor] = useState({
    vision: theme.palette.white,
    watch: theme.palette.white,
  });

  const loadedCallback = () => setLoaded(true);
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
  return (
    <ThreeLayout>
      <SphereLayout>
        <CanvasCore orbitProps={sphereProps} loadedCallback={loadedCallback}>
          <ModelCore
            source={SPHERE}
            currentAction={currentAction}
            hasAnimation
          />
        </CanvasCore>
        {isLoaded && (
          <ActionButton
            actionTypes={actionTypes}
            currentAction={currentAction}
            changeAction={changeAction}
          />
        )}
      </SphereLayout>
      <ColLayout>
        <AppleLayout>
          <CanvasCore orbitProps={appleProps} bgColor={canvasColor.vision}>
            <ModelCore source={VISION} sacle={18} />
          </CanvasCore>
          <AppleColorWrapper
            id={VISION}
            $canvasColor={canvasColor.vision}
            onClick={changeColor}>
            Color
          </AppleColorWrapper>
        </AppleLayout>
        <AppleLayout>
          <CanvasCore orbitProps={appleProps} bgColor={canvasColor.watch}>
            <ModelCore source={WATCH} sacle={40} />
          </CanvasCore>
          <AppleColorWrapper
            id={WATCH}
            $canvasColor={canvasColor.watch}
            onClick={changeColor}>
            Color
          </AppleColorWrapper>
        </AppleLayout>
      </ColLayout>
    </ThreeLayout>
  );
};

export default ThreeSection;
