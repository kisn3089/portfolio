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
      callback(files);
      setIsDragEnter(false);
    }
  };
  return { isDragEnter, onDragOver, onDragLeave, onDrop };
};
