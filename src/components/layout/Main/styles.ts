// Styles
import { styled } from '@mui/material';
// Constants
import { MIN_DESKTOP_WIDTH } from 'utils/constants';

export const Title = styled('p')`
  margin-top: 74px;
  color: #000;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  @media (max-width: ${MIN_DESKTOP_WIDTH}px) {
    margin-top: 14px;
    font-size: 24px;
  }
`;

export const Subtitle = styled('p')`
  margin-top: 10px;
  color: #717171;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  @media (max-width: ${MIN_DESKTOP_WIDTH}px) {
    font-size: 14px;
    padding: 0 10px;
  }
`;

export const Content = styled('div')`
  display: flex;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  background: #fff;
  padding: 10px;
  margin: 50px 122px;
  box-shadow: 0 0 60px 30px rgba(0, 0, 0, 0.03);
  @media (max-width: ${MIN_DESKTOP_WIDTH}px) {
    flex-direction: column;
    margin: 25px;
    padding: 5px;
  }
`;
