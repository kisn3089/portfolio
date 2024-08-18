import OnceInputNumber from "../onceInfo/onceInputNumber/OnceInputNumber";
import { EditingImage, ImageWrapper } from "./EditImageStyles";

interface EditImageProps {
  src: string;
  isLoading: boolean;
}

const EditImage = ({ src, isLoading }: EditImageProps) => {
  return (
    <ImageWrapper>
      {src && (
        <EditingImage
          src={src}
          alt="image_edit_custom"
          $isLoading={isLoading}
        />
      )}
      <OnceInputNumber />
    </ImageWrapper>
  );
};

export default EditImage;
