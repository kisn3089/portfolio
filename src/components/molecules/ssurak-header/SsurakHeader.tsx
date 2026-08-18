import { PROJECTS } from "@/store/ProjectList"
import {
  Description,
  HeroBoard,
  HeroCart,
  HeroImages,
  HeroIntro,
  Highlight,
  SsurakHeaderLayout,
  SsurakTitle,
  Tags,
} from "./SsurakHeaderStyles"
import { SSURAK_HERO_IMAGES, SSURAK_OVERVIEW } from "@/store/SsurakDetail"

const tags = PROJECTS.find((item) => item.link === "/project/ssurak")?.tag
const { board, cart } = SSURAK_HERO_IMAGES

export default function SsurakHeader() {
  return (
    <SsurakHeaderLayout>
      <HeroIntro>
        <Tags>{tags}</Tags>
        <SsurakTitle>
          Ssurak<Highlight>.</Highlight>
        </SsurakTitle>
        <Description>{SSURAK_OVERVIEW}</Description>
      </HeroIntro>

      <HeroImages>
        <HeroBoard>
          <img src={board.src} alt={board.alt} loading="lazy" />
        </HeroBoard>
        <HeroCart $ratio={cart.ratio}>
          <img src={cart.src} alt={cart.alt} loading="lazy" />
        </HeroCart>
      </HeroImages>
    </SsurakHeaderLayout>
  )
}
