import { TFitType } from "@/hooks/useImage";
import styled from "styled-components";

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
`;

export const EditingImage = styled.img<{ $type: TFitType }>`
  width: 100%;
  height: ${({ $type }) => ($type === "cover" ? "500px" : "auto")};
  max-width: 750px;
  object-fit: ${({ $type }) => $type};
  border-radius: 24px;
  border: ${({ theme }) => `1px solid ${theme.palette.gray}`};
`;
