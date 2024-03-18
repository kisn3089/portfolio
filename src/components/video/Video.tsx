import Upload from "./upload/Upload";
import { Player } from "./player/Player";
import { useVideo } from "@/hooks/useVideo";

const Video = () => {
  const { videoInfo, videoRef, isAllMarker, getVideo, sectionPlay } =
    useVideo();
  return (
    <>
      {videoInfo.file === "" && <Upload getVideo={getVideo} />}
      {videoInfo.file !== "" && (
        <Player
          url={videoInfo.file}
          videoRef={videoRef}
          isAllMarker={isAllMarker}
          sectionPlay={sectionPlay}
        />
      )}
    </>
  );
};

export default Video;
