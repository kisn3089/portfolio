import { ThreeLayout } from "./ThreeLayoutStyles";
import SphereModel from "./modeling/sphereModel/SphereModel";
import AppleModel from "./modeling/appleModel/AppleModel";

const ThreeSection = () => {
  return (
    <ThreeLayout>
      <SphereModel />
      <AppleModel />
    </ThreeLayout>
  );
};

export default ThreeSection;
