import { theme } from "@/styles/theme";
import styled from "styled-components";

export const UploadInfoContainer = styled.article`
  width: 720px;
  height: auto;
  padding: 30px;
  border-radius: 14px;
  background-color: ${({ theme }) => theme.palette.gray};
  li {
    font-family: ${({ theme }) => theme.fontFamily.ko};
  }

  @media screen and (max-width: ${theme.deviceSize.tablet}) {
    width: 500px;
  }

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    width: 350px;
  }
`;

export const InfoTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${({ theme }) => theme.fontFamily.ko};
`;
