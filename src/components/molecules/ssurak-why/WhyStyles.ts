import { theme } from "@/styles/theme"
import styled from "styled-components"

export const WhyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 12px;

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    grid-template-columns: 1fr;
  }
`

export const WhyCardLayout = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.palette.gray};
  border-radius: 14px;
  background-color: ${({ theme }) => theme.palette.black};

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    padding: 20px;
  }
`

export const WhyIndex = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.en};
  font-size: ${({ theme }) => theme.fontSize.extraMini};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.palette.gray300};
  letter-spacing: 0.1em;
`

export const WhyTitle = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamily.ko};
  font-size: ${({ theme }) => theme.fontSize.mini};
  font-weight: ${({ theme }) => theme.fontWeight.extra};
  line-height: 1.35;
  color: ${({ theme }) => theme.palette.white};
`

export const WhyDescription = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamily.ko};
  font-size: ${({ theme }) => theme.fontSize.extraMini};
  line-height: 1.65;
  color: ${({ theme }) => theme.palette.gray200};
`
