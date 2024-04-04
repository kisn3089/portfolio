import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";

interface ModelProps {
  source: string;
  sacle?: number;
}

const ModelCore = ({ source, sacle }: ModelProps) => {
  const modelRef = useRef(null);
  const model = useGLTF(`/model/${source}/scene.gltf`);
  const { actions, names } = useAnimations(model.animations, modelRef);

  useEffect(() => {
    actions[names[4]]?.reset().fadeIn(0.5).play();
  }, []);

  return (
    <group ref={modelRef} scale={sacle}>
      <primitive object={model.scene} />
    </group>
  );
};

export default ModelCore;
