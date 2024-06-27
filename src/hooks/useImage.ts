import { filesToUrl, urlToImage } from "@/lib/util/imageProcessing";
import { ImageSrcType } from "@/types/imageSrc.type";
import { useEffect, useRef, useState } from "react";

export const useImage = () => {
  const [imageSrc, setImageSrc] = useState<ImageSrcType>({
    createSrc: "",
    originSrc: "/assets/img/opera.webp",
  });
  const [loading, setLoading] = useState(false);
  const confRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (confRef.current?.value) {
      urlToImage(imageSrc.originSrc, confRef.current.value, (result) =>
        setImageSrc((prev) => ({ ...prev, createSrc: result }))
      );
    }
  }, []);

  const getImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (
      confRef.current &&
      files &&
      files[0] &&
      files[0].type.includes("image")
    ) {
      const url = filesToUrl(files);
      urlToImage(url, confRef.current.value, (result) =>
        setImageSrc({ createSrc: result, originSrc: url })
      );
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
    if (confRef.current)
      urlToImage(url, confRef.current.value, (result) =>
        setImageSrc({ createSrc: result, originSrc: url })
      );
  };

  const onCreate = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Create
    if (confRef.current) {
      urlToImage(imageSrc.originSrc, confRef.current.value, (result) =>
        setImageSrc((prev) => ({ ...prev, createSrc: result }))
      );
      console.log("Create!");
    }
  };

  const onDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Download
    console.log("Download!");
  };

  return {
    imageSrc,
    confRef,
    getImage,
    onChangeConf,
    dropCallback,
    onCreate,
    onDownload,
  };
};
