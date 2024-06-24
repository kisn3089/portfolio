import { useImage } from "@/hooks/useImage";
import {
  BorderCenter,
  GrayscaleImage,
  ImageLayout,
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
        <GrayscaleImage src="/assets/img/opera.webp" alt="image_color_custom" />
      </SampleLayout>
    </ImageLayout>
  );
};

export default ImageSection;
