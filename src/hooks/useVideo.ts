import { useEffect, useRef, useState } from "react";
import videojs, { VideoJsPlayer } from "video.js";
import "videojs-markers";
import "video.js/dist/video-js.css";
import "videojs-hotkeys";
import Player from "video.js/dist/types/player";
import { markerCustomStyle } from "@/styles/VideoStyle";
import { VideoJsMarkerPluginSettings } from "@/types/video.js.markers";

export const useVideo = () => {
  const [videoInfo, setVideoInfo] = useState({ file: "", type: "" });
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);

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
    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");
      videoElement.classList.add("vjs-big-play-centered");
      if (videoRef.current) videoRef.current.appendChild(videoElement);

      const player = videojs(videoElement, videoOptions);
      playerRef.current = player;

      // player.markers({
      //   markerStyle: markerCustomStyle,
      //   // onMarkerClick: function (marker) {},
      //   // onMarkerReached: function (marker) {},
      // });

      player.on("loadeddata", () => {
        console.log("loadeddata!!");
      });

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
      const url = URL.createObjectURL(files[0]);

      setVideoInfo({ file: url, type: files[0].type });
    }
  };

  return { videoInfo, videoRef, getVideo };
};
