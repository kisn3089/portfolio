import * as THREE from "three";
import { MainLayoutStyle } from "./MainLayoutStyles";
import CanvasCore from "@/components/molecule/canvasCore/CanvasCore";
import FadingModel from "../../three/fadingModel/FadingModel";
import { theme } from "@/styles/theme";
import CameraMouse from "@/components/molecule/canvasCore/cameraMouse/CameraMouse";
import CameraLookAt from "@/components/molecule/canvasCore/cameraLookAt/CameraLookAt";
import PlaneModel from "../../three/modeling/planeModel/PlaneModel";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import {
  Float,
  ScrollControls,
  useScroll,
  Image,
  useTexture,
  Environment,
  Html,
} from "@react-three/drei";
import { extend, ThreeEvent, useFrame } from "@react-three/fiber";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { Group, Mesh } from "three";
import { easing } from "maath";
import { MeshSineMaterial } from "@/utils/materials/BannerMaterial";
import ProjectList from "../../project/projectlist/ProjectList";
import React from "react";
import { projectList } from "@/store/ProjectList";
import { TEnler } from "@/types/three.type";
import { BentPlaneGeometry } from "@/utils/materials/BentPlaneGeometry";
import { Link, useNavigate } from "react-router-dom";

// const fadingElement = [
//   {
//     originImage: "/assets/img/arc.webp",
//     replaceImage: "/assets/img/tower.webp",
//     effectImage: "/assets/img/effect_draft.jpg",
//     positionX: "2",
//     positionY: "2",
//     rotationY: "-0.2",
//   },
//   {
//     originImage: "/assets/img/suit.webp",
//     replaceImage: "/assets/img/cafe.webp",
//     effectImage: "/assets/img/effect_diamond.jpg",
//     positionX: "-2",
//     positionY: "2",
//     rotationY: "0.2",
//   },
// ];

const MainLayout = () => {
  return (
    <MainLayoutStyle>
      <CanvasCore
        noLoading
        camera={{ position: [0, 0, 100], fov: 15 }}
        unuseOrbit
        // orbitProps={{ enableZoom: false }}
        // bgColor={theme.palette.darkBlack}
      >
        <fog attach="fog" args={["#ffe538", 9, 13]} />
        <ScrollControls pages={2} infinite>
          <Rig rotation={[0, 0, 0.15]}>
            <Carousel />
          </Rig>
          <Banner />
        </ScrollControls>
        {/* <CameraLookAt> */}
        {/* {fadingElement.map((fading, i) => (
            <Float floatIntensity={0.3} speed={0.8} key={i}>
            <FadingModel
              originImage={fading.originImage}
              replaceImage={fading.replaceImage}
              effectImage={fading.effectImage}
              positionX={fading.positionX}
              positionY={fading.positionY}
              rotationY={fading.rotationY}
            />
            </Float>
          ))} */}
        {/* <EffectComposer multisampling={8}>
            <Bloom
              kernelSize={5}
              luminanceThreshold={0.4}
              luminanceSmoothing={0.3}
              intensity={0.8}
            />
          </EffectComposer> */}
        {/* <PlaneModel /> */}
        {/* </CameraLookAt> */}
        {/* <fog attach="fog" args={[theme.palette.white, 4, 12]} /> */}
        {/* <fog attach="fog" args={[theme.palette.darkBlack, 2, 12]} /> */}
        {/* <CameraMouse /> */}
      </CanvasCore>
    </MainLayoutStyle>
  );
};

export default MainLayout;

type RigProps = { rotation?: TEnler } & PropsWithChildren;
const Rig = ({ rotation, children }: RigProps) => {
  const rigRef = useRef<Group>(null);
  const scroll = useScroll();
  useFrame((state, delta) => {
    if (rigRef.current && state.events.update) {
      rigRef.current.rotation.y = -scroll.offset * (Math.PI * 2);
      state.events.update();
      easing.damp3(
        state.camera.position,
        [-state.pointer.x * 2, state.pointer.y + 1.5, 10],
        0.3,
        delta
      );
      state.camera.lookAt(0, 0, 0);
    }
  });

  return (
    <group ref={rigRef} rotation={rotation}>
      {children}
    </group>
  );
};

const Carousel = () => {
  const count = projectList.length;
  // const radius = 1.4;
  const radius = 0.9;
  return (
    <group>
      {projectList.map((project, i) => (
        <Card
          key={project.img}
          url={project.landing_img}
          to={project.link}
          position={[
            Math.sin((i / count) * Math.PI * 2) * radius,
            0,
            Math.cos((i / count) * Math.PI * 2) * radius,
          ]}
          rotation={[0, Math.PI + (i / count) * Math.PI * 2 + Math.PI, 0]}
        />
      ))}
    </group>
  );
};

type CardProps = {
  url: string;
  position: TEnler;
  rotation: TEnler;
  to: string;
};
const Card = ({ url, position, rotation, to }: CardProps) => {
  const cardRef = useRef<Mesh>(null);
  const [hover, setHover] = useState(false);
  const navigator = useNavigate();

  const pointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHover(true);
    document.body.style.cursor = "pointer";
  };
  const pointerOut = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHover(false);
    document.body.style.cursor = "default";
  };

  const clickToMove = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (to.includes("http")) window.open(to);
    else navigator(to);
  };

  useFrame((_, delta) => {
    if (cardRef.current) {
      // easing.damp3(cardRef.current.scale, hover ? 1 : 0.75, 0.1, delta);
      easing.damp3(cardRef.current.scale, hover ? 1.15 : 1, 0.1, delta);
      easing.damp(
        cardRef.current.material,
        "radius",
        hover ? 0.25 : 0.1,
        0.2,
        delta
      );
      easing.damp(
        cardRef.current.material,
        "zoom",
        hover ? 1 : 1.5,
        0.2,
        delta
      );
    }
  });

  return (
    <Image
      ref={cardRef}
      url={url}
      transparent
      side={THREE.DoubleSide}
      onClick={clickToMove}
      onPointerOver={pointerOver}
      onPointerOut={pointerOut}
      rotation={rotation}
      position={position}>
      <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
    </Image>
  );
};

const Banner = () => {
  const bannerRef =
    useRef<Mesh<THREE.CylinderGeometry, MeshSineMaterial>>(null);
  const texture = useTexture("/assets/img/compress.png");
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
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
        side={THREE.DoubleSide}
        toneMapped={false}
      />
    </mesh>
  );
};

extend({ MeshSineMaterial, BentPlaneGeometry });
