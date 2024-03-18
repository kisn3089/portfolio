import { InfoTitle, UploadInfoContainer } from "./UploadInfoStyles";

const UploadInfo = () => {
  const content =
    "Non-mp4 video files will be converted to mp4 extension and played back.";
  return (
    <UploadInfoContainer>
      <InfoTitle>{content}</InfoTitle>
      <ul>
        <li>Please avoid large files.</li>
        <li>If doesn't work, please refresh and try again.</li>
      </ul>
    </UploadInfoContainer>
  );
};

export default UploadInfo;
