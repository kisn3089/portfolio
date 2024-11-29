import { Html, useProgress } from "@react-three/drei";
import { ModelLoadContainer } from "./ModelLoadingStyles";
import { colorTypes } from "@/lib/util/model/modelColorTypes";

interface ModelLoadingProps {
  bgColor: string;
}

const ModelLoading = ({ bgColor }: ModelLoadingProps) => {
  const { progress } = useProgress();

  return (
    <Html center>
      <ModelLoadContainer $bgColor={colorTypes[bgColor]}>{`${progress.toFixed(
        0
      )}%`}</ModelLoadContainer>
    </Html>
  );
};

export default ModelLoading;
