import { MeshSineMaterial } from "@/utils/materials/BannerMaterial";
import { useScroll, useTexture } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { CylinderGeometry, DoubleSide, Mesh, RepeatWrapping } from "three";

export const Banner = () => {
  const bannerRef = useRef<Mesh<CylinderGeometry, MeshSineMaterial>>(null);
  const texture = useTexture("/assets/img/compress.png");
  texture.wrapS = texture.wrapT = RepeatWrapping;
  const scroll = useScroll();

  useFrame((_, delta) => {
    if (bannerRef.current && bannerRef.current.material.map) {
      bannerRef.current.material.time.value += Math.abs(scroll.delta) * 8;
      bannerRef.current.material.map.offset.x += delta / 2;
    }
  });

  return (
    <mesh ref={bannerRef} position={[0, -0.2, 0]}>
      <cylinderGeometry args={[1.3, 1.3, 0.14, 128, 16, true]} />
      <meshSineMaterial
        map={texture}
        map-anisotropy={16}
        map-repeat={[30, 1]}
        side={DoubleSide}
        toneMapped={false}
      />
    </mesh>
  );
};

extend({ MeshSineMaterial });
