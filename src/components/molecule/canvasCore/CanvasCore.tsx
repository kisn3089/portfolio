import React, { Suspense } from "react";
import { CanvasCoreContainer } from "./CanvasCoreStyles";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Html,
  OrbitControls,
  Preload,
  useProgress,
} from "@react-three/drei";
import { theme } from "@/styles/theme";
import { ModelLoadContainer } from "@/components/organism/three/ThreeLayoutStyles";
import { colorTypes } from "@/components/organism/three/ThreeSection";

interface CanvasCoreProps {
  children: React.ReactNode;
  orbitProps?: { [index: string]: number | boolean };
  bgColor?: string;
  loadedCallback?: () => void;
}

const ModelLoading = ({
  bgColor,
  loadedCallback = () => {},
}: {
  bgColor: string;
  loadedCallback?: () => void;
}) => {
  const { progress } = useProgress();
  if (progress === 100) loadedCallback();

  return (
    <Html center>
      <ModelLoadContainer $bgColor={colorTypes[bgColor]}>{`${progress.toFixed(
        0
      )}%`}</ModelLoadContainer>
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
        <pointLight intensity={5} color={"#fff"} position={[0, 0, 0]} />
        <pointLight intensity={5} color={"#fff"} position={[2, -1, -3]} />
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

export default CanvasCore;
