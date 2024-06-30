import { CreateImageLayout } from "./CreateImageStyles";
import EditImage from "@/components/molecule/editImage/EditImage";

const CreateImage = ({
  src,
  isLoading,
}: {
  src: string;
  isLoading: boolean;
}) => {
  return (
    <CreateImageLayout>
      <EditImage src={src} isLoading={isLoading} />
    </CreateImageLayout>
  );
};

export default CreateImage;
