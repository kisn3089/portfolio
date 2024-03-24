import { ChangeEvent } from "react";
import { UploadInput, UploadLabel } from "./LabelInputStyles";

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
        <UploadLabel htmlFor={downUrl ? "" : "file"} $disabled={isWait}>
          {content}
        </UploadLabel>
      </a>
    </>
  );
};

export default LabelInput;
