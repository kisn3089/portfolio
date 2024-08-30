import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Center = styled.section`
  width: 100%;
  padding: 60px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${theme.deviceSize.tablet}) {
    padding: 40px;
  }

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    padding: 20px;
  }
`;

export const ProjectListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1400px;

  @media screen and (max-width: ${theme.deviceSize.desktop}) {
    grid-template-columns: repeat(1, 1fr);
    gap: 40px;
  }
`;
