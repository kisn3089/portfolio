import React, { ChangeEvent, useState } from "react";
import { UploadBackground, UploadInput, UploadLabel } from "./UploadStyles";

const Upload = ({
  videoInfo,
  getVideo,
}: {
  videoInfo: { file: string; type: string };
  getVideo: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  return (
    <UploadBackground>
      <>
        <UploadInput
          id="file"
          type="file"
          accept="video/mp4"
          onChange={getVideo}
        />
        <UploadLabel
          $isMouseDown={isMouseDown}
          htmlFor="file"
          onMouseDown={() => setIsMouseDown(true)}
          onMouseUp={() => setIsMouseDown(false)}>
          Upload
        </UploadLabel>
      </>
    </UploadBackground>
  );
};

export default Upload;
