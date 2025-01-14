import { shaderMaterial } from "@react-three/drei";

export const ImageFadeMaterial = shaderMaterial(
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
