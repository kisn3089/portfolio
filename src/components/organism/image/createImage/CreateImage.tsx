import { ImageSrcType } from "@/types/imageSrc.type";
import { CreateImageLayout } from "./CreateImageStyles";
import EditImage from "@/components/molecule/editImage/EditImage";

const CreateImage = ({
  imageSrc,
  isLoading,
}: {
  imageSrc: ImageSrcType;
  isLoading: string;
}) => {
  return (
    <CreateImageLayout>
      <EditImage src={imageSrc.createSrc} isLoading={isLoading} />
    </CreateImageLayout>
  );
};

export default CreateImage;
