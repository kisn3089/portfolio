import { VideoJsPlayer } from "video.js";

declare module "video.js" {
  interface VideoJsPlayer {
    markers(options?: VideoJsMarkersOptions): void;
  }
}

export interface VideoJsMarkerPluginSettings {
  markerStyle?: object;
  markerTip?: {
    display?: boolean;
    html?(marker: VideoJsMarker): string;
    text?(marker: VideoJsMarker): string;
    time?(marker: VideoJsMarker): number;
  };
  breakOverlay?: {
    display: boolean;
    displayTime: number;
    style: object;
    text(marker: VideoJsMarker): string;
  };
  markers?: VideoJsMarker[];
  onMarkerClick?(marker: VideoJsMarker): boolean | void;
  onMarkerReached?(marker: VideoJsMarker, index: number): void;
  onTimeUpdateAfterMarkerUpdate?(): void;
}
