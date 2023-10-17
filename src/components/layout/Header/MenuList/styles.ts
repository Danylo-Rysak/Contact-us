// Libs
import { css, styled } from '@mui/material';
// Icons
import ArrowDown from 'assets/icons/arrow-down-white.svg?react';
// Constants
import { MIN_DESKTOP_WIDTH } from 'utils/constants';

export const List = styled('div')`
  display: flex;
  gap: 47px;
  @media (max-width: ${MIN_DESKTOP_WIDTH}px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const Item = styled('div')`
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;
`;

export const Name = styled('p')<{ isActive: boolean }>`
  color: #1f1f1f;
  font-family: Roboto;
  font-size: 16px;
  @media (max-width: ${MIN_DESKTOP_WIDTH}px) {
    color: #fff;
    font-size: 14px;
  }
  ${({ isActive }) =>
    isActive
      ? css`
          font-weight: 600;
        `
      : css`
          font-weight: 400;
        `}
`;

export const ArrowDownIcon = styled(ArrowDown)`
  cursor: pointer;
`;
