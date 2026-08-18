import { SSURAK_WHY } from "@/store/SsurakDetail"
import SectionHeading from "../ssurak-section/SectionHeading"
import { SsurakSection } from "../ssurak-section/SsurakSectionStyles"
import {
  WhyCardLayout,
  WhyDescription,
  WhyGrid,
  WhyIndex,
  WhyTitle,
} from "./WhyStyles"

export default function Why() {
  return (
    <SsurakSection>
      <SectionHeading label="Why" title="매장이 새로 사야 할 장비를 0으로" />
      <WhyGrid>
        {SSURAK_WHY.map((card) => (
          <WhyCardLayout key={card.index}>
            <WhyIndex>{card.index}</WhyIndex>
            <WhyTitle>{card.title}</WhyTitle>
            <WhyDescription>{card.description}</WhyDescription>
          </WhyCardLayout>
        ))}
      </WhyGrid>
    </SsurakSection>
  )
}
