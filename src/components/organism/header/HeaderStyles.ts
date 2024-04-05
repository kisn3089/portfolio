import { theme } from "@/styles/theme";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  z-index: 11;

  @media screen and (max-width: ${theme.deviceSize.tablet}) {
    padding: 0 40px;
  }

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    padding: 0 20px;
  }
`;

export const DivideHeader = styled.div`
  position: relative;
`;

export const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.extra};
  font-weight: ${({ theme }) => theme.fontWeight.extra};
  color: ${({ theme }) => theme.palette.white};
  letter-spacing: 1.2px;
  cursor: pointer;
  user-select: none;
`;
