import styled from "styled-components"

export const DemoGuideLayout = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const GuideLayout = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.gray};
  border-radius: 14px;
  background-color: ${({ theme }) => theme.palette.black};
  padding: 20px;
`

export const GuideLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSize.mini};
  font-family: ${({ theme }) => theme.fontFamily.ko};
  color: ${({ theme }) => theme.palette.gray100};
  margin: 4px;
  padding-bottom: 8px;
`

export const AccountLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export const DemoAccountLayout = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.gray};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.palette.darkBlack};
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
  letter-spacing: 0.7px;
`

export const DemoAccountHint = styled.p`
  font-size: ${({ theme }) => theme.fontSize.extraMini};
  font-family: ${({ theme }) => theme.fontFamily.en};
  color: ${({ theme }) => theme.palette.gray50};
`

export const DemoAccountLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSize.mini};
  font-family: ${({ theme }) => theme.fontFamily.en};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.palette.white};
`

export const DemoAccountCopy = styled.button`
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.palette.gray};
  border-radius: 8px;
  transition: ${({ theme }) => `0.2s ${theme.ts.smooth}`};
  background-color: ${({ theme }) => theme.palette.darkBlack};

  &:hover {
    background-color: ${({ theme }) => theme.palette.black};
  }
`
