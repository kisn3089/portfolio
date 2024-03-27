import styled from "styled-components";

export const ItemsImgContainer = styled.div`
  border-radius: 14px;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 400px;
`;

export const ItemsImg = styled.img`
  width: 100%;
  height: 100%;
  transition: ${({ theme }) => `0.3s ${theme.ts.moreFast}`};
  object-fit: cover;
  will-change: transform;
`;

export const ItemsTag = styled.span`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.palette.gray200};
  transition: ${({ theme }) => `0.3s ${theme.ts.moreFast}`};
`;

export const ItemsTitle = styled.span`
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.extra};
  font-weight: ${({ theme }) => theme.fontWeight.extra};
  color: ${({ theme }) => theme.palette.gray100};
  transition: ${({ theme }) => `0.3s ${theme.ts.moreFast}`};
  overflow: hidden;

  svg {
    position: absolute;
    top: 50%;
    left: -4%;
    transform: translate3d(-50%, -50%, 0);
    transition: ${({ theme }) => `0.3s ${theme.ts.moreFast}`};
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.palette.gray200};
    stroke: ${({ theme }) => theme.palette.gray200};
  }
`;

export const ItemsContainer = styled.article`
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    ${ItemsImg} {
      transform: scale(1.2);
      filter: grayscale(0.5);
    }

    ${ItemsTitle} {
      padding-left: 40px;
      svg {
        left: 2.2%;
      }
    }
  }
`;
