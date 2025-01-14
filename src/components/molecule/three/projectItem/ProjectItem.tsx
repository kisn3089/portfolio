import { TEnler } from "@/types/three.type";
import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { DoubleSide, Mesh } from "three";
import { easing } from "maath";
import { BentPlaneGeometry } from "@/utils/materials/BentPlaneGeometry";
import { Image } from "@react-three/drei";
import { useToggleHover } from "@/hooks/useToggleHover";

type ProjectItemProps = {
  url: string;
  position: TEnler;
  rotation: TEnler;
  to: string;
};

export const ProjectItem = ({
  url,
  position,
  rotation,
  to,
}: ProjectItemProps) => {
  const imageRef = useRef<Mesh>(null);
  const { hover, pointerOver, pointerOut, clickToMove } = useToggleHover();
  const navigator = useNavigate();

  useFrame((_, delta) => {
    if (imageRef.current) {
      // easing.damp3(cardRef.current.scale, hover ? 1 : 0.75, 0.1, delta);
      easing.damp3(imageRef.current.scale, hover ? 1.15 : 1, 0.1, delta);
      easing.damp(
        imageRef.current.material,
        "radius",
        hover ? 0.25 : 0.1,
        0.2,
        delta
      );
      easing.damp(
        imageRef.current.material,
        "zoom",
        hover ? 1 : 1.5,
        0.2,
        delta
      );
    }
  });

  return (
    <Image
      ref={imageRef}
      url={url}
      transparent
      side={DoubleSide}
      onClick={(e) =>
        clickToMove(e, () => {
          if (to.includes("http")) window.open(to);
          else navigator(to);
        })
      }
      onPointerOver={(e) =>
        pointerOver(e, () => {
          document.body.style.cursor = "pointer";
        })
      }
      onPointerOut={(e) =>
        pointerOut(e, () => {
          document.body.style.cursor = "default";
        })
      }
      rotation={rotation}
      position={position}>
      <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
    </Image>
  );
};

extend({ BentPlaneGeometry });
