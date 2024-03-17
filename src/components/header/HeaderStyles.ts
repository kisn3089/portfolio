import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 120px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 120px;
`;

export const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.extra};
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.palette.white};
  letter-spacing: 1.2px;
  cursor: pointer;
`;

export const ArrowRight = styled.div`
  position: absolute;
  top: 50%;
  left: 100%;
  color: ${({ theme }) => theme.palette.white};
  transform: translate3d(0, -50%, 0);
  transition: 0.4s cubic-bezier(0.63, 0.33, 0.17, 0.91);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px 0;
`;

export const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.palette.white};
`;

export const Menu = styled.div`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.palette.white};
`;

export const MenuContainer = styled.button`
  position: relative;
  width: 160px;
  height: 52px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.palette.gray};
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.4s cubic-bezier(0.63, 0.33, 0.17, 0.91);
  overflow: hidden;

  &:hover {
    background-color: ${({ theme }) => theme.palette.white};
    padding-right: 30px;

    ${Menu} {
      color: ${({ theme }) => theme.palette.black};
    }

    ${Dot} {
      background-color: ${({ theme }) => theme.palette.black};
    }

    ${ArrowRight} {
      left: 70%;
    }
  }
`;
