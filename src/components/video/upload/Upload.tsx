import React, { ChangeEvent } from "react";
import { UploadBackground, UploadInput, UploadLabel } from "./UploadStyles";

const Upload = ({
  videoInfo,
  getVideo,
}: {
  videoInfo: string;
  getVideo: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <UploadBackground>
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
