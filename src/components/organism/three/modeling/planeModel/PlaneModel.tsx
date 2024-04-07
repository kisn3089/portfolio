import { theme } from "@/styles/theme";
import { MeshReflectorMaterial } from "@react-three/drei";

const PlaneModel = () => {
  return (
    <mesh rotation-x={30} position={[0, -1.4, 0]}>
      <planeGeometry args={[20, 20]} />
      <MeshReflectorMaterial
        color={theme.palette.gray300}
        resolution={1024}
        mirror={0.95}
      />
    </mesh>
  );
};

export default PlaneModel;
