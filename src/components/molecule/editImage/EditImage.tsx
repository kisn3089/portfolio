import { EditingImage, ImageWrapper } from "./EditImageStyles";
import { TFitType } from "@/hooks/useImage";

interface EditImageProps {
  src: string;
  fitType: TFitType;
}

const EditImage = ({ src, fitType }: EditImageProps) => {
  return (
    <ImageWrapper>
      <EditingImage src={src} alt="image_edit_custom" $type={fitType} />
    </ImageWrapper>
  );
};

export default EditImage;
