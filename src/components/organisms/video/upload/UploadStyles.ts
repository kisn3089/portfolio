import { theme } from "@/styles/theme";
import styled from "styled-components";

export const UploadBackground = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 100px 0px;
  width: 100%;
  height: calc(100vh - 100px);
`;

export const GroupRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    flex-direction: column;
    gap: 20px;
  }
`;
