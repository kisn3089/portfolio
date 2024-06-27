import { ImageSrcType } from "@/types/imageSrc.type";
import { CreateImageLayout } from "./CreateImageStyles";
import EditImage from "@/components/molecule/editImage/EditImage";

const CreateImage = ({ imageSrc }: { imageSrc: ImageSrcType }) => {
  return (
    <CreateImageLayout>
      <EditImage src={imageSrc.createSrc} />
    </CreateImageLayout>
  );
};

export default CreateImage;
