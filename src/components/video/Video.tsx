import React from "react";
import Upload from "./upload/Upload";
import { useVideo } from "@/hooks/useVideo";
import { Player } from "./player/Player";

const Video = () => {
  const { videoInfo, getVideo } = useVideo();
  return (
    <>
      {videoInfo === "" && <Upload videoInfo={videoInfo} getVideo={getVideo} />}
      {videoInfo !== "" && <Player />}
    </>
  );
};

export default Video;
