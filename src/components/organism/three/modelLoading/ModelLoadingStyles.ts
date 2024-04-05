import styled from "styled-components";

export const ModelLoadContainer = styled.span<{ $bgColor: string }>`
  font-size: 56px;
  letter-spacing: 1.2px;
  color: ${({ $bgColor }) => $bgColor};
`;
