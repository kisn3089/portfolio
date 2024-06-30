import styled from "styled-components";

export const DashboardLayout = styled.div`
  max-width: 800px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    width: 28px;
    height: 28px;
  }
`;

export const Row = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 0 12px;
`;

export const WrapperButton = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
`;
