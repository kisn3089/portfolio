import React from "react";
import { Video, VideoSize, VideoPlayer, VideoContainer } from "./PlayerStyles";

export const Player = ({
  videoRef,
}: {
  videoRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <VideoContainer>
      <VideoSize data-vjs-player>
        <VideoPlayer
          ref={videoRef}
          // style={{ borderRadius: "12px", overflow: "hidden" }}
        />
      </VideoSize>
    </VideoContainer>
  );
};
