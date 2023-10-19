// Libs
import { styled } from '@mui/material';
// Constants
import { MIN_DESKTOP_WIDTH } from 'utils/constants';

export const Header = styled('header')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 100px 0 100px;
  @media (max-width: ${MIN_DESKTOP_WIDTH}px) {
    padding: 29px 20px 30px 20px;
  }
`;

export const Logo = styled('p')`
  font-family: Inter;
  font-weight: 800;
  color: #000;
  font-size: 24px;
`;

export const Menu = styled('div')`
  display: flex;
  gap: 60px;
`;
