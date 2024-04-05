import React, { Suspense } from "react";
import { CanvasCoreContainer } from "./CanvasCoreStyles";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Preload, useProgress } from "@react-three/drei";
import { theme } from "@/styles/theme";

interface CanvasCoreProps {
  children: React.ReactNode;
  orbitProps?: { [index: string]: number | boolean };
  bgColor?: string;
}

const Loading = () => {
  const { progress, active } = useProgress();

  return (
    <Html>
      <h1>Loading...{progress.toFixed(0)}</h1>
    </Html>
  );
};

const CanvasCore = ({
  children,
  orbitProps,
  bgColor = theme.palette.black,
}: CanvasCoreProps) => {
  return (
    <CanvasCoreContainer>
      <Canvas
        shadows
        camera={{ position: [0, 3, 7], fov: 75, far: 1000, near: 1 }}>
        <color attach="background" args={[bgColor]} />
        <directionalLight
          castShadow
          intensity={6}
          color="#fff"
          position={[0, 2, 0]}
        />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <OrbitControls {...orbitProps} />
        <Preload all />
      </Canvas>
    </CanvasCoreContainer>
  );
};

export default CanvasCore;
