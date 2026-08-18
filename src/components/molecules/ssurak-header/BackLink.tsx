import { Link } from "react-router-dom"
import { BackLinkButton } from "./SsurakHeaderStyles"

const scrollTop = () => window.scrollTo({ top: 0 })

export default function BackLink() {
  return (
    <Link to="/project" onClick={scrollTop}>
      <BackLinkButton>← 프로젝트 목록</BackLinkButton>
    </Link>
  )
}
