import { theme } from "@/styles/theme";
import styled from "styled-components";

export const ThreeLayout = styled.section`
  width: 100%;
  height: 100%;
  padding: 60px 60px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (max-width: ${theme.deviceSize.tablet}) {
    padding: 40px;
  }
`;
