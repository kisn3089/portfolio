import styled from "styled-components";

export const UploadInfoContainer = styled.article`
  width: 60%;
  height: auto;
  padding: 30px;
  border-radius: 14px;
  background-color: ${({ theme }) => theme.palette.gray};
`;

export const InfoTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
