import React from "react";
import {
  UploadBackground,
  UploadContainer,
  UploadInput,
  UploadLabel,
} from "./UploadStyles";
import { useVideo } from "@/hooks/useVideo";

const Upload = () => {
  const { videoInfo, getVideo } = useVideo();
  console.log(videoInfo);

  return (
    <UploadBackground>
      {/* <UploadContainer></UploadContainer> */}
      <>
        <UploadInput
          id="file"
          type="file"
          accept="video/mp4"
          onChange={getVideo}
        />
        <UploadLabel htmlFor="file">Upload</UploadLabel>
      </>
    </UploadBackground>
  );
};

export default Upload;
