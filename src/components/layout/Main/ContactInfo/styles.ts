// Libs
import { css, styled } from '@mui/material';
// Constants
import { MIN_DESKTOP_WIDTH } from 'utils/constants';

export const ContactInfo = styled('div')`
  border-radius: 10px;
  background: #000;
  padding: 50px 50px 36px 50px;
  box-sizing: border-box;
  max-width: 40%;
  height: 647px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  @media (max-width: ${MIN_DESKTOP_WIDTH}px) {
    padding: 0;
    width: 100%;
    max-width: unset;
    height: 397px;
    border-radius: 5px;
    margin: 0 auto;
    justify-content: unset;
  }
`;

export const Title = styled('p')`
  color: #fff;
  font-size: 28px;
  font-weight: 600;
  @media (max-width: ${MIN_DESKTOP_WIDTH}px) {
    margin-top: 15px;
    text-align: center;
    font-size: 20px;
  }
`;

export const Subtitle = styled('p')`
  color: #c9c9c9;
  font-size: 18px;
  font-weight: 400;
  @media (max-width: ${MIN_DESKTOP_WIDTH}px) {
    margin-top: 6px;
    text-align: center;
    font-size: 11px;
  }
`;

export const List = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media (max-width: ${MIN_DESKTOP_WIDTH}px) {
    margin-top: 12px;
    text-align: center;
    padding: 0 45px;
    gap: 15px;
  }
`;

export const Item = styled('div')`
  display: flex;
  align-items: center;
  gap: 25px;
  @media (max-width: ${MIN_DESKTOP_WIDTH}px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Name = styled('p')`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  z-index: 2;
  @media (max-width: ${MIN_DESKTOP_WIDTH}px) {
    font-size: 12px;
  }
`;

export const LinksGroup = styled('div')`
  display: flex;
  gap: 24px;
  z-index: 2;
  @media (max-width: ${MIN_DESKTOP_WIDTH}px) {
    left: 50%;
    transform: translate(-50%, 0);
    position: absolute;
    bottom: 25px;
  }
`;

export const Link = styled('div')<{ isActive: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  ${({ isActive }) =>
    isActive
      ? css`
          background: #fff;
        `
      : css`
          background: rgba(27, 27, 27, 1);
        `}
`;

export const BigCircle = styled('div')`
  width: 269px;
  height: 269px;
  border-radius: 269px;
  background: #1a1a1a;
  position: absolute;
  bottom: -89px;
  right: -86px;
  @media (max-width: ${MIN_DESKTOP_WIDTH}px) {
    width: 192px;
    height: 192px;
    right: -112px;
    bottom: -90px;
  }
`;

export const SmallCircle = styled('div')`
  border-radius: 50%;
  width: 138px;
  height: 138px;
  background: rgba(72, 72, 72, 0.5);
  position: absolute;
  bottom: 70px;
  right: 71px;
  z-index: 1;
  @media (max-width: ${MIN_DESKTOP_WIDTH}px) {
    width: 54px;
    height: 54px;
    bottom: 52px;
    right: 26px;
  }
`;
