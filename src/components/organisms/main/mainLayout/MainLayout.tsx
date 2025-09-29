import { MainLayoutStyle } from "./MainLayoutStyles";
import CanvasCore from "@/components/molecules/canvasCore/CanvasCore";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Float, ScrollControls, Stars } from "@react-three/drei";
import { EffectScroll } from "@/components/molecules/three/effectScroll/EffectScroll";
import Carousel from "@/components/molecules/three/carousel/Carousel";
import { Banner } from "@/components/molecules/three/banner/Banner";

const MainLayout = () => {
  return (
    <MainLayoutStyle>
      <CanvasCore
        noLoading
        camera={{ position: [0, 0, 100], fov: 15 }}
        unuseOrbit
        bgColor={"#0a0a0a"}>
        <fog attach="fog" args={["#ffe538", 9, 13]} />
        <Stars radius={90} depth={0} count={5000} factor={4} fade />
        <ScrollControls pages={2} infinite>
          <EffectScroll rotation={[0, 0, 0.15]}>
            <Carousel />
          </EffectScroll>
          <Float floatIntensity={0.3} speed={0.8}>
            <Banner />
          </Float>
        </ScrollControls>
        <EffectComposer multisampling={8}>
          <Bloom
            kernelSize={1}
            luminanceThreshold={0.6}
            luminanceSmoothing={1}
            intensity={0.4}
            height={300}
          />
        </EffectComposer>
      </CanvasCore>
    </MainLayoutStyle>
  );
};

export default MainLayout;
