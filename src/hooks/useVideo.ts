import { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "videojs-markers";
import "video.js/dist/video-js.css";
import "videojs-hotkeys";
import Player from "video.js/dist/types/player";
import {
  markerCustomStyle,
  markerStyle,
  nextBtnStyle,
  prevBtnStyle,
  resetMarkerStyle,
} from "@/styles/VideoStyle";
import Prev from "../assets/icons/prev.svg";
import Next from "../assets/icons/next.svg";
import Marker from "../assets/icons/marker.svg";
import RemoveAllMarker from "../assets/icons/removeMarker.svg";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import { ConverStepType } from "@/types/convertStep.type";

export const useVideo = () => {
  const [videoInfo, setVideoInfo] = useState({ file: "", type: "" });
  const [isAllMarker, setAllMarker] = useState(false);
  const [convertStep, setConvertStep] = useState<ConverStepType>({
    step: null,
    msg: "",
  });

  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);
  const progressRef = useRef<HTMLParagraphElement>(null);

  const ffmpeg = createFFmpeg({
    // log: true,
    progress: ({ ratio }: { ratio: number }) => {
      if (progressRef.current) {
        progressRef.current.style.width = `${Number(ratio.toFixed(2)) * 100}%`;
      }
    },
  });

  // useEffect(() => {
  //   if (progressRef.current) {
  //     progressRef.current.style.width = `90%`;
  //   }
  // }, []);

  const videoOptions = {
    playbackRates: [0.25, 0.5, 1, 1.5, 2, 4, 8],
    autoplay: true,
    preload: "auto",
    muted: true,
    controls: true,
    responsive: true,
    fluid: true,
    aspectRatio: "16:9",
    plugins: {
      hotkeys: {
        volumeStep: 0.1,
        seekStep: 5,
        enableModifiersForNumbers: false,
      },
    },
    sources: [
      {
        src: videoInfo.file,
        type: videoInfo.type,
      },
    ],
  };

  useEffect(() => {
    if (videoInfo.file) {
      const videoElement = document.createElement("video-js");

      if (!playerRef.current) {
        videoElement.classList.add("vjs-big-play-centered");
        if (videoRef.current) videoRef.current.appendChild(videoElement);
        videoRef.current?.setAttribute("playsInline", "true");

        const player = videojs(videoElement, videoOptions);
        playerRef.current = player;

        const controls = document.querySelector(".vjs-control-bar");

        addControlEls.forEach((el) => {
          const div = document.createElement("div");
          const img = document.createElement("img");
          img.src = el.src;
          div.className = "vjs-control vjs button";
          div.style.cssText = el.style;
          div.appendChild(img);
          div.addEventListener("click", el.clickHandler);

          controls?.childNodes[el.node].appendChild(div);
        });

        // @ts-ignore
        player.markers({
          markerStyle: markerCustomStyle,
        });

        // player.on("loadeddata", () => {
        //   console.log("loadeddata!!");
        // });

        videoElement.focus();
      } else {
        const player = playerRef.current;
        player.autoplay(videoOptions.autoplay);
        player.src(videoOptions.sources);
      }
    }
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef, videoInfo]);

  const getVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    if (files && files[0]) {
      const videoType = files[0].name.split(".").at(-1);
      if (videoType && videoType.toLocaleLowerCase() !== "mp4") {
        ffmpegConvert(files[0], videoType);
      } else {
        const url = URL.createObjectURL(files[0]);
        setVideoInfo({ file: url, type: files[0].type });
      }
    }
  };

  const ffmpegConvert = async (files: File, videoType: string) => {
    try {
      setConvertStep({ step: "wait", msg: "" });
      await ffmpeg.load();
      // mxf 확장자로 한정x
      // ffmpeg.FS("writeFile", `transmp4.mxf`, await fetchFile(files));
      ffmpeg.FS("writeFile", `transmp4.${videoType}`, await fetchFile(files));
      await ffmpeg.run(
        "-i",
        `transmp4.${videoType}`,
        "-c:v",
        "libx264",
        "-preset",
        "ultrafast",
        "-qp",
        "0",
        "transmp4.mp4"
      );
      const data = ffmpeg.FS("readFile", "transmp4.mp4");
      const url = URL.createObjectURL(
        new Blob([data.buffer], { type: "video/mp4" })
      );
      setConvertStep({ step: "ok", msg: "" });
      setVideoInfo({ file: url, type: "video/mp4" });
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        setConvertStep({ step: "error", msg: err.message });
      }
    }
  };

  const startMarker = () => {
    if (playerRef.current) {
      // @ts-ignore
      const markers = playerRef.current.markers.getMarkers();

      if (markers.find((f: { time: number; text: string }) => f.text === "End"))
        return;

      if (
        !markers.find((f: { time: number; text: string }) => f.text === "Start")
      ) {
        // @ts-ignore
        playerRef.current.markers.add([
          {
            // @ts-ignore
            time: parseInt(playerRef.current.currentTime()),
            text: "Start",
          },
        ]);
      } else {
        // @ts-ignore
        playerRef.current.markers.add([
          {
            // @ts-ignore
            time: parseInt(playerRef.current.currentTime()),
            text: "End",
          },
        ]);
        setAllMarker(true);
      }
    }
  };

  const prevMarker = () => {
    // @ts-ignore
    if (playerRef.current) playerRef.current.markers.prev();
  };

  const nextMarker = (e: MouseEvent) => {
    e.stopPropagation();
    // @ts-ignore
    if (playerRef.current) playerRef.current.markers.next();
  };

  const removeMarker = (e: MouseEvent) => {
    e.stopPropagation();
    // @ts-ignore
    if (playerRef.current) playerRef.current.markers.removeAll();
    setAllMarker(false);
  };

  const sectionPlay = () => {
    // @ts-ignore
    const [start, end] = playerRef.current.markers.getMarkers();

    playerRef.current?.currentTime(start.time);
    playerRef.current?.play();

    const observeTime = () => {
      const pauseCondition = playerRef.current?.currentTime();
      if (pauseCondition && pauseCondition >= end.time) {
        playerRef.current?.pause();
        playerRef.current?.off("timeupdate", observeTime);
      }
    };
    playerRef.current?.on("timeupdate", observeTime);
  };

  const addControlEls = [
    {
      src: Marker,
      node: 3,
      style: markerStyle,
      clickHandler: startMarker,
    },
    {
      src: Prev,
      node: 12,
      style: prevBtnStyle,
      clickHandler: prevMarker,
    },
    {
      src: Next,
      node: 17,
      style: nextBtnStyle,
      clickHandler: nextMarker,
    },
    {
      src: RemoveAllMarker,
      node: 18,
      style: resetMarkerStyle,
      clickHandler: removeMarker,
    },
  ];

  return {
    videoInfo,
    videoRef,
    isAllMarker,
    convertStep,
    progressRef,
    getVideo,
    sectionPlay,
  };
};
