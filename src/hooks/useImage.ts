import { imageProcessing } from "@/lib/util/imageProcessing";
import { useRef, useState } from "react";

type TImage = {
  image: string;
  canvasEl: HTMLCanvasElement | null;
};

export const useImage = () => {
  const [image, setImage] = useState<TImage>({ image: "", canvasEl: null });
  const canvasRef = useRef<HTMLDivElement>(null);
  const getImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files[0] && files[0].type.includes("image")) {
      const url = URL.createObjectURL(files[0]);

      const imageEl = new Image();
      imageEl.src = url;
      // imageEl.width = 500;
      imageEl.height = 500;
      imageEl.onload = () => {
        const result = imageProcessing(imageEl);
        setImage({ image: url, canvasEl: result });
      };
    } else {
      // 이미지 타입이 아닐 경우
      alert("이미지 타입이 아닙니다");
      return;
    }
  };
  return { image, canvasRef, getImage };
};
