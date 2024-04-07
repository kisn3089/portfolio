import { ChangeEvent } from "react";
import { UploadInput } from "./LabelInputStyles";
import ChildButton from "../../molecule/childButton/ChildButton";

const LabelInput = ({
  content,
  disabled = false,
  downUrl,
  getVideo,
}: {
  content: string;
  disabled?: boolean;
  downUrl?: string;
  getVideo?: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <UploadInput
        id="file"
        type="file"
        onChange={getVideo}
        disabled={disabled}
      />
      <a href={downUrl || ""} download>
        <label htmlFor={downUrl ? "" : "file"}>
          <ChildButton content={content} isDisabled={disabled} />
        </label>
      </a>
    </>
  );
};

export default LabelInput;
