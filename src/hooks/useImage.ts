import { urlToImage } from "@/lib/util/imageProcessing";
import { ImageSrcType } from "@/types/imageSrc.type";
import { useEffect, useRef, useState } from "react";

const imageValidationSchema = ["jpg", "png", "ico", "webp"];
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

  const validImageFile = (files: FileList | null): files is FileList => {
    if (!files) return false;

    const isValid = imageValidationSchema.some((ext) =>
      files[0].type.includes(ext)
    );
    return isValid && files && files[0] && files[0].type.includes("image");
  };

  const getImage = (
    e?: React.ChangeEvent<HTMLInputElement>,
    file?: FileList | null
  ) => {
    setIsLoading(imageSrc.createSrc);
    let files: FileList | null = null;
    if (e?.target) files = e.target.files;
    if (file) files = file;

    if (!validImageFile(files) || !thresholdRef.current) {
      setIsLoading("none");
      const errorMessage = ".jpg, .png, .ico, .webp 파일만 업로드 가능합니다.";
      alert(errorMessage);
      throw new Error(errorMessage);
    }

    const url = URL.createObjectURL(files[0]);
    urlToImage(url, thresholdRef.current.value, (result) => {
      setImageSrc({ createSrc: result, originSrc: url });
    });
  };

  const onChangeConf = (e: React.MouseEvent<HTMLDivElement>) => {
    const { id } = e.currentTarget;
    if (thresholdRef.current) {
      if (id === "up" && +thresholdRef.current.value < 3) {
        thresholdRef.current.value = Math.min(
          +thresholdRef.current.value + 0.1,
          3
        ).toFixed(1);

        thresholdRef.current.focus();
      } else if (id === "down" && +thresholdRef.current.value > 0) {
        thresholdRef.current.value = Math.max(
          +thresholdRef.current.value - 0.1,
          0
        ).toFixed(1);
        thresholdRef.current.focus();
      }
    }
  };

  const onChangeConfByInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (thresholdRef.current) {
      thresholdRef.current.value = Math.min(
        Math.max(+e.target.value, 0),
        3
      ).toString();
    }
  };

  const dropCallback = (files: FileList) => {
    getImage(undefined, files);
  };

  const onCreate = () => {
    setIsLoading(imageSrc.createSrc);
    if (thresholdRef.current) {
      urlToImage(imageSrc.originSrc, thresholdRef.current.value, (result) => {
        setImageSrc((prev) => ({ ...prev, createSrc: result }));
      });
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      (e.code === "Enter" && e.metaKey) ||
      (e.code === "Enter" && e.ctrlKey)
    ) {
      downImage();
    } else if (e.code === "Enter") onCreate();
  };

  const downImage = () => {
    const aTag = document.createElement("a");

    aTag.href = imageSrc.createSrc || imageSrc.originSrc;
    aTag.download = "create_image";
    aTag.click();
  };

  return {
    imageSrc,
    thresholdRef,
    currentSrc,
    getImage,
    onChangeConf,
    onChangeConfByInput,
    dropCallback,
    onCreate,
    onKeyDown,
    downImage,
  };
};
