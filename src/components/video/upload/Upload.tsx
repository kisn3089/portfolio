import React, { ChangeEvent, useState } from "react";
import { UploadBackground, UploadInput, UploadLabel } from "./UploadStyles";

const Upload = ({
  getVideo,
}: {
  getVideo: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  return (
    <UploadBackground>
      <>
        <UploadInput id="file" type="file" onChange={getVideo} />
        <UploadLabel
          $isMouseDown={isMouseDown}
          htmlFor="file"
          onMouseDown={() => setIsMouseDown(true)}
          onMouseLeave={() => setIsMouseDown(false)}
          onMouseUp={() => setIsMouseDown(false)}>
          UPLOAD
        </UploadLabel>
      </>
    </UploadBackground>
  );
};

export default Upload;
