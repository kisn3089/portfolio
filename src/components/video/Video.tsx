import React from "react";
import Upload from "./upload/Upload";
import { Player } from "./player/Player";
import { useVideo } from "@/hooks/useVideo";

const Video = () => {
  const { videoInfo, videoRef, getVideo } = useVideo();
  return (
    <>
      {videoInfo.file === "" && <Upload getVideo={getVideo} />}
      {videoInfo.file !== "" && <Player videoRef={videoRef} />}
    </>
  );
};

export default Video;
