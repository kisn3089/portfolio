import { theme } from "@/styles/theme"
import styled from "styled-components"

export const SsurakLayout = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;

  padding: 60px;

  @media screen and (max-width: ${theme.deviceSize.tablet}) {
    padding: 20px;
  }
`

export const SectionLayout = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.deviceSize.tablet};
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    gap: 56px;
  }
`

export const SsurakSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const HeadingLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const SectionLabel = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.en};
  font-size: ${({ theme }) => theme.fontSize.extraMini};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.palette.gray200};
  letter-spacing: 0.1em;
`

export const SectionTitle = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamily.ko};
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.extra};
  line-height: 1.25;
  color: ${({ theme }) => theme.palette.white};

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`

/** 스크린샷 원본이 흰 배경이라 카드 배경도 흰색이다. */
export const ImageCard = styled.figure`
  max-width: 90%;
  margin: 0;
  border: 1px solid ${({ theme }) => theme.palette.gray};
  border-radius: 14px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.white};

  img,
  video {
    display: block;
    width: 100%;
    height: auto;
  }
`

/** 세로 캡처는 비율로 잘라 옆 이미지와 높이를 맞춘다. */
export const PortraitCard = styled(ImageCard)<{ $ratio: string }>`
  flex: 0 0 340px;
  aspect-ratio: ${({ $ratio }) => $ratio};

  img {
    height: 100%;

    object-fit: cover;
    object-position: top center;
  }

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    flex: 0 0 140px;
  }
`

/** 세로 캡처 옆에서 남은 폭을 채우는 카드. */
export const WideCard = styled(ImageCard)`
  flex: 1;
  min-width: 0;
`
