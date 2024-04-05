import React, { Suspense } from "react";
import { CanvasCoreContainer } from "./CanvasCoreStyles";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Preload, useProgress } from "@react-three/drei";
import { theme } from "@/styles/theme";
import { ModelLoadContainer } from "@/components/organism/three/ThreeLayoutStyles";

interface CanvasCoreProps {
  children: React.ReactNode;
  orbitProps?: { [index: string]: number | boolean };
  bgColor?: string;
  loadedCallback(): void;
}

const ModelLoading = ({ loadedCallback }: { loadedCallback: () => void }) => {
  const { progress } = useProgress();
  if (progress === 100) loadedCallback();

  return (
    <Html center>
      <ModelLoadContainer>
        <span>{`${progress.toFixed(0)}%`}</span>
        <span>Loading...</span>
      </ModelLoadContainer>
    </Html>
  );
};

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
        <directionalLight
          castShadow
          intensity={6}
          color="#fff"
          position={[0, 2, 0]}
        />
        <Suspense fallback={<ModelLoading loadedCallback={loadedCallback} />}>
          {children}
        </Suspense>
        <OrbitControls {...orbitProps} />
        <Preload all />
      </Canvas>
    </CanvasCoreContainer>
  );
};

export default CanvasCore;
