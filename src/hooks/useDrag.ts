import { filesToUrl, urlToImage } from "@/lib/util/imageProcessing";
import { useState } from "react";

export const useDrag = (callback: (files: FileList) => void) => {
  const [isDragEnter, setIsDragEnter] = useState(false);

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragEnter(true);
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragEnter(false);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const { files } = e.dataTransfer;
    if (files) {
      console.log("callback");

      callback(files);
      // const url = filesToUrl(files);
      // urlToImage(url, (result) => setImageSrc(result));
      setIsDragEnter(false);
    }
  };
  return { isDragEnter, onDragOver, onDragLeave, onDrop };
};
