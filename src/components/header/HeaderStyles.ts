import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 120px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 120px;
  z-index: 11;
`;

export const DivideHeader = styled.div`
  position: relative;
`;

export const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.extra};
  font-weight: ${({ theme }) => theme.weight.extra};
  color: ${({ theme }) => theme.palette.white};
  letter-spacing: 1.2px;
  cursor: pointer;
`;
