import { theme } from "@/styles/theme";
import styled from "styled-components";

export const CreateImageLayout = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  gap: 20px;

  @media screen and (max-width: ${theme.deviceSize.tablet}) {
    height: 400px;
  }
`;
