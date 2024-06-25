import { EditingImage, ImageWrapper } from "./EditImageStyles";

interface EditImageProps {
  src: string;
}

const EditImage = ({ src }: EditImageProps) => {
  return (
    <ImageWrapper>
      {src && <EditingImage src={src} alt="image_edit_custom" />}
    </ImageWrapper>
  );
};

export default EditImage;
