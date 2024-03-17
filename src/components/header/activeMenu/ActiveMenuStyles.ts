import styled from "styled-components";

export const ActiveMenuContainer = styled.div<{ $isActive: boolean }>`
  opacity: ${({ $isActive }) => ($isActive ? "1" : "0")};
  position: absolute;
  top: ${({ $isActive }) => ($isActive ? "160%" : "220%")};
  right: ${({ $isActive }) => ($isActive ? "0%" : "-20%")};
  width: 260px;
  height: 260px;
  background-color: #292929;
  color: #fff;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 14px 0;
  transition: 0.4s cubic-bezier(0.63, 0.33, 0.17, 0.91);
`;

export const MenuItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.weight.regular};
`;
