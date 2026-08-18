import { CoreContent, CoreMedia } from "@/store/SsurakDetail"
import {
  ImageCard,
  PortraitCard,
  WideCard,
} from "../ssurak-section/SsurakSectionStyles"
import {
  Chip,
  ChipLayout,
  CoreImageRow,
  CoreImageStack,
  CoreItemLayout,
  CoreNote,
  CoreNoteLabel,
  CoreNoteLayout,
  CoreNoteText,
  CoreNumber,
  CoreTitle,
} from "./CoreStyles"

type CoreItemProps = {
  item: CoreContent
}

const isVideo = (src: string) => src.endsWith(".mp4")

const Media = ({ media, isRow }: { media: CoreMedia; isRow: boolean }) => {
  const shot = isVideo(media.src) ? (
    <video
      src={media.src}
      aria-label={media.alt}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
    />
  ) : (
    <img src={media.src} alt={media.alt} loading="lazy" />
  )

  if (media.ratio)
    return <PortraitCard $ratio={media.ratio}>{shot}</PortraitCard>
  if (isRow) return <WideCard>{shot}</WideCard>
  return <ImageCard>{shot}</ImageCard>
}

export default function CoreItem({ item }: CoreItemProps) {
  const notes = [
    { label: "문제", text: item.problem },
    { label: "접근", text: item.approach },
    { label: "결과", text: item.result, highlight: true },
  ]

  return (
    <CoreItemLayout>
      <CoreNumber>{item.no}</CoreNumber>
      <CoreTitle>{item.title}</CoreTitle>

      <CoreNoteLayout>
        {notes.map((note) => (
          <CoreNote key={note.label}>
            <CoreNoteLabel>{note.label}</CoreNoteLabel>
            <CoreNoteText $highlight={note.highlight}>{note.text}</CoreNoteText>
          </CoreNote>
        ))}
      </CoreNoteLayout>

      <ChipLayout>
        {item.chips.map((chip) => (
          <Chip key={chip}>{chip}</Chip>
        ))}
      </ChipLayout>

      <CoreImageStack>
        {item.mediaRows.map((row, rowIndex) => (
          <CoreImageRow key={rowIndex}>
            {row.map((media) => (
              <Media key={media.src} media={media} isRow={row.length > 1} />
            ))}
          </CoreImageRow>
        ))}
      </CoreImageStack>
    </CoreItemLayout>
  )
}
