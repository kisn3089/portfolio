import { useImage } from "@/hooks/useImage";
import {
  BorderCenter,
  GrayscaleImage,
  ImageLayout,
  ImageWrapper,
  InsideContent,
  InsideUpload,
  LabelImage,
  SampleLayout,
  UploadContainer,
  UploadLayout,
} from "./ImageLayoutStyles";
import * as Svg from "@/components/atoms/icon/index";

const ImageSection = () => {
  const { image, getImage } = useImage();
  // 변환된 이미지를 contain, cover 둘 다 볼 수 있게 radio 버튼 추가 (default: cover)

  return (
    <ImageLayout>
      <UploadLayout>
        <UploadContainer>
          <BorderCenter />
          <LabelImage htmlFor="image" />
          <input
            type="file"
            id="image"
            accept=".jpg, .png, .ico, .webp"
            onChange={getImage}
          />
          <InsideUpload>
            <Svg.UploadImage />
            <InsideContent>Drag Down or Click</InsideContent>
          </InsideUpload>
        </UploadContainer>
      </UploadLayout>
      <SampleLayout>
        <ImageWrapper>
          <GrayscaleImage
            src="/assets/img/opera.webp"
            alt="image_color_custom"
          />
        </ImageWrapper>
        <ImageWrapper>
          <img
            src={image.image || "/assets/img/opera.webp"}
            alt="image_color_custom"
          />
        </ImageWrapper>
      </SampleLayout>
    </ImageLayout>
  );
};

export default ImageSection;
