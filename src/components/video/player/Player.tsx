import React from "react";
import {
  VideoSize as Size,
  VideoPlayer,
  VideoContainer as Container,
  Group,
  PlayerButton,
} from "./PlayerStyles";
import ChildButton from "@/components/childButton/ChildButton";

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
