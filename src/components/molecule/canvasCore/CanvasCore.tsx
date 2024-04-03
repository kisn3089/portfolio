import React from "react";
import { CanvasCoreContainer } from "./CanvasCoreStyles";
import { Canvas, Props } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { theme } from "@/styles/theme";

interface CanvasCoreProps {
  children: React.ReactNode;
  // props: React.ForwardRefExoticComponent<
  //   Props & React.RefAttributes<HTMLCanvasElement>
  // >;
}

const CanvasCore = ({ children }: CanvasCoreProps) => {
  return (
    <CanvasCoreContainer>
      <Canvas
        shadows
        camera={{ position: [0, 3, 7], fov: 75, far: 1000, near: 1 }}>
        <color attach="background" args={[theme.palette.black]} />
        <directionalLight
          castShadow
          intensity={6}
          color="#fff"
          position={[0, 2, 0]}
        />
        {children}
        <OrbitControls
          maxDistance={10}
          minDistance={4}
          maxPolarAngle={Math.PI / 2.1}
          minPolarAngle={Math.PI / 5}
        />
        <Preload all />
      </Canvas>
      {/* <Canvas {...props}>{children}</Canvas> */}
    </CanvasCoreContainer>
  );
};

export default CanvasCore;
