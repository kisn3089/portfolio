import React, { RefObject } from "react";
import { Loader, LoaderContainer, LoaderSpace } from "./LoaderByTextStyles";

interface ILoaderByText {
  progressRef: RefObject<HTMLParagraphElement>;
  content: string;
}

const LoaderByText = ({ progressRef, content }: ILoaderByText) => {
  return (
    <LoaderContainer>
      <LoaderSpace>{content}</LoaderSpace>
      <Loader ref={progressRef}>{content}</Loader>
    </LoaderContainer>
  );
};

export default LoaderByText;
