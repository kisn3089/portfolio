import { InfoTitle, UploadInfoContainer } from "./UploadInfoStyles";

const UploadInfo = () => {
  const content =
    "mp4 확장자가 아닌 비디오 파일은 mp4 확장자로 변환 후 동영상을 재생합니다.";
  // "Non-mp4 video files will be converted to mp4 extension and played back.";
  // mp4 확장자가 아닌 비디오 파일은 mp4 확장자로 변환 후 동영상을 재생합니다.
  // 크기가 큰 파일은 피해주세요 🙏
  // 동작하지 않는다면 새로고침 후 이용해주세요. 👻
  {
    /* <li>Please avoid large files. 🙏</li> */
  }
  {
    /* <li>If doesn't work, please refresh and try again. 👻</li> */
  }
  return (
    <UploadInfoContainer>
      <InfoTitle>{content}</InfoTitle>
      <ul>
        <li>크기가 큰 파일은 피해주세요 🙏</li>
        <li>동작하지 않는다면 새로고침 후 이용해주세요. 👻</li>
      </ul>
    </UploadInfoContainer>
  );
};

export default UploadInfo;
