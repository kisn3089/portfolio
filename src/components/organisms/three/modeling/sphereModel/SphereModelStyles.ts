import { theme } from "@/styles/theme";
import styled from "styled-components";

export const SphereLayout = styled.div`
  position: relative;
  width: 100%;
  height: 700px;

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    height: 550px;
  }
`;
