import styled from "styled-components";

export const DashboardLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RGBInput = styled.input`
  position: relative;
  width: 80px;
  /* heigh */
  outline: none;
  border: ${({ theme }) => `1px solid ${theme.palette.gray}`};
  border-radius: 8px;
  padding: 12px 0 12px 12px;
  background-color: transparent;
  color: ${({ theme }) => theme.palette.white};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ArrowContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 100%;
`;
