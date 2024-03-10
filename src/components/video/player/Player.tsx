import React from "react";
import { VideoSize, VideoPlayer, VideoContainer } from "./PlayerStyles";

export const Player = ({
  videoRef,
}: {
  videoRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <VideoContainer>
      <VideoSize data-vjs-player>
        <VideoPlayer ref={videoRef} />
      </VideoSize>
    </VideoContainer>
  );
};
