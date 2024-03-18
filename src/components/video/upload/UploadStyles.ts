import styled from "styled-components";

export const UploadBackground = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Loader = styled.p`
  font-size: ${({ theme }) => theme.fontSize.extra};
  font-weight: ${({ theme }) => theme.weight.extra};
  color: #fff;
`;

export const UploadLabel = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  letter-spacing: 1px;
  cursor: pointer;
  padding: 16px 60px;
  background-color: ${({ theme }) => theme.palette.white};
  color: ${({ theme }) => theme.palette.black};
  font-weight: ${({ theme }) => theme.weight.bold};

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

export const UploadInput = styled.input`
  display: none;

  ${UploadLabel} {
    background-color: ${({ theme }) => theme.palette.disabledBackground};
    color: ${({ theme }) => theme.palette.disabledColor};
    cursor: not-allowed;
  }
  &:disabled {
  }
`;
