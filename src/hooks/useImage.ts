import { filesToUrl, urlToImage } from "@/lib/util/imageProcessing";
import { ImageSrcType } from "@/types/imageSrc.type";
import { useEffect, useRef, useState } from "react";

export const useImage = () => {
  const thresholdRef = useRef<HTMLInputElement>(null);
  const [currentSrc, setIsLoading] = useState("none");
  const [imageSrc, setImageSrc] = useState<ImageSrcType>({
    createSrc: "",
    originSrc: "/assets/img/sample_image.webp",
  });

  useEffect(() => {
    if (thresholdRef.current?.value) {
      urlToImage(imageSrc.originSrc, thresholdRef.current.value, (result) =>
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
    setTimeout(() => {
      if (
        thresholdRef.current &&
        files &&
        files[0] &&
        files[0].type.includes("image")
      ) {
        const url = filesToUrl(files);

        urlToImage(url, thresholdRef.current.value, (result) =>
          setImageSrc({ createSrc: result, originSrc: url })
        );
      } else {
        // 이미지 타입이 아닐 경우
        alert("이미지 타입이 아닙니다");
        setIsLoading("none");
        return;
      }
    }, 300);
  };

  const onChangeConf = (e: React.MouseEvent<HTMLInputElement>) => {
    const { id } = e.currentTarget;
    if (thresholdRef.current) {
      if (id === "up" && +thresholdRef.current.value < 3) {
        thresholdRef.current.value = String(
          (+thresholdRef.current.value + 0.1).toFixed(1)
        );
        thresholdRef.current.focus();
      } else if (id === "down" && +thresholdRef.current.value > 0) {
        thresholdRef.current.value = String(
          (+thresholdRef.current.value - 0.1).toFixed(1)
        );
        thresholdRef.current.focus();
      }
    }
  };

  const dropCallback = (files: FileList) => {
    getImage(undefined, files);
  };

  const onCreate = () => {
    setIsLoading(imageSrc.createSrc);
    setTimeout(() => {
      if (thresholdRef.current) {
        urlToImage(imageSrc.originSrc, thresholdRef.current.value, (result) => {
          setImageSrc((prev) => ({ ...prev, createSrc: result }));
        });
        console.log("Create!");
      }
    }, 300);
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
    thresholdRef,
    currentSrc,
    getImage,
    onChangeConf,
    dropCallback,
    onCreate,
    onKeyDown,
  };
};
