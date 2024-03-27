import { ChangeEvent, RefObject } from "react";
import LoaderByText from "@/components/molecule/loaderByText/LoaderByText";
import UploadInfo from "../uploadInfo/UploadInfo";
import LabelInput from "@/components/atoms/labelInput/LabelInput";
import { GroupRow, UploadBackground } from "./UploadStyles";

interface TUpload {
  stepTransCode: null | "wait" | "ok";
  progressRef: RefObject<HTMLParagraphElement>;
  getVideo: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Upload = ({ stepTransCode, progressRef, getVideo }: TUpload) => {
  const wait = stepTransCode === "wait";
  const loaderContent = "Loading To Convert MP4";
  return (
    <UploadBackground>
      {wait ? (
        <LoaderByText progressRef={progressRef} content={loaderContent} />
      ) : (
        <UploadInfo />
      )}
      <GroupRow>
        <LabelInput content="UPLOAD" isWait={wait} getVideo={getVideo} />
        <LabelInput
          content="SAMPLE VIDEO"
          downUrl={"/assets/video/sample.mov"}
        />
      </GroupRow>
    </UploadBackground>
  );
};

export default Upload;
