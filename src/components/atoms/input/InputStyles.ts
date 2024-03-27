import styled from "styled-components";

export const StyleInput = styled.input<{ $width?: string; $height?: string }>`
  width: ${({ $width }) => $width || "220px"};
  height: ${({ $height }) => $height || "50px"};
  border: 1px solid #292929;
  border-radius: 12px;
  background-color: transparent;
  color: ${({ theme }) => theme.palette.gray100};
  outline: none;
  padding: 0 12px;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
