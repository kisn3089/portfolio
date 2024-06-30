import { filesToUrl, urlToImage } from "@/lib/util/imageProcessing";
import { ImageSrcType } from "@/types/imageSrc.type";
import { useEffect, useRef, useState } from "react";

export const useImage = () => {
  const confRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState("none");
  const [imageSrc, setImageSrc] = useState<ImageSrcType>({
    createSrc: "",
    originSrc: "/assets/img/sample_image.webp",
  });

  useEffect(() => {
    if (confRef.current?.value) {
      urlToImage(imageSrc.originSrc, confRef.current.value, (result) =>
        setImageSrc((prev) => ({ ...prev, createSrc: result }))
      );
    }
  }, []);

  const getImage = (
    e?: React.ChangeEvent<HTMLInputElement>,
    file?: FileList | null
  ) => {
    setIsLoading(imageSrc.createSrc);
    let files: FileList | null = null;
    if (e?.target) files = e?.target.files;
    if (file) files = file;
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
        confRef.current.focus();
      } else if (id === "down" && +confRef.current.value > 0) {
        confRef.current.value = String(
          (+confRef.current.value - 0.1).toFixed(1)
        );
        confRef.current.focus();
      }
    }
  };

  const dropCallback = (files: FileList) => {
    getImage(undefined, files);
  };

  const onCreate = () => {
    setIsLoading(imageSrc.createSrc);
    if (confRef.current) {
      urlToImage(imageSrc.originSrc, confRef.current.value, (result) => {
        setImageSrc((prev) => ({ ...prev, createSrc: result }));
      });
      console.log("Create!");
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") onCreate();
    if (
      (e.code === "Enter" && e.metaKey) ||
      (e.code === "Enter" && e.ctrlKey)
    ) {
      const downEl = document.getElementById("download");
      downEl?.click();
    }
  };

  return {
    imageSrc,
    confRef,
    isLoading,
    getImage,
    onChangeConf,
    dropCallback,
    onCreate,
    onKeyDown,
  };
};
