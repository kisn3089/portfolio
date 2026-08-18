import { theme } from "@/styles/theme"
import styled from "styled-components"
import {
  ImageCard,
  PortraitCard,
} from "../ssurak-section/SsurakSectionStyles"

export const SsurakHeaderLayout = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

/** 가로 캡처와 세로 캡처를 같은 높이로 나란히 세운다. */
export const HeroImages = styled.div`
  display: flex;
  gap: 12px;
  height: 300px;

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    height: 200px;
  }
`

export const HeroBoard = styled(ImageCard)`
  flex: 1;
  min-width: 0;
  height: 100%;

  img {
    height: 100%;
    object-fit: cover;
    object-position: top left;
  }
`

/** 비율대로 폭이 정해지도록 고정 폭 대신 높이를 기준으로 잡는다. */
export const HeroCart = styled(PortraitCard)`
  flex: 0 0 auto;
  height: 100%;

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    flex: 0 0 auto;
  }
`

export const HeroIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const SsurakTitle = styled.h1`
  display: flex;
  gap: 6px;
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamily.en};
  font-size: ${({ theme }) => theme.fontSize.extra};
  font-weight: ${({ theme }) => theme.fontWeight.extra};
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.palette.white};
`

export const Highlight = styled(SsurakTitle)`
  color: #109e8e;
`

export const Description = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamily.ko};
  font-size: ${({ theme }) => theme.fontSize.mini};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.5;
  color: ${({ theme }) => theme.palette.gray100};
  white-space: pre-line;
`

export const Tags = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamily.en};
  font-size: ${({ theme }) => theme.fontSize.mini};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.palette.gray50};
`

export const BackLinkButton = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  width: fit-content;
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.palette.gray};
  border-radius: 999px;
  font-family: ${({ theme }) => theme.fontFamily.ko};
  font-size: ${({ theme }) => theme.fontSize.extraMini};
  color: ${({ theme }) => theme.palette.gray200};
  transition: ${({ theme }) => `0.3s ${theme.ts.moreFast}`};

  &:hover {
    color: ${({ theme }) => theme.palette.white};
    border-color: ${({ theme }) => theme.palette.gray50};
  }

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    padding: 6px 14px;
  }
`
