import { MainLayoutStyle } from "./MainLayoutStyles";
import CanvasCore from "@/components/molecule/canvasCore/CanvasCore";
import FadingModel from "../../three/fadingModel/FadingModel";
import { theme } from "@/styles/theme";
import CameraMouse from "@/components/molecule/canvasCore/cameraMouse/CameraMouse";
import CameraLookAt from "@/components/molecule/canvasCore/cameraLookAt/CameraLookAt";
import PlaneModel from "../../three/modeling/planeModel/PlaneModel";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Float } from "@react-three/drei";

const fadingElement = [
  {
    originImage: "/assets/img/arc.webp",
    replaceImage: "/assets/img/tower.webp",
    effectImage: "/assets/img/effect_draft.jpg",
    positionX: "2",
    positionY: "2",
    rotationY: "-0.2",
  },
  {
    originImage: "/assets/img/suit.webp",
    replaceImage: "/assets/img/cafe.webp",
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
          {fadingElement.map((fading, i) => (
            <Float floatIntensity={0.3} speed={0.8} key={i}>
              <FadingModel
                originImage={fading.originImage}
                replaceImage={fading.replaceImage}
                effectImage={fading.effectImage}
                positionX={fading.positionX}
                positionY={fading.positionY}
                rotationY={fading.rotationY}
              />
            </Float>
          ))}
          <EffectComposer multisampling={8}>
            <Bloom
              kernelSize={5}
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
