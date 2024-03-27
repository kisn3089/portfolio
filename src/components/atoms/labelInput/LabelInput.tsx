import { ChangeEvent } from "react";
import { UploadInput } from "./LabelInputStyles";
import ChildButton from "../../molecule/childButton/ChildButton";

const LabelInput = ({
  content,
  isWait = false,
  downUrl,
  getVideo,
}: {
  content: string;
  isWait?: boolean;
  downUrl?: string;
  getVideo?: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <UploadInput
        id="file"
        type="file"
        onChange={getVideo}
        disabled={isWait}
      />
      <a href={downUrl || ""} download>
        <label htmlFor={downUrl ? "" : "file"}>
          <ChildButton content={content} isDisabled={isWait} />
        </label>
      </a>
    </>
  );
};

export default LabelInput;
