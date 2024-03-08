import styled from "styled-components";

export const UploadBackground = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const UploadInput = styled.input`
  display: none;
`;

export const UploadLabel = styled.label<{ $isMouseDown: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: ${({ $isMouseDown }) => ($isMouseDown ? "200px" : "220px")};
  height: ${({ $isMouseDown }) => ($isMouseDown ? "40px" : "50px")};
  background-color: #555;
  color: #fff;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: 0 0 6px 1px #c0c2c8;
  transition: 0.3s cubic-bezier(0.63, 0.08, 0.12, 0.99);

  &:hover {
    background-color: #628281;
    box-shadow: 0 0 8px 4px #ddd;
  }
`;
