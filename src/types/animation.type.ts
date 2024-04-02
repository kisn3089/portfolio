export interface BaseAniType extends OptionAniType {
  name: string;
  duration: string;
  beginTransform: string;
  endTransform: string;
}

interface OptionAniType {
  delay?: string;
  direction?: "normal" | "forwards";
}
