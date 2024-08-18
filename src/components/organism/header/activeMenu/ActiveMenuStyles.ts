import styled from "styled-components";

export const ActiveMenuContainer = styled.div`
  position: absolute;
  width: 260px;
  height: 260px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 14px 0;
  will-change: transform;
  z-index: 11;
  transition: 0.4s cubic-bezier(0.63, 0.33, 0.17, 0.91);
  background-color: ${({ theme }) => theme.palette.black};
  color: ${({ theme }) => theme.palette.white};
  opacity: 0;
  transform: translate3d(-12%, 32%, 0);
  pointer-events: none;

  &.isActive {
    opacity: 1;
    transform: translate3d(-38%, 10%, 0);
    pointer-events: auto;
  }
`;

export const MenuItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;
