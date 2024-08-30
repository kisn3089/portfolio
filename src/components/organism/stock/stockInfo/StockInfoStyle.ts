import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
  display: grid;
  grid-template-columns: 1fr 250px 250px;
  border: 1px solid ${theme.palette.gray50};
  border-radius: 8px;

  @media screen and (max-width: ${theme.deviceSize.desktop}) {
    grid-template-columns: 1fr 200px 230px;
  }

  @media screen and (max-width: ${theme.deviceSize.tablet}) {
    grid-template-columns: 1fr 230px;
  }

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    grid-template-columns: 1fr;
  }
`;
