import { SSURAK_CORE } from "@/store/SsurakDetail"
import SectionHeading from "../ssurak-section/SectionHeading"
import { SsurakSection } from "../ssurak-section/SsurakSectionStyles"
import CoreItem from "./CoreItem"
import { CoreList } from "./CoreStyles"

export default function Core() {
  return (
    <SsurakSection>
      <SectionHeading label="Core" title="핵심 구현" />
      <CoreList>
        {SSURAK_CORE.map((item) => (
          <CoreItem key={item.no} item={item} />
        ))}
      </CoreList>
    </SsurakSection>
  )
}
