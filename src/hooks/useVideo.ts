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

export const useVideo = () => {
  const [videoInfo, setVideoInfo] = useState({ file: "", type: "" });
  const [isAllMarker, setAllMarker] = useState(false);
  const [stepTransCode, setStepTransCode] = useState<null | "wait" | "ok">(
    "wait"
  );

  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);

  const ffmpeg = createFFmpeg({
    log: true,
    progress: ({ ratio }: { ratio: number }) => console.log(ratio),
    // (barRef.current.style.width = `${ratio.toFixed(2) * 100}%`),
  });

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
    const videoElement = document.createElement("video-js");
    if (!playerRef.current) {
      videoElement.classList.add("vjs-big-play-centered");
      if (videoRef.current) videoRef.current.appendChild(videoElement);
      videoRef.current?.setAttribute("playsInline", "true");

      const player = videojs(videoElement, videoOptions);
      playerRef.current = player;

      // Volume 아래 마크 버튼
      const markerBtn = document.createElement("div");
      const icon = document.createElement("img");
      icon.src = Marker;
      markerBtn.className = "vjs-control vjs button";
      markerBtn.style.cssText = markerStyle;
      markerBtn.appendChild(icon);
      markerBtn.addEventListener("click", startMarker);

      const prevBtn = document.createElement("div");
      const prevIcon = document.createElement("img");
      prevIcon.src = Prev;
      prevBtn.appendChild(prevIcon);
      prevBtn.className = "vjs-control vjs button";
      prevBtn.style.cssText = prevBtnStyle;
      prevBtn.addEventListener("click", prevMarker);

      // pip 아래 Next 버튼
      const nextBtn = document.createElement("div");
      const nextIcon = document.createElement("img");
      nextIcon.src = Next;
      nextBtn.appendChild(nextIcon);
      nextBtn.className = "vjs-control vjs button";
      nextBtn.style.cssText = nextBtnStyle;
      nextBtn.addEventListener("click", nextMarker);

      // fullscreen 아래 markers Reset 버튼
      const resetMarkersBtn = document.createElement("img");
      resetMarkersBtn.style.cssText = resetMarkerStyle;
      resetMarkersBtn.src = RemoveAllMarker;
      resetMarkersBtn.className = "vjs-control vjs button";
      resetMarkersBtn.addEventListener("click", removeMarker);

      // Marker
      // @ts-ignore
      player.controlBar.el().childNodes[3].appendChild(
        markerBtn,
        // @ts-ignore
        player.controlBar.el().childNodes[3].childNodes[3]
      );

      // Prev
      // @ts-ignore
      player.controlBar.el().childNodes[12].appendChild(
        prevBtn,
        // @ts-ignore
        player.controlBar.el().childNodes[12].childNodes[3]
      );

      // Next
      // @ts-ignore
      player.controlBar.el().childNodes[17].appendChild(
        nextBtn,
        // @ts-ignore
        player.controlBar.el().childNodes[17].childNodes[2]
      );

      // Remove
      // @ts-ignore
      player.controlBar.el().childNodes[18].appendChild(
        resetMarkersBtn,
        // @ts-ignore
        player.controlBar.el().childNodes[18].childNodes[2]
      );

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
        mxfToMp4(files[0], videoType);
      } else {
        const url = URL.createObjectURL(files[0]);
        setVideoInfo({ file: url, type: files[0].type });
      }
    }
  };

  const mxfToMp4 = async (files: File, videoType: string) => {
    await ffmpeg.load();
    // mxf 확장자로 한정x
    // ffmpeg.FS("writeFile", `transmp4.mxf`, await fetchFile(files));
    ffmpeg.FS("writeFile", `transmp4.${videoType}`, await fetchFile(files));
    setStepTransCode("wait");
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
    setStepTransCode("ok");
    setVideoInfo({ file: url, type: "video/mp4" });
  };

  const startMarker = () => {
    if (playerRef.current) {
      if (isAllMarker) return;
      // @ts-ignore
      const markers = playerRef.current.markers.getMarkers();
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
    const markers = playerRef.current.markers.getMarkers();
    const findStartTime = markers.find(
      (f: { time: number; text: string }) => f.text === "Start"
    );
    playerRef.current?.currentTime(findStartTime.time);
  };

  return {
    videoInfo,
    videoRef,
    isAllMarker,
    stepTransCode,
    getVideo,
    sectionPlay,
  };
};
