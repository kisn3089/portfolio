import { imageProcessing } from "@/lib/util/imageProcessing";
import { useState } from "react";

export const useImage = () => {
  const [image, setImage] = useState("");
  const getImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files[0] && files[0].type.includes("image")) {
      console.log(files[0].type);
      const url = URL.createObjectURL(files[0]);
      setImage(url);
      const image = new Image();
      image.src = url;
      image.width = 500;
      image.height = 500;
      imageProcessing(image);
    } else {
      // 이미지 타입이 아닐 경우
      alert("이미지 타입이 아닙니다");
      return;
    }
  };
  return { image, getImage };
};
