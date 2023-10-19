// Libs
import { styled } from '@mui/material';
// Constants
import { MIN_DESKTOP_WIDTH } from 'utils/constants';

export const Footer = styled('footer')`
  margin-top: 50px;
  background: #000;
  padding: 80px 80px 66px 80px;
  @media (max-width: ${MIN_DESKTOP_WIDTH}px) {
    padding: 19px 20px 35px 20px;
  }
`;

export const Logo = styled('p')`
  text-align: center;
  color: #fff;
  font-family: Inter;
  font-size: 36px;
  font-weight: 800;
`;

export const InfoWrapper = styled('div')`
  margin-top: 45px;
  gap: 40px;
  border-top: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
