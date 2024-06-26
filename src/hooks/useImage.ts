import { filesToUrl, urlToImage } from "@/lib/util/imageProcessing";
import { useEffect, useRef, useState } from "react";

export const useImage = () => {
  const [imageSrc, setImageSrc] = useState("");
  const confRef = useRef<HTMLInputElement>(null);

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

  const onChangeConf = (e: React.MouseEvent<HTMLInputElement>) => {
    const { id } = e.currentTarget;
    if (confRef.current) {
      if (id === "up" && +confRef.current.value < 3) {
        confRef.current.value = String(
          (+confRef.current.value + 0.1).toFixed(1)
        );
      } else if (id === "down" && +confRef.current.value > 0) {
        confRef.current.value = String(
          (+confRef.current.value - 0.1).toFixed(1)
        );
      }
    }
  };

  const dropCallback = (files: FileList) => {
    const url = filesToUrl(files);
    urlToImage(url, (result) => setImageSrc(result));
  };

  return {
    imageSrc,
    confRef,
    getImage,
    onChangeConf,
    dropCallback,
  };
};
