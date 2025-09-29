import { useImage } from "@/hooks/useImage";
import { SectionLayout } from "./ImageLayoutStyles";
import ImageUpload from "./imageUpload/ImageUpload";
import CreateImage from "./createImage/CreateImage";
import Dashboard from "./dashboard/Dashboard";
import { useDrag } from "@/hooks/useDrag";

const ImageSection = () => {
  const {
    imageSrc,
    thresholdRef,
    currentSrc,
    getImage,
    onChangeConf,
    onChangeConfByInput,
    dropCallback,
    onCreate,
    onKeyDown,
    downImage,
  } = useImage();
  const { isDragEnter, onDragOver, onDragLeave, onDrop } =
    useDrag(dropCallback);

  return (
    <SectionLayout
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}>
      <ImageUpload getImage={getImage} isDragEnter={isDragEnter} />
      <CreateImage
        src={imageSrc.createSrc}
        isLoading={currentSrc === imageSrc.createSrc}
      />
      <Dashboard
        ref={thresholdRef}
        onChangeConf={onChangeConf}
        onChangeConfByInput={onChangeConfByInput}
        onCreate={onCreate}
        onKeyDown={onKeyDown}
        downImage={downImage}
      />
    </SectionLayout>
  );
};

export default ImageSection;
