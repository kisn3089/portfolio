import { ThreeLayout } from "./ThreeLayoutStyles";
import SphereModel from "./modeling/sphereModel/SphereModel";
import AppleModel from "./modeling/appleModel/AppleModel";
import useModel from "@/hooks/useModel";

const ThreeSection = () => {
  const { isLoaded, loadedCallback } = useModel();
  return (
    <ThreeLayout>
      <SphereModel isLoaded={isLoaded} loadedCallback={loadedCallback} />
      <AppleModel isLoaded={isLoaded} />
    </ThreeLayout>
  );
};

export default ThreeSection;
