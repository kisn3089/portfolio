import { SSURAK_ARCHITECTURE } from "@/store/SsurakDetail"
import SectionHeading from "../ssurak-section/SectionHeading"
import { SsurakSection } from "../ssurak-section/SsurakSectionStyles"
import { ArchitectureDescription, DiagramCard } from "./ArchitectureStyles"

export default function Architecture() {
  const { description, image } = SSURAK_ARCHITECTURE

  return (
    <SsurakSection>
      <SectionHeading label="Architecture" title="런타임 구조" />
      <ArchitectureDescription>{description}</ArchitectureDescription>
      <DiagramCard>
        <img src={image.src} alt={image.alt} loading="lazy" />
      </DiagramCard>
    </SsurakSection>
  )
}
