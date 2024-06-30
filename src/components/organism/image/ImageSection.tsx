import { useImage } from "@/hooks/useImage";
import { SectionLayout } from "./ImageLayoutStyles";
import ImageUpload from "./imageUpload/ImageUpload";
import CreateImage from "./createImage/CreateImage";
import Dashboard from "./dashboard/Dashboard";
import { useDrag } from "@/hooks/useDrag";

export type TRef = {
  testRef: React.RefObject<HTMLInputElement>;
  confRef: React.RefObject<HTMLInputElement>;
};

const ImageSection = () => {
  const {
    imageSrc,
    confRef,
    isLoading,
    getImage,
    onChangeConf,
    dropCallback,
    onCreate,
    onKeyDown,
  } = useImage();
  const { isDragEnter, onDragOver, onDragLeave, onDrop } =
    useDrag(dropCallback);

  return (
    <SectionLayout
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}>
      <ImageUpload getImage={getImage} isDragEnter={isDragEnter} />
      <CreateImage imageSrc={imageSrc} />
      <Dashboard
        ref={confRef}
        createSrc={imageSrc.createSrc}
        isLoading={isLoading}
        onChangeConf={onChangeConf}
        onCreate={onCreate}
        onKeyDown={onKeyDown}
      />
    </SectionLayout>
  );
};

export default ImageSection;
