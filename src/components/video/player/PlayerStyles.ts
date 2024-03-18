import styled from "styled-components";

export const VideoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px 0;
  flex-direction: column;
`;

export const VideoSize = styled.div`
  width: 1200px;
  height: 675px;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center;
  align-items: center; */
  gap: 0 30px;
`;

export const SectionPlayButton = styled.button`
  padding: 16px 30px;
  border-radius: 8px;
  outline: none;
  border: none;
  cursor: pointer;
  letter-spacing: 1px;
  background-color: ${({ theme }) => theme.palette.white};
  color: ${({ theme }) => theme.palette.black};
  font-size: ${({ theme }) => theme.fontSize.mini};
  transition: 0.4s ease-in-out;

  &:disabled {
    background-color: ${({ theme }) => theme.palette.disabledBackground};
    color: ${({ theme }) => theme.palette.disabledColor};
    cursor: not-allowed;
  }
`;

export const VideoPlayer = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 0px 80px 1px rgba(255, 255, 255, 0.3);
  .video-js .vjs-time-control {
    display: block;
  }
  .video-js .vjs-remaining-time {
    display: none;
  }
  .vjs-marker {
    margin-left: 0 !important;
    display: block !important;
  }
  .vjs-progress-control .vjs-control:hover .video-js .vjs-progress-holder {
    height: 0.4em;
  }
  .video-js .vjs-control-bar {
    width: 80% !important;
    height: 5.5em !important;
    bottom: 2em !important;
    border-radius: 15px !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    backdrop-filter: blur(2px) !important;
    background-color: rgba(68, 68, 68, 0.7) !important;
  }
  .video-js .vjs-play-control {
    width: 5%;
  }
  .video-js .vjs-play-control .vjs-icon-placeholder:before {
    font-size: 3em;
  }
  .vjs-button > .vjs-icon-placeholder:before {
    position: inherit;
  }
  .vjs-icon-placeholder {
    position: absolute;
    top: 0;
    left: 25%;
  }
  /* 볼륨 버튼 Wrapper */
  .vjs-volume-panel.vjs-control.vjs-volume-panel-horizontal {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 50%;
  }
  .vjs-volume-panel.vjs-volume-panel-horizontal:active {
  }
  /* 볼륨 버튼 높이 조절 */
  .vjs-mute-control.vjs-control.vjs-button.vjs-vol-0 {
    transform: translate3d(0, 40%, 0);
    height: 50%;
  }
  /* ResetMarkers, Capture 버튼 Wrapper */
  .vjs-picture-in-picture-control.vjs-control.vjs-button {
    display: flex;
    flex-direction: column;
  }
  .vjs-picture-in-picture-control.vjs-control.vjs-button,
  .vjs-fullscreen-control.vjs-control.vjs-button {
    height: 50%;
  }
  .vjs-current-time.vjs-time-control.vjs-control,
  .vjs-duration.vjs-time-control.vjs-control,
  .vjs-time-control.vjs-time-divider {
    display: flex;
    align-items: center;
  }
  .vjs-playback-rate-value {
    position: relative !important;
    height: 50% !important;
  }
`;
