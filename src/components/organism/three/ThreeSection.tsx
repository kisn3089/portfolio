import React from "react";
import { ThreeLayout } from "./ThreeLayoutStyles";
import CanvasCore from "@/components/molecule/canvasCore/CanvasCore";
import SphereModel from "./sphereModel/SphereModel";
import { SphereLayout } from "@/components/molecule/canvasCore/CanvasCoreStyles";

const ThreeSection = () => {
  return (
    <ThreeLayout>
      <SphereLayout>
        <CanvasCore>
          <SphereModel />
        </CanvasCore>
      </SphereLayout>
    </ThreeLayout>
  );
};

export default ThreeSection;
