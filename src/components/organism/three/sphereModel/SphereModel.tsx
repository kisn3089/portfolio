import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";

const SphereModel = () => {
  const sphereRef = useRef(null);
  const sphere = useGLTF("/model/sphere/scene.gltf");
  const { actions, names } = useAnimations(sphere.animations, sphereRef);

  useEffect(() => {
    actions[names[4]]?.reset().fadeIn(0.5).play();
  }, []);

  return (
    <group ref={sphereRef}>
      <primitive object={sphere.scene} />
    </group>
  );
};

export default SphereModel;
