import { Player } from "@/components/organisms/video/player/Player";
import Upload from "@/components/organisms/video/upload/Upload";
import { useVideo } from "@/hooks/useVideo";
import CheckCondition from "@/lib/util/CheckCondition";

const VideoPage = () => {
  const {
    videoInfo,
    videoRef,
    isAllMarker,
    convertStep,
    progressRef,
    getVideo,
    sectionPlay,
  } = useVideo();
  return (
    <>
      <CheckCondition falseCondition={videoInfo.file == ""}>
        <Upload
          convertStep={convertStep}
          progressRef={progressRef}
          getVideo={getVideo}
        />
        <Player
          url={videoInfo.file}
          videoRef={videoRef}
          isAllMarker={isAllMarker}
          sectionPlay={sectionPlay}
        />
      </CheckCondition>
    </>
  );
};

export default VideoPage;
