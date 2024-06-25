import { filesToUrl, urlToImage } from "@/lib/util/imageProcessing";
import { useEffect, useState } from "react";

export const useImage = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [isDragEnter, setIsDragEnter] = useState(false);

  useEffect(() => {
    urlToImage("/assets/img/opera.webp", (result) => setImageSrc(result));
  }, []);

  const getImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files[0] && files[0].type.includes("image")) {
      const url = filesToUrl(files);
      urlToImage(url, (result) => setImageSrc(result));
    } else {
      // 이미지 타입이 아닐 경우
      alert("이미지 타입이 아닙니다");
      return;
    }
  };

  const onChangeType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
  };

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
      const url = filesToUrl(files);
      urlToImage(url, (result) => setImageSrc(result));
      setIsDragEnter(false);
    }
  };

  return {
    imageSrc,
    isDragEnter,
    getImage,
    onChangeType,
    onDragOver,
    onDragLeave,
    onDrop,
  };
};
