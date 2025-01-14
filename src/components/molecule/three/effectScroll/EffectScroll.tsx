import { TEnler } from "@/types/three.type";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { PropsWithChildren, useRef } from "react";
import { Group } from "three";
import { easing } from "maath";

type EffectScroll = { rotation?: TEnler } & PropsWithChildren;

export const EffectScroll = ({ rotation, children }: EffectScroll) => {
  const effectRef = useRef<Group>(null);
  const scroll = useScroll();
  useFrame((state, delta) => {
    if (effectRef.current && state.events.update) {
      effectRef.current.rotation.y = -scroll.offset * (Math.PI * 2);
      state.events.update();
      easing.damp3(
        state.camera.position,
        [-state.pointer.x * 2, state.pointer.y + 1.5, 10],
        0.3,
        delta
      );
      state.camera.lookAt(0, 0, 0);
    }
  });

  return (
    <group ref={effectRef} rotation={rotation}>
      {children}
    </group>
  );
};
