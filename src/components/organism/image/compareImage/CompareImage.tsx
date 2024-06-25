import { TImage } from "@/hooks/useImage";
import { CompareLayout } from "./CompareImageStyles";
import EditImage from "@/components/molecule/editImage/EditImage";

const CompareImage = ({ image }: { image: TImage }) => {
  return (
    <CompareLayout>
      <EditImage src={image.src} fitType={image.fitType} />
      <EditImage src={image.src} fitType={image.fitType} />
    </CompareLayout>
  );
};

export default CompareImage;
