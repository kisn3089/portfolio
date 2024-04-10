import { theme } from "@/styles/theme";
import styled from "styled-components";

export const FooterLayout = styled.div`
  position: absolute;
  width: 100%;
  height: 40px;
  left: 0;
  bottom: 2%;
  display: flex;
  flex-direction: row;
  gap: 0 10px;
  padding: 0 12px;
`;

export const PagingButton = styled.button`
  width: 50%;
  height: 100%;
  border-radius: 8px;
  background-color: ${theme.palette.white};
  color: ${theme.palette.black};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  letter-spacing: 1px;
  font-size: ${theme.fontSize.extraMini};
  font-weight: ${theme.fontWeight.bold};

  &:disabled {
    background-color: ${theme.palette.disabledBackground};
    color: ${theme.palette.disabledColor};
  }
`;
