import { useImage } from "@/hooks/useImage";
import {
  BorderCenter,
  SectionLayout,
  ImageWrapper,
  InsideContent,
  InsideUpload,
  LabelUpload,
  CompareLayout,
  DashboardLayout,
  UploadContainer,
  UploadLayout,
} from "./ImageLayoutStyles";
import * as Svg from "@/components/atoms/icon/index";

export const ImageSection = () => {
  const { image, getImage, onChangeType } = useImage();

  // 변환된 이미지를 contain, cover 둘 다 볼 수 있게 radio 버튼 추가 (default: cover)
  return (
    <SectionLayout>
      <UploadLayout>
        <UploadContainer>
          <BorderCenter />
          <LabelUpload htmlFor="image" />
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
      <CompareLayout>
        <ImageWrapper>
          <Image src="/assets/img/opera.webp" alt="image_color_custom" />
        </ImageWrapper>
        <ImageWrapper>
          <img
            src={image.image || "/assets/img/opera.webp"}
            alt="image_color_custom"
          />
        </ImageWrapper>
      </CompareLayout>
      <DashboardLayout>
        <label htmlFor="cover">Cover</label>
        <input
          type="radio"
          id="cover"
          value={"cover"}
          checked={image.fitType === "cover"}
          onChange={onChangeType}
        />
        <label htmlFor="contain">contain</label>
        <input
          type="radio"
          id="contain"
          value={"contain"}
          checked={image.fitType === "contain"}
          onChange={onChangeType}
        />
      </DashboardLayout>
    </SectionLayout>
  );
};
