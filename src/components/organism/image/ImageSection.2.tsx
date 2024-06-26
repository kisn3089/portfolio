import { useImage } from "@/hooks/useImage";
import { SectionLayout } from "./ImageLayoutStyles";
import ImageUpload from "./imageUpload/ImageUpload";
import CompareImage from "./compareImage/CompareImage";
import Dashboard from "./dashboard/Dashboard";
import { useDrag } from "@/hooks/useDrag";

export const ImageSection = () => {
  const {
    imageSrc,
    isDragEnter,
    measureRef,
    getImage,
    ChangeMeasureValue,
    // onDragOver,
    // onDragLeave,
    // onDrop,
  } = useImage();
  const { onDragOver, onDragLeave, onDrop } = useDrag();

  return (
    <SectionLayout
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <ImageUpload getImage={getImage} isDragEnter={isDragEnter} />
      <CompareImage imageSrc={imageSrc} />
      <Dashboard ref={measureRef} ChangeMeasureValue={ChangeMeasureValue} />
    </SectionLayout>
  );
};
