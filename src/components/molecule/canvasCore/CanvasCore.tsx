import React, { Suspense } from "react";
import { CanvasCoreContainer } from "./CanvasCoreStyles";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls, Preload } from "@react-three/drei";
import { theme } from "@/styles/theme";
import ModelLoading from "@/components/organism/three/modelLoading/ModelLoading";

interface CanvasCoreProps {
  children: React.ReactNode;
  orbitProps?: { [index: string]: number | boolean };
  bgColor?: string;
  loadedCallback?: () => void;
}

const CanvasCore = ({
  children,
  orbitProps,
  bgColor = theme.palette.black,
  loadedCallback,
}: CanvasCoreProps) => {
  return (
    <CanvasCoreContainer>
      <Canvas
        shadows
        camera={{ position: [0, 3, 7], fov: 75, far: 1000, near: 1 }}>
        <color attach="background" args={[bgColor]} />
        <DirectionLight />
        <PointLight />
        <Suspense
          fallback={
            <ModelLoading bgColor={bgColor} loadedCallback={loadedCallback} />
          }>
          {children}
        </Suspense>
        <OrbitControls {...orbitProps} />
        <ContactShadows position-y={-3} scale={10} opacity={0.3} blur={0.4} />
        <Preload all />
      </Canvas>
    </CanvasCoreContainer>
  );
};

const DirectionLight = () => (
  <directionalLight
    castShadow
    intensity={6}
    color="#fff"
    position={[0, 2, 0]}
  />
);

const PointLight = () => (
  <>
    <pointLight intensity={5} color={"#fff"} position={[0, 0, 0]} />
    <pointLight intensity={5} color={"#fff"} position={[2, -1, -3]} />
  </>
);

export default CanvasCore;
