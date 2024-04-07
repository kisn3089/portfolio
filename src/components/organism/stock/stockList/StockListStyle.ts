import styled from "styled-components";

export const StockListContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 8px 8px;
  border-radius: 0 8px 8px 0;
  border: ${({ theme }) => `1px solid ${theme.palette.gray}`};
`;
