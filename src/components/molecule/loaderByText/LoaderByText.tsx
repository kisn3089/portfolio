import { RefObject } from "react";
import { Loader, LoaderContainer, LoaderSpace } from "./LoaderByTextStyles";

interface ILoaderByText {
  progressRef: RefObject<HTMLParagraphElement>;
  content: string;
}

const LoaderByText = ({ progressRef, content }: ILoaderByText) => {
  return (
    <LoaderContainer>
      <LoaderSpace>
        <Loader ref={progressRef}>{content}</Loader>
        {content}
      </LoaderSpace>
    </LoaderContainer>
  );
};

export default LoaderByText;
