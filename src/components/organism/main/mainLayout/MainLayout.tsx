import React from "react";
import { MainLayoutStyle } from "./MainLayoutStyles";
import { MeshReflectorMaterial } from "@react-three/drei";
import CanvasCore from "@/components/molecule/canvasCore/CanvasCore";
import FadingModel from "../fadingModel/FadingModel";
import { theme } from "@/styles/theme";
import CameraMouse from "@/components/molecule/canvasCore/cameraMouse/CameraMouse";
import CameraLookAt from "@/components/molecule/canvasCore/cameraLookAt/CameraLookAt";

const MainLayout = () => {
  return (
    <MainLayoutStyle>
      <CanvasCore
        noLoading
        cameraPosition={[0, 0, 20]}
        orbitProps={{ enableZoom: false }}
        bgColor={theme.palette.darkBlack}>
        <CameraLookAt>
          <FadingModel
            originImage="/assets/img/space.webp"
            replaceImage="/assets/img/flower.webp"
            effectImage="/assets/img/effect_draft.jpg"
            positionX="2"
            positionY="1"
            rotationY="-0.2"
          />
          <FadingModel
            originImage="/assets/img/space.webp"
            replaceImage="/assets/img/flower.webp"
            effectImage="/assets/img/effect_diamond.jpg"
            positionX="-2"
            positionY="1"
            rotationY="0.2"
          />
          <mesh rotation-x={30} position={[0, -1.4, 0]}>
            <planeGeometry
              args={[20, 20]}
              //  rotation-x={Math.PI / 2}
            />
            <MeshReflectorMaterial
              color={theme.palette.gray300}
              resolution={1024}
              mirror={0.95}
            />
          </mesh>
        </CameraLookAt>
        <fog attach="fog" args={["#a79", 0, 12]} />
        <CameraMouse />
      </CanvasCore>
    </MainLayoutStyle>
  );
};

export default MainLayout;
