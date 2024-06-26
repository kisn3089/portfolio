import { filesToUrl, urlToImage } from "@/lib/util/imageProcessing";
import { useEffect, useRef, useState } from "react";

export const useImage = () => {
  const [imageSrc, setImageSrc] = useState("");
  const measureRef = useRef<HTMLInputElement>(null);

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
    if (measureRef.current) {
      if (id === "up" && +measureRef.current.value < 3) {
        measureRef.current.value = String(
          (+measureRef.current.value + 0.1).toFixed(1)
        );
      } else if (id === "down" && +measureRef.current.value > 0) {
        measureRef.current.value = String(
          (+measureRef.current.value - 0.1).toFixed(1)
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
    measureRef,
    getImage,
    onChangeConf,
    dropCallback,
  };
};
