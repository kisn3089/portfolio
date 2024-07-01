import { useImage } from "@/hooks/useImage";
import { SectionLayout } from "./ImageLayoutStyles";
import ImageUpload from "./imageUpload/ImageUpload";
import CreateImage from "./createImage/CreateImage";
import Dashboard from "./dashboard/Dashboard";
import { useDrag } from "@/hooks/useDrag";
import { useStorage } from "@/hooks/useStorage";

const ImageSection = () => {
  const {
    imageSrc,
    thresholdRef,
    currentSrc,
    getImage,
    onChangeConf,
    dropCallback,
    onCreate,
    onKeyDown,
  } = useImage();
  const { isDragEnter, onDragOver, onDragLeave, onDrop } =
    useDrag(dropCallback);
  const { isFirst, onSetStorage, onDeleteStorage } = useStorage("image");

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
        createSrc={imageSrc.createSrc}
        onChangeConf={onChangeConf}
        onCreate={onCreate}
        onKeyDown={onKeyDown}
      />
      <button onClick={() => onSetStorage("image")}>SetStorage</button>
      <button onClick={() => onDeleteStorage("image")}>SetStorage</button>
    </SectionLayout>
  );
};

export default ImageSection;
