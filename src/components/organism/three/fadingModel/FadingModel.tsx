import { shaderMaterial, useTexture } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { easing, geometry } from "maath";
import { ShaderMaterial } from "three";

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
  const ref = useRef<ShaderMaterial>(null);
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
      {/*  @ts-ignore */}
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

const ImageFadeMaterial = shaderMaterial(
  {
    effectFactor: 1.2,
    dispFactor: 1.2,
    origin: false,
    replace: false,
    effect: false,
  },
  `varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,
  ` varying vec2 vUv;
    uniform sampler2D origin;
    uniform sampler2D replace;
    uniform sampler2D effect;
    uniform float _rot;
    uniform float dispFactor;
    uniform float effectFactor;
    void main() {
      vec2 uv = vUv;
      vec4 effect = texture2D(effect, uv);
      vec2 distortedPosition = vec2(uv.x + dispFactor * (effect.r*effectFactor), uv.y);
      vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (effect.r*effectFactor), uv.y);
      vec4 _texture = texture2D(origin, distortedPosition);
      vec4 _texture2 = texture2D(replace, distortedPosition2);
      vec4 finalTexture = mix(_texture, _texture2, dispFactor);
      gl_FragColor = finalTexture;
      #include <tonemapping_fragment>
      #include <encodings_fragment>
    }`
);

extend({
  ImageFadeMaterial,
  RoundedPlaneGeometry: geometry.RoundedPlaneGeometry,
});
