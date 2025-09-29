import styled from "styled-components";

export const ErrorLayout = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  white-space: pre-line;
  text-align: center;
`;
export const ErrorConent = styled.span`
  line-height: 30px;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-family: ${({ theme }) => theme.fontFamily.ko};
`;
