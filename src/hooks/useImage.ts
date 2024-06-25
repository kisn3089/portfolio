import { urlToImage } from "@/lib/util/imageProcessing";
import { TImage } from "@/types/image.type";
import { useEffect, useState } from "react";

const defaultImage: TImage = {
  // origin: "/assets/img/pano.webp",
  origin: "/assets/img/opera.webp",
  custom: "",
};

export const useImage = () => {
  const [image, setImage] = useState<TImage>(defaultImage);

  useEffect(() => {
    urlToImage(image.origin, (result) =>
      setImage((prev) => ({ ...prev, custom: result }))
    );
  }, []);

  const getImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files[0] && files[0].type.includes("image")) {
      const url = URL.createObjectURL(files[0]);
      urlToImage(url, (result) =>
        setImage((prev) => ({ ...prev, custom: result }))
      );
    } else {
      // 이미지 타입이 아닐 경우
      alert("이미지 타입이 아닙니다");
      return;
    }
  };

  const onChangeType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setImage((prev) => ({ ...prev, fitType: value }));
  };

  return { image, getImage, onChangeType };
};
