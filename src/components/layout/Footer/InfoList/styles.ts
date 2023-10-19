// Libs
import { styled } from '@mui/material';
// Constants
import { MIN_DESKTOP_WIDTH } from 'utils/constants';

export const Info = styled('div')`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled('p')`
  color: #fff;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  @media (max-width: ${MIN_DESKTOP_WIDTH}px) {
    font-size: 16px;
  }
`;

export const List = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: ${MIN_DESKTOP_WIDTH}px) {
    gap: 20px;
  }
`;

export const Item = styled('div')`
  display: flex;
  align-items: center;
  gap: 25px;
  max-width: 282px;
  @media (max-width: ${MIN_DESKTOP_WIDTH}px) {
    max-width: 143px;
    align-items: unset;
    flex-direction: column;
    gap: 13px;
  }
`;

export const Subtitle = styled('p')`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  @media (max-width: ${MIN_DESKTOP_WIDTH}px) {
    font-size: 12px;
  }
`;
