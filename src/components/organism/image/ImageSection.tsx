import { useImage } from "@/hooks/useImage";
import { SectionLayout } from "./ImageLayoutStyles";
import ImageUpload from "./imageUpload/ImageUpload";
import CompareImage from "./compareImage/CompareImage";
import ViewMode from "./viewMode/ViewMode";

const ImageSection = () => {
  const { image, getImage, onChangeType } = useImage();

  return (
    <SectionLayout>
      <ImageUpload getImage={getImage} />
      <CompareImage image={image} />
      <ViewMode fitType={image.fitType} onChangeType={onChangeType} />
    </SectionLayout>
  );
};

export default ImageSection;
