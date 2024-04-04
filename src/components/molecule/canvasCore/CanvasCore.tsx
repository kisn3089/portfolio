import React from "react";
import { CanvasCoreContainer } from "./CanvasCoreStyles";
import { Canvas, Props } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { theme } from "@/styles/theme";

interface CanvasCoreProps {
  children: React.ReactNode;
  orbitProps?: { [index: string]: number | boolean };
  bgColor?: string;
  // orbitProps: React.ForwardRefExoticComponent<
  //   Props & React.RefAttributes<HTMLCanvasElement>
  // >;
}

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
        {children}
        <OrbitControls {...orbitProps} />
        <Preload all />
      </Canvas>
    </CanvasCoreContainer>
  );
};

export default CanvasCore;
