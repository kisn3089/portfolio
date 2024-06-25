import {
  BorderCenter,
  InsideContent,
  InsideUpload,
  LabelUpload,
  UploadContainer,
  UploadLayout,
} from "./ImageUploadStyles";
import * as Svg from "@/components/atoms/icon/index";

interface ImageUploadProps {
  getImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageUpload = ({ getImage }: ImageUploadProps) => {
  return (
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
  );
};

export default ImageUpload;
