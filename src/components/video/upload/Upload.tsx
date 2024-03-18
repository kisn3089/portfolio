import { ChangeEvent, RefObject } from "react";
import {
  Loader,
  LoaderContainer,
  LoaderSpace,
  UploadBackground,
  UploadInput,
  UploadLabel,
} from "./UploadStyles";

const Upload = ({
  stepTransCode,
  progressRef,
  getVideo,
}: {
  stepTransCode: null | "wait" | "ok";
  progressRef: RefObject<HTMLParagraphElement>;
  getVideo: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const wait = stepTransCode === "wait";
  return (
    <UploadBackground>
      {wait && (
        <LoaderContainer>
          <div>
            <LoaderSpace>Loading To Convert MP4</LoaderSpace>
            <Loader ref={progressRef}>Loading To Convert MP4</Loader>
          </div>
        </LoaderContainer>
      )}
      <UploadInput id="file" type="file" onChange={getVideo} />
      <UploadLabel htmlFor="file" $disabled={wait}>
        UPLOAD
      </UploadLabel>
    </UploadBackground>
  );
};

export default Upload;
