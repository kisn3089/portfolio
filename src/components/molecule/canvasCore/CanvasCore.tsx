import React, { Suspense } from "react";
import { CanvasCoreContainer } from "./CanvasCoreStyles";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls, Preload } from "@react-three/drei";
import { theme } from "@/styles/theme";
import ModelLoading from "@/components/organism/three/modelLoading/ModelLoading";
import { CameraType } from "@/types/three.type";

interface CanvasCoreProps {
  children: React.ReactNode;
  noLoading?: boolean;
  camera?: CameraType;
  orbitProps?: { [index: string]: number | boolean };
  bgColor?: string;
  hasRadius?: boolean;
  unuseOrbit?: boolean;
}

const CanvasCore = ({
  children,
  orbitProps,
  noLoading,
  camera = { position: [0, 3, 7], near: 1, far: 1000, fov: 75 },
  bgColor = theme.palette.black,
  hasRadius,
  unuseOrbit = false,
}: CanvasCoreProps) => {
  return (
    <CanvasCoreContainer $hasRadius={hasRadius}>
      <Canvas performance={{ min: 0.2 }} shadows camera={{ ...camera }}>
        <color attach="background" args={[bgColor]} />
        <DirectionLight />
        <PointLight />
        <Suspense fallback={!noLoading && <ModelLoading bgColor={bgColor} />}>
          {children}
        </Suspense>
        {!unuseOrbit && <OrbitControls {...orbitProps} />}
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
