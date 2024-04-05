import { theme } from "@/styles/theme";
import styled from "styled-components";

export const ItemsImgContainer = styled.div`
  border-radius: 14px;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 400px;
  background-color: ${({ theme }) => theme.palette.darkBlack};

  @media screen and (max-width: ${theme.deviceSize.desktop}) {
    max-height: 620px;
  }

  @media screen and (max-width: ${theme.deviceSize.tablet}) {
    max-height: 360px;
  }

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    max-height: 200px;
  }
`;

export const ItemsImg = styled.img`
  width: 100%;
  height: 100%;
  transition: ${({ theme }) => `0.3s ${theme.ts.moreFast}`};
  object-fit: cover;
  will-change: transform;
  /* border-radius: 12px;
  border: ${({ theme }) => `1px solid ${theme.palette.gray}`}; */
`;

export const ItemsTag = styled.span`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.palette.gray200};
  transition: ${({ theme }) => `0.3s ${theme.ts.moreFast}`};

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
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

  @media screen and (max-width: ${theme.deviceSize.tablet}) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
    svg {
      width: 18px;
      height: 18px;
    }
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
  user-select: none;

  @media screen and (max-width: ${theme.deviceSize.desktop}) {
    height: auto;
    gap: 8px;
  }

  &:hover {
    ${ItemsImg} {
      transform: scale(1.2);
      filter: grayscale(0.5);
    }

    ${ItemsTitle} {
      padding-left: 6%;
      svg {
        left: 2.2%;
      }
    }
  }
`;
