import { BaseAniType } from "@/types/animation.type";
import { DefaultTheme, RuleSet, css } from "styled-components";

export type PaletteTypes = typeof palette;
export type FontSizeTypes = typeof fontSize;
export type FontFamilyTypes = typeof fontFamily;
export type FontWeightTypes = typeof fontWeight;
export type TransitionTypes = typeof ts;
export type AnimationTypes = {
  fadeIn: (props: BaseAniType) => RuleSet<object>;
};

const fontSize = {
  extraMini: "14px",
  mini: "16px",
  small: "18px",
  medium: "20px",
  large: "30px",
  extra: "36px",
};

const palette = {
  white: "#fff",
  black: "#191919",
  gray: "#292929",
  gray100: "#ddd",
  gray200: "#A6A6A6",
  disabledBackground: "#c8bfb6",
  disabledColor: "#ece5d9",
  blue: "#2686d3",
  blue100: "#0080da",
  red: "#cf5b5d",
};

const fontFamily = {
  en: "Nunito",
  ko: "NanumSquareRound",
  loading: "Agbalumo",
};

const fontWeight = {
  regular: 400,
  bold: 700,
  extra: 900,
};

const ts = {
  moreFast: "cubic-bezier(0.63, 0.33, 0.17, 0.91)",
  smooth: "cubic-bezier(0.4, 0, 0.1, 1)",
};

export const animation = {
  fadeIn: ({
    name,
    beginTransform = "translate3d(0, 0, 0)",
    endTransform = "translate3d(0, 0, 0)",
    duration,
    transtion,
    delay,
    direction,
    opacity,
  }: BaseAniType) => css`
    @keyframes fade${name} {
      0% {
        opacity: ${opacity};
        transform: ${beginTransform};
      }
      100% {
        opacity: ${opacity === 1 ? 0 : 1};
        transform: ${endTransform};
      }
    }
    animation: ${"fade" + name} ${duration} ${transtion} ${delay} ${direction};
    will-change: transform opacity;
  `,
};

export const theme: DefaultTheme = {
  fontSize,
  palette,
  fontFamily,
  fontWeight,
  ts,
  animation,
};
