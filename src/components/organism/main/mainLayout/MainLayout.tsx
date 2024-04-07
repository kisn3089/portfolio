import React from "react";
import { MainLayoutStyle } from "./MainLayoutStyles";
import CanvasCore from "@/components/molecule/canvasCore/CanvasCore";
import FadingModel from "../../three/fadingModel/FadingModel";
import { theme } from "@/styles/theme";
import CameraMouse from "@/components/molecule/canvasCore/cameraMouse/CameraMouse";
import CameraLookAt from "@/components/molecule/canvasCore/cameraLookAt/CameraLookAt";
import PlaneModel from "../../three/modeling/planeModel/PlaneModel";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { KernelSize } from "postprocessing";

const fadingElement = [
  {
    originImage: "/assets/img/human.jpg",
    replaceImage: "/assets/img/flower.webp",
    effectImage: "/assets/img/effect_draft.jpg",
    positionX: "2",
    positionY: "2",
    rotationY: "-0.2",
  },
  {
    originImage: "/assets/img/space.webp",
    replaceImage: "/assets/img/flower.webp",
    effectImage: "/assets/img/effect_diamond.jpg",
    positionX: "-2",
    positionY: "2",
    rotationY: "0.2",
  },
];

const MainLayout = () => {
  return (
    <MainLayoutStyle>
      <CanvasCore
        noLoading
        cameraPosition={[0, 100, 20]}
        orbitProps={{ enableZoom: false }}
        bgColor={theme.palette.darkBlack}>
        <CameraLookAt>
          {fadingElement.map((ele, i) => (
            <FadingModel
              key={i}
              originImage={ele.originImage}
              replaceImage={ele.replaceImage}
              effectImage={ele.effectImage}
              positionX={ele.positionX}
              positionY={ele.positionY}
              rotationY={ele.rotationY}
            />
          ))}
          <EffectComposer multisampling={8}>
            <Bloom
              kernelSize={5}
              luminanceThreshold={0.4}
              luminanceSmoothing={0.3}
              intensity={0.8}
            />
            <Bloom
              kernelSize={KernelSize.HUGE}
              luminanceThreshold={0.4}
              luminanceSmoothing={0.3}
              intensity={0.8}
            />
          </EffectComposer>
          <PlaneModel />
        </CameraLookAt>
        <fog attach="fog" args={[theme.palette.darkBlack, 2, 12]} />
        <CameraMouse />
      </CanvasCore>
    </MainLayoutStyle>
  );
};

export default MainLayout;
