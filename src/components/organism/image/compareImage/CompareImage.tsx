import { TImage } from "@/types/image.type";
import { CompareLayout } from "./CompareImageStyles";
import EditImage from "@/components/molecule/editImage/EditImage";

const CompareImage = ({ image }: { image: TImage }) => {
  return (
    <CompareLayout>
      <EditImage src={image.origin} />
      <EditImage src={image.custom} />
    </CompareLayout>
  );
};

export default CompareImage;
