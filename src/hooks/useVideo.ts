import { useState } from "react";

export const useVideo = () => {
  const [videoInfo, setVideoInfo] = useState<string>("");

  const getVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    if (files && files[0]) {
      const url = URL.createObjectURL(files[0]);
      setVideoInfo(url);
    }
  };

  return { videoInfo, getVideo };
};
