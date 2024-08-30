import "styled-components";
import {
  PaletteTypes,
  FontSizeTypes,
  FontFamilyTypes,
  FontWeightTypes,
  TransitionTypes,
  AnimationTypes,
  DeviceSizeTypes,
} from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: PaletteTypes;
    fontSize: FontSizeTypes;
    fontFamily: FontFamilyTypes;
    fontWeight: FontWeightTypes;
    ts: TransitionTypes;
    animation: AnimationTypes;
    deviceSize: DeviceSizeTypes;
  }
}
