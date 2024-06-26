import styled from "styled-components";

export const DashboardLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputLayout = styled.div`
  position: relative;
  width: 100px;
  border: ${({ theme }) => `1px solid ${theme.palette.gray}`};
  border-radius: 8px;
  padding: 14px 0 14px 12px;
`;

export const RGBInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.palette.white};
  font-size: ${({ theme }) => theme.fontSize.medium};

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
  width: 44px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
`;

export const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.gray};
  }

  svg {
    fill: ${({ theme }) => theme.palette.white};
    width: 26px;
    height: 26px;
  }

  .up {
    transform: rotate(90deg);
  }

  .down {
    transform: rotate(270deg);
  }
`;
