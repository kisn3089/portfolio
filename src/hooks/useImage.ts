import { imageProcessing } from "@/lib/util/imageProcessing";
import { useState } from "react";

export type TFitType = "cover" | "contain";

export type TImage = {
  src: string;
  fitType: TFitType;
};

export const useImage = () => {
  const [image, setImage] = useState<TImage>({
    src: "/assets/img/opera.webp",
    fitType: "cover",
  });

  const getImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files[0] && files[0].type.includes("image")) {
      const url = URL.createObjectURL(files[0]);

      const imageEl = new Image();
      imageEl.src = url;
      imageEl.onload = () => {
        const result = imageProcessing(imageEl);
        setImage((prev) => ({ ...prev, src: result }));
      };
    } else {
      // 이미지 타입이 아닐 경우
      alert("이미지 타입이 아닙니다");
      return;
    }
  };

  const onChangeType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log(e.target.value);
    setImage((prev) => ({ ...prev, fitType: value as TFitType }));
  };

  return { image, getImage, onChangeType };
};
