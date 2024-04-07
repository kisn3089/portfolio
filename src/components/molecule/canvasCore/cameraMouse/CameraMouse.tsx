import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

const CameraMouse = () => {
  const vec = new Vector3();

  return useFrame(({ camera, mouse }) => {
    vec.set(mouse.x * 2, mouse.y * 2, camera.position.z);
    camera.position.lerp(vec, 0.025);
    camera.lookAt(0, 0, 0);
  });
};

export default CameraMouse;
