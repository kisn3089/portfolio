import { LoadingContainer } from "./LoadingStyles";
import * as Svg from "../../atoms/icon/index";

interface LoadingProps {
  isLoading: boolean;
  bgColor?: string;
}

const Loading = ({ isLoading, bgColor }: LoadingProps) => {
  return (
    <LoadingContainer $isLoading={isLoading} $bgColor={bgColor}>
      <Svg.Spinner />
    </LoadingContainer>
  );
};

export default Loading;
