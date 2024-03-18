import { ChangeEvent } from "react";
import {
  Loader,
  UploadBackground,
  UploadInput,
  UploadLabel,
} from "./UploadStyles";

const Upload = ({
  stepTransCode,
  getVideo,
}: {
  stepTransCode: null | "wait" | "ok";
  getVideo: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <UploadBackground>
      {stepTransCode === "wait" && <Loader>Loading</Loader>}
      <UploadInput id="file" type="file" disabled={true} onChange={getVideo} />
      <UploadLabel htmlFor="file">UPLOAD</UploadLabel>
    </UploadBackground>
  );
};

export default Upload;
