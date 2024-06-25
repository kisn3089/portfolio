import { useImage } from "@/hooks/useImage";
import { SectionLayout } from "./ImageLayoutStyles";
import ImageUpload from "./imageUpload/ImageUpload";
import CompareImage from "./compareImage/CompareImage";
import Dashboard from "./dashboard/Dashboard";

const ImageSection = () => {
  const { image, getImage, onChangeType } = useImage();

  return (
    <SectionLayout>
      <ImageUpload getImage={getImage} />
      <CompareImage image={image} />
      <Dashboard onChangeType={onChangeType} />
    </SectionLayout>
  );
};

export default ImageSection;
