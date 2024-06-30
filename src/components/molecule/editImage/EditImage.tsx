import { EditingImage, ImageWrapper } from "./EditImageStyles";

interface EditImageProps {
  src: string;
  isLoading: string;
}

const EditImage = ({ src, isLoading }: EditImageProps) => {
  return (
    <ImageWrapper>
      {src && (
        <EditingImage
          src={src}
          alt="image_edit_custom"
          $isLoading={isLoading === src}
        />
      )}
    </ImageWrapper>
  );
};

export default EditImage;
