import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { KernelSize } from "postprocessing";

const PostProsessing = () => {
  return (
    <EffectComposer multisampling={8}>
      <Bloom
        kernelSize={5}
        luminanceThreshold={0.4}
        luminanceSmoothing={0.3}
        intensity={0.8}
      />
      <Bloom
        kernelSize={KernelSize.HUGE}
        luminanceThreshold={0.4}
        luminanceSmoothing={0.3}
        intensity={0.8}
      />
    </EffectComposer>
  );
};

export default PostProsessing;
