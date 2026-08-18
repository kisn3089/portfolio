import { ALink } from "@/components/molecules/aLink/ALink"
import { LinkButton, LinksLayout, SsurakLinkButton } from "./MoveLinksStyles"
import * as Svg from "../../../atoms/icon/index"
import { MoveRight } from "lucide-react"

const REPOSITORIES = [
  { label: "Frontend", to: "https://github.com/kisn3089/ssurak-frontend" },
  { label: "Backend", to: "https://github.com/kisn3089/ssurak-backend" },
  { label: "Infra", to: "https://github.com/kisn3089/ssurak-infra" },
]

export default function MoveLinks() {
  return (
    <LinksLayout>
      <ALink to="https://console.ssurak.com">
        <SsurakLinkButton>
          <p>Console</p>
          <MoveRight />
        </SsurakLinkButton>
      </ALink>
      {REPOSITORIES.map((repository) => (
        <ALink key={repository.label} to={repository.to}>
          <LinkButton>
            <Svg.Github />
            <p>{repository.label}</p>
          </LinkButton>
        </ALink>
      ))}
    </LinksLayout>
  )
}
