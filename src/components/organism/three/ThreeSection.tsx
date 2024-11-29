import { ThreeLayout } from "./ThreeLayoutStyles";
import SphereModel from "./modeling/sphereModel/SphereModel";
import AppleModel from "./modeling/appleModel/AppleModel";
import useModel from "@/hooks/useModel";

const ThreeSection = () => {
  // const { isLoaded, loadedCallback } = useModel();

  return (
    <ThreeLayout>
      {/* <SphereModel /> */}
      <AppleModel />
    </ThreeLayout>
  );
};

export default ThreeSection;
