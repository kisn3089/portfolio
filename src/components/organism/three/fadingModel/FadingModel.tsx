import { useTexture } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { easing, geometry } from "maath";
import { ImageFadeMaterial } from "@/utils/materials/ImageMaterial";

interface FadingModelProps {
  originImage: string;
  replaceImage: string;
  effectImage: string;
  positionX?: string;
  positionY?: string;
  rotationY?: string;
}

const FadingModel = ({
  originImage,
  replaceImage,
  effectImage,
  positionX,
  positionY,
  rotationY,
}: FadingModelProps) => {
  const ref = useRef<typeof ImageFadeMaterial>(null);
  const [origin, replace, effect] = useTexture([
    originImage,
    replaceImage,
    effectImage,
  ]);
  const [hovered, setHover] = useState(false);
  useFrame((_state, delta) => {
    if (ref.current)
      easing.damp(ref.current, "dispFactor", hovered ? 1 : 0, 0.2, delta);
  });

  return (
    <mesh
      position-x={positionX}
      position-y={positionY}
      rotation-y={rotationY}
      onPointerDown={() => setHover((prev) => !prev)} // Touch Event
      // Hover Event
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}>
      {/* @ts-ignore */}
      <roundedPlaneGeometry args={[3, 4.5]} />
      <imageFadeMaterial
        ref={ref}
        origin={origin}
        replace={replace}
        effect={effect}
        toneMapped={false}
      />
    </mesh>
  );
};

export default FadingModel;

extend({
  ImageFadeMaterial,
  RoundedPlaneGeometry: geometry.RoundedPlaneGeometry,
});
