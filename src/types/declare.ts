import { ImageFadeMaterial } from "@/utils/materials/ImageMaterial";
import { RefObject } from "react";
import * as THREE from "three";

declare module "@react-three/fiber" {
  interface ThreeElements {
    imageFadeMaterial: THREE.ShaderMaterialParameters & {
      origin?: THREE.Texture;
      replace?: THREE.Texture;
      effect?: THREE.Texture;
      dispFactor?: number;
      effectFactor?: number;
      ref: RefObject<typeof ImageFadeMaterial>;
    };
    meshSineMaterial: THREE.MeshBasicMaterialParameters & {
      time?: { value: number };
    };
  }
}
