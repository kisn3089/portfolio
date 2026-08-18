import { theme } from "@/styles/theme"
import styled from "styled-components"

export const LinksLayout = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 12px;
`

export const LinkButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 12px;
  border: 1px solid ${({ theme }) => theme.palette.gray};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.palette.darkBlack};
  transition: ${({ theme }) => `0.2s ${theme.ts.smooth}`};
  font-family: ${({ theme }) => theme.fontFamily.en};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.extraMini};
  color: ${({ theme }) => theme.palette.gray100};

  &:hover {
    background-color: ${({ theme }) => theme.palette.black};
  }

  svg {
    fill: ${theme.palette.white};
    width: 20px;
    height: 20px;
  }
`

export const SsurakLinkButton = styled(LinkButton)`
  background-color: ${({ theme }) => theme.palette.blue100};
  border: none;

  svg {
    transform: translateX(0);
    will-change: transform;
    transition: ${({ theme }) => `transform 0.2s ${theme.ts.smooth}`};
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.blue};

    svg {
      transform: translate3d(4px, 0, 0);
    }
  }
`
