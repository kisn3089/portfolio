import React from "react";
import { VideoSize, VideoPlayer, VideoContainer } from "./PlayerStyles";

interface TPlayer {
  videoRef: React.RefObject<HTMLDivElement>;
}

export const Player = ({ videoRef }: TPlayer) => {
  return (
    <VideoContainer>
      <VideoSize data-vjs-player>
        <VideoPlayer ref={videoRef} />
      </VideoSize>
    </VideoContainer>
  );
};
