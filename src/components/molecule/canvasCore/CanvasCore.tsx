import React, { Suspense } from "react";
import { CanvasCoreContainer } from "./CanvasCoreStyles";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls, Preload } from "@react-three/drei";
import { theme } from "@/styles/theme";
import ModelLoading from "@/components/organism/three/modelLoading/ModelLoading";

interface CanvasCoreProps {
  children: React.ReactNode;
  noLoading?: boolean;
  cameraPosition?: number[];
  orbitProps?: { [index: string]: number | boolean };
  bgColor?: string;
  hasRadius?: boolean;
}

const CanvasCore = ({
  children,
  orbitProps,
  noLoading,
  cameraPosition = [0, 3, 7],
  bgColor = theme.palette.black,
  hasRadius,
}: CanvasCoreProps) => {
  const [cameraX, cameraY, cameraZ] = cameraPosition;

  return (
    <CanvasCoreContainer $hasRadius={hasRadius}>
      <Canvas
        shadows
        camera={{
          position: [cameraX, cameraY, cameraZ],
          fov: 75,
          far: 1000,
          near: 1,
        }}>
        <color attach="background" args={[bgColor]} />
        <DirectionLight />
        <PointLight />
        <Suspense fallback={!noLoading && <ModelLoading bgColor={bgColor} />}>
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
