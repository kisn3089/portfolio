import { ChangeEvent, RefObject } from "react";
import LoaderByText from "@/components/molecule/loaderByText/LoaderByText";
import UploadInfo from "../uploadInfo/UploadInfo";
import LabelInput from "@/components/atoms/labelInput/LabelInput";
import { GroupRow, UploadBackground } from "./UploadStyles";
import { ConverStepType } from "@/types/convertStep.type";
import ShowError from "@/components/molecule/showError/ShowError";

interface TUpload {
  convertStep: ConverStepType;
  progressRef: RefObject<HTMLParagraphElement>;
  getVideo: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Upload = ({ convertStep, progressRef, getVideo }: TUpload) => {
  const wait = convertStep.step === "wait";
  const loaderContent = "Loading To Convert MP4";
  return (
    <UploadBackground>
      {wait ? (
        <LoaderByText progressRef={progressRef} content={loaderContent} />
      ) : (
        <UploadInfo />
      )}
      <ShowError errorContent={convertStep}></ShowError>
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
