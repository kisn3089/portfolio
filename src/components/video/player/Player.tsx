import React from "react";
import {
  VideoSize as Size,
  VideoPlayer,
  VideoContainer as Container,
  SectionPlayButton,
  Group,
} from "./PlayerStyles";

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
        <SectionPlayButton disabled={!isAllMarker} onClick={sectionPlay}>
          SECTION PLAY
        </SectionPlayButton>
        <a href={url} download>
          <SectionPlayButton disabled={!url}>DOWNLOAD</SectionPlayButton>
        </a>
      </Group>
    </Container>
  );
};
