import { CompareLayout } from "./CompareImageStyles";
import EditImage from "@/components/molecule/editImage/EditImage";

const CompareImage = ({ imageSrc }: { imageSrc: string }) => {
  return (
    <CompareLayout>
      <EditImage src={imageSrc} />
    </CompareLayout>
  );
};

export default CompareImage;
