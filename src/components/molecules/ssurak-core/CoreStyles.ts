import { theme } from "@/styles/theme"
import styled from "styled-components"

export const CoreList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    gap: 40px;
  }
`

export const CoreItemLayout = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const CoreNumber = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.en};
  font-size: ${({ theme }) => theme.fontSize.extra};
  font-weight: ${({ theme }) => theme.fontWeight.extra};
  line-height: 1;
  color: ${({ theme }) => theme.palette.gray};
`

export const CoreTitle = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamily.ko};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.extra};
  line-height: 1.35;
  color: ${({ theme }) => theme.palette.white};
`

export const CoreNoteLayout = styled.dl`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const CoreNote = styled.div`
  display: flex;
  gap: 12px;
`

export const CoreNoteLabel = styled.dt`
  flex: 0 0 40px;
  font-family: ${({ theme }) => theme.fontFamily.ko};
  font-size: ${({ theme }) => theme.fontSize.extraMini};
  color: ${({ theme }) => theme.palette.gray300};
  padding-top: 3px;
`

export const CoreNoteText = styled.dd<{ $highlight?: boolean }>`
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamily.ko};
  font-size: ${({ theme }) => theme.fontSize.mini};
  line-height: 1.65;
  text-wrap: pretty;
  color: ${({ theme, $highlight }) =>
    $highlight ? theme.palette.gray100 : theme.palette.gray200};
`

export const ChipLayout = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

export const Chip = styled.li`
  font-family: ${({ theme }) => theme.fontFamily.en};
  font-size: ${({ theme }) => theme.fontSize.mobileSmall};
  color: ${({ theme }) => theme.palette.gray200};
  border: 1px solid ${({ theme }) => theme.palette.gray};
  border-radius: 999px;
  padding: 6px 12px;
`

export const CoreImageStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 4px;
`

export const CoreImageRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
`
