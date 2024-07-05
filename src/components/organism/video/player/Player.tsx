import React from "react";
import {
  VideoSize as Size,
  VideoPlayer,
  VideoContainer as Container,
  Group,
  PlayerButton,
  Center,
} from "./PlayerStyles";
import ChildButton from "@/components/molecule/childButton/ChildButton";
import OncePlayer from "@/components/molecule/onceInfo/oncePlayer/OncePlayer";
interface TPlayer {
  url: string;
  videoRef: React.RefObject<HTMLDivElement>;
  isAllMarker: boolean;
  sectionPlay: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Player = ({
  url,
  videoRef,
  isAllMarker,
  sectionPlay,
}: TPlayer) => {
  return (
    <Container>
      <Size data-vjs-player>
        <VideoPlayer ref={videoRef} />
        <Center>
          <OncePlayer />
        </Center>
      </Size>
      <Group>
        <PlayerButton onClick={sectionPlay} disabled={!isAllMarker}>
          <ChildButton content={"SECTION PLAY"} isDisabled={!isAllMarker} />
        </PlayerButton>
        <a href={url} download>
          <ChildButton content={"DOWNLOAD"} isDisabled={!url} />
        </a>
      </Group>
    </Container>
  );
};
