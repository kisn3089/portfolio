import { Html, useProgress } from "@react-three/drei";
import { ModelLoadContainer } from "./ModelLoadingStyles";
import { colorTypes } from "@/lib/util/model/modelColorTypes";

interface ModelLoadingProps {
  bgColor: string;
  loadedCallback?: () => void;
}

const ModelLoading = ({
  bgColor,
  loadedCallback = () => {},
}: ModelLoadingProps) => {
  const { progress } = useProgress();
  if (progress === 100) loadedCallback();

  return (
    <Html center>
      <ModelLoadContainer $bgColor={colorTypes[bgColor]}>{`${progress.toFixed(
        0
      )}%`}</ModelLoadContainer>
    </Html>
  );
};

export default ModelLoading;
