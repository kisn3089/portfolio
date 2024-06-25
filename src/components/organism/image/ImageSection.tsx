import { useImage } from "@/hooks/useImage";
import { SectionLayout } from "./ImageLayoutStyles";
import ImageUpload from "./imageUpload/ImageUpload";
import CompareImage from "./compareImage/CompareImage";
import Dashboard from "./dashboard/Dashboard";

const ImageSection = () => {
  const {
    imageSrc,
    isDragEnter,
    getImage,
    onChangeType,
    onDragOver,
    onDragLeave,
    onDrop,
  } = useImage();

  return (
    <SectionLayout
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}>
      <ImageUpload getImage={getImage} isDragEnter={isDragEnter} />
      <CompareImage imageSrc={imageSrc} />
      <Dashboard onChangeType={onChangeType} />
    </SectionLayout>
  );
};

export default ImageSection;
