import styled, { css } from "styled-components";

export const UploadBackground = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 100px 0px;
  width: 100vw;
  height: 100vh;
`;

export const UploadLabel = styled.label<{ $disabled: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  letter-spacing: 1px;
  white-space: nowrap;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  padding: 16px 60px;
  margin-top: 60px;
  background-color: ${({ theme, $disabled }) =>
    $disabled ? theme.palette.disabledBackground : theme.palette.white};
  color: ${({ theme, $disabled }) =>
    $disabled ? theme.palette.disabledColor : theme.palette.black};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  transition: 0.6s cubic-bezier(0.63, 0.33, 0.17, 0.91);
  /* transform: ${({ $disabled }) => $disabled && "translate3d(0, 50%, 0)"}; */

  ${({ $disabled }) => {
    if (!$disabled) {
      return css`
        &::before {
          content: "";
          position: absolute;
          bottom: 20%;
          left: 32%;
          width: 0;
          height: 2.4px;
          background-color: ${({ theme }) => theme.palette.black};
          transition: 0.4s cubic-bezier(0.63, 0.33, 0.17, 0.91);
        }

        &:hover {
          &::before {
            width: 36%;
          }
        }
      `;
    }
  }}
`;

export const UploadInput = styled.input`
  display: none;
`;
