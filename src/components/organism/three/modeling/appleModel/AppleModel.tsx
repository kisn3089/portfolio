import { AppleColorWrapper, AppleLayout, ColLayout } from "./AppleModelStyles";
import CanvasCore from "@/components/molecule/canvasCore/CanvasCore";
import ModelCore from "../../modelCore/ModelCore";
import { VISION, WATCH } from "@/lib/util/constanse";
import { appleProps } from "@/lib/util/model/orbitOption";
import useModel from "@/hooks/useModel";
import { Float } from "@react-three/drei";
import { ModelProps } from "../sphereModel/SphereModel";

const AppleModel = ({ isLoaded }: ModelProps) => {
  const { canvasColor, changeColor } = useModel();
  console.log("apple: ", isLoaded);

  return (
    <ColLayout>
      <AppleLayout>
        {isLoaded && (
          <CanvasCore
            orbitProps={appleProps}
            bgColor={canvasColor.vision}
            hasRadius>
            <Float floatIntensity={3} speed={2}>
              <ModelCore source={VISION} sacle={18} />
            </Float>
          </CanvasCore>
        )}
        <AppleColorWrapper
          id={VISION}
          $canvasColor={canvasColor.vision}
          onClick={changeColor}>
          Color
        </AppleColorWrapper>
      </AppleLayout>
      <AppleLayout>
        {isLoaded && (
          <CanvasCore
            orbitProps={appleProps}
            bgColor={canvasColor.watch}
            hasRadius>
            <Float floatIntensity={3} speed={2}>
              <ModelCore source={WATCH} sacle={40} />
            </Float>
          </CanvasCore>
        )}
        <AppleColorWrapper
          id={WATCH}
          $canvasColor={canvasColor.watch}
          onClick={changeColor}>
          Color
        </AppleColorWrapper>
      </AppleLayout>
    </ColLayout>
  );
};

export default AppleModel;
