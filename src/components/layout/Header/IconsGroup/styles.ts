// Libs
import { styled } from '@mui/material';
// Constants
import { MIN_DESKTOP_WIDTH } from 'utils/constants';

export const IconsGroup = styled('div')`
  display: flex;
  align-items: center;
  gap: 36px;
  @media (max-width: ${MIN_DESKTOP_WIDTH}px) {
    margin: 0 auto 30px auto;
  }
`;

export const Icon = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 31px;
  height: 31px;
  border: 1px solid #000;
  border-radius: 50%;
  cursor: pointer;
  @media (max-width: ${MIN_DESKTOP_WIDTH}px) {
    border: 1px solid #fff;
  }
`;
