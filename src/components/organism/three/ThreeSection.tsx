import React from "react";
import {
  ColLayout,
  SphereLayout,
  ThreeLayout,
  AppleLayout,
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

const ThreeSection = () => {
  return (
    <ThreeLayout>
      <SphereLayout>
        <CanvasCore orbitProps={sphereProps}>
          <ModelCore source="sphere" />
        </CanvasCore>
      </SphereLayout>
      <ColLayout>
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
      </ColLayout>
    </ThreeLayout>
  );
};

export default ThreeSection;
