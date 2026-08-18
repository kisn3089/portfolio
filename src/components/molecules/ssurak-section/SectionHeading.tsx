import { HeadingLayout, SectionLabel, SectionTitle } from "./SsurakSectionStyles"

type SectionHeadingProps = {
  label: string
  title: string
}

export default function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <HeadingLayout>
      <SectionLabel>{label}</SectionLabel>
      <SectionTitle>{title}</SectionTitle>
    </HeadingLayout>
  )
}
