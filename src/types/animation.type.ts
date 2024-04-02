export interface BaseAniType extends OptionAniType {
  name: string;
  duration: string;
  transtion: string;
}

interface OptionAniType {
  beginTransform?: string;
  endTransform?: string;
  beginAgrs?: string;
  endAgrs?: string;
  direction?: "normal" | "forwards" | "alternate";
  opacity?: 0 | 1;
  delay?: string;
  count?: number | "infinite";
}
