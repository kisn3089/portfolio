import styled, { css } from "styled-components";

export const UploadBackground = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.p`
  position: absolute;
  top: 0;
  left: 25%;
  font-size: 60px;
  white-space: nowrap;
  transition: 0.3s ease-in-out;
  font-size: 60px;
  font-weight: ${({ theme }) => theme.weight.extra};
  font-family: ${({ theme }) => theme.family.loading};
  color: transparent;
  width: 0;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: linear-gradient(
    to right top,
    #d16ba5,
    #c777b9,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );
`;
export const LoaderSpace = styled.p`
  position: absolute;
  top: 0;
  left: 25%;
  font-size: 60px;
  width: fit-content;
  white-space: nowrap;
  font-weight: ${({ theme }) => theme.weight.extra};
  font-family: ${({ theme }) => theme.family.loading};
  color: #222;
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
  background-color: ${({ theme, $disabled }) =>
    $disabled ? theme.palette.disabledBackground : theme.palette.white};
  color: ${({ theme, $disabled }) =>
    $disabled ? theme.palette.disabledColor : theme.palette.black};
  font-weight: ${({ theme }) => theme.weight.bold};

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
