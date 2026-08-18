import DemoGuide from "@/components/molecules/demo-guide/DemoGuide"
import MoveLinks from "@/components/molecules/demo-guide/links/MoveLinks"
import Architecture from "@/components/molecules/ssurak-architecture/Architecture"
import Core from "@/components/molecules/ssurak-core/Core"
import BackLink from "@/components/molecules/ssurak-header/BackLink"
import SsurakHeader from "@/components/molecules/ssurak-header/SsurakHeader"
import {
  SectionLayout,
  SsurakLayout,
} from "@/components/molecules/ssurak-section/SsurakSectionStyles"
import Why from "@/components/molecules/ssurak-why/Why"

export default function SsurakPage() {
  return (
    <SsurakLayout>
      <SectionLayout>
        <BackLink />
        <SsurakHeader />
        <Why />
        <Core />
        <Architecture />

        <DemoGuide>
          <MoveLinks />
        </DemoGuide>
      </SectionLayout>
    </SsurakLayout>
  )
}
