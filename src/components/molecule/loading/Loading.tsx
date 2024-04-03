import { LoadingContainer } from "./LoadingStyles";
import * as Svg from "../../atoms/icon/index";

interface LoadingProps {
  isLoading: boolean;
}

const Loading = ({ isLoading }: LoadingProps) => {
  return (
    <LoadingContainer $isLoading={isLoading}>
      <Svg.Spinner />
    </LoadingContainer>
  );
};

export default Loading;
