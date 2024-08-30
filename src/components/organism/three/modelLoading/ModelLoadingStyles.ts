import { theme } from "@/styles/theme";
import styled from "styled-components";

export const ModelLoadContainer = styled.span<{ $bgColor: string }>`
  font-size: 56px;
  letter-spacing: 1.2px;
  height: 700px;
  color: ${({ $bgColor }) => $bgColor};

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    height: 550px;
  }
`;
