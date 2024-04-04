import React, { Suspense, useState } from "react";
import {
  ColLayout,
  SphereLayout,
  ThreeLayout,
  AppleLayout,
  ChangeActionLayout,
  ActionButtonItems,
} from "./ThreeLayoutStyles";
import CanvasCore from "@/components/molecule/canvasCore/CanvasCore";
import ModelCore from "./modelCore/ModelCore";

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

const ThreeSection = () => {
  const [currentAction, setCurrentAction] = useState(0);

  const changeAction = (e: React.MouseEvent<HTMLButtonElement>) =>
    setCurrentAction(+e.currentTarget.id);
  return (
    <ThreeLayout>
      <SphereLayout>
        <Suspense fallback={<h1>Loading...</h1>}>
          <CanvasCore orbitProps={sphereProps}>
            <ModelCore
              source="sphere"
              currentAction={currentAction}
              hasAnimation
            />
          </CanvasCore>
          <ChangeActionLayout>
            {actionTypes.map((actionItem, i) => (
              <ActionButtonItems key={i} id={String(i)} onClick={changeAction}>
                {actionItem}
              </ActionButtonItems>
            ))}
          </ChangeActionLayout>
        </Suspense>
      </SphereLayout>
      {/* <ColLayout>
        <AppleLayout>
          <CanvasCore orbitProps={appleProps}>
            <ModelCore source="vision" sacle={18} />
          </CanvasCore>
        </AppleLayout>
        <AppleLayout>
          <CanvasCore orbitProps={appleProps}>
            <ModelCore source="watch" sacle={40} />
          </CanvasCore>
        </AppleLayout>
      </ColLayout> */}
    </ThreeLayout>
  );
};

export default ThreeSection;
