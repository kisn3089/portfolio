import styled from "styled-components"

export const ArchitectureDescription = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamily.ko};
  font-size: ${({ theme }) => theme.fontSize.mini};
  line-height: 1.65;
  color: ${({ theme }) => theme.palette.gray200};
  text-wrap: pretty;
`

export const DiagramCard = styled.figure`
  margin: 0;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.palette.gray};
  border-radius: 14px;
  background-color: ${({ theme }) => theme.palette.white};

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`
