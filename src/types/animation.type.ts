export interface BaseAniType extends OptionAniType {
  name: string;
  duration: string;
  transtion: string;
}

interface OptionAniType {
  delay?: string;
  beginTransform?: string;
  direction?: "normal" | "forwards";
  endTransform?: string;
  opacity?: 0 | 1;
}
