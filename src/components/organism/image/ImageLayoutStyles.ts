import { theme } from "@/styles/theme";
import styled from "styled-components";

export const SectionLayout = styled.section`
  width: 100%;
  padding: 40px 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;

  @media screen and (max-width: ${theme.deviceSize.tablet}) {
    padding: 40px 40px;
  }

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    padding: 40px 20px;
  }
`;
