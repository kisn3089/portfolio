import { ChangeEvent, RefObject } from "react";
import { UploadBackground, UploadInput, UploadLabel } from "./UploadStyles";
import LoaderByText from "@/components/loaderByText/LoaderByText";
import UploadInfo from "../uploadInfo/UploadInfo";

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
  const loaderContent = "Loading To Convert MP4";
  return (
    <UploadBackground>
      {wait ? (
        <LoaderByText progressRef={progressRef} content={loaderContent} />
      ) : (
        <UploadInfo />
      )}
      <UploadInput id="file" type="file" onChange={getVideo} disabled={wait} />
      <UploadLabel htmlFor="file" $disabled={wait}>
        UPLOAD
      </UploadLabel>
    </UploadBackground>
  );
};

export default Upload;
