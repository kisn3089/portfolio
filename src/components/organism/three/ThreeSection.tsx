import React from "react";
import {
  RowLayout,
  SphereLayout,
  ThreeLayout,
  VisionLayout,
} from "./ThreeLayoutStyles";
import CanvasCore from "@/components/molecule/canvasCore/CanvasCore";
import SphereModel from "./sphereModel/SphereModel";

const ThreeSection = () => {
  return (
    <ThreeLayout>
      <SphereLayout>
        <CanvasCore>
          <SphereModel />
        </CanvasCore>
      </SphereLayout>
      <RowLayout>
        <VisionLayout>
          {/* <CanvasCore>
            <SphereModel />
          </CanvasCore> */}
        </VisionLayout>
        <VisionLayout>
          {/* <CanvasCore>
            <SphereModel />
          </CanvasCore> */}
        </VisionLayout>
      </RowLayout>
    </ThreeLayout>
  );
};

export default ThreeSection;
